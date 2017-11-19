<template>
  <div class="progress">
    <div
      class="progress-bar"
      role="progressbar"
      :aria-valuenow="value"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :style="getProgressAsStyle()"
      >{{ text() }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      min: {type: Number, default: 0},
      max: {type: Number, default: 100},
      value: {type: Number, default: 0}
    },
    methods: {
      text() {
        if (this.value > 0) return `${this.value} / ${this.max}`;
      },
      getProgressAsStyle() {
        return { width: `${(this.value / this.max) * 100}%` }
      }
    }
  }
</script>
