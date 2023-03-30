<template>
  <section>
    <div class="mt-12 py-4">
      <div class="mx-10 md:mx-40">
        <!-- Topic -->
        <div class="text-primary-900">
          <p class="text-4xl font-bold py-5">{{  topic }}</p>
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
            <img
              :src="`/image/match-stick/section-six/${item.src}`"
              alt="item-one"
              class="w-3/4"
            />
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
      topic: "ปัญหาในการทำงาน",
      items: [
        {
          src: "confilx.png",
          descr: "ความขัดแย้งทางความคิดในเครือข่าย",
        },
        {
          src: "goverment.png",
          descr: "การละเลยจากภาครัฐ",
        },
        
      ],
    };
  },
};
</script>
