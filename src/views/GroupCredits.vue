<template>
  <div v-if="routeName == 'Buscar créditos grupales'" class="container">
    <div class="d-flex justify-content-end">
      <Button text="Inspeccionar" @click="showInspect">
        <template v-slot:icon>
          <i class="bi bi-search"></i>
        </template>
      </Button>
    </div>
    <hr class="container ps-4">
      <table class="table text-white table-borderless">
        <thead>
          <tr>
            <th 
              :class="{'text-center' : index == 2 || index == 6 }"
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
            <td><div class="cursor-pointer text-decoration-underline" @click="download(info.url)">{{ info.nombre_archivo }}</div></td>
            <td>{{ info.fecha_inicio }}</td>
            <td class="text-center">{{ info.calidad }}%</td>
            <td><span :style="{color: info.estatus_color}">{{ info.estatus_name}}</span></td>
            <td>{{ info.fecha_final}}</td>
            <td>{{ info.usuario }}</td>
            <td class="text-center">
              <div @click="download(info.url)">
              <i class="bi bi-file-earmark-arrow-down-fill text-white cursor-pointer"></i>
              </div>
            </td>
            <td><i class="bi bi-chevron-right text-white"></i></td>
          </tr>
        </tbody>
      </table>
  </div>
  <router-view />
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'GroupCredits',
  components: {
    Button
  },
  data () {
    return {
      tableFields: [
        'Archivo', 
        'Expedición',
        '% Calidad de información',
        'Estatus',
        'Finalización',
        'Usuario',
        'Acciones',
        ''
      ],
      tableInfo: [
        {
          id: 1,
          nombre_archivo: '7-image.jpg',
          fecha_inicio: '02/08/20',
          calidad: '90',
          estatus_id: '1',
          estatus_name: 'Finalizado',
          estatus_color: '#52ac85',
          fecha_final: '02/08/20',
          usuario: '@goytia',
          url: 'https://reqres.in/img/faces/7-image.jpg'
        },
        {
          id: 2,
          nombre_archivo: '7-image.jpg',
          fecha_inicio: '12/08/20',
          calidad: '55',
          estatus_id: '2',
          estatus_name: 'En Proceso',
          estatus_color: '#be9b3d',
          fecha_final: '12/08/20',
          usuario: '@goytia',
          url: 'https://reqres.in/img/faces/7-image.jpg'
        },
        {
          id: 3,
          nombre_archivo: '7-image.jpg',
          fecha_inicio: '24/08/20',
          calidad: '87',
          estatus_id: '1',
          estatus_name: 'Finalizado',
          estatus_color: '#52ac85',
          fecha_final: '24/08/20',
          usuario: '@goytia',
          url: 'https://reqres.in/img/faces/7-image.jpg'
        },
        {
          id: 4,
          nombre_archivo: '7-image.jpg',
          fecha_inicio: '30/08/20',
          calidad: '90',
          estatus_id: '3',
          estatus_name: 'Rechazado',
          estatus_color: '#821d2b',
          fecha_final: '30/08/21',
          usuario: '@goytia',
          url: 'https://reqres.in/img/faces/7-image.jpg'
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
    showInspect () {
      this.$router.push({ path: '/GroupCredits/Inspect' })
    },
    download (url) {
      if (url) {
        window.open(url, '_blank')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
th {
  padding-left: 1rem;
  font-size: 12px;
}

td {
  font-size: 14px
}


</style>