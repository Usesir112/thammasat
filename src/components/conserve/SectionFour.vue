<script>
import Thailand from "@/components/Map/Thailand.vue";
export default {
  components: { Thailand },
};
</script>
<template>
  <section class="px-10 md:px-40 pt-8 space-y-12">
    <h1 class="text-2xl font-bold text-primary-900">กลุ่มเป้าหมาย</h1>

    <div class="grid place-items-center md:grid-cols-4 gap-16">
      <img src="/image/conserce/people.png" alt="people" />

      <div class="w-full md:col-span-3 space-y-4 text-primary-700">
        <div class="h-6 bg-primary-700 rounded-full">
          <div
            class="bg-primary-300 h-6 text-sm font-medium text-center p-0.5 leading-none rounded-full flex justify-end items-center"
            style="width: 70%"
          >
            <p class="mr-4">789 คน</p>
          </div>
        </div>
        <p style="width: 75%" class="text-end">ข้อมูลปี 2565</p>
        <p class="text-end">คุณครูในระบดับชั้นปฐมวัย</p>
        <p class="text-end">และชั้นประถม</p>
      </div>
    </div>

    <div class="min-w-2xl max-w-3xl mx-auto pb-4">
      <Thailand />
    </div>
  </section>
</template>
