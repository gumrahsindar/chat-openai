<script setup lang="ts">
const { chat, messages, sendMessage } = useChat()

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
</script>

<template>
  <ChatWindow :chat :messages @send-message="sendMessage" />
</template>
