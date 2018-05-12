<template lang="html">
  <div class="header">
    <ul class="menu">
      <li><a href="#">Hondutronics</a></li>
      <li><a href="#">Beneficios</a></li>
      <li><a href="#">Testimonios</a></li>
      <li><a href="#">Comprar</a></li>
    </ul>
    <h1 class="header_title"><span class="header_title--first">Controla tu casa</span> fácil y sin problemas</h1>
    <p class="header_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Button msg="Comprar Ahora"/>
    <div class="casaCompleta">
      <div class="ring ring--1"></div>
      <div class="ring ring--2"></div>
      <div class="ring ring--3"></div>
      <img src="../assets/house.svg" alt="Imagen de Casa" class="casa">
      <img src="../assets/celular.svg" alt="Celular" class="iconoCasa casaCompleta--icono-1">
      <img src="../assets/bombillo.svg" alt="Bombillo inteligente" class="iconoCasa casaCompleta--icono-2">
      <img src="../assets/seguridad.svg" alt="Seguridad" class="iconoCasa casaCompleta--icono-3">
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  name: 'Header',
  components: {
    Button
  }
}
</script>

<style lang="scss">
  .header {
    height: 60vh;
    background-image: linear-gradient(50deg,rgba(#1a2943, 0.9) -100%,rgba(#141d2d, 1) 100%);
    // background-image: url('../assets/header.svg');
    background-color: black;
    background-size: cover;
    background-position: top;
    position: relative;
    -webkit-clip-path: ellipse(100% 55% at 48% 44%);
    clip-path: ellipse(100% 55% at 48% 44%);
    color: white;
    padding: 20px 100px;

    &_title{
      width: 45%;
      padding: 10px;
      padding-bottom: 25px;
      font-size: 4rem;
      &--first {
        font-weight: lighter;
        display: block;
        padding-bottom: 20px;
      }
    }

    &_text {
      width: 50%;
      font-size: 2.24rem;
      padding: 10px;
    }
  }

  .menu {
    li {
      display: inline-block;
      list-style: outside none none;
      margin: 0 1.5em;
      overflow: hidden;

      &:last-child {
        background-color: rgba(green, 0.1);
        padding: 2px 20px;
        border-radius: 10%;
        a {
            color: #00cd6c !important;
        }
      }

      &:first-child {
        margin-right: 10%;
        margin-left: 0;
      }

      a {
        padding: 0.3em 0;
        color: white;
        position: relative;
        display: inline-block;
        letter-spacing: 1px;
        margin: 0;
        text-decoration: none;
        font-size: 1.6rem;
      }
    }
  }

  .casaCompleta{
    position: absolute;
    // background-color: black;
    z-index: -4;
    //filter: blur(1px);
    top: 50%;
    width: 300px;
    right: 10%;
    transform: translate(-50%, -50%);
    height: 30%;

    .ring {
      position: absolute;
      height: 150px;
      width: 150px;
      border: 1px solid rgba(white, 0.3);
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &--1{
        padding: 30%;
      }

      &--2{
        padding: 55%;
      }

      &--3{
        padding: 80%;
      }
    }

    .casa {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 100%;

    }

    .iconoCasa {
      position: absolute;
      background-color: white;
      border-radius: 50%;
      padding: 8px;
    }

    &--icono-1{
      top: -100px;
      left: 50%;
      transform: translate(-50%, 0%);
      width: 12%;
    }

    &--icono-2{
      width: 12%;
      top: 15%;
      left: -36%;
    }

    &--icono-3{
      width: 12%;
      bottom: -72%;
      right: -50%;
      transform: translate(0%, -50%);
    }
  }
</style>
