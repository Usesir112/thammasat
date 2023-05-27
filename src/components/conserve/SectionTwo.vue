<template>
  <section>
    <div class="bg-primary-100 mt-12 py-10">
      <div class="mx-10 md:mx-40">
        <!-- Topic -->
        <div class="text-primary-900">
          <p class="text-4xl font-bold py-5 text-center">{{ topic }}</p>
        </div>
        <!-- Topic -->

        <!-- Items -->
        <div
          class="grid place-items-center text-primary-900 font-bold text-center md:grid-cols-3"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="grid place-items-center mt-12 grid-cols-1 md:mx-3"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-anchor-placement="top-center"
          >
            <img
              :src="`/image/conserve/section-two/${item.src}`"
              alt="item-one"
              class="w-3/4"
            />
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
      topic: "เป้าหมายพัฒนาการเรียนรู้",
      items: [
        {
          src: "one.png",
        },
        {
          src: "two.png",
        },
        {
          src: "three.png",
        },
      ],
    };
  },
};
</script>
