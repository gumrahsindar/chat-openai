<script setup lang="ts">
const route = useRoute()
console.log(route.params)
const { chat, messages, sendMessage } = useChat(route.params.id as string)

const appConfig = useAppConfig()

const title = computed(() => {
  if (chat.value?.title) {
    return `${chat.value.title} - ${appConfig.title}`
  }
  return appConfig.title
})

useHead({
  title,
})

const typing = ref(false)

async function sendMessageHandler(message: string) {
  typing.value = true
  await sendMessage(message)
  typing.value = false
}
</script>

<template>
  <ChatWindow :chat :messages :typing @send-message="sendMessageHandler" />
</template>
