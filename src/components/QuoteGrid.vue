<template>
  <div class='row'>
    <template v-for='quote in quotes'>
      <quote>{{ quote }}</quote>
    </template>
  </div>
</template>

<script>
  import Quote from './Quote.vue';

  export default {
    props: ['quotes'],
    components: {
      quote: Quote
    }
  }
</script>
