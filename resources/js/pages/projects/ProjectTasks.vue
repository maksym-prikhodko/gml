<template>
  <div>
    <div v-if="!loaded">
      <div class="spinner-border text-secondary" role="status"></div>
    </div>
    <div v-else>
      <div class="row header">
        <div class="col-12 col-sm-8">
          <h3 class="mb-4">{{ $t('projects') }} / {{ project.name }} / {{ $t('tasks') }}</h3>
        </div>
        <div class="col-12 col-sm-4 text-right">
          <router-link :to="{ name: 'project.home', params: { id: project.id } }">
            <h2>
              <BIconArrowLeftCircleFill variant="secondary"/>
            </h2>
          </router-link>
        </div>
      </div>
      <card id="tasks">
        <SortableList lockAxis="y" v-model="items" @input="saveOrder()" :distance="10">
          <SortableItem v-for="(item, index) in items" :index="parseInt(index)" :key="parseInt(index)" :value="item" v-bind:class="{ completed: item.completed }">
            <div class="col-2 col-sm-1 text-center">
              <BIconCircle @click="toggleCompleted(index, item.id)" class="pointer pull-right" v-if="(item.completed == 0)" v-b-tooltip.hover :title="$t('mark_as_focus')"/>
              <BIconCheckCircle @click="toggleCompleted(index, item.id)" class="pointer pull-right" v-else v-b-tooltip.hover :title="$t('unmark_as_focus')"/>
            </div>
            <div class="col-8 col-sm-10">
              <span class="task-name">
                {{ item.name }}
              </span>
            </div>
            <div class="col-2 col-sm-1 text-left text-sm-right">
              <BIconStar @click="toggleFocus(index, item.id)" class="pointer pull-right" v-if="(item.focus == 0)" v-b-tooltip.hover :title="$t('mark_as_focus')"/>
              <BIconStarFill @click="toggleFocus(index, item.id)" class="pointer pull-right" v-else v-b-tooltip.hover :title="$t('unmark_as_focus')"/>
            </div>
          </SortableItem>
        </SortableList>
        <div class="row slot-task new-task" v-bind:class="{ newTaskOpened: newTaskOpen }">
          <div class="col-2 col-sm-1 text-left"></div>
          <div class="col-8 col-sm-10">
            <span class="task-name">
              <b-form @submit="onSubmit">
                <b-form-input v-model="form.name" required :placeholder="$t('task_title_here')"></b-form-input>
                <b-button class="mt-2" type="submit" variant="primary">{{ $t('create') }}</b-button>
              </b-form>
            </span>
          </div>
          <div class="col-2 col-sm-1 text-left text-sm-right"></div>
        </div>
      </card>
      <div class="row mt-4">
        <div class="col-12 text-right">
          <h2 v-if="newTaskOpen"><BIconArrowLeftCircle @click='toggleNewTask()' variant="secondary"/></h2>
          <h2 v-else><BIconPlusCircleFill @click='toggleNewTask()' variant="secondary"/></h2>
        </div>
      </div>
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
  template: `<div class="row slot-task"><slot /></div>`
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
    project: Array,
    tasks: Array,
    items: Array,
    newTaskOpen: false,
    form: {
      name: '',
      project_id: null,
    },
  }),
  mounted () {
    this.id = this.$route.params.id;
    this.loadTasks()
  },  
  methods: {
    loadTasks() {
      var that = this
      axios
      .all([
        axios.get(`/api/projects/`+that.id),
        axios.post(['/api/fetch/projects/tasks'], {projectId:that.id}),
        ])
          .then(
          axios.spread(
            function (project, tasks) {
              that.loaded = true
              that.project = project.data.data
              that.tasks = tasks.data.data
              that.form.project_id = project.data.data.id
              that.prepareDrag()
            }
      ))
    },
    prepareDrag() {
      this.items = Object.values(this.tasks)
    },
    toggleFocus(index, idTask) {
      var obj = {['id']: idTask}
      axios.post(['/api/update/task/focus'], obj, this.headers).then(response => {
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
    toggleCompleted(index, idTask) {
      var obj = {['id']: idTask}
      axios.post(['/api/update/task/completed'], obj, this.headers).then(response => {
        if (this.items[index].completed == 1) this.items[index].completed = 0;
        else this.items[index].completed = 1;
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors || {};
          $.each(this.errors, function (key, value) {
          });
        }
      });
    },
    toggleNewTask: function(){
      this.newTaskOpen = !this.newTaskOpen
    },
    saveOrder() {
      var arrayPass = [];
      this.items.forEach(key => {
        var object = [{
          'id': key.id,
        }];
        arrayPass.push(object);
      })
      axios.post(['/api/order/tasks'], arrayPass).then(response => {
      }).catch(error => {
      });
    },
    onSubmit(evt) {
      evt.preventDefault()
      axios.post(['/api/tasks'], this.form).then(response => {
        this.form.name = null
        this.loadTasks()
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
#tasks {
  .slot-task {
    margin-bottom: 1em;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 1em;
    .task-name {
      display: block;
    }
  }
  .completed {
    opacity: 0.3;
    text-decoration: line-through;
  }
  .slot-task:last-child {
    border: none;
    margin-bottom: 0;
  }
  .new-task {
    opacity: 0;
    height: 0px;
    margin-top: 0;
    padding-top: 0;
    transition: 0.3s;
  }
  .new-task.newTaskOpened {
    opacity: 1;
    margin-top: 1em;
    padding-top: 1em;
    height: inherit; 
  } 
}
</style>
