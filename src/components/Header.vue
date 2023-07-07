<script setup>

</script>

<template>
  <header class="header">
    <h1>Vue posts app</h1>
    <div class="navigation">
      <router-link to="/">Posts</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid mediumpurple;

    h1 {
      color: mediumpurple;
    }

    .navigation {
      display: flex;
      align-items: center;
      gap: 16px;

      a {
        color: mediumpurple;
        font-size: 20px;

        &.router-link-active {
          font-weight: bold;
          text-decoration: underline;
        }
      }
    }
  }
</style>