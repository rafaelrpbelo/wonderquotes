<template>
  <div class='row'>
    <div class='col'>
      <form>
        <div class='form-group'>
          <label for='quote'>Quote</label>
          <textarea
            class='form-control'
            :class="{'is-invalid': errors.quote}"
            rows='3'
            v-model='quote'></textarea>
          <div class='invalid-feedback'>{{ errors.quote }}</div>
        </div>

        <button type='submit' class='btn btn-primary' @click.prevent='create'>Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
  import validate from '../../validations/quoteValidator';

  export default {
    data() {
      return {
        quote: '',
        errors: {}
      }
    },
    methods: {
      create() {
        this.errors = {};

        const quoteErrors = validate(this.quote);

        if (quoteErrors.length <= 0) {
          this.$emit('quoteCreated', this.quote);
          this.quote = '';
        } else {
          this.$set(this.errors, 'quote', quoteErrors[0]);
        }
      }
    }
  }
</script>
