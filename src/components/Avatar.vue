<template>
	<div v-if="!avatar" class="circle d-flex justify-content-center align-items-center m-2">
		<span>{{ abbreviationFirstName }}</span>
    <span>{{ abbreviationLastName }}</span>
	</div>
  <div v-else class="mx-2">
    <img :src="avatar" :alt="avatar">
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    firstName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    }
  },
  computed: {
    abbreviationFirstName() {
      if(this.firstName) {
        return this.firstName.slice(0, 1).toUpperCase()
      }
      return this.firstName
    },
    abbreviationLastName() {
      if(this.lastName) {
        return this.lastName.slice(0, 1).toUpperCase()
      }
      return this.LastName;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/vars';

img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
	
</style>