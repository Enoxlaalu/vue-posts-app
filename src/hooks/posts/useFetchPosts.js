import {onMounted, ref, watch} from "vue";

export default () => {
    const posts = ref([])
    const loading = ref(true)

    const fetchPosts = async () => {
        posts.value = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => response.json())
        loading.value = false
    }

    onMounted(fetchPosts)

    const addPost = async (body) => {
        loading.value = true
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())

        posts.value.push(res._value)
        loading.value = false
    }

    const deletePost = async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })

        posts.value = posts.value.filter(p => p.id !== id)
    }

    return {
        posts,
        loading,
        addPost,
        deletePost
    }
}