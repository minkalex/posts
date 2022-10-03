<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-toolbar-title>Posts</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" color="blue lighten-5" outlined :to="{name: 'posts.create'}">
        <v-icon dark>mdi-text-box-plus-outline</v-icon>
        Add post
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
