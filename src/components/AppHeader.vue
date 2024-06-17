<template>
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="logo">
        <h1><a href="/"><img src="@/assets/img/logo.png" alt="" class="img-fluid" />AKESHYA</a></h1>
      </div>
      <nav :class="['navbar', { 'navbar-mobile': isMobileMenuOpen }]">
        <ul>
          <li><a class="nav-link scrollto active" href="" @click="closeMobileMenu">Home</a></li>
          <li><a class="nav-link scrollto" href="#about" @click="closeMobileMenu">About</a></li>
          <li><a class="nav-link scrollto" href="#services" @click="closeMobileMenu">Services</a></li>
          <li><a class="getstarted scrollto" href="#contact" @click="closeMobileMenu">Contact us</a></li>
        </ul>
        <i :class="['bi', isMobileMenuOpen ? 'bi-x' : 'bi-list', 'mobile-nav-toggle']" @click="toggleMobileMenu"></i>
      </nav>
    </div>
  </header>
</template>


<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      document.body.classList.toggle('mobile-menu-active', this.isMobileMenuOpen);
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      document.body.classList.remove('mobile-menu-active');
    },
  },
};
</script>


<style scoped>
/* General styles */
#header {
  background: #fff;
  transition: all 0.5s;
}

/* Mobile menu styles */
.navbar {
  display: flex;
  align-items: left;
}

.navbar-mobile {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%; 
  height: 100%;
  background: #000;
  padding: 1rem;
  z-index: 1000;
}

.navbar-mobile-active {
  transform: translateX(0);
}

.navbar-mobile ul {
  display: flex;
  flex-direction: column;
  align-items: left;
}

.navbar-mobile a {
  color: #000; 
  margin: 1rem 0;
}

.navbar-mobile .getstarted {
  background: #0044cc;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: #fff;
}

.mobile-nav-toggle {
  font-size: 24px;
  color: #000;
  cursor: pointer;
}

.navbar-mobile .mobile-nav-toggle {
  color: #fff;
}

body.mobile-menu-active {
  overflow: hidden;
}
</style>
