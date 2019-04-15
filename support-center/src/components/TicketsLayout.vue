<template>
  <main class="tickets-layout">
    <h1>你的票</h1>
    <div class="actions">
      <router-link
        v-if="$route.name !== 'tickets'"
        tag="button"
        class="secondary"
        :to="{name:'tickets'}"
      >看票</router-link>
      <router-link
        v-if="$route.name !== 'new-ticket'"
        tag="button"
        class="secondary"
        :to="{name:'new-ticket'}"
      >新建票</router-link>
      <router-view></router-view>
    </div>
  </main>
</template>
