<template>
  <div class="communitie-box box-shadow">
    <div class="img-area"></div>

    <div class="text-area posr">
      <div class="title">{{ title }}</div>
      <div class="describe">{{ describe }}</div>

      <div class="item-info flex aic">
        <div class="icon bdrs-50 tac box-shadow"></div>
        <div class="name">{{ name }}</div>
      </div>
      <div class="title-icon posa flex jcfe">
        <p>{{ snsicon }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    describe: { type: String, required: true },
    name: { type: String, required: true },
    snsicon: { type: String, required: true }
  }
}
</script>
