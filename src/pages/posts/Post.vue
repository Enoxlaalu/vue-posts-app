<script setup>
  import Button from "@/components/Button.vue";

  const { post, onClick } = defineProps({
    post: {
      id: String,
      title: String
    },
    onClick: Function
  })

  const handleClick = () => onClick(post.id)
</script>

<template>
  <li class="post">{{post.title}}
    <Button text="Delete Post" :onClick="handleClick" type="secondary" />
  </li>
</template>

<style lang="scss" scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>