<template>
  <div>
    <button 
      :type="type"
      :class="{'large': large}"
      class="btn btn-outline-success"
      :disabled="disabled"
      >
      <slot name="icon"/>
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'button',
      validator: value => ['submit', 'reset', 'button'].indexOf(value) !== -1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      defaul: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/vars';

.btn-outline-success {
  color: $white;
  border-color: $green;
}

.large {
  width: 100%;
}
  
</style>