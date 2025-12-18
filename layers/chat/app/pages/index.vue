<script setup lang="ts">
const appConfig = useAppConfig()

const { createChatAndNavigate } = useChats()

async function handleCreateChat() {
  await createChatAndNavigate()
}
</script>

<template>
  <UContainer class="page-container">
    <h1 class="title mb-2">{{ appConfig.title }}</h1>
    <UButton class="button" @click="handleCreateChat"> Start Chat</UButton>
  </UContainer>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.title {
  font-size: 2.25rem;
  font-weight: bold;
}

.button {
  margin-top: 1rem;
}
</style>
