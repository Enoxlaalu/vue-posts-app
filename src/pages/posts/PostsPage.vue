<template>
  <div>
    <Button text="Create post" :onClick="openModal" />
    <Modal :opened="modalOpened" :onClose="closeModal">
      <header>Create new post</header>
      <Input placeholder="Title" v-model="newPost.title" />
      <Input placeholder="Body" v-model="newPost.body" />
      <Button text="Close modal" :onClick="closeModal" />
      <Button text="Create post" :onClick="createPost" />
    </Modal>
  </div>
  <p v-if="loading">Loading...</p>
  <ul v-else class="postsList">
    <li v-for="post in posts" key="post.id">{{post.title}}</li>
  </ul>
</template>

<script setup>
  import useFetchPosts from "@/hooks/posts/useFetchPosts";
  import { ref } from "vue";
  import Modal from "@/components/Modal.vue";
  import Button from "@/components/Button.vue";
  import Input from "@/components/Input.vue";

  const modalOpened = ref(false)
  const newPost = ref({})

  const {posts, loading, addPost} = useFetchPosts()

  const createPost = () => {
    addPost(newPost)
    closeModal()
  }

  const openModal = () => {
    modalOpened.value = true
  }

  const closeModal = () => {
    modalOpened.value = false
  }
</script>

<style scoped lang="scss">
  .postsList {
    display: grid;
    grid-row-gap: 10px;
    font-size: 18px;

    li {
      padding: 12px 24px;
      border: 1px solid mediumpurple;
    }
  }
</style>