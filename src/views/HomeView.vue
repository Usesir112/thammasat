<template>
  <layout>
    <!-- @/components/tech-maker/SectionOne.vue -->
    <SectionOne />

    <!-- @/components/tech-maker/SectionTwo.vue -->
    <SectionTwo />

    <SectionThree />
  </layout>
</template>
<script>
import { defineComponent } from "vue";

import Layout from "@/layouts/Layout.vue";
import SectionOne from "@/components/tech-maker/SectionOne.vue";
import SectionTwo from "@/components/tech-maker/SectionTwo.vue";
import SectionThree from "@/components/tech-maker/SectionThree.vue";

export default defineComponent({
  components: { Layout, SectionOne, SectionTwo, SectionThree },
});
</script>
