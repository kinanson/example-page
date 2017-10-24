<template>
  <div class="container-fluid">
    <div class="row">
      <nav class="navbar bg-info text-center">
        <h3>
          This is number input
        </h3>
      </nav>
    </div>
    <div class="row">
      <form>
        <div class="form-group">
          <label for="formGroupExampleInput">Vue Txt Number</label>
          <vue-txt-number class="form-control" :key-length="keyLength" :decimal-length="decimalLength" placeholder="only can input number" v-model="number" :allow-negative="allowNegative"></vue-txt-number>
        </div>
        <div class="row">
          <div class="col-md-12">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" v-model="keyLengthChecked">enable
            </label>
            <input type="number" class="form-control" placeholder="limit key length" v-model="keyLength" :disabled="!keyLengthChecked" @change="change">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" v-model="decimalLengthChecked">enable
            </label>
            <input type="number" class="form-control" placeholder="limit decimal length" v-model="decimalLength" :disabled="!decimalLengthChecked" @change="change">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" v-model="allowNegative" @change="change">allow negative
            </label>
          </div>
        </div>
      </form>
    </div>
    <git-icon url="https://github.com/kinanson/vue-txt-number"></git-icon>
  </div>
</template>

<script>
import VueTxtNumber from 'vue-txt-number'
export default {
  name: 'txtNumber',
  components: {
    VueTxtNumber
  },
  data () {
    return {
      number: 1,
      keyLengthChecked: false,
      keyLength: 0,
      decimalLengthChecked: false,
      decimalLength: 0,
      allowNegative: true
    }
  },
  methods: {
    change () {
      this.number = 1
    }
  },
  watch: {
    keyLengthChecked (val) {
      if (!val) {
        this.keyLength = 0
        this.number = 1
      }
    },
    decimalLengthChecked (val) {
      if (!val) {
        this.decimalLength = 0
        this.number = 1
      }
    }
  }
}
</script>

<style>

</style>
