import router from "@/router";

const state = {
    posts: [],
    post: [],
}

const getters = {
    posts: () => state.posts,
    post: () => state.post,
}

const actions = {
    getPosts({commit}) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                commit('setPosts', res.data)
            })
            .catch(error => {
                router.push({name: 'posts.index', params: {message: error.message, 'error': 'true'}})
            })
    },

    createPost({commit}, data) {
        data.userId = 1
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(() => {
                router.push({name: 'posts.index', params: {message: 'Post created successfully!', 'error': 'false'}})
            })
            .catch(error => {
                router.push({name: 'posts.index', params: {message: error.message, 'error': 'true'}})
            })
    },

    getPost({commit}, postId) {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => {
                commit('setPost', res.data)
            })
            .catch(error => {
                router.push({name: 'posts.index', params: {message: error.message, 'error': 'true'}})
            })
    },

    editPost({commit}, data) {
        data.userId = 1
        axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data)
            .then(() => {
                router.push({name: 'posts.index', params: {message: 'Post updated successfully!', 'error': 'false'}})
            })
            .catch(error => {
                router.push({name: 'posts.show', params: {message: error.message, 'error': 'true', id: data.id}})
            })
    },

    deletePost({commit}, postId) {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(() => {
                router.push({name: 'posts.index', params: {message: 'Post deleted successfully!', 'error': 'false'}})
            })
            .catch(error => {
                router.push({name: 'posts.index', params: {message: error.message, 'error': 'true'}})
            })
    },
}

const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    },

    setPost(state, post) {
        state.post = post
    },
}

export default {
    state, actions, getters, mutations
}
