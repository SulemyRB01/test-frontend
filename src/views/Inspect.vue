<template>
  <hr class="container ps-4">
  <div v-if="routeName == 'Inspeccionar'" class="container p-lr">
    <div class="input-group flex-nowrap">
      <span class="input-group-text transparent" id="addon-wrapping">
        <i class="bi bi-search"></i>
      </span>
      <input 
        v-model="value"
        type="text" 
        class="form-control transparent text-white" 
        placeholder="Id cliente, Nombre, email" 
        aria-label="Username" 
        aria-describedby="addon-wrapping"
        maxlength="50">
    </div>
    <div v-if="value" class="d-flex message-color">
      <div class="result" v-if="value">{{ value }}</div>
      <div>({{ search.length }} resultados)</div>
    </div>
    <table class="table text-white table-borderless pt-4">
      <thead>
        <tr>
          <th
            :class="{'ps-4' : index == 0}" 
            v-for="(field, index) in tableFields"  
            :key="index"
            scope="col">{{ field }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(info) in search"
          :key="info.id"
          >
          <td class="pt-3 ps-4"><Number :id="(info.id).toString()"/></td>
          <td class="d-flex align-items-center">
            <div><Avatar :firstName="info.firstName" :lastName="info.last_name" :avatar="info.avatar"/></div>
            <div>{{ info.first_name }} {{ info.last_name }}</div>
          </td>
          <td class="pt-3">{{ info.email }}</td>
          <td class="pt-3">
            <div class="cursor-pointer" @click="showChangeControl">
              <i class="bi bi-chevron-right text-white"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <router-view />
</template>

<script>
import Avatar from '@/components/Avatar'
import Number from '@/components/Number'

export default {
  name: 'inspect',
  components: {
    Avatar,
    Number
  },
  data () {
    return {
      value: '',
      tableFields: [
        'Id',
        'Nombre',
        'email',
        ''
      ],
      customers: [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
      ]
    }
  },
  methods: {
    showChangeControl () {
      this.$router.push({ path: '/GroupCredits/Inspect/ChangeControl' })
    }
  },
  computed: {
    routeName() {
      return this.$route.name
    },
    search () {
      if (this.value == '') {
        return this.customers
      } 
      return this.customers.filter(customer => {
        let transformNumber = customer.id.toString().length == 1 ? `0${customer.id}` : customer.id.toString()

        if(customer.first_name.toLowerCase().includes(this.value.toLowerCase()) ||
          customer.last_name.toLowerCase().includes(this.value.toLowerCase()) ||
          customer.email.toLowerCase().includes(this.value.toLowerCase()) ||
          transformNumber.includes(this.value.toLowerCase()) ) {
          return true
        }
        return false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/vars';

.transparent {
  background-color: transparent;
}

input {
  border-left-color: transparent;

  &:active {
    background-color: transparent;
  }

  &:focus {
    background-color: transparent;
  }
}

span {
  border-right-color: transparent;
}

.p-lr {
  padding: 0 7rem 0 7rem;
}

th {
  padding-left: 1rem;
  font-size: 12px;
}

td {
  font-size: 14px
}

.result {
  max-width: 120px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.message-color {
  color: $grey2;
}
  
</style>