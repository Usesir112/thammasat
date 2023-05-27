<template>
  <section>
    <div class="mt-5 py-10 bg-primary-100">
      <div class="mx-10 md:mx-[200px]">
        <!-- Topic -->
        <div class="text-primary-900">
          <p class="text-4xl font-bold py-5">{{ topic }}</p>
        </div>
        <!-- Topic -->

        <!-- Items -->
        <div
          class="grid justify-between text-primary-900 font-bold text-center md:grid-cols-5"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="grid grid-cols-2 place-items-center mt-12 md:grid-cols-1 md:mx-3"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            <img
              :src="`/image/01LongTermProject/03TechMaker/${item.src}`"
              alt="item-one"
              class="w-3/4"
            />
            <div class="md:mt-5">
              <p class="text-2xl">
                {{ item.descr }}
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
      topic: "เป้าหมายของโครงการ",
      items: [
        {
          src: "goal01.png",
          descr: "ยกระดับและขยายเครือข่ายผู้นำ การเรียนรู้เพื่อสร้างการเปลี่ยนแปลง",
        },
        {
          src: "goal02.png",
          descr: "พัฒนาศักยภาพนักสื่อสารสุขภาวะและผู้นำการเปลี่ยนแปลง",
        },
        {
          src: "goal03.png",
          descr: "วิจัยและพัฒนาองค์ความรู้ปฏิบัติการเพื่อขับเคลื่อนการทำงาน",
        },
        {
          src: "goal04.png",
          descr: "สื่อสารเพื่อเสนอบทสนทนาและจิตสำ นึกใหม่ทางสังคม (Public Pedagogy)",
        },
      ],
    };
  },
};
</script>
