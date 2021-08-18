<template>
  <a href="" data-bs-toggle="tooltip" data-bs-placement="top" :title="textTooltip">
    <i :class="classIcon"></i>
  </a>
</template>

<script>
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'

export default {
  name: 'Tooltip',
  props: {
    textTooltip: {
      type: String,
      default: ''
    },
    classIcon: {
      type: String,
      default: 'bi bi-file-earmark-arrow-down-fill text-white'
    }
  },
  mounted() {
    let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    tooltipTriggerList.forEach(tooltipNode => new Tooltip(tooltipNode))
  }
}
</script>