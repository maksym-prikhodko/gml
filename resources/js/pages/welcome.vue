<template>
  <div>
    <div class="top-right links">
      <template v-if="authenticated">
        <router-link :to="{ name: 'home' }">
          {{ $t('home') }}
        </router-link>
      </template>
      <template v-else>
        <router-link :to="{ name: 'login' }">
          {{ $t('login') }}
        </router-link>
        <router-link :to="{ name: 'register' }">
          {{ $t('register') }}
        </router-link>
      </template>
    </div>
    <div class="text-center">
      <div class="title mb-4">
        <img src="/img/genomada-logo.png"/>
        <p>GENOMADA</p>
      </div>
      <div class="links">
        The missing freelance business control panel.
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'basic',
  metaInfo () {
    return { title: this.$t('home') }
  },
  data: () => ({
    title: window.config.appName
  }),
  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>
<style scoped>
.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}
.title {
  font-size: 80px;
  color: #73acb8;
}
</style>
