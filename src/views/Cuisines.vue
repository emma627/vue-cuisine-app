<template>
  <div class="cuisines">
    <h1 class="mt-5" id="h1">8 Chinese Cuisines</h1>
    <div class="links">
      <ul class="justify-content-around mt-5">
        
          <li v-for="cuisine in cuisines" :key="cuisine.id" class="linksA">
           <router-link
          :to="{ name: 'cuisinePresentation', params: { slug: cuisine.slug } }"
        > 
            {{ cuisine.nom }}
           </router-link>  
          </li>
       
      </ul>
    </div>
    <div class="imgToLinks">
      <ul>
        <div class="container">
          <div class="row">
            
              <li
                v-for="cuisine in cuisines"
                :key="cuisine.id"
                class="col-md-3 col-6 mt-5"
              >
              <router-link
              :to="{
                name: 'cuisinePresentation',
                params: { slug: cuisine.slug },
              }"
            >
                <img :src="require(`@/assets/${cuisine.image}`)" />
                <span class="card__text">
                  {{ cuisine.pinyin }}
                </span>
              </router-link>  
              </li>
            
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  props:{
    slug:{
    type:String,
    required:true,
    }
  },
  data() {
    return {
      cuisines: store.cuisines,
    };
  },
};
</script>

<style scoped>
#h1:before,
#h1:after {
  content: "";
  display: inline-block;
  width: 60px;
  height: 60px;
  background: url(../assets/lanterne.png);
  background-size: 100%;
}

.links {
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
}
.linksA:hover {
  color: rgb(78, 39, 107);
  text-decoration: underline;
}
img {
  width: 200px;
  height: 150px;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
}
</style>
