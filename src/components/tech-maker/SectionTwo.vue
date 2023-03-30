<template>
  <section>
    <div class="bg-primary-100 mt-12 py-4">
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
              :src="item.src"
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
      topic: "เป้าหมายของโครงการ",
      items: [
        {
          src: "src/assets/Picture/tech-maker/section-two/one.png",
          descr: "สำรวจและจัดระบบข้อมูล เครือข่ายขององค์กรหรือ หน่วยงานต่างๆ",
        },
        {
          src: "src/assets/Picture/tech-maker/section-two/two.png",
          descr: "บ่มเพาะคุณลักษณะภาวะผู้นำ และศักยภาพให้แก่เด็กและเยาวชน",
        },
        {
          src: "src/assets/Picture/tech-maker/section-two/three.png",
          descr:
            "สร้างความตระหนักและการสร้างแรงบัลดาลใจให้กับครูหรือผู้ที่ทำงานด้านการศึกษาทั่วประเทศ",
        },
        {
          src: "src/assets/Picture/tech-maker/section-two/four.png",
          descr:
            "สื่อสารเพื่อเสนอบทสนทนาและจิตสำนึกใหม่ทางสังคม (Pubblic Pedagogy)",
        },
      ],
    };
  },
};
</script>
