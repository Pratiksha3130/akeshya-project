<template>
  <section id="more-services" class="more-services">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Our Process</h2>
        <p>Over the years we’ve evolved a tested method for attaining achievement for each one of our clients.</p>
      </div>
      <div class="row">
        <div class="col-md-6 d-flex align-items-stretch" v-for="(process, index) in processes" :key="index">
          <div class="card" :style="{ backgroundImage: 'url(' + process.image + ')' }" data-aos="fade-up" :data-aos-delay="process.delay">
            <div class="card-body">
              <h5 class="card-title"><a href="">{{ process.title }}</a></h5>
              <p class="card-text">{{ process.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MoreServicesSection',
  data() {
    return {
      processes: [
        { 
            title: '1. Planning', 
            description: 'We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we\'re all on the same page.', 
            image: 'assets/img/more-services-1.jpg', 
            delay: 100 
        },
        { 
            title: '2. Design', 
            description: 'We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.', 
            image: 'assets/img/more-services-2.jpg', 
            delay: 200 
        },
        { 
            title: '3. Development', 
            description: 'We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.', 
            image: 'assets/img/more-services-3.jpg', 
            delay: 300 
        },
        { 
            title: '4. Marketing', 
            description: 'We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.', 
            image: 'assets/img/more-services-4.jpg', 
            delay: 400 
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
