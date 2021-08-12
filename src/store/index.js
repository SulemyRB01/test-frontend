import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    token: '',
    errorToken: '',
    users: [],
    user: {}
  },
  mutations: {
    setTokenLogin (state, infoResponse) {
      state.token = infoResponse
    },
    setErrorToken (state, errorResponse) {
      if (errorResponse >= 400 && errorResponse <= 499){
        state.errorToken = 'La dirección o la contraseña son incorrectas.'
      }

      if (errorResponse >= 500 && errorResponse <= 599) {
        state.errorToken = 'Hubo un error con el servidor por favor intentalo más tarde.'
      }
    },
    setUsers (state, infoResponse) {
      state.users = infoResponse
    },
    setUser (state, infoResponse) {
      state.user = infoResponse
    }
  },
  actions: {
    async getTokenLogin({ commit }, {email, password}) {
      const data = { 
        email: email,
        password: password 
      }

      try {
        let response = await axios.post('https://reqres.in/api/login', data)
        commit('setTokenLogin', response.data.token)
      }catch(error) {
        console.log(error.response.status)
        commit('setErrorToken', error.response.status)
      }
    },
    async getUsers({ commit }) {
      try {
        let response = await axios.get('http://localhost:3000/users')
        commit('setUsers', response.data)
      }catch(error) {
        console.log(error)
      }
    },
    async createUser({ commit }, { name, comments }) {
      const data = { 
        name: name,
        comments: comments 
      }
      try {
        let response = await axios.post('http://localhost:3000/users', data)
        commit('setUser', response.data)
      }catch(error) {
        console.log(error)
      }
    },
    async deleteUser({ commit }, { id }) {
      try {
        let response = await axios.delete(`http://localhost:3000/users/${id}`)
        commit('setUser', response.data)
      }catch(error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
