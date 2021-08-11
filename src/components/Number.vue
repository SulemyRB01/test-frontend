<template>
  <div class="square d-flex justify-content-center">
    <span v-if="id.length == 1">0</span>
    <span>{{ id }}</span>
  </div>
</template>

<script>
export default {
  name: "Number",
  props: {
    id: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/vars';

.square {
  width: 28px;
  height: 28px;
  border: 1px solid $green1;
}
  
</style>