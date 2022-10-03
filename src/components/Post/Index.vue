<template>
  <div>
    <v-alert
        type="success"
        class="ma-7"
        v-if="this.$route.params.error === 'false'" dismissible
        border="left"
        outlined
    >
      {{ this.$route.params.message }}
    </v-alert>
    <v-alert
        type="error"
        class="ma-7"
        v-if="this.$route.params.error === 'true'" dismissible
        border="left"
        outlined
    >
      {{ this.$route.params.message }}
    </v-alert>
    <v-row class="ma-2">
      <v-col cols="2" v-for="post in posts" :key="post.id">
        <v-card outlined shaped>
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-text>{{ post.body.length < 200 ? post.body : post.body.substr(0, 200) + '...' }}</v-card-text>
          <v-card-actions class="d-flex align-end flex-column">
            <v-btn color="primary" fab x-small depressed :to="{name: 'posts.show', params: {id: post.id}}">
              <v-icon>mdi-arrow-right-thin</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  mounted() {
    this.getPosts()
  },

  methods: {
    ...mapActions(['getPosts'])
  },

  computed: {
    ...mapGetters([
      'posts'
    ])
  }
}
</script>
