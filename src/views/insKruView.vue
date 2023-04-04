<script>
import { defineComponent } from "vue";

import Layout from "@/layouts/Layout.vue";
import SectionOne from "@/components/insKru/SectionOne.vue";
import SectionTwo from "@/components/insKru/SectionTwo.vue";
import SectionThree from "@/components/insKru/SectionThree.vue";
import SectionFour from "@/components/insKru/SectionFour/Section.vue";
import SectionFiveVue from "@/components/insKru/SectionFive.vue"
import SectionSix from "../components/insKru/SectionSix.vue";

export default defineComponent({
  components: {
    Layout,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFiveVue,
    SectionSix
  },
});
</script>
<template>
  <Layout>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFiveVue />
    <SectionSix />
  </Layout>
</template>
