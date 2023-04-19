<template>
  <section>
    <div class="bg-primary-100 mt-12 py-4">
      <div class="mx-10 md:mx-40">
        <!-- Topic -->
        <div class="text-primary-900">
          <p class="text-4xl font-bold py-5 text-center">{{ topic }}</p>
        </div>
        <!-- Topic -->

        <!-- Items -->
        <div
          class="grid justify-between grid-cols-2 text-primary-900 font-bold text-center lg:text-2xl lg:place-items-center"
        >
          <!-- Topic -->
          <div>เลือกข้อมูลสำหรับแสดงผล</div>
          <!-- Topic -->

          <!-- Checkbox -->
          <div class="lg:mt-10">
            <!-- Project Checkbox -->
            <div class="flex items-center">
              <input type="checkbox" id="project" />
              <label for="project" class="ml-3">จำนวนโครงการ</label>
            </div>
            <!-- Project Checkbox -->

            <!-- Unit Checkbox -->
            <div class="flex items-center">
              <input type="checkbox" id="unit" class="" />
              <label for="unit" class="ml-3">จำนวนหน่วยงาน</label>
            </div>
            <!-- Unit Checkbox -->

            <!-- People Checkbox -->
            <div class="flex items-center">
              <input type="checkbox" id="people" class="" />
              <label for="people" class="ml-3">จำนวนผู้เข้าร่วม</label>
            </div>
            <!-- People Checkbox -->
          </div>
          <!-- Checkbox -->
        </div>

        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />

        <!-- Items -->
      </div>
    </div>
  </section>
</template>
<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
export default {
  components: { Bar },
  data() {
    return {
      topic: "ภาพรวมโครงการรายจังหวัด",
      chartData: {
        labels: [
          "กระบี่",
          "กรุงเทพมหานคร",
          "กาญจนบุรี",
          "กาฬสินธุ์",
          "กำแพงเพชร",

          "ขอนแก่น",
          "จันทบุรี",
          "ฉะเชิงเทรา",
          "ชลบุรี",
          "ชัยนาท",

          "ชัยภูมิ",
          "ชุมพร",
          "เชียงราย",
          "เชียงใหม่",
          "ตรัง",

          "ตราด",
          "ตาก",
          "นครนายก",
          "นครปฐม",
          "นครพนม",

          "นครราชสีมา",
          "นครศรีธรรมราช",
          "นครสวรรค์",
          "นนทบุรี",
          "นราธิวาส",

          "น่าน",
          "บึงกาฬ",
          "บุรีรัมย์",
          "ปทุมธานี",
          "ประจวบคีรีขันธ์",

          "ปราจีนบุรี",
          "ปัตตานี",
          "พระนครศรีอยุธยา",
          "พะเยา",
          "พังงา",

          "พัทลุง",
          "พิจิตร",
          "พิษณุโลก",
          "เพชรบุรี",
          "เพชรบูรณ์",

          "แพร่",
          "ภูเก็ต",
          "มหาสารคาม",
          "มุกดาหาร",
          "แม่ฮ่องสอน",

          "ยโสธร",
          "ยะลา",
          "ร้อยเอ็ด",
          "ระนอง",
          "ระยอง",

          "ราชบุรี",
          "ลพบุรี",
          "ลำปาง",
          "ลำพูน",
          "เลย",

          "ศรีสะเกษ",
          "สกลนคร",
          "สงขลา",
          "สตูล",
          "สมุทรปราการ",

          "สมุทรสงคราม",
          "สมุทรสาคร",
          "สระแก้ว",
          "สระบุรี",
          "สิงห์บุรี",

          "สุโขทัย",
          "สุพรรณบุรี",
          "สุราษฎร์ธานี",
          "สุรินทร์",
          "หนองคาย",

          "หนองบัวลำภู",
          "อ่างทอง",
          "อำนาจเจริญ",
          "อุดรธานี",
          "อุตรดิตถ์",

          "อุทัยธานี",
          "อุบลราชธานี",
        ],
          datasets: [{
              data:
                  [
                      1,
                      2,
                      3,
                      4,
                      5,
                      6,
                      7,
                      8,
                      9,
                      10,
                      11,
                      12,
                      13,
                      14,
                      15,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22,
                      23,
                      24,
                      25,
                      26,
                      27,
                      28,
                      29,
                      30,
                      31,
                      32,
                      33,
                      34,
                      35,
                      36,
                      37,
                      38,
                      39,
                      40,
                      41,
                      42,
                      43,
                      44,
                      45,
                      46,
                      47,
                      48,
                      49,
                      50,
                      51,
                      52,
                      53,
                      54,
                      55,
                      56,
                      57,
                      58,
                      59,
                      60,
                      61,
                      62,
                      63,
                      64,
                      65,
                      66,
                      67,
                      68,
                      69,
                      70,
                      71,
                      72,
                      73,
                      74,
                      75,
                      76,
                      77,
                  ]
          }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
