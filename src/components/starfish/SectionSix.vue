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
        <div class="grid justify-between md:grid-cols-3 grid-flow-col-1">
          <!-- Card 01 -->
          <div
            class="bg-primary-900 text-primary-100 p-3 m-5 rounded-3xl"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            <div class="flex justify-center m-3">
              <img
                src="/image/01LongTermProject/01Starfish/des01.png"
                alt="left"
              />
            </div>
            <div class="text-center md:text-3xl text-2xl mt-10 m-3">
              <p>สตาร์ฟิชเอ็ดดูเคชั่น</p>
              <p>(Starfish Education)</p>
            </div>
            <div class="flex justify-center m-3">
              <div class="md:m-10 m-3">
                <p>
                  เป็นโครงการริเริ่มที่เปิดตัวพร้อมกับภารกิจ
                  เพื่อให้เด็กทุกคนในประเทศไทยมีโอกาสเข้าถึง
                  การศึกษาที่มีคุณภาพได้อย่างเท่าเทียมกัน
                  โดยผ่านโปรแกรมการเรียนรู้ด้วยนวัตกรรม
                  ใหม่และวิธีแก้ปัญหาโดยใช้เทคโนโลยีในการ
                  พยายามอุดช่องว่างทางการศึกษาของรัฐ
                  ผ่านความร่วมมือของภาครัฐและเอกชน
                </p>
              </div>
            </div>
          </div>
          <!-- Card 01 -->

          <!-- Card 02 -->
          <div
            class="bg-primary-900 text-primary-100 p-3 m-5 rounded-3xl"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            <div class="flex justify-center m-3">
              <img
                src="/image/01LongTermProject/01Starfish/des02.png"
                alt="left"
              />
            </div>
            <div class="text-center md:text-3xl text-2xl mt-10 m-3">
              <p>สตาร์ฟิชเอ็ดดูเคชั่น แลป</p>
              <p>(Starfish Labz)</p>
            </div>
            <div class="flex justify-center">
              <div class="md:m-10 m-3">
                <p>
                  ห้องปฏิบัติการสตาร์ฟิชเป็นแพลตฟอร์ม
                  การเรียนรู้ออนไลน์สำหรับครูและผู้ปกครอง
                  ซึ่งพยายามที่จะแก้ไขช่องว่างการเรียน รู้ในศตวรรษที่ 21
                  จัดหาหลักสูตรออนไลน์ วิดีโอ และเวิร์กชอป แบบตัวต่อตัวให้กับ
                  ผู้ปกครองและครูโดยไม่เสียค่าใช้จ่าย
                </p>
              </div>
            </div>
          </div>
          <!-- Card 02 -->
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
      topic: "รายละเอียดโครงการอื่นๆ",
      items: [
        {
          src: "structure.png",
          descr: "โครงสร้างของรัฐ",
        },
        {
          src: "teamwork.png",
          descr: "ความร่วมมือของหน่วยงานภาครัฐหลายฝ่าย",
        },
      ],
    };
  },
};
</script>
