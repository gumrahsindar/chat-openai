import { generateText } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'
import { createOllama } from 'ollama-ai-provider'

import type { LanguageModel, ModelMessage } from 'ai'

export const createOllamaModel = () => {
  const ollama = createOllama()
  return ollama('llama3.2') as unknown as LanguageModel
}

export const createOpenAIModel = (apiKey: string): LanguageModel => {
  const openai = createOpenAI({
    apiKey,
  })
  return openai('gpt-4o-mini')
}

export async function generateChatResponse(
  model: LanguageModel,
  messages: ModelMessage[]
) {
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error('Invalid messages format')
  }

  const response = await generateText({
    model,
    messages,
  })

  return response.text.trim()
}
