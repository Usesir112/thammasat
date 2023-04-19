<template>
  <Layout>
    <SectionOne />
    <SectionTwo />
    <!-- <img class="w-full" src="../components/Home/Sectiontwo.png" alt="sectiontwo" /> -->
    <img class="w-full" src="../components/Home/Sectionthree.png" alt="sectionthree" />
    <img class="w-full" src="../components/Home/Sectionfour.png" alt="Sectionfour" />
  </Layout>
</template>
<script>
import Layout from "@/layouts/Layout.vue";
import SectionOne from "@/components/Home/SectionOne.vue"
import SectionTwo from "@/components/Home/SectionTwo.vue";
export default {
  components: { Layout, SectionOne, SectionTwo },
};
</script>
