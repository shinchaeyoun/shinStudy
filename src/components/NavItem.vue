<template>
  <div :id="id" class="navItem flex aic">
    <div class="icon bdrs-50"></div>
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
