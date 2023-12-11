<template>
  <li class="bookmark_list_item flex aic jcsb">
    <div class="flex aic">
      <span class="shopIcon" :style="{ backgroundImage: 'url(' + shopIcon + ')' }"></span>
      <span class="title">
        {{ id }}
        {{ title }}
      </span>

      <span class="open_link material-symbols-outlined ml-10">
        open_in_new
      </span>
    </div>

    <div class="delete_btn posr bdrs-8" @click="$emit('item-delete')">
      <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="posa posa-center h-6 w-6"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
    </div>
  </li>
  </template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true },
    shopIcon: { type: String, required: true }
  }
}
</script>
