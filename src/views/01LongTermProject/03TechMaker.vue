<template>
  <layout>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
  </layout>
</template>
<script>
import { defineComponent } from "vue";

import Layout from "@/layouts/Layout.vue";
import SectionOne from "@/components/tech-maker/SectionOne.vue";
import SectionTwo from "@/components/tech-maker/SectionTwo.vue";
import SectionThree from "@/components/tech-maker/SectionThree/SectionThree.vue";
import SectionFour from "@/components/tech-maker/SectionFour.vue";
import SectionFive from "@/components/tech-maker/SectionFive.vue";

export default defineComponent({
  components: {
    Layout,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
  },
});
</script>

