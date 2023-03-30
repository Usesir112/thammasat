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
          class="mr-auto flex flex-col lg:pl-10 lg:flex-row"
          data-te-navbar-nav-ref
        >
          <li
            class="flex justify-end lg:pr-2 py-2 lg:py-0"
            data-te-nav-item-ref
          >
            <a
              class="hover:bg-primary duration-300 focus:bg-primary hover:text-white focus:text-white disabled:text-black/30 lg:px-2 [&.active]:text-black/90"
              href="#"
              data-te-nav-link-ref
              >หน้าหลัก</a
            >
          </li>
          <li
            class="flex justify-end lg:pr-2 py-2 lg:py-0"
            data-te-nav-item-ref
          >
            <a
              class="hover:bg-primary duration-300 focus:bg-primary hover:text-white focus:text-white disabled:text-black/30 lg:px-2 [&.active]:text-black/90"
              href="#"
              data-te-nav-link-ref
              >ประวัติความเป็นมา</a
            >
          </li>
          <li
            class="flex justify-end lg:pr-2 py-2 lg:py-0"
            data-te-nav-item-ref
          >
            <a
              class="hover:bg-primary duration-300 focus:bg-primary hover:text-white focus:text-white disabled:text-black/30 lg:px-2 [&.active]:text-black/90"
              href="#"
              data-te-nav-link-ref
              >ประเภทของโครงการ</a
            >
          </li>

          <li
            class="flex justify-end lg:pr-2 py-2 lg:py-0"
            data-te-nav-item-ref
          >
            <a
              class="hover:bg-primary duration-300 focus:bg-primary hover:text-white focus:text-white disabled:text-black/30 lg:px-2 [&.active]:text-black/90"
              href="#"
              data-te-nav-link-ref
              >เกี่ยวกับเรา</a
            >
          </li>
        </ul>
        <!-- Left links -->

        <!-- Right elements -->
        <div class="relative flex items-center py-2 md:py-0">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-full focus:ring-slate-500 focus:border-slate-500 block w-full pl-10 p-2.5"
              placeholder="Search"
              required
            />
          </div>
          <button
            type="submit"
            class="p-2.5 px-4 text-sm font-medium text-white bg-slate-600 rounded-r-full border border-slate-600 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300"
          >
            <span>Search</span>
          </button>
        </div>
        <!-- Right elements -->
      </div>
      <!-- Collapsible wrapper -->
    </div>
  </nav>
</template>
