<template>
  <div id='app' class='container'>
    <div class='row'>
      <div class='col'>
        <progress-bar :min=0 :max='maxQuotes' :value='quotesCount()'></progress-bar>
      </div>
    </div>

    <quote-creator @quoteCreated='addNewQuote'></quote-creator>
    <quote-grid :quotes='quotes' @deletedQuote='deleteQuote'></quote-grid>

    <div class='row' v-show='quotesCount() > 0'>
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
        quotes: [],
        maxQuotes: 10
      }
    },
    methods: {
      addNewQuote(quote) {
        if (this.quotesCount() >= this.maxQuotes) {
          return alert('You should delete some quote to add more!');
        }

        this.quotes.push(quote);
      },
      deleteQuote(index) {
        this.quotes.splice(index, 1);
      },
      quotesCount() {
        return this.quotes.length
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
