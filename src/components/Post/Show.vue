<template>
  <div class="ma-7">
    <v-btn color="primary" fab small depressed :to="{name: 'posts.index'}">
      <v-icon dark>mdi-arrow-left-thin</v-icon>
    </v-btn>
    <v-alert color="primary" outlined shaped class="mt-7">
      <h3 class="text-h5">{{ post.title }}</h3>
      <div>{{ post.body }}</div>
      <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>
      <v-row no-gutters class="d-flex justify-end">

        <v-dialog v-model="editDialog" persistent max-width="800">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="info" outlined class="mr-4" v-bind="attrs" v-on="on">
              <v-icon dark>mdi-text-box-edit-outline</v-icon>
              Edit
            </v-btn>
          </template>
          <v-alert outlined type="info" prominent border="left" class="alert mb-0">
            <v-text-field
                v-model="title"
                outlined
                shaped
                class="text-field"
                clearable
                hide-details="true"
                placeholder="Title"
            >
            </v-text-field>
            <v-textarea
                auto-grow
                outlined
                rows="5"
                row-height="25"
                shaped
                v-model="body"
                class="textarea"
                placeholder="Body"
                clearable

            >
            </v-textarea>
            <v-row no-gutters class="d-flex justify-end">
              <v-btn color="primary" @click.prevent="setDefaultValues()" outlined class="mr-4">
                <v-icon>mdi-close</v-icon>
                cancel
              </v-btn>
              <v-btn
                  color="primary"
                  @click.prevent="editPost({id: post.id, title: title, body: body, userId: 1})"
                  outlined
                  v-if="title && body"
              >
                <v-icon>mdi-text-box-check-outline</v-icon>
                save
              </v-btn>
            </v-row>
          </v-alert>
        </v-dialog>

        <v-dialog v-model="deleteDialog" persistent max-width="400">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="red" outlined v-bind="attrs" v-on="on">
              <v-icon dark>mdi-text-box-remove-outline</v-icon>
              Remove
            </v-btn>
          </template>
          <v-alert outlined type="warning" prominent border="left" class="alert mb-0">
            <div class="d-flex justify-center">
              <div class="text-h6 mb-7">Remove post?</div>
            </div>
            <v-row no-gutters class="d-flex justify-end">
              <v-btn color="primary" @click="deleteDialog = false" outlined class="mr-4">
                <v-icon>mdi-close</v-icon>
                cancel
              </v-btn>
              <v-btn color="red" @click.prevent="deletePost(post.id)" outlined>
                <v-icon dark>mdi-text-box-remove-outline</v-icon>
                Remove
              </v-btn>
            </v-row>
          </v-alert>
        </v-dialog>

      </v-row>
    </v-alert>
    <v-list two-line rounded>
      <v-list-item-group>
        <v-subheader>Comments</v-subheader>
        <template v-for="comment in comments">
          <v-list-item :key="comment.id">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="comment.name"></v-list-item-title>
                <v-list-item-subtitle v-text="comment.body"></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text v-text="comment.email"></v-list-item-action-text>
              </v-list-item-action>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      deleteDialog: false,
      editDialog: false,
      title: '',
      body: ''
    }
  },

  mounted() {
    this.getPost(this.$route.params.id)
    this.getComments(this.$route.params.id)
    this.title = this.post.title
    this.body = this.post.body
  },

  methods: {
    ...mapActions(['getComments', 'getPost', 'deletePost', 'editPost']),

    setDefaultValues() {
      this.editDialog = false
      this.title = this.post.title
      this.body = this.post.body
    }
  },

  computed: {
    ...mapGetters([
      'comments', 'post'
    ])
  }
}
</script>

<style scoped>
.alert {
  background: white !important;
}

.text-field {
  margin: 0 28px 0 28px;
}

.textarea {
  margin: 0 28px 28px 28px;
  border-radius: 0 0 16px 16px;
}
</style>
