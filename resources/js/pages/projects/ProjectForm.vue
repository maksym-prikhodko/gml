<template>
  <div>
    <div class="row header">
      <div class="col-10 col-sm-8">
        <h3 class="mb-4">{{ $t('projects') }} / {{ $t('create')}}</h3>
      </div>
      <div class="col-2 col-sm-4 text-right">
        <router-link :to="{ name: 'projects' }">
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
      <card>
        <div v-if="(Object.values(clients).length == 0)">
          <div class="text-center mt-5 mb-5">
            <h4>{{ $t('onboarding_no_clients') }}</h4>
            <p>{{ $t('onboarding_no_clients_text') }}</p>
            <p><img src="/img/vector/clients.jpg"/></p>
            <router-link :to="{ name: 'client.add' }">
              <button class="btn btn-primary">
                {{ $t('onboarding_no_clients_add') }}
              </button>
            </router-link>
          </div>
        </div>
        <div v-else>
          <b-form @submit="onSubmit" v-if="show" class="m-5">
            <b-form-group class="mb-4" :label="$t('project_name')">
              <b-form-input size="lg" v-model="form.name" required></b-form-input>
            </b-form-group>
            <b-form-group class="mb-4" :label="$t('client')">
              <b-form-select size="lg" v-model="form.client_id" :options="clients" required></b-form-select>
            </b-form-group>
            <div class="row mb-4">
              <div class="col-12 col-md-4">
                <b-form-group :label="$t('project_type')">
                  <b-form-select size="lg" v-model="form.type" :options="types" required></b-form-select>
                </b-form-group>
              </div>
              <div class="col-12 col-md-4" v-if="(form.type != 'free')">
                <b-form-group :label="$t('desired_price_hour')" v-if="(form.type == 'hours')">
                  <b-input-group append="€">
                    <b-form-input size="lg" v-model="form.desired_price_hour" required></b-form-input>
                  </b-input-group>
                </b-form-group>
                <b-form-group :label="$t('total_price')" v-else>
                  <b-input-group append="€">
                    <b-form-input size="lg" v-model="form.total_price" required></b-form-input>
                  </b-input-group>
                </b-form-group>
              </div>
              <div class="col-12 col-md-4">
                <b-form-group :label="$t('hours_estimated')">
                  <b-input-group :append="$t('hours')">
                    <b-form-input size="lg" v-model="form.hours_estimated" required></b-form-input>
                  </b-input-group>
                </b-form-group>
              </div>
            </div>
            <b-button type="submit" variant="primary">{{ $t('create') }}</b-button>
          </b-form>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  data: () => ({
    loaded: false,
    loadId: 0,
    form: {
      id: '',
      name: '',
      client_id: '',
      type: 'fixed',
      hours_estimated: 20,
      desired_price_hour: 35,
      total_price: 0,
    },
    types: [
      { value: 'fixed', text: 'Fixed price' },
      { value: 'hours', text: 'Per hours' },
      { value: 'free', text: 'Free' },
    ],
    show: true,
    project: [],
    clients: [],
  }),
  mounted () {
    if (this.$route.params.id) this.loadId = this.$route.params.id;
    var that = this
    axios
    .all([
      axios.post(['/api/project/raw'], {id:that.loadId}),
      axios.get('/api/fetch/select/clients'),
      ])
        .then(
        axios.spread(
          function (project, clients) {
            that.project = project.data.data
            that.clients = clients.data.data
            if (that.loadId > 0) that.loadProjectData()
            that.loaded = true
          }
    ))
  },  
  methods: {
    loadProjectData() {
      this.form.id = this.project.id
      this.form.name = this.project.name
      this.form.client_id = this.project.client_id
      this.form.type = this.project.type
      this.form.hours_estimated = this.project.hours_estimated
      this.form.desired_price_hour = this.project.desired_price_hour
      this.form.total_price = this.project.total_price
    },
    onSubmit(evt) {
      evt.preventDefault()
            if (this.loadId > 0) {
        axios.put(['/api/projects/'+this.loadId], this.form).then(response => {
          this.$router.push({ name: 'project.home', params: { id: this.loadId } })
        }).catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            $.each(this.errors, function (key, value) {
            });
          }
        });
            } else {
        axios.post('/api/projects', this.form).then(response => {
          this.$router.push({ name: 'projects' })
        }).catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            $.each(this.errors, function (key, value) {
            });
          }
        });
      }
    },
  }
}
</script>
<style lang="scss">
</style>
