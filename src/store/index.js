import Vue from 'vue'
import Vuex from 'vuex'
import Post from '../modules/post'
import Comment from '../modules/comment'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Post,
        Comment
    }
})
