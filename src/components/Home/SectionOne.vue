<template>
  <section>
    <div class="grid md:grid-cols-2 mt-10 mx-10 md:mx-40">
      <div>
        <!-- Head -->
        <div>
          <p class="text-5xl text-primary font-bold mt-3">
            <span class="text-primary-900">โครงการ</span>
            <span class="md:text-4xl">{{ topic }}</span>
          </p>
        </div>
        <!-- Head -->

        <!-- Description -->
        <div class="text-primary-900 mt-5 md:text-lg">
          <p>{{ description }}</p>
        </div>
        <!-- Description -->

        <!-- Statistics -->
        <div class="grid grid-cols-2 mt-10 place-items-center">
          <div v-for="item in stat" :key="item.name" class="mt-5">
            <span
              class="bg-primary-100 px-20 py-1 rounded-xl text-2xl font-bold text-center"
              >{{ item.amount }}</span
            >
            <p class="text-center mt-2 font-bold">{{ item.title }}</p>
          </div>
        </div>
        <!-- Statistics -->
      </div>

      <!-- Thai map -->
      <div class="mt-10">
        <Thailand
          :population="{
            North:  this.stat[0].amount,
            NorthEast:  this.stat[1].amount,
            Center:  this.stat[3].amount,
            East:  this.stat[0].amount,
            West:  this.stat[1].amount,
            South:  this.stat[2].amount,
          }"
        />
      </div>
      <!-- Thai map -->
    </div>
  </section>
</template>
<script>
import Thailand from "@/components/Map/Thailand.vue";
export default {
  components: { Thailand },
  data() {
    return {
      topic: "จัดการความรู้และขับเคลื่อนระบบการศึกษาและการเรียนรู้",
      description:
        "คือโครงการที่จัดทำขึ้นเพื่อหาแนวทางการขับเคลื่อนเครือข่ายด้านการศึกษาและการเรียนรู้ด้วยองค์ความรู้ในหลากหลายมิติ รวมถึงการวิเคราะห์ปัจจัยแห่งความสำเร็จและปัจจัยแห่งความล้มเหลว",
      stat: [
        { name: "province", title: "จังหวัด", amount: null },
        { name: "district", title: "อำเภอ", amount: null },
        { name: "project", title: "โครงการ", amount: null },
        { name: "member", title: "ผู้เข้าร่วม(คน)", amount: null },
      ],
    };
  },
  created() {
    this.stat[0].amount = Math.floor(Math.random() * 100) + 1;
    this.stat[1].amount = Math.floor(Math.random() * 100) + 1;
    this.stat[2].amount = Math.floor(Math.random() * 100) + 1;
    this.stat[3].amount = Math.floor(Math.random() * 100) + 1;
  },
};
</script>
