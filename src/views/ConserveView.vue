<script>
import { defineComponent } from "vue";

import Layout from "@/layouts/Layout.vue";

import SectionOne from "@/components/conserve/SectionOne.vue";
import SectionTwo from "@/components/conserve/SectionTwo.vue";
import SectionThree from "@/components/conserve/SectionThree.vue";
import SectionFour from "@/components/conserve/SectionFour.vue";
import SectionFive from "@/components/conserve/SectionFive.vue"
import SectionSix from "@/components/conserve/SectionSix.vue"

export default defineComponent({
  components: {
    Layout,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
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
        <SectionFive />
        <SectionSix />
    </Layout>
</template>
