<template>
    <div>
    <VueFileAgent
        ref="vueFileAgent"
        :theme="'list'"
        :multiple="true"
        :deletable="false"
        :meta="true"
        :auto="true"
        :maxSize="'10MB'"
        :maxFiles="14"
        :helpText="$t('choose_files')"
        :errorText="{
            type: 'Invalid file type. Only images or zip Allowed',
            size: 'Files should not exceed 10MB in size',
        }"
        @select="filesSelected($event)"
        @beforedelete="onBeforeDelete($event)"
        @delete="fileDeleted($event)"
        v-model="fileRecords"
    ></VueFileAgent>
    <button :disabled="!fileRecordsForUpload.length" @click="uploadFiles()">
       {{$t('upload')}}  {{ fileRecordsForUpload.length }} {{$t('files')}}
    </button>
</div>
</template>
<script>
  export default {
    props: ['model', 'id'],
    data: function () {
      return {
        fileRecords: [],
        uploadUrl: '/api/upload/files/'+this.$props.id,
        uploadHeaders: { 'X-Test-Header': 'vue-file-agent' },
        fileRecordsForUpload: [],
      };
    },
    methods: {
      uploadFiles: function () {
                this.$refs.vueFileAgent.upload(this.uploadUrl, this.uploadHeaders, this.fileRecordsForUpload);
        this.fileRecordsForUpload = [];
      },
      deleteUploadedFile: function (fileRecord) {
                this.$refs.vueFileAgent.deleteUpload(this.uploadUrl, this.uploadHeaders, fileRecord);
      },
      filesSelected: function (fileRecordsNewlySelected) {
        var validFileRecords = fileRecordsNewlySelected.filter((fileRecord) => !fileRecord.error);
        this.fileRecordsForUpload = this.fileRecordsForUpload.concat(validFileRecords);
      },
      onBeforeDelete: function (fileRecord) {
        var i = this.fileRecordsForUpload.indexOf(fileRecord);
        if (i !== -1) {
          this.fileRecordsForUpload.splice(i, 1);
        } else {
          if (confirm('Are you sure you want to delete?')) {
            this.$refs.vueFileAgent.deleteFileRecord(fileRecord);           }
        }
      },
      fileDeleted: function (fileRecord) {
        var i = this.fileRecordsForUpload.indexOf(fileRecord);
        if (i !== -1) {
          this.fileRecordsForUpload.splice(i, 1);
        } else {
          this.deleteUploadedFile(fileRecord);
        }
      },
    },
  };
</script>
