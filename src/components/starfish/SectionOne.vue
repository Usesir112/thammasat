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

      <div class="grid mt-10 place-items-center md:flex md:justify-center">
        <!-- Image -->
        <div data-aos="fade-right" data-aos-delay="500" class="md:min-w-[400px]">
          <img
            src="/image/01LongTermProject/01Starfish/school.png"
            alt="middle"
          />
        </div>
        <!-- Image -->

        <!-- Text -->
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          class="grid mt-10 place-items-center md:ml-20 font-semibold md:w-[30rem]"
        >
          <p class="md:text-2xl text-primary-900">
            โรงเรียนบ้านปลาดาว เป็นโรงเรียนเอกชนประเภท ศึกษาสงเคราะห์ (การกุศล)
            เปิดโอกาสให้นักเรียน ที่ต้องการความช่วยเหลือเข้าเรียนฟรีโดยไม่คิด
            ค่าใช้จ่ายใด ๆ และยังมีทุนการศึกษาด้านอื่น ๆ
            โดยมีการจัดการศึกษาแบบสมัยใหม่แบบเชิงรุก (Active learning) และ
            การจัดการเรียนแบบ Problem Based Learning (PBL), Makerspace และ
            นวัตกรรม 3R (Reading, Writing and Arithmetic)
          </p>
          <!-- Text -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cetagory: "Organization & Learning Space",
      topic: "โรงเรียนบ้านปลาดาว",
    };
  },
};
</script>
