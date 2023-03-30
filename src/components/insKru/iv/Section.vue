<script>
import Ball from "./Ball.vue";
export default {
  components: { Ball },
  data() {
    return {
      projectEvents: [
        { year: 2018, message: "เพจ insKru และเว็บไซต์ inskru.com" },
        { year: 2019, message: "กลุ่มครูปล่อยของ" },
        { year: 2020, message: "Signature Workshop" },
        { year: 2021, message: "Buddy Kru Development Tool / key Milestone" },
        {
          year: 2012,
          message: "ครูปล่อยของ PLC Day และเปิดใช้งาน Buddy Kru เต็มรูปแบบ",
        },
      ],
    };
  },
};
</script>
<template>
  <section class="px-10 md:px-40 pt-8 space-y-12 bg-primary-100">
    <h1 class="text-2xl font-bold text-primary-700">กิจกรรมของโครงการ</h1>

    <div
      class="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-0 place-items-center pb-16"
    >
      <template
        v-for="(projectEvent, index) in projectEvents"
        :key="projectEvent.year"
      >
        <Ball
          :number="index + 1"
          :year="projectEvent.year"
          :message="projectEvent.message"
        />
      </template>
    </div>
  </section>
</template>
