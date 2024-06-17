<template>
  <div id="app">
    <AppHeader />
    <HeroSection />
    <ClientSection />
    <AboutSection />
    <CountsSection />
    <ServicesSection />
    <MoreServicesSection />
    <FeaturesSection />
    <ContactSection />
    <AppFooter />
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import ClientSection from './components/ClientSection.vue';
import AboutSection from './components/AboutSection.vue';
import CountsSection from './components/CountsSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import MoreServicesSection from './components/MoreServicesSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import ContactSection from './components/ContactSection.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    HeroSection,
    ClientSection,
    AboutSection,
    CountsSection,
    ServicesSection,
    MoreServicesSection,
    FeaturesSection,
    ContactSection,
    AppFooter,
  },
};
</script>

<style>
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: #012970;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
}

.back-to-top i {
  font-size: 28px;
  color: #fff;
  line-height: 0;
}

.back-to-top:hover {
  background: #013a63;
  color: #fff;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}
</style>