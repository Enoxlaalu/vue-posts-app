import {computed, ref} from "vue";

export default (posts) => {
    const searchQuery = ref('')
    const filteredPosts = computed(() => {
        return [...posts.value].filter(p => p.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })

    return {
        searchQuery,
        filteredPosts
    }
}