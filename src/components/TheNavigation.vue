<template>
  <nav>
    <ul>
      <router-link :to="{ name: 'Home' }" class="logoLi">
        <li>
          <img src="@/assets/chine.png" width="60px" /><span class="logoSpan"
            >HOME</span
          >
        </li>
      </router-link>
      <router-link :to="{ name: 'cuisines' }" class="listCuisines">
        <li>
          CUISINES
        </li>
      </router-link>

      <li v-for="cuisine in cuisines" :key="cuisine.id" class="listCuisines">
       <router-link
              :to="{
                name: 'cuisinePresentation',
                params: { slug: cuisine.slug },
              }">
          {{ cuisine.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      cuisines: store.cuisines,
    };
  },
};
</script>

<style>
nav a {
  color: #2c3e50;
}
nav a:hover {
  text-decoration: none;
  color: white;
}
.logoSpan {
  display: block;
  font-weight: bold;
}
nav {
  display:flex;
  align-items: center;
  position:sticky;
  top:0;
  background: rgb(109, 240, 205);
  z-index:1;
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
}
.listCuisines {
  color: #2c3e50;
  padding: 25px;
  font-weight: bold;
  font-size: 18px;
}
.listCuisines:hover,
.listCuisines:active {
  color: white;
  cursor: pointer;
  text-decoration: none;
}
</style>
