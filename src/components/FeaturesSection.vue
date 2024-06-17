<template>
  <section id="features" class="features">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Our Core Features</h2>
        <p>Akeshya is a forward-thinking and intelligent design firm that is technically and creatively capable of transforming your brand into its best digital self. Our approach to design and development results in compelling, engaging branding and immersive digital experiences that provide a value for money.</p>
      </div>
      <div class="row" data-aos="fade-up" data-aos-delay="300">
        <div class="col-lg-3 col-md-4" v-for="(feature, index) in features" :key="index">
          <div class="icon-box">
            <i :class="feature.icon" :style="{ color: feature.color }"></i>
            <h3><a href="">{{ feature.title }}</a></h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',
  data() {
    return {
      features: [
        { icon: 'ri-window-line', title: 'Web design', color: '#ffbb2c' },
        { icon: 'ri-code-box-line', title: 'Development', color: '#5578ff' },
        { icon: 'ri-creative-commons-by-line', title: 'Branding', color: '#e80368' },
        { icon: 'ri-play-circle-line', title: 'Media buying', color: '#e361ff' },

        { icon: 'ri-search-eye-line', title: 'Search engine', color: '#47aeff' },
        { icon: 'ri-todo-line', title: 'Brand strategy', color: '#ffa76e' },
        { icon: 'ri-map-pin-line', title: 'Local search marketing', color: '#dbce11' },
        { icon: 'ri-bar-chart-grouped-line', title: 'Lead Tracking & Management', color: '#4233ff' },
        
        { icon: 'ri-contacts-book-line', title: 'Contact management', color: '#b2904f' },
        { icon: 'ri-disc-line', title: 'Media management', color: '#b20969' },
        { icon: 'ri-calendar-event-line', title: 'Social scheduling', color: '#ff5828' },
        { icon: 'ri-advertisement-fill', title: 'Ad retargeting', color: '#29cc61' },
      ],
    };
  },
};
</script>

<style scoped>
.col-lg-3 {
  margin-bottom: 20px; 
}
</style>
