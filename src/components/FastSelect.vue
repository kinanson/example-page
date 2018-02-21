<template>
  <div class="vue-fast-select">
    <git-icon url="https://github.com/kinanson/vue-fast-select"></git-icon>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="isNative" v-model="isNative">
      <label class="form-check-label" for="isNative">
        native select
      </label>
      <select v-if="isNative" v-model="selectIndex">
        <option value="">please select</option>
        <option v-for="item in items" :key="item.id" :value="item.id">
          {{item.name}}
        </option>
      </select>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="isFastSelect" v-model="isFastSelect">
      <label class="form-check-label" for="isFastSelect">
        fast select
      </label>
      <vue-fast-select v-if="isFastSelect" v-model="selectIndex" :items="items" key-field="id" value-field="name"></vue-fast-select>
    </div>
  </div>
</template>

<script>
import VueFastSelect from 'vue-fast-select'

export default {
  name: 'fastSelect',
  components: {
    VueFastSelect
  },
  data () {
    return {
      items: [],
      selectIndex: 0,
      isNative: false,
      isFastSelect: false
    }
  },
  mounted () {
    setTimeout(() => {
      for (let i = 0; i < 10000; i++) {
        this.items.push({
          id: i, name: 'test' + i
        })
      }
    }, 1)
  }
}
</script>

<style>

</style>
