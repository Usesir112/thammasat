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
          class="grid justify-between text-primary-900 font-bold text-center md:grid-cols-4"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="grid grid-cols-2 place-items-center mt-12 md:grid-cols-1 md:mx-3"
          >
            <img :src="`/image/tech-maker/section-four/${item.src}`" alt="item-one" class="w-3/4" />
            <div class="md:mt-5">
              <p class="md:h-20">
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
      topic: "ปัจจัยแห่งความสำเร็จ",
      items: [
        // First column
        {
          src: "network.png",
          descr: "เครือข่าย",
        },
        {
          src: "money.png",
          descr: "ทุน",
        },
        {
          src: "manage.png",
          descr: "การบริหารจัดการ",
        },
        {
          src: "unity.png",
          descr: "ความร่วมมือของชุมชน / นิเวศเชิงพื้นที่",
        },

        // Second column
        {
          src: "perspective.png",
          descr: "ทัศนคติของคนในสังคม",
        },
        {
          src: "adapt.png",
          descr: "ความสามารถในการปรับตัวกับสถานการ์ณ",
        },
        {
          src: "change.png",
          descr: "การเท่าทันการเปลี่ยนแปลง",
        },
        {
          src: "view.png",
          descr: "การขยายมุมมอง",
        },

        // Third column
        {
          src: "pactical.png",
          descr: "การได้ลงมือทำ",
        },
        {
          src: "understanding.png",
          descr: "ความเข้าใจประเด็นพื้นที่",
        },
        {
          src: "encouragement.png",
          descr: "การให้พลังใจในการทำงานระหว่างกัน",
        },
      ],
    };
  },
};
</script>
