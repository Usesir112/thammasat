<template>
  <section>
    <div class="mt-12 py-4">
      <div class="mx-10 md:mx-40">
        <!-- Topic -->
        <div class="text-primary-900">
          <p class="text-4xl font-bold py-5">{{ topic }}</p>
        </div>
        <!-- Topic -->

        <!-- Items -->
        <div
          class="grid justify-between text-primary-900 font-bold md:grid-cols-2"
        >
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="500"
            v-for="(item, index) in items"
            :key="index"
            class="grid grid-cols-7 mt-5 md:mx-3 bg-primary-100 rounded-full p-3"
          >
            <div class="flex items-center col-span-2 ">
              <img
                :src="`/image/01LongTermProject/01Starfish/${item.src}`"
                alt="item-one"
              />
            </div>

            <div class="flex items-center col-span-4 m-10 break-normal">
              <p class="md:text-2xl">
                {{ item.descr }}
              </p>
            </div>

            <div class="flex items-center ml-4">
              <p class="text-white text-4xl md:text-[10rem]">{{ index + 1 }}</p>
            </div>
          </div>
        </div>

        <!-- Items -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      topic: "วัตถุประสงค์ของโครงการ",
      items: [
        {
          src: "item01.png",
          descr: "ให้โอกาสทางการศึกษาที่มีคุณภาพแก่เด็กในชุมชน",
        },
        {
          src: "item02.png",
          descr:
            "ให้ผู้เรียนมีพัฒนาการด้านความรู้ ทักษะ สมรรถนะ และเจตคติตามขีดความสามารถแห่งตน",
        },
        {
          src: "item03.png",
          descr:
            "มีระบบการบริหารตามอัตลักษณ์เชิงพื้นที่โดยเน้นสิ่งอวดล้อม การบูรณาการและการมีส่วนร่วมจากทุกภาคส่วน",
        },
        {
          src: "item04.png",
          descr:
            "มีนวัตกรรมการศึกษาด้านการเรียนรู้ของผู้เรียนและการจัดการศึกษารวมทั้งขยายผลไปใช้สถานศึกษาอื่น",
        },
        {
          src: "item05.png",
          descr:
            "มีให้ครูและบุคลากรทางด้านการศึกษามีสมรรณะในศตวรรษที่ 21 และมาตรฐานวิชาชีพ",
        },
      ],
    };
  },
};
</script>
