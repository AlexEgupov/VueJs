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
import { v4 as uuidv4 } from "uuid";

export default {
  components: { LinkComponent },
  data() {
    return {
      links: {
        header: {
          id: uuidv4(),
          link: "/",
          icon: "Logo.svg",
        },
        other: [
          {
            id: uuidv4(),
            link: "/our-coffee",
            text: "Our coffee",
          },
          {
            id: uuidv4(),
            link: "/for-your-pleasure",
            text: "For your pleasure",
          },
          {
            id: uuidv4(),
            link: "/contacts",
            text: "Contact us",
          },
        ],
      },
    };
  },
};
</script>