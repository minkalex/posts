<template>
  <div>
    <v-btn color="primary" fab small depressed :to="{name: 'posts.index'}" class="ma-7">
      <v-icon dark>mdi-arrow-left-thin</v-icon>
    </v-btn>
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
    <div class="text-center" v-if="title && body">
      <v-btn depressed color="primary" outlined @click.prevent="createPost({title: title, body: body})">
        <v-icon>mdi-text-box-check-outline</v-icon>
        save
      </v-btn>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      title: '',
      body: '',
    }
  },

  methods: {
    ...mapActions(['createPost'])
  },
}
</script>

<style scoped>
.text-field {
  margin: 0 28px 0 28px;
}

.textarea {
  margin: 0 28px 28px 28px;
  border-radius: 0 0 16px 16px;
}
</style>