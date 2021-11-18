<template>
  <div>
    <div v-if="!loaded">
      <div class="spinner-border text-secondary" role="status"></div>
    </div>
    <div v-else>
      <div class="row header">
        <div class="col-10 col-sm-8">
          <h3 class="mb-4">{{ $t('tasks') }}</h3>
        </div>
        <div class="col-2 col-sm-4 text-right">
          <h2 v-if="newTaskOpen"><BIconArrowLeftCircle @click='toggleNewTask()' variant="secondary"/></h2>
          <h2 v-else><BIconPlusCircleFill @click='toggleNewTask()' variant="secondary"/></h2>
        </div>
      </div>
      <div class="row new-task" v-bind:class="{ newTaskOpened: newTaskOpen }">
        <div class="col-10 col-sm-11">
          <span class="task-name">
            <b-form @submit="onSubmit">
              <b-input-group>
                <b-form-input v-model="form.name" required :placeholder="$t('task_title_here')"></b-form-input>
                <b-input-group-append>
                  <b-button type="submit" class="w-100" variant="primary">{{ $t('create') }}</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form>
          </span>
        </div>
        <div class="col-2 col-sm-1 text-left text-sm-right"></div>
      </div>
      <card id="tasks">
        <div class="text-center mt-5 mb-5" v-if="(items.length == 0)">
          <h1><BIconFolder/></h1>
          <p>{{ $t("add_your_first_task") }}</p>
        </div>
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
  template: `<div class="row slot-task"><slot /></div>`
};
export default {
  middleware: 'auth',
  props: ['id'],
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
    this.id = this.$props.id;
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
      if (this.items.length == 0) this.newTaskOpen = true
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
      let quickAddTask = {
        'id': 0,
        'name': this.form.name,
        'desc': null,
        'focus': 0,
        'completed': 0,
      }
      this.items.unshift(quickAddTask)
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
.new-task {
  opacity: 0;
  height: 0px;
  margin-top: 0;
  padding-top: 0;
  transition: 0.3s;
}
.new-task.newTaskOpened {
  opacity: 1;
  height: inherit; 
  margin-bottom: 1em;
} 
</style>
