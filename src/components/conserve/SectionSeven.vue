<template>
  <section>
    <div class="mt-12 py-4">
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
            data-aos-anchor-placement="center-bottom"
          >
            <img
              :src="`/image/conserve/${item.src}`"
              alt="item-one"
              class="w-3/4"
            />
            <div class="md:mt-5">
              <p class="md:h-20 text-2xl">
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
          src: "suc01.png",
          descr: "เครือข่าย",
        },
        {
          src: "suc02.png",
          descr: "ทุน",
        },
        {
          src: "suc03.png",
          descr: "การสร้างทายาท",
        },
      ],
    };
  },
};
</script>
