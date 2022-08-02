<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <title-component title="For your pleasure" />
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_goods.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <card-component
                classItem="shop__item"
                :image="goods[0].image"
                :text="goods[0].text"
                :price="goods[0].price"
              />
              <card-component
                classItem="shop__item"
                :image="goods[1].image"
                :text="goods[1].text"
                :price="goods[1].price"
              />
              <card-component
                classItem="shop__item"
                :image="goods[2].image"
                :text="goods[2].text"
                :price="goods[2].price"
              />
              <card-component
                classItem="shop__item"
                :image="goods[3].image"
                :text="goods[3].text"
                :price="goods[3].price"
              />
              <card-component
                classItem="shop__item"
                :image="goods[4].image"
                :text="goods[4].text"
                :price="goods[4].price"
              />
              <card-component
                classItem="shop__item"
                :image="goods[5].image"
                :text="goods[5].text"
                :price="goods[5].price"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";

export default {
  components: { NavBarComponent, CardComponent, TitleComponent },
  data() {
    return {
      goods: [
        {
          id: 0,
          image: "coffee-1.jpg",
          text: "Solimo Coffee Beans 2kg",
          price: "10.73",
        },
        {
          id: 1,
          image: "coffee-2.jpg",
          text: "Presto Coffee Beans 1kg",
          price: "15.99",
        },
        {
          id: 2,
          image: "coffee-3.jpg",
          text: "AROMISTICO Coffee 1kg",
          price: "6.99",
        },
        {
          id: 3,
          image: "coffee-1.jpg",
          text: "Solimo Coffee Beans 2kg",
          price: "10.73",
        },
        {
          id: 4,
          image: "coffee-2.jpg",
          text: "Presto Coffee Beans 1kg",
          price: "15.99",
        },
        {
          id: 5,
          image: "coffee-3.jpg",
          text: "AROMISTICO Coffee 1kg",
          price: "6.99",
        },
      ],
    };
  },
};
</script>