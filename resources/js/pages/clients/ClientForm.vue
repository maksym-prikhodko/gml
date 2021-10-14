<template>
  <div>
    <div class="row header">
      <div class="col-10 col-sm-8">
        <h3 class="mb-4">{{ $t('clients') }} / {{ $t('create')}}</h3>
      </div>
      <div class="col-2 col-sm-4 text-right">
        <router-link :to="{ name: 'clients' }">
          <h2>
            <BIconArrowLeftCircleFill variant="secondary"/>
          </h2>
        </router-link>
      </div>
    </div>
    <div v-if="!loaded">
      <div class="spinner-border text-secondary" role="status"></div>
    </div>
    <div v-else>
      <card v-if="!finished">
        <b-form @submit="onSubmit" v-if="show" class="m-5">
          <b-form-group class="mb-4" :label="$t('client_name')">
            <b-form-input size="lg" v-model="form.name" required></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">{{ $t('create') }}</b-button>
        </b-form>
      </card>
      <card v-else class="text-center p-5">
        <h3 class="mb-4">{{ $t('client_succesfully_added')}}</h3>
        <router-link :to="{ name: 'clients' }">
          <b-button variant="success">{{ $t('back') }}</b-button>
        </router-link>
      </card>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  data: () => ({
    finished: false,
    loaded: false,
    form: {
      name: '',
    },
    show: true,
  }),
  mounted () {
    this.loaded = true
  },  
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      axios.post(['/api/clients'], this.form).then(response => {
        this.finished = true
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
</style>
