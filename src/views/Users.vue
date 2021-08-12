<template>
  <div class="container ps-4">
    <div class="d-flex justify-content-end">
      <Button text="Agregar Usuario" id="open" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <template v-slot:icon>
          <i class="bi bi-plus-lg"></i>
        </template>
      </Button>
      <!--Modal-->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Agregar usuario</h5>
              <button type="button" id="close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form
                @submit.prevent="create">
                <div class="input-group flex-nowrap mb-3">
                  <span class="input-group-text transparent green name-padding">
                    Nombre
                  </span>
                  <input 
                    id="name"
                    v-model="inputName"
                    type="text" 
                    class="form-control transparent text-white" 
                    placeholder="Nombre" 
                    aria-label="name" 
                    aria-describedby="addon-wrapping"
                    maxlength="30">
                </div>
                <div class="input-group flex-nowrap">
                  <span class="input-group-text transparent green">
                    Comentario
                  </span>
                  <input
                    id="comments" 
                    v-model="inputComments"
                    type="text" 
                    class="form-control transparent text-white" 
                    placeholder="Comentario" 
                    aria-label="comments" 
                    aria-describedby="addon-wrapping"
                    maxlength="30">
                </div>
                <div class="d-flex pt-4 justify-content-end">
                  <Button class="pe-2" :type="'submit'" :text="'Guardar'"/>
                  <button type="button" class="btn btn btn-outline-secondary text-white" data-bs-dismiss="modal">Cancelar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!---->
    </div>
    <table class="table text-white table-borderless pt-4">
      <thead>
        <tr>
          <th
            :class="{'ps-4' : index == 0}" 
            v-for="(field, index) in fields"  
            :key="index"
            scope="col">{{ field }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(user) in users"
          :key="user.id"
          >
          <td class="pt-3 ps-4"><Number :id="(user.id).toString()"/></td>
          <td class="pt-3">{{ user.name }}</td>
          <td class="pt-3">{{ user.comments }}</td>
          <td class="pt-3">
            <div class="cursor-pointer" @click="remove(user.id)">
              <i class="bi bi-trash ps-4 text-white"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-center text-secondary" v-if="users.length == 0">No existe ningun registro</div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Number from '@/components/Number'
import { mapActions } from 'vuex'

export default {
  name: 'Users',
  components: {
    Number,
    Button
  },
  data () {
    return {
      fields: [
        '',
        'Name',
        'Title',
        'Acciones'
      ],
      isCreate: true,
      inputName: '',
      inputComments: ''
    }
  },
  mounted () {
    this.getUsers()
  },
  computed: {
    users () {
      return this.$store.state.users
    }
  },
  methods: {
    ...mapActions(['getUsers']),
    async create () {
      this.isCreate = true
      this.closeModal()
      await this.$store.dispatch('createUser', { name: this.inputName, comments: this.inputComments })
      await this.$store.dispatch('getUsers')
    },
    async remove (id) {
      await this.$store.dispatch('deleteUser', { id: id })
      await this.$store.dispatch('getUsers')
    },
    closeModal () {
      document.getElementById('close').click();
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/vars';

th {
  font-size: 12px;
}

td {
  font-size: 14px
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

.modal-content {
  background-color: $grey1;
}

.green {
  color: $green;
}

.name-padding {
  padding-right: 2.3rem;
}

.btn-close {
  background-color: $green;
}
  
</style>