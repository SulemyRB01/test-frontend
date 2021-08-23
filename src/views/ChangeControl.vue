<template>
  <div v-if="routeName == 'Control de cambios'" class="container ps-4">
    <table class="table text-white table-borderless">
      <thead>
        <tr>
          <th 
            :class="{'text-center' : index == 2 }"
            v-for="(field, index) in tableFields"  
            :key="index"
            scope="col">{{ field }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(info) in tableInfo"
          :key="info.id"
          >
          <td class="pt-2 ps-3"><Number :id="(info.id).toString()"/></td>
          <td>{{ info.fecha }}</td>
          <td class="text-center text-decoration-underline">
            <div class="cursor-pointer" @click="open(info.url)">{{ info.nombre_archivo}}
            </div>
          </td>
          <td>{{ info.cambios }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <router-view />
</template>

<script>
import Number from '@/components/Number'

export default {
  name: 'ChangeControl',
  components: {
    Number
  },
  data () {
    return {
      tableFields: [
        '',
        'Fecha',
        'Archivo',
        'Cambios'
      ],
      tableInfo: [
        {
          id: 1,
          fecha: '02/08/20',
          nombre_archivo: 'clientes_credito.xml',
          url: 'https://reqres.in/img/faces/7-image.jpg',
          cambios: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
        },
        {
          id: 2,
          nombre_archivo: 'clientes_credito.xml',
          fecha: '12/08/20',
          url: 'https://reqres.in/img/faces/7-image.jpg',
          cambios: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
        },
        {
          id: 3,
          fecha: '24/08/20',
          nombre_archivo: 'clientes_credito.xml',
          url: 'https://reqres.in/img/faces/7-image.jpg',
          cambios: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
        },
        {
          id: 4,
          fecha: '30/08/20',
          nombre_archivo: 'clientes_credito.xml',
          url: 'https://reqres.in/img/faces/7-image.jpg',
          cambios: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
        }
      ]
    }
  },
  computed: {
    routeName() {
      return this.$route.name
    }
  },
  methods: {
    open (url) {
      if (url) {
        window.open(url, '_blank')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/vars';

th {
  padding-left: 1rem;
  font-size: 12px;
}

td {
  font-size: 14px
}
  
</style>