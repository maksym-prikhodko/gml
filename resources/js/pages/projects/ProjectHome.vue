<template>
  <div>
    <div v-if="!loaded">
      <div class="spinner-border text-secondary" role="status"></div>
    </div>
    <div v-else>
      <div class="row header">
        <div class="col-8 col-sm-8">
          <h3 class="mb-4">
            {{ $t('project') }} / {{ title }}
            <router-link :to="{ name: 'project.edit', params: { id: project.id } }" class="ml-3">
              <BIconPencilSquare variant="secondary"/>
            </router-link>
          </h3>
        </div>
        <div class="col-4 col-sm-4 text-right menu-upright">
          <router-link :to="{ name: 'project.tasks', params: { id: project.id } }">
            <h2>
              <BIconListTask variant="secondary"/>
            </h2>
          </router-link>
          <router-link :to="{ name: 'projects' }">
            <h2>
              <BIconClockFill variant="secondary"/>
            </h2>
          </router-link>
          <router-link :to="{ name: 'projects' }">
            <h2>
              <img src="/img/ico-money-rise.svg"/>
            </h2>
          </router-link>
        </div>
      </div>
      <div class="row" v-if="(project.type != 'free')">
        <div class="col-12 col-sm-4">
          <card class="data-box">
            <div><img src="/img/ico-money-rise.svg"/></div>
            <div>{{ project.total }}</div>
          </card>
        </div>
        <div class="col-12 col-sm-4">
          <card class="data-box">
            <div><img src="/img/ico-pricehour.svg"/></div>
            <div>{{ project.price_hour }}</div>
          </card>
        </div>
        <div class="col-12 col-sm-4">
          <card class="data-box">
            <div><img src="/img/ico-timer-big.svg"/></div>
            <div>{{ project.hours }}</div>
          </card>
        </div>
      </div>
      <BIconFolderPlus @click="toggleArchive()" class="archive-icon pointer pull-right" v-if="(project.archived == 0)" v-b-tooltip.hover :title="$t('archive_project')"/>
      <BIconFolderMinus @click="toggleArchive()" class="archive-icon pointer pull-right" v-else v-b-tooltip.hover :title="$t('unarchive_project')"/>
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
    project: Array,
  }),
  mounted () {
    this.id = this.$route.params.id;
    var that = this
    axios
    .all([
      axios.get(`/api/projects/`+that.id),
      ])
        .then(
        axios.spread(
          function (project) {
            that.loaded = true
            that.project = project.data.data
            that.title = project.data.data.name
          }
    ))
  },  
  methods: {
    toggleArchive() {
      var obj = {['id']: this.project.id}
      axios.post(['/api/update/project/archive'], obj).then(response => {
        if (this.project.archived == 1) this.project.archived = 0;
        else this.project.archived = 1;
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
#project-dashboard {
}
</style>
