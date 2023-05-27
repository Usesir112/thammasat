<template>
  <section>
    <div class="mt-12 py-4 bg-primary-100">
      <div class="mx-10 md:mx-[200px]">
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
            class="grid grid-cols-7 mt-5 md:mx-3 bg-white rounded-full p-3"
          >
            <div class="flex items-center col-span-2">
              <img :src="`/image/conserve/${item.src}`" alt="item-one" />
            </div>

            <div class="flex items-center col-span-4 mx-3 md:m-10 break-normal">
              <p class="md:text-2xl">
                {{ item.descr }}
              </p>
            </div>

            <div class="flex items-center ml-4">
              <p class="text-primary-100 text-4xl md:text-[10rem]">
                {{ index + 1 }}
              </p>
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
      topic: "แผนการดำเนินงาน",
      items: [
        {
          src: "plan01.png",
          descr: "สนับสนุนทุนการศึกษานักศึกษารุ่นที่ 1 - 4",
        },
        {
          src: "plan02.png",
          descr: "พัฒนานักศึกษาผู้รับทุนรุ่นที่ 1 - 4",
        },
        {
          src: "plan03.png",
          descr: "งบประมาณเตรียมความพร้อมสำหรับรุ่นที่ 5",
        },
        {
          src: "plan04.png",
          descr: "กิจกรรมพัฒนาครู ผู้บริหาร และบุคลากร",
        },
        {
          src: "plan05.png",
          descr: "พัฒนาสถาบันต้นแบบ",
        },
        {
          src: "plan06.png",
          descr:
            "ศึกษาวิจัย ติดตาม ประเมินจัดการ ถอดบนเรียนสำหรับ โรงเรียนในพื้นที่ห่าง ไกลรุ่นต่อไป",
        },
      ],
    };
  },
};
</script>
