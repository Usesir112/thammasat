<template>
  <section>
    <div class="grid mt-10 mx-10 md:mx-[200px]">
      <!-- Tag -->
      <div class="text-center md:w-fit">
        <p class="bg-primary text-white py-1 px-10 text-lg">{{ cetagory }}</p>
      </div>
      <!-- Tag -->

      <!-- Head -->
      <div>
        <p class="text-5xl text-primary font-bold mt-3">
          <span class="text-primary-900">{{ topic }}</span>
        </p>
        <!-- Head -->
      </div>

      <div
        class="grid mt-10 place-items-center md:flex md:flex-col md:justify-center"
      >
        <!-- Text -->
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          class="grid place-items-center md:ml-20 font-semibold"
        >
          <p class="md:text-2xl text-primary-900">
            คือ โครงการที่สร้างจุดยืนในการพัฒนาศักยภาพของครู
            ซึ่งถือได้ว่าเป็นผู้นำ แห่งการเปลี่ยนแปลง
            ทั้งยังร่วมสร้างความตระหนักและการสร้างแรงบันดาลใจ
            ให้กับครูหรือผู้ที่ทำ งานด้านการศึกษาทั่วประเทศ
          </p>
        </div>
        <!-- Text -->

        <!-- Image -->
        <div
          data-aos="fade-right"
          data-aos-delay="500"
          class="mt-10 md:w-[70%]"
        >
          <img
            src="/image/01LongTermProject/03TechMaker/main.png"
            alt="middle"
            class="hidden md:block "
          />
          <img
            src="/image/01LongTermProject/03TechMaker/sep01.png"
            alt="middle"
            class="md:hidden block mt-5 "
          />
          <img
            src="/image/01LongTermProject/03TechMaker/sep02.png"
            alt="middle"
            class="md:hidden block mt-5"
          />

        </div>
        <!-- Image -->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cetagory: "โครงการก่อการครู",
      topic: "โครงการก่อการครู",
    };
  },
};
</script>
