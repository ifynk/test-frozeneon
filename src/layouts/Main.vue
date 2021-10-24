<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      dense
    >
      <v-toolbar-title>jsdelivr</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer app class="d-flex justify-space-between">
      Вадим Лазаренко
      <a href="https://github.com/ifynk/" target="_blank" rel="noopener noreferrer">GitHub</a>
    </v-footer>
  </v-app>
</template>
