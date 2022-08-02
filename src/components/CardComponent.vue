<template>
  <div :class="classItem">
    <img :src="require(`@/assets/img/${image}`)" :alt="image" />
    <div class="best__item-title">{{ text }}</div>
    <div class="best__item-price">{{ price }}$</div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      tupe: String,
      required: true,
    },
    text: {
      tupe: [String, Number],
      required: true,
    },
    price: {
      tupe: Number,
      required: true,
    },
    classItem: {
      type: String,
      required: false,
    },
  },
};
</script>