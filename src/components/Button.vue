<script>
  export default {
    props: {
      text: String,
      onClick: Function
    }
  }
</script>

<template>
  <button @click="onClick">
    {{ text }}
  </button>
</template>

<style scoped>

</style>