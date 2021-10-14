<template>
  <div>
    <div class="row header">
      <div class="col-12 col-sm-8">
        <h3 class="mb-4">{{ $t('clients') }}</h3>
      </div>
      <div class="col-12 col-sm-4 text-right">
        <router-link :to="{ name: 'client.add' }">
          <img src="/img/ico-add.svg"/>
        </router-link>
      </div>
    </div>
    <div v-if="!loaded">
      <div class="spinner-border text-secondary" role="status"></div>
    </div>
    <div v-else>
      <card id="dashboard">
        <div class="row slot-project" v-for="(item, index) in items" :index="index" :key="index" :item="item">
          <div class="col-12 col-sm-7">
            <router-link :to="{ name: 'client.home', params: { id: item.id } }">
              {{ item.name }}
            </router-link>
          </div>
          <div class="col-4 col-sm-1 text-left text-sm-right">
            {{ item.hours }}
          </div>
          <div class="col-4 col-sm-2 text-center text-sm-right">
            {{ item.price_hour }}
          </div>
          <div class="col-4 col-sm-2 text-right">
            {{ item.total }}<br/>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  data: () => ({
    loaded: false,
    clients: Array,
    items: Array,
  }),
  mounted () {
    var that = this
    axios
    .all([
      axios.get('/api/fetch/clients'),
      ])
        .then(
        axios.spread(
          function (clients) {
            that.loaded = true
            that.clients = clients.data.data
            that.prepareDrag()
          }
    ))
  },  
  methods: {
    prepareDrag() {
      this.items = this.clients
    },
  }
}
</script>
<style lang="scss">
#dashboard {
  .slot-project {
    margin-bottom: 1em;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 1em;
    .project-name {
      font-weight: bold;
      display: block;
    }
    .client-name {
      font-style: italic;
      display: block;
    }
  }
  .pointer {
    cursor: pointer;
  }
  .slot-project:last-child {
    border: none;
    margin-bottom: 0;
  }
}
</style>
