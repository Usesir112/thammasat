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
          class="grid justify-between text-primary-900 font-bold text-center md:grid-cols-3"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="grid grid-cols-2 place-items-center mt-12 md:grid-cols-1 md:mx-3"
          >
            <img :src="`/image/match-stick/section-five/${item.src}`" alt="item-one" class="w-3/4" />
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
        {
          src: "child.png",
          descr: "การสร้างทายาท",
        },
        {
          src: "unity.png",
          descr: "ความร่วมมือของชุมชน / นิเวศเชิงพื้นที่",
        },
        {
          src: "perspective.png",
          descr: "ทัศนคติของคนในสังคม",
        },
        {
          src: "view.png",
          descr: "การขยายมุมมอง",
        },
        {
          src: "pactical.png",
          descr: "การได้ลงมือทำ",
        },
      ],
    };
  },
};
</script>
