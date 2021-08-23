<template>
  <div v-if="$route.name != 'Not found' && $route.name != 'Login'" id="nav">
    <!-- Navbar -->
    <Navbar :nameUser="'Sulemy Rodriguez'"/>
    <!-- Menu breadcrumb -->
    <nav class="container pt-4 ps-4" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li
          class="breadcrumb-item" 
          :class="{'active': index == (crumbs.length-1)}"
          v-for="(crumb, index) in crumbs" 
          :key="index">
          <a 
            v-if="index != (crumbs.length-1)"
            :href="crumb.path" 
            class="text-white">
              {{crumb.name}}
          </a>
          {{ index == (crumbs.length-1) ? crumb.name : ''}}
        </li>
      </ol>
    </nav>
    <div class="d-flex align-items-center">
      <!-- Back -->
      <Back
        class="mx-4"
        v-if="crumbs.length >= 2"/>
      <!-- Nombre de la vista -->
      <div 
        class="fs-4 fw-bold"
        :class="{'container ps-4' : crumbs.length < 2 }">
        <i v-if="crumbs.length > 2" class="bi bi-search"></i>
        <i v-if="$route.path == '/Users'" class="bi bi-list-ul"></i>
        {{ $route.meta.publicName }}
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Back from '@/components/Back.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Back
  },
  computed: {
    crumbs () {
      return this.$route.matched
    }
  }
}
</script>

<style lang="scss" scoped>
// #nav {
//   padding: 30px;
// }

// #nav a {
//   font-weight: bold;
//   color: #2c3e50;
// }

// #nav a.router-link-exact-active {
//   color: #42b983;
// }
</style>
