<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <link-component :link="links.footer.link" classItem="footer__item">
              <img
                :src="require(`@/assets/logo/${links.footer.icon}`)"
                :alt="links.footer.icon"
              />
            </link-component>

            <link-component
              v-for="link in links.other"
              :key="link.id"
              :text="link.text"
              :link="link.link"
              classItem="footer__item"
            />
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
</template>

<script>
import LinkComponent from "./LinkComponent.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  components: { LinkComponent },
  data() {
    return {
      links: {
        footer: {
          id: uuidv4(),
          link: "/",
          icon: "Logo_black.svg",
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