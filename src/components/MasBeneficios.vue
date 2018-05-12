<template lang="html">
  <div class="masBeneficios">
    <div class="beneficio1">
      <div class="imgContainer">
        <img src="../assets/controlCasa.jpg" alt="Hombre con control de su casa" class="imagen imagen-1" >
      </div>
      <div class="beneficio">
        <i class="far fa-lightbulb icono"></i>
        <h2 class="titulo">Ten el control total de tu hogar</h2>
        <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
    <div class="beneficio1 beneficio2">
      <div class="beneficio beneficio-2">
        <i class="fas fa-dollar-sign icono"></i>
        <h2 class="titulo">Reduce tus gastos</h2>
        <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="imgContainer">
        <img src="../assets/recibo.jpg" alt="Hombre asustado por su recibo" class="imagen imagen-1" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MasBeneficios"
}
</script>

<style lang="scss" scoped>
.masBeneficios{
  padding: 20px 100px;

  .beneficio2{
    margin: 80px 0px !important;

    .beneficio-2{
      // right: 50% !important;
    }

  }
  .beneficio1{
    position: relative;
    display: inline-block;
    margin: 250px 0px;
    left: 50%;
    transform: translate(-50%, -50%);

    img{
      width: 25%;
      border-radius: 25%;
      margin-left: 10%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .imgContainer:before {
      content: '';
      position: absolute;
      left: 0px;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 150%;
      background: #f2f8f5;
      z-index: -1;
      border-radius: 0px 50% 50% 0;

      //aplicar breakpoint para hacer mas grande
    }

    .beneficio{
      width: 50%;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(0%, -50%);
      padding: 0px 30px;

      .text{
        letter-spacing: 1px;
        color: #8594ae;
        font-size: 17px;
      }

      .titulo{
        letter-spacing: 1px;
        font-size: 27px;
      }

      .icono{
        font-size: 30px;
        background-color: rgba(green, 0.15);
        color: #00d175;
        padding: 5px;
        border-radius: 10px;
      }
    }
  }
}
</style>
