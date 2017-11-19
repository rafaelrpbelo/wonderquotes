<template>
  <div id='app' class='container'>
    <quote-creator @quoteCreated='addNewQuote'></quote-creator>
    <quote-grid :quotes='quotes' @deletedQuote='deleteQuote'></quote-grid>
  </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue';
  import QuoteCreator from './components/handlers/QuoteCreator.vue';

  export default {
    data() {
      return {
        quotes: ['My first quote']
      }
    },
    methods: {
      addNewQuote(quote) {
        this.quotes.push(quote);
      },
      deleteQuote(index) {
        this.quotes.splice(index, 1);
      }
    },
    components: {
      quoteGrid: QuoteGrid,
      quoteCreator: QuoteCreator
    }
  }
</script>

<style>
</style>
