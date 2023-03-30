<script>
import Thailand from "@/components/Map/Thailand.vue";
import Person from "./svg/Person.vue";
export default {
  components: { Thailand, Person },
};
</script>
<template>
  <section class="mx-10 md:mx-40 space-y-12 mt-12">
    <h1 class="text-2xl font-bold text-primary-900">กลุ่มเป้าหมายของโครงการ</h1>

    <div
      class="grid md:grid-cols-2 place-items-center gap-10 text-lg font-bold text-primary-900"
    >
      <div>
        <p>กลุ่มนักศึกษามหาลัย(18 - 25ปี)</p>
        <div class="flex mt-4">
          <template v-for="(_, index) in 10" :key="index">
            <Person class="max-w-[1.5rem]" />
          </template>
        </div>
      </div>
      <div>
        <p>กลุ่มคนทำงาน(25 - 60ปี)</p>
        <div class="flex mt-4">
          <template v-for="(_, index) in 8" :key="index">
            <Person class="max-w-[1.5rem]" :color="'#BEDFF0'" />
          </template>
        </div>
      </div>
    </div>

    <div class="min-w-2xl max-w-3xl mx-auto pb-4">
      <Thailand />
    </div>
  </section>
</template>
