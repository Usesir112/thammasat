<script>
import { defineComponent } from "vue";

import Layout from "@/layouts/Layout.vue";

import SectionOne from "@/components/conserve/SectionOne.vue";
import SectionTwo from "@/components/conserve/SectionTwo.vue";
import SectionThree from "@/components/conserve/SectionThree.vue";
import SectionFour from "@/components/conserve/SectionFour.vue";
import SectionFive from "@/components/conserve/SectionFive.vue"
import SectionSix from "@/components/conserve/SectionSix.vue"
import SectionSeven from "@/components/conserve/SectionSeven.vue"
import SectionEight from "@/components/conserve/SectionEight.vue"

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
    SectionEight
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
        <SectionSeven />
        <SectionEight />
    </Layout>
</template>
