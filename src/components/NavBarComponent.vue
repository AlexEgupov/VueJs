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
      <li class="header__item">
        <router-link :to="links[0].link">
          <img
            :src="require(`@/assets/logo/${links[0].icon}`)"
            :alt="links[0].icon"
          />
        </router-link>
      </li>
      <link-component
        classItem="header__item"
        :text="links[1].text"
        :link="links[1].link"
      />
      <link-component
        classItem="header__item"
        :text="links[2].text"
        :link="links[2].link"
      />
      <link-component
        classItem="header__item"
        :text="links[3].text"
        :link="links[3].link"
      />
    </ul>
  </header>
</template>

<script>
import LinkComponent from "./LinkComponent.vue";

export default {
  components: { LinkComponent },
  data() {
    return {
      links: [
        {
          id: 0,
          link: "/",
          icon: "Logo.svg",
        },
        {
          id: 1,
          link: "/our-coffee",
          text: "Our coffee",
        },
        {
          id: 2,
          link: "/for-your-pleasure",
          text: "For your pleasure",
        },
        {
          id: 3,
          link: "/contacts",
          text: "Contact us",
        },
      ],
    };
  },
};
</script>