<template>
  <form action="">
    <div
      class="cursor-pointer hover:bg-primary duration-300 focus:bg-primary hover:text-white focus:text-white lg:px-2"
      @click="showSearch = !showSearch"
    >
      ตัวกรองข้อมูล
    </div>
    <div
      class="flex bg-gray-50 mx-4 mt-5 h-96 md:absolute shadow-lg"
      v-if="showSearch"
    >
      <!-- Tag List -->
      <div class="w-1/2 overflow-y-auto h-96">
        <ol class="space-y-4 text-gray-500 list-decimal list-inside p-4">
          <li v-for="tagData in searchTag">
            {{ tagData.name }}
            <ul class="pl-5 mt-2">
              <template v-for="tag in tagData.tags">
                <span
                  class="tag"
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
      </div>
      <!-- Tag List -->

      <!-- Result -->
      <div class="w-1/2 overflow-y-auto h-96">
        <div class="p-4 mt-2 text-gray-500">
          <p>รายชื่อโครงการ</p>
          <ol class="space-y-4 list-decimal list-inside mt-5">
            <template
              v-if="searchResults.length > 0 && Array.isArray(searchResults)"
            >
              <li
                v-for="project in searchResults"
                :key="project.name"
                class="p-1 hover:text-white hover:bg-primary"
              >
                <router-link :to="{ name: project.link }">{{
                  project.name
                }}</router-link>
              </li>
            </template>
          </ol>
        </div>
      </div>
      <!-- Result -->
    </div>
  </form>
</template>

<script>
import { tag } from "./tag";
import { dataWithTag } from "./data";
import eventBus from '@/event-bus';

export default {
  data() {
    return {
      showSearch: false,
      search: null,
      searchArrayTag: new Set(), // Add all tags by default
      searchTag: tag,
    };
  },
  computed: {
    searchResults() {
      const arrayTag = Array.from(this.searchArrayTag);
      // If no tags are selected, return all results
      if (!arrayTag.length) {
        return dataWithTag;
      } else {
        return this.searchByTag(arrayTag);
      }
    },
  },
  methods: {
    addTag(tag) {
      eventBus.emit('request-random-number');

      if (this.searchArrayTag.has(tag)) {
        this.searchArrayTag.delete(tag);
      } else {
        this.searchArrayTag.add(tag);
      }
    },
    searchByTag(tagNames) {
      const results = [];

      dataWithTag.forEach((item) => {
        // Check if any of the selected tags are in the project tags
        if (tagNames.some((tag) => item.tags.includes(tag))) {
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
  @apply flex
  text-sm  
  m-2 
  px-2.5 
  py-0.5 
  rounded 
  cursor-pointer
  hover:bg-primary 
  hover:text-white;
}
</style>
