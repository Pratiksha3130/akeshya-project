<template>
  <section id="clients" class="clients clients">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-4 col-6" v-for="(client, index) in clients" :key="index">
          <img :src="require(`@/assets/${client.src}`)" class="img-fluid" :alt="client.alt" :data-aos="'zoom-in'" :data-aos-delay="client.delay" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ClientSection',
  data() {
    return {
      clients: [
        { src: 'img/clients/client-1.png', alt: 'Client 1', delay: '0' },
        { src: 'img/clients/client-2.png', alt: 'Client 2', delay: '100' },
        { src: 'img/clients/client-3.png', alt: 'Client 3', delay: '200' },
        { src: 'img/clients/client-4.png', alt: 'Client 4', delay: '300' },
        { src: 'img/clients/client-5.png', alt: 'Client 5', delay: '400' },
        { src: 'img/clients/client-6.png', alt: 'Client 6', delay: '500' },
      ],
    };
  },
};
</script>

<style scoped>

</style>
