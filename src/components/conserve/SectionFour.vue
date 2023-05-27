<template>
  <section class="p-10 md:px-40 pt-8 space-y-12 bg-primary-100">
    <h1 class="text-4xl font-bold text-primary-900">
      ระยะเวลาการดำเนินโครงการ
    </h1>
    <div
      data-aos="fade-down"
      data-aos-delay="500"
      data-aos-anchor-placement="top-center"
    >
      <!-- Timeline -->
      <div>
        <!-- Heading -->
        <div class="flex items-center">
          <div
            class="ml-5 z-10 flex items-center justify-center w-10 h-10 bg-primary-900 rounded-full ring-0 ring-primary-900 sm:ring-8 shrink-0"
          ></div>
          <p class="ml-5 text-2xl text-primary-900">ปี 2563</p>
        </div>
        <!-- Heading -->

        <!-- Body -->
        <div class="ml-10 border-l-2 border-primary-900">
          <div></div>
          <div class="ml-10 h-10"></div>
        </div>
        <!-- Body -->
      </div>

      <!-- Timeline -->

      <!-- Timeline -->
      <div v-for="(item, index) in timeline" :key="index">
        <!-- Heading -->
        <div class="flex items-center mt-5">
          <div
            class="ml-5 z-10 flex items-center justify-center w-10 h-10 bg-primary-900 rounded-full ring-0 ring-primary-900 sm:ring-8 shrink-0"
          ></div>
          <p class="ml-5 text-2xl text-primary-900">{{ item.year }}</p>
        </div>
        <!-- Heading -->

        <!-- Body -->
        <div class="ml-10 border-l-2 border-primary-900">
          <div class="ml-10  md:flex-row items-center">
            <img
              class="w-1/2 md:w-1/6 md:m-5"
              :src="`/image/conserve/${item.image}`"
              alt="pic01"
            />
            <p class="md:text-xl mt-3 md:mt-0 text-primary-900 overflow-auto md:overflow-hidden">
              <pre class="custom-pre">{{ item.descr }}</pre> 
            </p>  
            
          </div>
        </div>
        <!-- Body -->
      </div>

      <!-- Timeline -->
    </div>
  </section>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
.custom-pre{
  font-family: 'Kanit', sans-serif;
}
</style>
<script>
export default {
  data() {
    return {
      timeline: [
        {
          year: "ปี 2565",
          image: "timeline01.png",
          descr: "ผลิตและพัฒนาครู 3 รุ่น ครอบคลุมโรงเรียนห่างไกล 699 แห่ง",
        },
        {
          year: "ปี 2571",
          image: "timeline02.png",
          descr: "ผลิตและพัฒนาครูรุ่นที่ 4 - นักศึกษาทุน จำนวน 327 คน \n - องค์ความรู้ เครื่องมือ และนวัตกรรมสอดคล้องกับ \n - ความต้องการของชุมชน 9 สถาบัน \n - ฐานข้อมูลนำ มาพัฒนาครูรุ่นใหม่ 635 ชุมชน \n - แหล่งฝึกประสบการณ์วิชาชีพครู 280 แห่ง",
        },
        {
          year: "ปี 2577",
          image: "timeline03.png",
          descr: "ติดตามผลต่อเนื่อง 6 ปี",
        },
      ],
    };
  },
};
</script>
