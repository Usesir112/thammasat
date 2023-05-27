<template>
  <Layout>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <SectionSeven />
    <SectionEight />
  </Layout>
</template>
<script>
import { defineComponent } from "vue";

import Layout from "@/layouts/Layout.vue";

import SectionOne from "@/components/starfish/SectionOne.vue";
import SectionTwo from "@/components/starfish/SectionTwo.vue";
import SectionThree from "@/components/starfish/SectionThree.vue";
import SectionFour from "@/components/starfish/SectionFour.vue";
import SectionFive from "@/components/starfish/SectionFive.vue";
import SectionSix from "@/components/starfish/SectionSix.vue";
import SectionSeven from "@/components/starfish/SectionSeven.vue";
import SectionEight from "@/components/starfish/SectionEight.vue";

export default defineComponent({
  components: {
    Layout,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionSix,
    SectionSeven,
    SectionEight,
  },
});
</script>
