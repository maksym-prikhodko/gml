<template>
  <div>
    <div class="row header">
      <div class="col-10 col-sm-8">
        <h3 class="mb-4">{{ $t('projects') }}</h3>
      </div>
      <div class="col-2 col-sm-4 text-right">
        <router-link :to="{ name: 'project.add' }">
          <img src="/img/ico-add.svg"/>
        </router-link>
      </div>
    </div>
    <div v-if="!loaded">
      <div class="spinner-border text-secondary" role="status"></div>
    </div>
    <div v-else>
      <card id="project-list">
        <div v-if="(items.length == 0)">
          <div class="text-center mt-5 mb-5">
            <h4>{{ $t('onboarding_no_projects') }}</h4>
            <p><img src="/img/vector/start-nothing.jpg"/></p>
            <router-link :to="{ name: 'project.add' }">
              <button class="btn btn-primary">
                {{ $t('onboarding_no_projects_add') }}
              </button>
            </router-link>
          </div>
        </div>
        <div v-else>
          <SortableList lockAxis="y" v-model="items" @input="saveOrder()" :distance="10">
            <SortableItem v-for="(item, index) in items" :index="parseInt(index)" :key="parseInt(index)" :value="item">
              <div class="col-10 col-sm-6">
                <div class="row">
                  <div class="col-sm-1 col-2 text-right">
                    <BIconStar @click="toggleFocus(index, item.id)" class="pointer pull-right" v-if="(item.focus == 0)" v-b-tooltip.hover :title="$t('mark_as_focus')"/>
                    <BIconStarFill @click="toggleFocus(index, item.id)" class="pointer pull-right" v-else v-b-tooltip.hover :title="$t('unmark_as_focus')"/>
                  </div>
                  <div class="col-sm-11 col-10">
                    <span class="project-name">
                      <router-link :to="{ name: 'project.home', params: { id: item.id } }">
                        {{ item.name }}
                      </router-link>
                    </span>
                    <span class="client-name">{{ item.client }}</span>
                  </div>
                </div>
              </div>
              <div class="col-2 col-sm-1">
                <router-link :to="{ name: 'project.tasks', params: { id: item.id } }">
                  <h2>
                    <BIconListTask variant="secondary"/>
                  </h2>
                </router-link>
              </div>
              <div class="col-4 col-sm-1 text-left text-sm-right">
                {{ item.hours_estimated }}<br/>
                {{ item.hours }}
              </div>
              <div class="col-4 col-sm-2 text-center text-sm-right" v-if="(item.type != 'free')">
                {{ item.desired_price_hour }}<br/>
                {{ item.price_hour }}
              </div>
              <div class="col-4 col-sm-2 text-right" v-if="(item.type != 'free')">
                {{ item.total }}<br/>
                {{ item.balance }}
              </div>
              <div class="col-4 text-center" v-if="(item.type == 'free')">
                <p>Free project</p>
              </div>
            </SortableItem>
          </SortableList>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { ContainerMixin, ElementMixin } from 'vue-slicksort';
const SortableList = {
  mixins: [ContainerMixin],
  template: `<div><slot /></div>`
};
const SortableItem = {
  mixins: [ElementMixin],
  props: ['item'],
  template: `<div class="row slot-project"><slot /></div>`
};
export default {
  middleware: 'auth',
  components: {
    ContainerMixin,
    ElementMixin,
    SortableItem,
    SortableList,
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
      this.items = Object.values(this.projects)
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
    saveOrder() {
      var arrayPass = [];
      this.items.forEach(key => {
        var object = [{
          'id': key.id,
        }];
        arrayPass.push(object);
      })
      axios.post(['/api/order/projects'], arrayPass).then(response => {
      }).catch(error => {
      });
    }
  }
}
</script>
<style lang="scss">
#project-list {
  .slot-project {
    margin-bottom: 1em;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 1em;
    .project-name {
      font-weight: bold;
      display: block;
      font-size: 1.2em;
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
  .archive-icon {
    opacity: 0;
  }
  .archive-icon:hover {
    opacity: 1;
  }
}
</style>
