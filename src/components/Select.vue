<script setup>
  const { options, modelValue, changeOption } = defineProps({
    options: {
      type: Array, default: () => []
    },
    modelValue: String,
    changeOption: Function
  })

  const emit = defineEmits(['update:modelValue'])

  const onChange = (e) => {
    console.log(e)
    emit('update:modelValue', e.target.value)
  }
</script>

<template>
<select :value="modelValue" @change="onChange" class="select">
  <option disabled  >Choose sort direction</option>
  <option v-for="option in options" :key="option.id" :value="option.id">
    {{ option.value }}
  </option>
</select>
</template>

<style scoped>
.select {
  padding: 12px 24px;
  border: 1px solid mediumpurple;
  border-radius: 8px;
}
</style>