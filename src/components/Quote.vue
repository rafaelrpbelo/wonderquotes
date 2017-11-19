<template>
  <div class='col col-xs-6 col-sm-6 col-md-4 col-lg-3 quote'>
    <div class='card'>
      <div class='card-body'>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .quote { cursor: pointer; }
  .quote .card-body:hover { background-color: #ffcccc; }
</style>
