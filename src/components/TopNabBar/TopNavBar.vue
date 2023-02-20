<template>
  <nav class="bg-primary kanit flex justify-center fixed w-full top-0">
    <div class="flex justify-between font-bold p-3 w-[70%]">
      <NuxtLink
        to="/"
        class="hover:bg-primary-100 hover:text-white p-2 duration-300 rounded-lg"
      >
        หน้าหลัก
      </NuxtLink>
      <NuxtLink
        to="/"
        class="hover:bg-primary-100 hover:text-white p-2 duration-300 rounded-lg"
      >
        ประวัติความเป็นมา
      </NuxtLink>
      <NuxtLink
        to="/"
        class="hover:bg-primary-100 hover:text-white p-2 duration-300 rounded-lg"
      >
        ประเภทของโครงการ
      </NuxtLink>

      <div>
        <div class="flex">
          <div
            class=" inset-y-0 left-0 flex items-center pointer-events-none"
          >
          <span class="absolute text-gray-500 ml-3">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
          </span>
          </div>
          <input
            type="search"
            id="search"
            class="block w-full py-2 px-3 pl-10 text-sm  border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
          />
          <div
            class=" inset-y-0 right-0 flex items-center bg-gray-600 rounded-r-lg px-4"
          >
          <button class="text-white">
            Search
          </button>
          </div>
        </div>
      </div>
      
      <NuxtLink
        to="/"
        class="hover:bg-primary-100 hover:text-white p-2 duration-300 rounded-lg"
      >
        เกี่ยวกับเรา
      </NuxtLink>
    </div>
  </nav>
</template>
