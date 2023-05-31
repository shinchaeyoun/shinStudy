<template>
  <div :id="id" class="itemBox box box-shadow">
    <div class="img"></div>
    <div class="shopicon box-shadow"></div>

    <div class="textBox">
      <div class="title">{{ title }}</div>
      <div class="subTitle gray">{{ subTitle }}</div>

      <div class="bottomBox">
        <div class="tag">{{tag}}</div>
        <div class="byName gray">{{byName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    tag: { type: String, required: true },
    byName: { type: String, required: true }
  }
}
</script>
