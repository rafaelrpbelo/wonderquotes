<template>
  <div id='app' class='container'>
    <div class='row'>
      <div class='col'>
        <progress-bar :min=0 :max=10 :value='quotesCount()'></progress-bar>
      </div>
    </div>

    <div class='row mt-4' v-show='errors.length'>
      <div class='col alert alert-danger' role='alert'>
        {{ errors[0] }}
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
  import validate from './validations/baseValidator';

  export default {
    data() {
      return {
        quotes: [],
        errors: []
      }
    },
    methods: {
      addNewQuote(quote) {
        this.validate();

        if (this.errors.length <= 0) {
          this.quotes.push(quote);
        }
      },
      deleteQuote(index) {
        this.quotes.splice(index, 1);
        this.validate();
      },
      quotesCount() {
        return this.quotes.length
      },
      validate() {
        this.errors = validate({maxQuotes: 10, currentQuotes: this.quotesCount()});
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
