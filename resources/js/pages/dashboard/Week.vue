<template>
  <div v-if="!loaded">
    <div class="spinner-border text-secondary" role="status"></div>
  </div>
  <div v-else>
    <card id="mits">
      <div class="card-header">
        <div class="row">
          <div class="col-1">
            <BIconArrowLeftSquare @click="previousWeek()" v-if="(this.which == 'this')"/>
            <BIconArrowLeftSquare @click="thisWeek()" v-else-if="(this.which == 'next')"/>
          </div>
          <div class="col-10">
            <h3>{{ $t('week_view') }}: {{ title }}</h3>
          </div>
          <div class="col-1">
            <BIconArrowRightSquare @click="nextWeek()" v-if="(this.which == 'this')"/>
            <BIconArrowRightSquare @click="thisWeek()" v-else-if="(this.which == 'previous')"/>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12 col-md-2" v-for="(column, indexColumn) in items" :index="parseInt(indexColumn)" :key="parseInt(indexColumn)" :value="column">
            <h5 class="mb-4 text-center">{{ column.name }}</h5>
            <SortableList lockAxis="y" v-model="column.mits" @input="saveOrder()" :distance="10">
              <SortableItem v-for="(item, index) in column.mits" :index="parseInt(index)" :key="parseInt(index)" :value="item" v-bind:class="{ completed: item.completed }">
                <div class="col-1 col-sm-1 text-center icon-smaller">
                  <BIconCircle @click="toggleCompleted(indexColumn, index, item.id)" class="pointer pull-right" v-if="(item.completed == 0)"/>
                  <BIconCheckCircle @click="toggleCompleted(indexColumn, index, item.id)" class="pointer pull-right" v-else/>
                  <BIconTrash @click="trashItem(indexColumn, index, item.id)" class="pointer pull-right" v-if="(item.completed == 1)"/>
                </div>
                <div class="col-10 col-sm-10">
                  <span class="task-name">
                    {{ item.name }}
                  </span>
                </div>
              </SortableItem>
              <b-spinner small type="grow" v-if="column.adding"></b-spinner>
            </SortableList>
          </div>
        </div>      
      </div>
      <b-form @submit="onSubmit">
        <div class="row">
          <div class="col-12 col-md-6">
            <b-form-input v-model="form.name" required :placeholder="$t('task_title_here')" class="w-100"></b-form-input>
          </div>
          <div class="col-12 col-md-4">
            <b-form-select v-model="form.day" class="mb-3">
              <b-form-select-option :value="items[0].day">{{ $t('monday') }}</b-form-select-option>
              <b-form-select-option :value="items[1].day">{{ $t('tuesday') }}</b-form-select-option>
              <b-form-select-option :value="items[2].day">{{ $t('wednesday') }}</b-form-select-option>
              <b-form-select-option :value="items[3].day">{{ $t('thursday') }}</b-form-select-option>
              <b-form-select-option :value="items[4].day">{{ $t('friday') }}</b-form-select-option>
              <b-form-select-option :value="items[5].day">{{ $t('weekend') }}</b-form-select-option>
            </b-form-select>
          </div>
          <div class="col-12 col-md-2">
            <b-button type="submit" variant="primary" class="w-100">{{ $t('create') }}</b-button>
          </div>
        </div>
      </b-form>
    </card>
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
  template: `<div class="row slot-mit"><slot /></div>`
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
    which: 'this',
    title: 'Esta semana',
    week: Array,
    items: Array,
    form: {
      name: '',
      day: 0,
    },
    langDatePicker: {
      formatLocale: {
        firstDayOfWeek: 1,
      },
      monthBeforeYear: false,
    },
  }),
  mounted () {
    this.loadWeek('this')
  },  
  methods: {
    prepareDrag() {
      this.items = Object.values(this.week)
      this.title = this.items[0].week_title
    },
    previousWeek() {
      this.which = 'previous'
      this.loadWeek()
    },
    thisWeek() {
      this.which = 'this'
      this.loadWeek()
    },
    nextWeek() {
      this.which = 'next'
      this.loadWeek()
    },
    loadWeek() {
      var that = this
      var obj = {['which']: this.which}
      axios
      .all([
        axios.post(['/api/dashboard/week'], obj),
        ])
          .then(
          axios.spread(
            function (week) {
              that.week = week.data.data
              that.prepareDrag()
              that.loaded = true
            }
      ))
    },
    saveOrder() {
      var arrayPass = [];
      this.items.forEach(key => {
        key.mits.forEach(mit => {
          var object = [{
            'id': mit.id,
          }];
          arrayPass.push(object);
        })
      })
      axios.post(['/api/mits/order'], arrayPass).then(response => {
      }).catch(error => {
      });
    },    
    toggleCompleted(column, index, idTask) {
      axios.post(['/api/update/mit/completed'], {id: idTask}).then(response => {
        if (this.items[column].mits[index].completed == 1) this.items[column].mits[index].completed = 0;
        else this.items[column].mits[index].completed = 1;
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors || {};
          $.each(this.errors, function (key, value) {
          });
        }
      });
    },
    trashItem(column, index, idTask) {
      axios.delete(['/api/mits/'+idTask]).then(response => {
        this.items[column].mits.splice(index, 1)
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors || {};
          $.each(this.errors, function (key, value) {
          });
        }
      });
    },
    onSubmit(evt) {      
      evt.preventDefault()
      var that = this
      this.items.forEach(function callback(currentValue, index, array) {
        if (currentValue.day == that.form.day) currentValue.adding = true
      })
      let quickAddTask = {
        'name': this.form.name,
        'day': this.form.day,
        'completed': 0,
      }
      axios.post(['/api/mits'], this.form).then(response => {
        this.form.name = null
        this.loadWeek()
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
.slot-mit {
  margin-bottom: 1em;
  .icon-smaller {
    font-size: 12px;
  }
}
.new-mits {
  display: block;
}
.new-mits:hover {
  display: block;
}
</style>
