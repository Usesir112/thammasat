<template>
  <section>
    <div class="grid mt-10 mx-10 md:mx-40">
      <!-- Tag -->
      <div class="text-center md:w-1/4">
        <p class="bg-primary text-white py-1 text-lg">{{ cetagory }}</p>
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

      <!-- Picture -->
      <div class="grid mt-10 place-items-center md:grid-cols-2">

        <!-- Image -->
        <div>
          <img src="/image/conserve/main.png" alt="middle" />
        </div>
        <!-- Image -->

        <!-- Image -->
        <div class="mt-10 md:mt-0">
          <img src="/image/conserve/list.png" alt="middle" />
        </div>
        <!-- Image -->

      </div>
      <!-- Picture -->
      <div class="grid mt-10 place-items-center md:mx-20 font-semibold">
        <p class="md:text-2xl">
          ดำเนินงานภายใต้แผนพัฒนาระบบการผลิตและพัฒนาครูสำหรับพื้นที่ห่างไกล
          กองทุนเพื่อ ความเสมอภาพทางการศึกษา มีเป้าหมายที่จะ
        </p>
        <p class="text-primary md:text-3xl text-2xl my-3">
          สร้างโอกาสทางการศึกษาให้นักเรียนด้อยโอกาสในพื้นที่ห่างไกล
          ผ่านกระบวนการผลิตและพัฒนาครูให้มีคุณภาพสูง เพื่อไป
          พัฒนาและยกระดับคุณภาพการศึกษาในโรงเรียนที่ห่างไกล
        </p>
        <p class="md:text-2xl">
          และขับเคลื่อนนโยบายสนับสนุนสถาบันต้นแบบในการผลิตและพัฒนาครูของประเทศ
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cetagory: "โครงการต่อเนื่องระยะยาว",
      topic: "ครูรัก(ษ์)ถิ่น",
      description:
        "คือ โครงการที่มุ่งเน้นการส่งเสริมพื้นที่และกิจกรรมนอกห้องเรียน รวมถึงผลักดันในประเด็นเชิงสังคม เพื่อสร้างประสบการ์ณ และการเรียนรู้สำหรับนักเรียนชั้นอนุบาล-มัธยม",
    };
  },
};
</script>
