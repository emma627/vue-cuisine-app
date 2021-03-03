<template>
  <div class="home">
    <h1 class="mt-3">8 Chinese Cuisines</h1>
  <div class="container-fluid">
      <div class="row">
        <div id="carousel" class="col-md-6 col-12 ">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="@/assets/barbecuechinoise.jpg"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="@/assets/baozi.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="@/assets/saute-porc.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <main class="col-md-6 col-12">
          <div>
          <p>
            How many Chinese cuisines are there? The most influential and
            typical known by the public are the “8 Chinese Cuisines”. Actually
            Chinese cuisine has more than 8 genres. China is large and the
            climate, ingredients, history and dining customs vary from place to
            place, leading to the differences in cooking methods and dish
            flavors and forming the different cuisines.
          </p>
          <p>
            As early as the Shang Dynasty (17th century BC - 1046 BC) and Zhou
            Dynasty (1046 - 256 BC), China’s dietary culture has taken shape. In
            the Tang Dynasty (618 - 907 AD) and Song Dynasty (960 - 1279 AD) ,
            the northern and southern food already had their own
            characteristics: generally sweet in south and salty in north. By the
            early Qing Dynasty (1644 - 1911 AD), four most influential cuisines
            prevailed. What are the four main styles of Chinese cuisine at that
            time? They are cuisines of Shandong, Sichuan, Guangdong and Jiangsu
            respectively. By the end of the Qing Dynasty, the four new cuisines
            - Zhejiang cuisine, Fujian cuisine, Hunan cuisine, and Anhui cuisine
            appeared; together with former four cuisines, they were listed as “8
            Chinese Cuisines”.
          </p>
          <p>
            Today, the hot and spicy Sichuan and Hunan cuisines are the most
            popular in China; the Cantonese cuisine with light taste and
            delicate cooking methods is not only sought after in China, but also
            popular around the world.
          </p>
          </div>
        </main>
      </div>
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style scoped>
.carousel {
  width: 640px;
  height: 360px;
}

p {
  margin: 25px 0;
  text-align: left;
}
</style>
