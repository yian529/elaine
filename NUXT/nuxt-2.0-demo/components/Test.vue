<template>
  <div class="ymca">
    Test
  </div>
</template>

<style lang="scss">
  .ymca {
    @include center; // will be resolved as position:abslute....
    color: $gray; // will be resolved to #333
  }
</style>