<template lang="html">
  <div class="landing">
    <Header/>
    <Beneficios/>
    <MasBeneficios/>
    <Pricing/>
    <Testimonios/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Beneficios from '@/components/Beneficios.vue'
import MasBeneficios from '@/components/MasBeneficios.vue'
import Pricing from '@/components/Pricing.vue'
import Testimonios from '@/components/testimonial.vue'

export default {
  name: 'landing',
  components: {
    Header,
    Beneficios,
    MasBeneficios,
    Pricing,
    Testimonios
  }
}
</script>

<style lang="scss">

</style>
