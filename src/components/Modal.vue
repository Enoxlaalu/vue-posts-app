<script setup>
const { opened, onClose } = defineProps({
  opened: Boolean,
  onClose: Function
})

const closeModal = (e) => {
  if (e.target === e.currentTarget) {
    onClose()
  }
}
</script>

<template>
  <div class="overlay" :class="{ opened }" @click="closeModal">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease-in-out;
}

.opened {
  opacity: 1;
  pointer-events: auto;
}

.modal {
  background-color: #fff;
  border: 1px solid mediumpurple;
  padding: 12px 24px;
  border-radius: 8px;
}
</style>