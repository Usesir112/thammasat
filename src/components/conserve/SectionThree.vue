<template>
  <!-- Target group -->
  <section class="px-10 md:px-40 pt-8 space-y-12">
    <h1 class="text-4xl font-bold text-primary-900">กลุ่มเป้าหมาย</h1>

    <div
      class="grid place-items-center md:grid-cols-4 gap-16"
      data-aos="fade-down"
      data-aos-delay="500"
      data-aos-anchor-placement="center-bottom"
    >
      <img src="/image/conserce/people.png" alt="people" />

      <div class="w-full md:col-span-3 space-y-4 text-primary-900">
        <div class="h-6 bg-primary-700 rounded-full">
          <div
            class="bg-primary-100 h-6 text-sm font-medium text-center p-0.5 leading-none rounded-full flex justify-end items-center"
            style="width: 70%"
          >
            <p class="mr-4">789 คน</p>
          </div>
        </div>
        <p style="width: 75%" class="text-end">ข้อมูลปี 2565</p>
        <p class="text-end">คุณครูในระบดับชั้นปฐมวัย</p>
        <p class="text-end">และชั้นประถมจำนวน 1,500 คน</p>
      </div>
    </div>
  </section>
  <!-- Target group -->

  <!-- Number of member -->
  <section class="bg-primary-100 mt-5 py-4 px-10 md:px-40">
    <!-- Heading -->
    <div
      class="text-4xl font-bold text-primary-900"
      data-aos="fade-down"
      data-aos-delay="500"
      data-aos-anchor-placement="top-center"
    >
      <h1>จำนวนผู้ที่มีส่วนร่วมในโครงการ</h1>
      <h1>(แสดงผลตามภาค)</h1>
    </div>
    <!-- Heading -->

    <!-- Radio Button Checked -->
    <div
      class="md:flex text-xl text-primary-900 justify-between m-5"
      data-aos="fade-down"
      data-aos-delay="500"
      data-aos-anchor-placement="top-center"
    >
      <!-- Member -->
      <div class="flex items-center">
        <input
          class="h-10 w-10"
          type="radio"
          id="member"
          name="mapSelect"
          v-model="mapSelect"
          value="member"
        />
        <label for="member" class="ml-3">ผู้เข้าร่วมโครงการ</label>
      </div>
      <!-- Member -->

      <!-- University -->
      <div class="flex items-center">
        <input
          class="h-10 w-10"
          type="radio"
          id="university"
          name="mapSelect"
          v-model="mapSelect"
          value="university"
        />
        <label for="university" class="ml-3">มหาวิทยาลัยและสถานศึกษา</label>
      </div>
      <!-- University -->

      <!-- Student -->
      <div class="flex items-center">
        <input
          class="h-14 w-14 md:h-10 md:w-10"
          type="radio"
          id="student"
          name="mapSelect"
          v-model="mapSelect"
          value="student"
        />
        <label for="student" class="ml-3"
          >นักเรียนที่ได้รับผลประโยชน์ปลายทาง</label
        >
      </div>
      <!-- Student -->
    </div>

    <!-- Radio Button Checked -->
  </section>
  <!-- Number of member -->

  <!-- Map -->
  <section class="mt-5 py-4 px-10 md:px-40">
    <div class="flex flex-col items-center">
      <img
        v-if="mapSelect == 'member'"
        class="md:w-4/6 m-5"
        src="/image/conserve/map01.png"
        alt="map01"
        data-aos="fade-down"
        data-aos-delay="500"
      />
      <img
        v-if="mapSelect == 'university'"
        class="md:w-4/6 m-5"
        src="/image/conserve/map02.png"
        alt="map02"
        data-aos="fade-down"
        data-aos-delay="500"
      />
      <img
        v-if="mapSelect == 'student'"
        class="md:w-4/6 m-5"
        src="/image/conserve/map03.png"
        alt="map03"
        data-aos="fade-down"
        data-aos-delay="500"
      />
    </div>
  </section>
  <!-- Map -->
</template>
<script>
import Thailand from "@/components/Map/Thailand.vue";
export default {
  components: { Thailand },
  data() {
    return {
      mapSelect: "member",
    };
  },
};
</script>
