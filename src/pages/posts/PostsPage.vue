<template>
  <div>
    <div :class="$style.pageActions">
      <Input placeholder="Search posts" v-model="searchQuery" />
      <Select v-model="sortDirection" :options="options" />
      <Button text="Create post" :onClick="openModal" />
    </div>
    <Modal :opened="modalOpened" :onClose="closeModal" :class="$style.createPostsModal">
      <header>Create new post</header>
      <div :class="$style.modalRow">
        <Input placeholder="Title" v-model="newPost.title" />
        <Input placeholder="Body" v-model="newPost.body" />
      </div>
      <div :class="[$style.buttonRow, $style.modalRow]">
        <Button text="Close modal" :onClick="closeModal" type="secondary" />
        <Button text="Create post" :onClick="createPost" />
      </div>
    </Modal>
  </div>
  <p v-if="loading">Loading...</p>
  <ul v-else :class="$style.postsList">
    <Post v-for="post in sortedPosts" key="post.id" :post="post" :onClick="deletePost" />
  </ul>
</template>

<script setup>
  import useFetchPosts from "@/hooks/posts/useFetchPosts";
  import { ref } from "vue";
  import Modal from "@/components/Modal.vue";
  import Button from "@/components/Button.vue";
  import Input from "@/components/Input.vue";
  import Post from "@/pages/posts/Post.vue";
  import useSearchPosts from "@/hooks/posts/useSearchPosts";
  import Select from "@/components/Select.vue";
  import useSortPosts from "@/hooks/posts/useSortPosts";

  const modalOpened = ref(false)
  const newPost = ref({})
  const options = [{
    id: 'asc',
    value: 'Ascending'
  },
    {
      id: 'desc',
      value: 'Descending'
    }]

  const {posts, loading, addPost, deletePost} = useFetchPosts()
  const { searchQuery, filteredPosts } = useSearchPosts(posts)
  const { sortDirection, sortedPosts } = useSortPosts(filteredPosts)

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

  const changeOption = (id) => sortDirection.value = id
</script>

<style lang="scss" module>
.pageActions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
  .postsList {
    display: grid;
    grid-row-gap: 10px;
    font-size: 18px;

    li {
      padding: 12px 24px;
      border: 1px solid mediumpurple;
    }
  }
  .createPostsModal {
    display: flex;
    flex-direction: column;
    gap: 24px;

    header {
      font-size: 24px;
    }
  }
  .modalRow {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .buttonRow {
    align-self: end;
    gap: 16px;
  }
</style>