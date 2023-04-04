<template>
  <section>
    <div class="grid mt-10 mx-10 md:mx-40">
      <!-- Tag -->
      <div class="text-center md:w-1/6">
        <p class="bg-primary text-white py-1 text-lg">โครงการ{{ topic }}</p>
      </div>
      <!-- Tag -->

      <!-- Head -->
      <div>
        <p class="text-5xl text-primary font-bold mt-3">
          <span class="text-primary-900">โครงการ</span>
          <span class="md:text-4xl">{{ topic }}</span>
        </p>
      </div>
      <!-- Head -->

      <!-- Description -->
      <div class="text-primary-900 mt-5 md:text-lg">
        <p>
          {{ description }}
        </p>
      </div>
      <!-- Description -->

      <!-- Picture -->
      <div class="grid mt-10 place-items-center">
        <!-- Middle -->
        <div>
          <img src="/image/match-stick/main.png" alt="middle" />
        </div>
        <!-- Middle -->
      </div>

      <!-- Picture -->
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      topic: "กลุ่มไม้ขีดไฟ",
      description:
        "คือ โครงการที่มุ่งเน้นการส่งเสริมพื้นที่และกิจกรรมนอกห้องเรียน รวมถึงผลักดันในประเด็นเชิงสังคม เพื่อสร้างประสบการ์ณ และการเรียนรู้สำหรับนักเรียนชั้นอนุบาล-มัธยม",
    };
  },
};
</script>
