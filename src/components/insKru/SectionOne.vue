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
          <img src="/image/insKru/main.png" alt="middle" />
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
      topic: " insKru",
      description:
        "คือ โครงการที่มีวัตถุประสงค์เพื่อเชื่อมต่อ รวมถึงเปิดพื้นที่ให้ครู 5 แสนคนทั่วประเทศได้มาแลกเปลี่ยนไอเดียการสอน เพื่อสร้างแรงบันดาลใจ เปิดมุมมองการสอน รวมถึงขยายไอเดียการสอนดีๆสู่ห้องเรียนทั้งประเทศ",
    };
  },
};
</script>
