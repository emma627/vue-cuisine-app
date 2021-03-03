<template>
  <div>
    <div class="container">
      <div class="row">
        <figure class="col-md-6 col-12">
          <img :src="require(`@/assets/${dish.image}`)" :alt="dish.name" />
        </figure>
        <aside class="col-md-6 col-12">
          <h3>{{ dish.name }}</h3>
          <h4>{{ dish.pinyin }}</h4>
          <p class="text-left">{{ dish.description }}</p>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    listslug: {
      type: String,
      required: true,
    },
  },

  computed: {
    cuisine() {
      return store.cuisines.find((cuisine) => cuisine.slug === this.slug);
    },
    dish() {
      return this.cuisine.dishes.find((dish) => dish.slug === this.listslug);
    },
  },
};
</script>

<style>
figure img {
  width: 350px;
  height: 250px;
}
</style>
