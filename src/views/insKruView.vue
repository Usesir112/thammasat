<script>
import { defineComponent } from "vue";

import Layout from "@/layouts/Layout.vue";
import SectionIII from "@/components/insKru/iii/Section.vue";
import SectionIV from "@/components/insKru/iv/Section.vue";

export default defineComponent({
  components: {
    Layout,
    SectionIII,
    SectionIV,
  },
});
</script>
<template>
  <Layout>
    <SectionIII />
    <SectionIV />
  </Layout>
</template>
