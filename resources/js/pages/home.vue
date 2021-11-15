<template>
  <div>
    <div class="row header">
      <div class="col-12 col-sm-8">
        <h3 class="mb-4">{{ $t('dashboard') }}</h3>
      </div>
      <div class="col-12 col-sm-4 text-right">
      </div>
    </div>
    <div v-if="!loaded">
      <div class="spinner-border text-secondary" role="status"></div>
    </div>
    <div v-else>
      <Week></Week>
    </div>
  </div>
</template>
<script>
import Week from './dashboard/Week';
export default {
  middleware: 'auth',
  components: {
    Week,
  },
  data: () => ({
    loaded: false,
    projects: Array,
    items: Array,
  }),
  mounted () {
    var that = this
    axios
    .all([
      axios.get('/api/fetch/projects'),
      ])
        .then(
        axios.spread(
          function (projects) {
            that.loaded = true
            that.projects = projects.data.data
            that.prepareDrag()
          }
    ))
  },  
  methods: {
    prepareDrag() {
      this.items = this.projects
    },
    toggleFocus(index, idProject) {
      var obj = {['id']: idProject}
      axios.post(['/api/update/project/focus'], obj, this.headers).then(response => {
        if (this.items[index].focus == 1) this.items[index].focus = 0;
        else this.items[index].focus = 1;
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors || {};
          $.each(this.errors, function (key, value) {
          });
        }
      });
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
