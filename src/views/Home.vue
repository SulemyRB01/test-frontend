<template>
  <div v-if="routeName == 'Home'" class="container ps-4">
    <Button :text="'Buscar créditos grupales'" @click="showGroupCredits"/>
  </div>
  <router-view />
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button'

export default {
  name: 'Home',
   components: {
    Button
  },
  methods: {
    showGroupCredits () {
      this.$router.push({path: '/GroupCredits'})
    }
  },
  computed: {
    routeName() {
      return this.$route.name
    }
  }
}
</script>
