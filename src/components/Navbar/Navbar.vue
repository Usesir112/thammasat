<template>
  <nav
    class="sticky top-0 bg-primary-100 p-3 shadow-md z-20"
    data-te-navbar-ref
  >
    <div class="flex justify-end w-full flex-wrap items-center md:px-10">
      <button
        class="block border-0 bg-transparent py-2 px-2.5 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
        type="button"
        data-te-collapse-init
        data-te-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent1"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="[&>svg]:w-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-7 w-7"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div
        class="!visible hidden justify-between flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContent1"
        data-te-collapse-item
      >
        <!-- Left links -->
        <div class="md:flex">
          <ul class="flex flex-col lg:pl-10 lg:flex-row" data-te-navbar-nav-ref>
            <li
              class="flex justify-end lg:pr-2 py-2 lg:py-0"
              data-te-nav-item-ref
              v-for="item in items"
              :key="item.name"
            >
              <router-link
                class="cursor-pointer hover:bg-primary duration-300 focus:bg-primary hover:text-white focus:text-white lg:px-2"
                data-te-nav-link-ref
                :to="{ name: item.path }"
              >
                {{ item.title }}
              </router-link>
            </li>
          </ul>
          <div class="flex justify-end py-2 lg:py-0">
            <Fillter />
          </div>
        </div>

        <!-- Left links -->

        <!-- Right elements -->
        <div class="flex justify-end relative mr-3">
          <input
            class="input peer text-primary disabled:text-primary-500"
            type="text"
            placeholder="ค้นหา"
            v-model="searchValue"
            @focusin="showSearch = true"
            @blur="delayedHideSearch"
            @input="emitInputChange"
          />
        </div>
        <div
          class="shadow-lg rounded-lg absolute left-0 m-2 bg-gray-50 p-5 w-[90%] md:top-12 md:left-auto md:right-14 md:w-1/4"
          v-if="showSearch"
        >
          <ul>
            <li v-for="(result, index) in searchResults" :key="index" class="p-1 hover:text-white hover:bg-primary">
                <router-link :to="{ name: result.link }">{{
                  result.name
                }}</router-link>
            </li>
          </ul>
        </div>
        <!-- Right elements -->
      </div>
      <!-- Collapsible wrapper -->
    </div>
  </nav>
</template>

<script>
import Fillter from "./Fillter.vue";
import { dataWithTag } from "./data";

export default {
  components: { Fillter },
  data() {
    return {
      showSearch: false,
      searchValue: "",
      searchResults: dataWithTag,
      items: [
        { name: "home", title: "หน้าหลัก", path: "Home" },
        { name: "history", title: "ประวัติความเป็นมา", path: "" },
        { name: "type", title: "ประเภทของโครงการ", path: "" },
        { name: "about", title: "เกี่ยวกับเรา", path: "" },
      ],
      subItems: [
        {
          name: "home",
          items: [
            { name: "overall", title: "ภาพรวมโครงการ", path: "" },
            { name: "province", title: "ภาพรวมโครงการรายจังหวัด", path: "" },
            { name: "target", title: "ภาพรวมกลุ่มเป้าหมาย", path: "" },
            { name: "success", title: "ภาพรวมปัจจัยแห่งความสำเร็จ", path: "" },
          ],
        },
        {
          name: "type",
          items: [
            { name: "longterm", title: "โครงการต่อเนื่องระยะยาว" },
            { name: "area", title: "หน่วยงานขับเคลื่อนระดับพื้นที่" },
            { name: "organization", title: "Organization & Learning Space" },
            { name: "edupreneurs", title: "Edupreneurs" },
            { name: "learning", title: "Learning Technology & Media" },
          ],
        },
      ],
    };
  },
  methods: {
    searchByName() {
      this.searchResults = this.searchValue
        ? dataWithTag.filter((item) =>
            item.name.toLowerCase().includes(this.searchValue.toLowerCase())
          )
        : dataWithTag;
    },
    emitInputChange() {
      this.searchByName();
    },
    delayedHideSearch() {
      setTimeout(() => {
        this.showSearch = false;
      }, 300);
    },
  },
};
</script>
