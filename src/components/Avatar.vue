<template>
	<div v-if="!avatar" class="circle d-flex justify-content-center align-items-center mx-2">
		<span>{{ abreviationFirstName }}</span>
    <span>{{ abreviationLastName }}</span>
	</div>
  <div v-else class="mx-2">
    <img :src="avatar" :alt="ll">
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
    abreviationFirstName() {
      if(this.firstName) {
        return this.firstName.slice(0, 1).toUpperCase()
      }
      return this.firstName
    },
    abreviationLastName() {
      if(this.lastName) {
        return this.lastName.slice(0, 1).toUpperCase()
      }
      return this.LastName;
    },
    backgroundColor() {
      return '#fefdfe'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/vars';

.circle {
  width: 32px;
  height: 32px;
  font-size: 16px;
  border-radius: 50%;
  color: $grey1;
  background-color: $white;
}


img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
	
</style>