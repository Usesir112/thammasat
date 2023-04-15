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
        class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContent1"
        data-te-collapse-item
      >
        <!-- Left links -->
        <ul
          class="flex flex-col lg:pl-10 lg:flex-row"
          data-te-navbar-nav-ref
        >
          <li
            class="flex justify-end lg:pr-2 py-2 lg:py-0"
            data-te-nav-item-ref
            v-for="item in items"
            :key="item.name"
          >
            <router-link
              class="cursor-pointer hover:bg-primary duration-300 focus:bg-primary hover:text-white focus:text-white lg:px-2"
              :data-popover-target="item.name"
              data-popover-trigger="click"
              data-te-nav-link-ref
              :to="{ name: item.path }"
              >{{ item.title }}</router-link
            >
            <!-- <div
              data-popover
              :id="item.name"
              role="tooltip"
              class="z-10 invisible inline-block w-64 text-sm text-gray-500 bg-white transition-opacity duration-300 shadow-sm opacity-0"
            >
              <div
                class=""
                v-for="subItem in subItems"
                :key="subItem.name"
                v-show="item.name == subItem.name"
              >
                <div
                  v-for="sublist in subItem.items"
                  :key="sublist.name"
                  class="px-2 py-1 mt-1 bg-primary-100 hover:bg-primary hover:text-white hover:cursor-pointer"
                >
                  <p>
                    {{ sublist.title }}
                  </p>
                </div>
              </div>
              <div data-popper-arrow></div>
            </div> -->
          </li>
        </ul>
        <!-- Left links -->

        <!-- Right elements -->
        <div class="">
          <SearchBar />
        </div>
        <!-- Right elements -->
      </div>
      <!-- Collapsible wrapper -->
    </div>
  </nav>
</template>

<script>
import SearchBar from "./SearchBar.vue";
export default {
  components: { SearchBar },
  data() {
    return {
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

  }
};
</script>