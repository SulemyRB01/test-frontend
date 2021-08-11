<template>
  <div>
    <div 
      class="circle d-flex justify-content-center align-items-center m-2 cursor-pointer" 
      @click="$router.back()">
      <i class="bi bi-arrow-left"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Back'
}
</script>

<style lang="scss" escoped>
@import '~@/styles/vars';

.cursor-pointer {
  cursor: pointer;
}

i {
  color: $green1;
}
  
</style>