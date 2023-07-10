import {computed, ref} from "vue";

export default (posts) => {
    const sortDirection = ref('')
    const sortedPosts =  computed(() => {
        if (!sortDirection.value) return posts.value
        return [...posts.value].sort((a, b) => {
            return sortDirection.value === 'asc' ? a.title > b.title ? 1 : -1 : a.title > b.title ? -1 : 1
        })
    })

    return {
        sortDirection,
        sortedPosts
    }
}