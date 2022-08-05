<template>
  <header>
    <ul
      class="
        header
        d-flex
        justify-content-center justify-content-md-start
        flex-wrap
      "
    >
      <link-component :link="links.header.link" classItem="header__item">
        <img
          :src="require(`@/assets/logo/${links.header.icon}`)"
          :alt="links.header.icon"
        />
      </link-component>

      <link-component
        v-for="link in links.other"
        :key="link.id"
        :text="link.text"
        :link="link.link"
        classItem="header__item"
      />
    </ul>
  </header>
</template>

<script>
import LinkComponent from "./LinkComponent.vue";

export default {
  components: { LinkComponent },
  computed: {
    links() {
      return this.$store.getters["getHeaderLinks"];
    },
  },
};
</script>