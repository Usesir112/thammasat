<template>
  <form action="">
    <div class="flex items-center md:py-0">
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
          v-model="search"
          @focusin="showSearch = true"
        />
      </div>
      <button
        type="submit"
        class="p-2.5 px-4 text-sm font-medium text-white bg-slate-600 rounded-r-full border border-slate-600 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300"
      >
        <span>Search</span>
      </button>
    </div>

    <div
      class="bg-gray-50 mx-4 overflow-y-auto h-96 md:absolute md:left-0 w-screen"
      v-if="showSearch"
    >
      <div class="mt-5">
        <span
          class="text-gray-500 cursor-pointer bg-primary py-3 px-5 m-5 rounded-lg hover:bg-primary-100"
          @click="showSearch = false"
          >ปิด</span
        >
      </div>
      <ol class="space-y-4 text-gray-500 list-decimal list-inside p-4 w-full">
        <li v-for="tagData in searchTag">
          {{ tagData.name }}
          <ul class="pl-5 mt-2 flex">
            <template v-for="tag in tagData.tags">
              <span
                class="tag hover:bg-primary hover:text-white"
                :class="
                  searchArrayTag.has(tag)
                    ? 'bg-primary text-white'
                    : 'bg-primary-100'
                "
                @click="addTag(tag)"
                >{{ tag }}</span
              >
            </template>
          </ul>
        </li>
      </ol>
      <hr class="h-px my-8 bg-gray-200 border-0" />
      <ol class="space-y-4 text-gray-500 list-decimal list-inside p-4 w-full">
        <template v-if="searchResults.length > 0 && Array.isArray(searchResults)">
          
          <li v-for="project in searchResults" :key="project.name">
            <router-link :to={name:project.link}>{{
              project.name
            }}</router-link>
          </li>
        </template>
      </ol>
    </div>
  </form>
</template>
<script>
import { tag } from "./tag";
import { dataWithTag } from "./data";
export default {
  data() {
    return {
      showSearch: false,
      search: null,
      searchArrayTag: new Set(),
      searchTag: tag,
    };
  },
  computed: {
    searchResults() {
      const arrayTag = Array.from(this.searchArrayTag);
      if (!arrayTag.length) {
        return [];
      } else {
        return this.searchByTag(Array.from(this.searchArrayTag));
      }
    },
  },
  methods: {
    addTag(tag) {
      if (this.searchArrayTag.has(tag)) {
        this.searchArrayTag.delete(tag);
      } else {
        this.searchArrayTag.add(tag);
      }
    },
    searchByTag(tagNames) {
      const results = [];

      dataWithTag.forEach((item) => {
        let matchCount = 0;
        tagNames.forEach((tag) => {
          if (item.tags.includes(tag)) {
            matchCount++;
          }
        });

        if (matchCount === tagNames.length) {
          results.push(item);
        }
      });

      return results;
    },
  },
};
</script>

<style lang="postcss" scoped>
.tag {
  @apply text-sm  mr-2 px-2.5 py-0.5 rounded cursor-pointer;
}
</style>
