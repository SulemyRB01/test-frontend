<template>
  <div>
    <button 
      :type="type" 
      class="btn btn-outline-success"
      :disabled="disabled"
      @click="handleClick"
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
    }
  },
  methods: {
    handleClick (event) {
      if (this.disabled) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        this.$emit('click', event)
      }
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
  
</style>