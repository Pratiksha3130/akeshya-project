<template>
  <section id="services" class="services">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Akeshya will serve as your consultant and development partner to help you turn your idea into a reality.</p>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" v-for="(service, index) in services" :key="index">
          <div class="icon-box" data-aos="fade-up" :data-aos-delay="service.delay">
            <div class="icon"><i :class="service.icon"></i></div>
            <h4 class="title"><a href="">{{ service.title }}</a></h4>
            <p class="description">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        { 
          icon: 'bx bxl-dribbble', 
          title: 'Design', 
          description: 'Our web design services can assist you in reclaiming your company\'s online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.', 
          delay: 100 
        },
        { 
          icon: 'bx bx-file', 
          title: 'Development', 
          description: 'Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.', 
          delay: 200 
        },
        { 
          icon: 'bx bx-world', 
          title: 'Marketing', 
          description: 'A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.', 
          delay: 300 
        },
        { 
          icon: 'bx bx-tachometer', 
          title: 'Support', 
          description: 'Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we\'ve created a system to ensure that we\'re always available.', 
          delay: 400 
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
