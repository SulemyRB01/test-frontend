<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <div class="name-company"> 
          <span class="name-company-integra">Integra</span>
          <span class="name-company-software">Software</span>
        </div>
        <div class="d-flex align-items-center">
          <div><span class="name">{{ nameUser }}</span></div>
          <Avatar :firstName="'Sulemy Guadalupe'" :lastName="'Rodriguez Bojorquez'" :avatar="''"/>
          <div
            class="icono-cursor-pinter"
            :class="[isVisibilityProfile ? 'rotate-icon' : '']"
            v-click-away="closeProfile"
            @click="showProfile">
            <i class="bi bi-chevron-down"></i>
          </div>
          <div v-if="isVisibilityProfile" class="profile">
            <div class="list-group">
              <a href="/Users" class="list-group-item list-group-item-action">Usuarios</a>
              <button @click="logout" class="list-group-item list-group-item-action">Cerrar sesión</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Avatar from '@/components/Avatar'

export default {
  name: 'Navbar',
  components: {
    Avatar,
  },
  data () {
    return {
      isVisibilityProfile: false
    }
  },
  props: {
    nameUser: {
      type: String,
      default: ''
    }
  },
  methods: {
    showProfile () {
      this.isVisibilityProfile = !this.isVisibilityProfile
    },
    closeProfile () {
      this.isVisibilityProfile = false
    },
    logout () {
      delete localStorage.token
      this.$router.push('/Login')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/vars';
  
nav {
  background-color: $grey;
}

.name,
a,
i {
  color: $white;
}

.rotate-icon {
  transform: rotate(180deg);
}

.profile {
  background-color: $white;
  width: 136px;
  height: 36px;
  position: absolute;
  right: 24px;
  top: 52px;
  border-radius: .25rem;
  font-size: 14px;
}

.list-group a {
  color: $grey;
}

.icono-cursor-pinter {
  cursor: pointer;
}

.list-group-item-action:active {
  background-color: $grey;
  color: $white;
}

.list-group-item-action:hover {
  background-color: $grey2;
  color: $white;
}
</style>

