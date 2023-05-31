<template>
  <div :id="id" class="navItem">
    <div class="icon"></div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true }
  }
}
</script>
