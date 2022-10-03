const state = {
    comments: [],
}

const getters = {
    comments: () => state.comments,
}

const actions = {
    getComments({commit}, postId) {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(res => {
                commit('setComments', res.data)
            })
            .catch(error => {
                console.log(error);
            })
    },
}

const mutations = {
    setComments(state, comments) {
        state.comments = comments
    }
}

export default {
    state, actions, getters, mutations
}
