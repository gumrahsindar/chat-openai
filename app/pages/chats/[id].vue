<script setup lang="ts">
const route = useRoute()
console.log(route.params)
const {
  chat: chatFromChats,
  messages,
  sendMessage,
} = useChat(route.params.id as string)

const appConfig = useAppConfig()

const title = computed(() => {
  if (chatFromChats.value?.title) {
    return `${chatFromChats.value.title} - ${appConfig.title}`
  }
  return appConfig.title
})

useHead({
  title,
})

if (!chatFromChats.value) {
  await navigateTo('/', { replace: true })
}

const chat = computed(() => chatFromChats.value as Chat)

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
