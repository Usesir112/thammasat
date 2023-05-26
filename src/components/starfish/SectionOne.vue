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
          <span class="text-primary-900">{{ topic }}</span>
        </p>
      </div>
      <!-- Head -->

      <div class="grid mt-10 place-items-center md:grid-cols-2">
        <!-- Image -->
        <div data-aos="fade-right">
          <img class="md:w-[80%]" src="/image/01LongTermProject/01Starfish/school.png" alt="middle" />
        </div>
        <!-- Image -->

        <!-- Text -->
        <div data-aos="fade-left" class="grid mt-10 place-items-center md:mx-20 font-semibold">
          <p class="md:text-2xl">
            โรงเรียนบ้านปลาดาว เป็นโรงเรียนเอกชนประเภทศึกษาสงเคราะห์
            สังกัดกระทรวงศึกษาธิการ จัดการศึกษาในระดับอนุบาล และประถมศึกษา
            ตั้งอยู่ในอำเภอแม่แตง จังหวัดเชียงใหม่
            โรงเรียนบ้านปลาดาวจัดตั้งขึ้นเพื่อให้โอกาสการเข้าถึงการศึกษาที่มีคุณภาพ
            แก่เด็กและครอบครัวที่ต้องการความช่วยเหลือ
            โรงเรียนบ้านปลาดาวมุ่งเน้นการพัฒนาผู้เรียนและบุคคลากรทางการศึกษาให้มี
            ทักษะและสมรรถนะในศตวรรษที่ 21 โรงเรียนทำหน้าที่เป็นแหล่งเรียนรู้
            และเผยแพร่ การจัดการเรียนแบบ Problem Based Learning (PBL),
            Makerspace และ นวัตกรรม 3R (Reading, Writing and Arithmetic)
          </p>
          <!-- Text -->
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})

</script>
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
