<template>
  <form action="relative">
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
        />
      </div>
      <button
        type="submit"
        class="p-2.5 px-4 text-sm font-medium text-white bg-slate-600 rounded-r-full border border-slate-600 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300"
      >
        <span>Search</span>
      </button>
    </div>

      <div class="bg-gray-50 mx-4 overflow-y-auto md:absolute" :class="!!searchResults.length ? 'h-64 ': 'w-full'" v-if="searchResults">
        <ol class="space-y-4 text-gray-500 list-decimal list-inside p-4 w-full">
            <template v-for="result in searchResults">
          <li>
            {{result.category}}
            <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
              <template v-for="project in result.projects">
                <li>{{project}}</li>
              </template>
            </ul>
          </li>
        </template>
        </ol>
       
      </div>
    
  </form>
</template>
<script>
import { tagByCategory } from "./tagSearch";
export default {
  data() {
    return {
      search: null,
      searchResults: null,
    };
  },
  watch: {
    search(searchKeyword) {
      if(searchKeyword){
        this.searchResults = tagByCategory.reduce((acc, category) => {
        const matchingProjects = category.projects.filter((project) =>
          project.toLowerCase().includes(searchKeyword.toLowerCase())
        );
        if (matchingProjects.length > 0) {
          acc.push({
            category: category.name,
            projects: matchingProjects,
          });
        }
        return acc;
      }, []);
      }else{
        this.searchResults = null;

      }
     
      
    },
  },
};
</script>
