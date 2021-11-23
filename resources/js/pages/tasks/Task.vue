<template>
  <div>
    <div v-if="!loaded">
      <div class="spinner-border text-secondary" role="status"></div>
    </div>
    <div v-else class="row p-4">
      <div class="col-12 col-md-9">
        <b-form-input @change="updateTask()" size="lg" v-model="item.name" required class="inline-input mb-3 text-lg"></b-form-input>
        <vue-editor @blur="updateTask()" class="inline-input" v-model="item.desc" id="editor" :editorToolbar="customToolbar" useCustomImageHandler @image-added="handleImageAdded"> </vue-editor>
      </div>
      <div class="col-12 col-md-3">
        {{ item.id }}
      </div>
    </div>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
  middleware: 'auth',
  components: {
    VueEditor,
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
    handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("image", file);
      axios({
        url: "/api/image/upload",
        method: "POST",
        data: formData
      })
        .then(result => {
          let url = result.data.url;           Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch(err => {
          console.log(err);
        });
    },
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
