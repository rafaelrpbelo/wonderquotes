<template>
  <form>
    <div class="form-group">
      <label for="quote">Quote</label>
      <textarea class="form-control" rows="3" v-model='quote'></textarea>
    </div>

    <button type="submit" class="btn btn-primary" @click.prevent='create'>Submit</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        quote: ''
      }
    },
    methods: {
      create() {
        this.$emit('quoteCreated', this.quote);
        this.quote = ''
      }
    }
  }
</script>
