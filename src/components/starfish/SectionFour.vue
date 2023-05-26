<template>
  <section>
    <div class="mt-12 py-4 bg-primary-100">
      <div class="mx-10 md:mx-40">
        <!-- Topic -->
        <div class="text-primary-900">
          <p class="text-4xl font-bold py-5">{{ topic }}</p>
        </div>
        <!-- Topic -->

        <!-- Items -->
        <div class="grid justify-between md:grid-cols-2 grid-cols-1">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-anchor-placement="bottom-bottom"
            class="flex items-center justify-center"
          >
            <img
              class="md:w-1/2"
              src="/image/01LongTermProject/01Starfish/target01.png"
              alt="left"
            />
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-anchor-placement="bottom-bottom"
            class="flex justify-center"
          >
            <img
              class="md:w-1/2"
              src="/image/01LongTermProject/01Starfish/target02.png"
              alt="right"
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
      topic: "กลุ่มเป้าหมายของโครงการ",
    };
  },
};
</script>
