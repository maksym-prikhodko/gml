<template>
  <div class="slot-preview-file" v-if="!deleted">
    <div class="row">
      <div class="col-9">
        <a :href="'/api/upload/file/get/'+item.pivot.mediable_id+'/'+item.id" target="_blank">
          <span v-if="isImage()">
            <img :src="'/api/upload/file/show/'+item.pivot.mediable_id+'/'+item.id" class="img-responsive img-preview mb-2"/>
          </span>
          <span v-else>
            {{ item.filename }}.{{ item.extension }}
          </span>
        </a>
      </div>
      <div class="col-3 text-right">
        <span @click="sureYouWannaDelete()" v-if="!sureDelete" class="text-gray-200 pointer">
          <BIconTrash/>
        </span>
        <button @click="deleteFile()" class="btn btn-sm bg-danger text-white" v-if="sureDelete">
          <BIconTrash/>?
          {{ this.counter }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  props: ['file'],
  data: () => ({
    item: [],
    sureDelete: false,
    deleted: false,
    counter: 0,
  }),
  mounted () {
    this.item = this.$props.file
  },
  methods: {
    isImage() {
      return false;
      if (this.item.mime_type == 'image/jpeg') return true;
      if (this.item.mime_type == 'image/jpg') return true;
      if (this.item.mime_type == 'image/png') return true;
      if (this.item.mime_type == 'image/gif') return true;
      if (this.item.mime_type == 'image/tiff') return true;
      if (this.item.mime_type == 'image/svg') return true;
      return false;
    },
    getIcon() {
      if (this.item.mime_type == 'image/jpeg') return 'file-image';
      if (this.item.mime_type == 'application/pdf') return 'file-pdf';
      return 'file';
    },
    sureYouWannaDelete() {
      this.sureDelete = true;
      this.counter = 2;
      setTimeout(() => this.counter=1, 1000);
      setTimeout(() => this.sureDelete=false, 2000);
    },
    deleteFile() {
      var obj = {
        ['id']: this.item.id,
      }
      axios.post('/api/upload/file/delete', obj).then(response => {
                this.deleted = true
        this.sureDelete = false
        this.counter = 0
      }).catch(error => {
        this.deleted = false
        this.errors = error.response.data.errors || {}
        $.each(this.errors, function (key, value) {
        });
      });
    },
  },
}
</script>
<style lang="scss">
.img-preview {
  height: 100px;
  width: auto;
}
</style>
