<template>
  <Layout>
    <SectionThree />
    <SectionFour />
  </Layout>
  <!-- TODO โครงการครูรัก(ษ์)ถิ่น -->
</template>
<script>
import { defineComponent } from "vue";

import Layout from "@/layouts/Layout.vue";
import SectionThree from "@/components/conserve/SectionThree.vue";
import SectionFour from "@/components/conserve/SectionFour.vue";
export default defineComponent({
  components: {
    Layout,
    SectionThree,
    SectionFour,
  },
});
</script>
