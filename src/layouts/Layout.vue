<template>
    <navbar />
    <slot />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../components/Navbar/Navbar.vue'

export default defineComponent({
  components: { Navbar },
})
</script>
