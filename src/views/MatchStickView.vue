<template>
  <Layout>
    <!-- @/components/match-stick/SectionOne.vue -->
    <SectionOne />

    <!-- @/components/match-stick/SectionTwo.vue -->
    <SectionTwo />

    <!-- @/components/match-stick/SectionFour.vue -->
    <SectionFour />

    <!-- @/components/match-stick/SectionFive.vue -->
    <SectionFive />

    <!-- @/components/match-stick/SectionSix.vue -->
    <SectionSix />
  </Layout>
</template>
<script>
import { defineComponent } from "vue";

import Layout from "@/layouts/Layout.vue";
import SectionOne from "@/components/match-stick/SectionOne.vue";
import SectionTwo from "@/components/match-stick/SectionTwo.vue";
import SectionFour from "@/components/match-stick/SectionFour.vue";
import SectionFive from "@/components/match-stick/SectionFive.vue";
import SectionSix from "@/components/match-stick/SectionSix.vue";

export default defineComponent({
  components: {
    Layout,
    SectionOne,
    SectionTwo,
    SectionFour,
    SectionFive,
    SectionSix,
  },
});
</script>
