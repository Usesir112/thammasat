<template>
  <section>
    <div class="bg-primary-100 mt-12 py-4">
      <div class="mx-10 md:mx-40">
        <!-- Topic -->
        <div class="text-primary-900">
          <p class="text-4xl font-bold py-5">{{ topic }}</p>
        </div>
        <!-- Topic -->

        <!-- Items -->
        <div
          class="grid justify-between text-primary-900 font-bold text-center md:grid-cols-3"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="grid grid-cols-2 place-items-center mt-12 md:grid-cols-1 md:mx-3"
          >
            <img
              :src="`/image/match-stick/section-two/${item.src}`"
              alt="item-one"
              class="h-3/4"
            />
            <div class="md:mt-5">
              <p class="md:h-24 text-2xl">
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
          src: "one.png",
          descr: "การสร้างกลุ่มคนรุ่นต่อไป",
        },
        {
          src: "two.png",
          descr: "ความรู้ภูมิปัญญาท้องถิ่น",
        },
        {
          src: "three.png",
          descr: "ทัศนคติต่อการเคารพความแตกต่างหลากหลาย",
        },
      ],
    };
  },
};
</script>
