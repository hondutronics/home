<template lang="html">
  <div class="testimonial">
    <div class="titulo">
      <h3 class="titulo-1">TESTIMONIOS</h3>
      <h1 class="titulo-2">Lo Que Nuestros Clientes Dicen</h1>
    </div>
    <p class="texto">{{texto}}</p>
    <div class="estrellas">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
  data() {
    return {
      texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  }
}
</script>

<style lang="scss" scoped>

.testimonial{
  padding: 20px 100px;

  .titulo{
    text-align: center;

    .titulo-1{
      color: #8594ae;
      font-size: 2rem;
      letter-spacing: 1px;
    }

    .titulo-2{
      color: #2f4563;
      font-weight: bold;
      margin-bottom: 7rem;
      font-size: 3.2rem;
    }
  }

  .texto{
    color: #8594ae;
    font-size: 2.5rem;
    text-align: center;
    padding: 20px 300px;
    quotes: "“" "”" "‘" "’";
    font-style: italic;
    letter-spacing: 0.8px;

    &:before {
      content: open-quote;
    }
    &:after {
      content: close-quote;
    }
  }

  .estrellas{
    color: #ffca2d;
    text-align: center;
    font-size: 2rem;
  }

  .imagen{
    border-radius: 50%;
    border: 1.5px solid white;
  }
}
</style>
