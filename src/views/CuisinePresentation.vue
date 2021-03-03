<template>
<div>
  <div class="presentation mt-3 mb-5" >
    <h1 class="mb-2">{{ cuisine.nom }}</h1>
    <main class="container">
      <div class="row">
        <figure class="col-md-6 col-12">
          <img :src="require(`@/assets/${cuisine.image}`)" :alt="cuisine.nom" />
         
        </figure>
        <aside class="col-md-6 col-12">
          <p class="text-left ">{{ cuisine.description }}</p>
        </aside>
      </div>
    </main>
  </div>

  <div class="cuisineDetails">
    <h2 class="mt-3">{{cuisine.name}} Notable Dishes</h2>
    <div class="container" id="presentation">
    <div class="row">
      <div v-for="dish in cuisine.dishes" :key="dish.slug" class="col-md-4 col-6 mb-5">
        <router-link
          :to="{ name: 'cuisineDetails', params: { listslug: dish.slug },hash:'#presentation'}"
        >
          <img :src="require(`@/assets/${dish.image}`)" />
          <span class="card__text">{{dish.pinyin}}</span>
        </router-link>
      </div>
    </div>
  </div>
  </div>
  
  <section>
    <router-view :key="$route.path" />
  </section>
</div>
</template>

<script>
import store from "@/store";
export default {
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    cuisine() {
      return store.cuisines.find(cuisine => cuisine.slug === this.slug);
    }
  }
};
</script>

<style>
main img {
  width: 500px;
  height: 350px;
}
.cuisineDetails img{
  width:250px;
  height:180px;
}
.card__text {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
}
p {
  font-size: 18px;
}
</style>
