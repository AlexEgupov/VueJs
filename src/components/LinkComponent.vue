<template>
  <li :class="classItem">
    <router-link :to="link">{{ text }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      tupe: String,
      required: true,
    },
    text: {
      tupe: [String, Number],
      required: true,
    },
    classItem: {
      type: String,
      required: false,
    },
  },
};
</script>