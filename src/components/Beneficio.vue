<template lang="html">
  <div class="beneficio">
    <img src="../assets/check2.svg" alt="Check Mark" class="imagen">
    <h2 class="titulo">{{titulo}}</h2>
    <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
</template>

<script>
export default {
  name: "Beneficio",
  props: {
    titulo: String
  }
}
</script>

<style lang="scss" scoped>
  .beneficio{
    margin: 50px 0px;
    width: 25%;

    .imagen {
      width: 30px;
    }

    .titulo{
      font-size: 20px;
      color: #2f4563;
      font-weight: normal;
    }

    .text{
      color: #97a4ba;
      font-size: 18px;
      letter-spacing: .8px;
    }
  }
</style>
