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
            <img :src="item.src" alt="item-one" class="w-3/4" />
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
          src: "src/assets/Picture/tech-maker/section-four/network.png",
          descr: "เครือข่าย",
        },
        {
          src: "src/assets/Picture/tech-maker/section-four/money.png",
          descr: "ทุน",
        },
        {
          src: "src/assets/Picture/tech-maker/section-four/manage.png",
          descr: "การบริหารจัดการ",
        },
        {
          src: "src/assets/Picture/tech-maker/section-four/unity.png",
          descr: "ความร่วมมือของชุมชน / นิเวศเชิงพื้นที่",
        },

        // Second column
        {
          src: "src/assets/Picture/tech-maker/section-four/perspective.png",
          descr: "ทัศนคติของคนในสังคม",
        },
        {
          src: "src/assets/Picture/tech-maker/section-four/adapt.png",
          descr: "ความสามารถในการปรับตัวกับสถานการ์ณ",
        },
        {
          src: "src/assets/Picture/tech-maker/section-four/change.png",
          descr: "การเท่าทันการเปลี่ยนแปลง",
        },
        {
          src: "src/assets/Picture/tech-maker/section-four/view.png",
          descr: "การขยายมุมมอง",
        },

        // Third column
        {
          src: "src/assets/Picture/tech-maker/section-four/pactical.png",
          descr: "การได้ลงมือทำ",
        },
        {
          src: "src/assets/Picture/tech-maker/section-four/understanding.png",
          descr: "ความเข้าใจประเด็นพื้นที่",
        },
        {
          src: "src/assets/Picture/tech-maker/section-four/encouragement.png",
          descr: "การให้พลังใจในการทำงานระหว่างกัน",
        },
      ],
    };
  },
};
</script>
