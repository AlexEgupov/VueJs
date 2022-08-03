<template>
  <li :class="classItem">
    <router-link :to="link">{{ text }}<slot></slot></router-link>
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
      required: false,
    },
    classItem: {
      type: String,
      required: false,
    },
  },
};
</script>