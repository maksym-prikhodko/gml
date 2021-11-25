<template>
  <div>
    <div v-if="!loaded">
      <div class="spinner-border text-secondary" role="status"></div>
    </div>
    <div v-else class="p-4">
      <div class="row">
        <div class="col-12 col-md-9">
          <b-form-input @change="updateTask()" size="lg" v-model="item.name" required class="inline-input mb-3 text-lg"></b-form-input>
        </div>
        <div class="col-12 col-md-3">
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-12">
          <vue-editor @blur="updateTask()" class="inline-input" v-model="item.desc" id="editor" :editorToolbar="customToolbar"> </vue-editor>
        </div>
      </div>
      <div class="mb-3" v-for="(file, index) in item.uploads" :index="parseInt(index)" :key="parseInt(index)" :value="file">
        <TaskFileSlot :file="file"></TaskFileSlot>
      </div>
      <div class="row mb-4">
        <div class="col-12">
          <Uploader model="task" :id="item.id"></Uploader>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
import Uploader from "../uploader/Uploader.vue";
import TaskFileSlot from "./TaskFileSlot.vue";
export default {
  middleware: 'auth',
  components: {
    VueEditor,
    Uploader,
    TaskFileSlot,
  },
  props: ['id'],
  data: () => ({
    loaded: false,
    loadId: null,
    item: Array,
    customToolbar: [["bold", "italic", "underline"], [{ list: "ordered" }, { list: "bullet" }], ["link", "image"]]
  }),
  mounted () {
    this.loadId = this.$props.id;
    var that = this
    axios
    .all([
      axios.get(`/api/tasks/`+that.id),
      ])
        .then(
        axios.spread(
          function (task) {
            that.loaded = true
            that.item = task.data.data
          }
    ))
  },  
  methods: {
    updateTask() {
     axios.patch(['/api/tasks/'+this.item.id], this.item).then(response => {
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors || {};
          $.each(this.errors, function (key, value) {
          });
        }
      });
    },
  },
}
</script>
<style lang="scss">
</style>
