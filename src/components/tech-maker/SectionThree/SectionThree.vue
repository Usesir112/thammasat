<template>
  <section class="grid place-items-center mx-10 md:mx-40 mt-12">
    <!-- Topic -->
    <div class="mb-12">
      <p class="text-center text-4xl font-bold py-3 text-primary-900">
        กิจกรรมของโครงการ
      </p>
    </div>
    <!-- Topic -->

    <!-- Roadmap -->

    <ol class="items-center md:flex mb-12">
      <template v-for="roadMap in time" :key="roadMap.year">
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div
              class="z-10 flex items-center justify-center w-6 h-6 bg-primary-900 rounded-full ring-0 ring-white sm:ring-8 shrink-0"
            ></div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
          </div>
          <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900">
              {{ roadMap.year }}
            </h3>
            <p class="text-base font-normal text-gray-500">
              {{ roadMap.message }}
            </p>
          </div>
        </li>
      </template>
    </ol>

    <!-- Roadmap -->

    <!-- My Map -->
    <div class="min-w-2xl max-w-6xl w-full mx-4 mb-12">
      <img
        src="@/assets/Picture/tech-maker/section-three/mymap.png"
        alt="myMap"
      />
    </div>
    <!-- My Map -->

    <!-- Map -->
    <div class="max-w-3xl w-full pt-3">
      <Thaimap />
    </div>

    <!-- Map -->
  </section>
</template>

<script>
import Thaimap from "./Thaimap.vue";
export default {
  components: { Thaimap },
  data() {
    return {
      time: [
        {
          year: 2560,
          message: "โครงการโรงเรียนร่วมพัฒนา โดยมูลนิธิใจกระทิง",
        },
        {
          year: 2561,
          message: "โครงการผู้นำแห่งอนาคต/ก่อการครู",
        },
        {
          year: 2562,
          message: "โครงการโรงเรียนร่วมพัฒนา โดยธนาคารกรุงเทพ",
        },
        {
          year: 2563,
          message: "โครงการบัวหลวงก่อการครู",
        },
        {
          year: 2564,
          message: "โครงการโรงเรียนปล่อยแสง",
        },
      ],
    };
  },
};
</script>
