<template>
  <div id='app' class='container'>
    <div class='row'>
      <div class='col'>
        <progress-bar :min=0 :max='maxQuotes' :value='quotes.length'></progress-bar>
      </div>
    </div>

    <quote-creator @quoteCreated='addNewQuote'></quote-creator>
    <quote-grid :quotes='quotes' @deletedQuote='deleteQuote'></quote-grid>

    <div class='row' v-show='quotes.length > 0'>
      <div class='col alert alert-primary' role='alert'>
        Click on quote to delete it!
      </div>
    </div>
    <div class='row' v-show='quotes.length > 0'>
      <div class='col alert alert-primary' role='alert'>
        Click on quote to delete it!
      </div>
    </div>
  </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue';
  import QuoteCreator from './components/handlers/QuoteCreator.vue';
  import ProgressBar from './components/common/ProgressBar.vue';

  export default {
    data() {
      return {
        quotes: ['My first quote'],
        maxQuotes: 10
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
      quoteCreator: QuoteCreator,
      progressBar: ProgressBar
    }
  }
</script>

<style>
</style>
