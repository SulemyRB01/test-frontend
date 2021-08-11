<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <div class="name-company"> 
          <span class="name-company-uno">Integra</span>
          <span class="name-company-dos">Software</span>
        </div>
        <div class="d-flex align-items-center">
          <div><span class="name">{{ nameUser }}</span></div>
          <Avatar :firstName="'Sulemy Guadalupe'" :lastName="'Rodriguez Bojorquez'" :avatar="''"/>
          <div
            class="icono-cursor-pinter"
            :class="[!isVisibilityProfile ? 'rotate-icon' : '']"
            @click="showProfile">
            <i class="bi bi-chevron-down"></i>
          </div>
          <div v-if="!isVisibilityProfile" class="profile">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action">Ver Perfil</a>
              <a href="#" class="list-group-item list-group-item-action">Cambiar contraseña</a>
              <a href="#" class="list-group-item list-group-item-action">Cerrar sesion</a>
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
      isVisibilityProfile: true
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
      this.isVisibilityProfile = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/vars';
  
nav {
  background-color: $grey;
}

.name-company {
  font-size: 24px;
  font-weight: bold;
  line-height: normal;
}

.name-company-uno {
  color: $white;
}

.name-company-dos {
  color: $green;
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
  width: 184px;
  height: 36px;
  position: absolute;
  right: 24px;
  top: 68px;
}

.list-group a {
  color: $grey;
}

.icono-cursor-pinter {
  cursor: pointer;
}
</style>

