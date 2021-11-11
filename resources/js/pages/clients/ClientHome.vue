<template>
  <div>
    <div class="row header">
      <div class="col-10 col-sm-8">
        <h3 class="mb-4">{{ $t('client') }} / {{ title }}</h3>
      </div>
      <div class="col-2 col-sm-4 text-right menu-upright">
        <router-link :to="{ name: 'clients' }">
          <h2>
            <img src="/img/ico-money-rise.svg"/>
          </h2>
        </router-link>
      </div>
    </div>
    <div v-if="!loaded">
      <div class="spinner-border text-secondary" role="status"></div>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-12 col-sm-4">
          <card class="data-box">
            <div><img src="/img/ico-money-rise.svg"/></div>
            <div>{{ client.total }}</div>
          </card>
        </div>
        <div class="col-12 col-sm-4">
          <card class="data-box">
            <div><img src="/img/ico-pricehour.svg"/></div>
            <div>{{ client.price_hour }}</div>
          </card>
        </div>
        <div class="col-12 col-sm-4">
          <card class="data-box">
            <div><img src="/img/ico-timer-big.svg"/></div>
            <div>{{ client.hours }}</div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  data: () => ({
    loaded: false,
    title: '...',
    id: null,
    client: Array,
    items: Array,
  }),
  mounted () {
    this.id = this.$route.params.id;
    var that = this
    axios
    .all([
      axios.get(`/api/clients/`+that.id),
      ])
        .then(
        axios.spread(
          function (client) {
            that.loaded = true
            that.client = client.data.data
            that.title = client.data.data.name
          }
    ))
  },  
  methods: {
  }
}
</script>
<style lang="scss">
</style>
