<template>
  <div class="content d-flex justify-content-center align-items-center">
    <div class="card text-center">
      <div class="card-body">
        <div class="name-company mb-5 fs-3"> 
          <span class="name-company-integra">Integra</span>
          <span class="name-company-software">Software</span>
        </div>
        <div class="d-flex justify-content-center bg-danger mb-2" v-if="error">{{ error }}</div>
        <div class="mb-3">
          <img
            class="img-fluid text-center"
            src="@/assets/image/AvatarLogin.png"
            alt="avatar del login"
          />
        </div>
        <div class="mb-5 fs-3"><span>Te damos la bienvenida</span></div>
        <div class="mx-3">
          <form
            @submit.prevent="getToken">
            <div class="input-group flex-nowrap mb-3">
              <span class="input-group-text transparent">
              <i class="bi bi-envelope"></i>
              </span>
              <input 
                id="email"
                v-model="email"
                type="text" 
                class="form-control transparent text-white" 
                placeholder="Correo electrónico" 
                aria-label="Username" 
                aria-describedby="addon-wrapping"
                maxlength="30">
            </div>
            <div class="input-group flex-nowrap">
              <span class="input-group-text transparent">
                <i class="bi bi-lock"></i>
              </span>
              <input
                id="pass" 
                v-model="password"
                type="password" 
                class="form-control transparent text-white" 
                placeholder="Contraseña" 
                aria-label="password" 
                aria-describedby="addon-wrapping"
                maxlength="30">
            </div>
            <a href="#" class="card-link d-flex justify-content-end link mb-5">¿Olvidaste tu contraseña?</a>
            <Button :type="'submit'" large :text="'Iniciar sesión'"/>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import { mapActions } from 'vuex'

export default {
  name:'Login',
  components: {
    Button
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    error () {
      return this.$store.state.errorToken
    }
  },
  methods: {
    ...mapActions(['getTokenLogin']),
    async getToken () {
      await this.$store.dispatch('getTokenLogin', { email: this.email, password: this.password })

      if(!localStorage.getItem('token') && this.$store.state.token) {
        localStorage.setItem('token', this.$store.state.token)
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/vars';
.content {
  height: 100vh;
}
.card {
  background-color: $grey;
  width: 28rem;
}

.transparent {
  background-color: transparent;
}

input {
  &:active {
    background-color: transparent;
  }

  &:focus {
    background-color: transparent;
  }
}

button {
  width: 100%;
}

.link {
  font-size: 12px;
}

img {
  width: 150px;
}
  
</style>