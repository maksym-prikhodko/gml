<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <router-link :to="{ name: user ? 'home' : 'welcome' }" class="navbar-brand">
        <img src="/img/genomada-logo.png"/>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarToggler" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <locale-dropdown />
          <li class="nav-item option-menu">
            <router-link :to="{ name: 'projects' }" class="dropdown-item pl-3">
              {{ $t('projects') }}
            </router-link>
          </li>
          <li class="nav-item option-menu">
            <router-link :to="{ name: 'clients' }" class="dropdown-item pl-3">
              {{ $t('clients') }}
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li v-if="user" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark"
               href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
            >
              <img :src="user.photo_url" class="rounded-circle profile-photo mr-1">
              {{ user.name }}
            </a>
            <div class="dropdown-menu">
              <router-link :to="{ name: 'settings.profile' }" class="dropdown-item pl-3">
                <fa icon="cog" fixed-width />
                {{ $t('settings') }}
              </router-link>
              <div class="dropdown-divider" />
              <a href="#" class="dropdown-item pl-3" @click.prevent="logout">
                <fa icon="sign-out-alt" fixed-width />
                {{ $t('logout') }}
              </a>
            </div>
          </li>
          <template v-else>
            <li class="nav-item">
              <router-link :to="{ name: 'login' }" class="nav-link" active-class="active">
                {{ $t('login') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'register' }" class="nav-link" active-class="active">
                {{ $t('register') }}
              </router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'
export default {
  components: {
    LocaleDropdown
  },
  data: () => ({
    appName: window.config.appName
  }),
  computed: mapGetters({
    user: 'auth/user'
  }),
  methods: {
    async logout () {
            await this.$store.dispatch('auth/logout')
            this.$router.push({ name: 'login' })
    }
  }
}
</script>
<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}
.option-menu {
  text-transform: uppercase;
  margin-top: 4px;
}
.navbar-brand img {
  height: 30px;
  width: auto;
}
</style>
