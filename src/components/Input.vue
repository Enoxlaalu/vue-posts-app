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
  <input :placeholder="placeholder" :value="modelValue" @input="changeInput" />
</template>

<style scoped>

</style>