<script>
  export default {
    props: {
      placeholder: String,
      modelValue: [String, Number]
    },
    methods: {
      changeInput(e) {
        this.$emit('update:modelValue', e.target.value)
      }
    }
  }
</script>

<template>
  <input class="input" :placeholder="placeholder" :value="modelValue" @input="changeInput" />
</template>

<style scoped>
  .input {
    border: 1px solid mediumpurple;
    padding: 12px 24px;
    border-radius: 8px;
    outline: none;
  }
</style>