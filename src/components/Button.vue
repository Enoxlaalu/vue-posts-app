<script setup>
  const { text, onClick } = defineProps({
      text: String,
      onClick: Function,
      type: {
        type: String,
        default: 'primary',
      }
    })
</script>

<template>
  <button class="button" :class="{[type]: true}" @click="onClick">
    {{ text }}
  </button>
</template>

<style scoped>
  .button {
    padding: 12px 24px;
    border: 1px solid mediumpurple;
    border-radius: 8px;
    background-color: #fff;
    outline: none;
    cursor: pointer;
  }
  .primary {
    background-color: mediumpurple;
    color: #fff;
  }
</style>