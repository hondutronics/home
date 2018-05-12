<template lang="html">
  <div class="beneficios">
    <h1 class="titulo">Nuevo estilo de vida</h1>
    <div class="beneficios__lista">
      <Beneficio class="beneficio" titulo="Paquetes personalizados"></Beneficio>
      <Beneficio class="beneficio" titulo="Control Total"></Beneficio>
      <Beneficio class="beneficio" titulo="Tercer titulo"></Beneficio>
    </div>
  </div>
</template>

<script>
import Beneficio from './Beneficio.vue';
export default {
  name: 'Beneficios',
  components: {
    Beneficio
  }
}
</script>

<style scoped lang="scss">
.beneficios {
  padding: 20px 100px;

  .titulo {
    color: #2f4563;
    font-weight: bold;
    font-size: 3.2rem;
  }

  &__lista{
    & :not(:last-child){
      margin-right: 12%;
    }

    .beneficio{
      display: inline-block;
    }
  }
}
</style>
