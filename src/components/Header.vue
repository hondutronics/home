<template lang="html">

  <!-- <ul class="menu">
  <li><a href="#">Hondutronics</a></li>
  <li><a href="#">Beneficios</a></li>
  <li><a href="#">Testimonios</a></li>
  <li><router-link to="shop">Comprar</router-link></li>
  <li><a href="#">Comprar</a></li>
</ul> -->
  <div class="father">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a href="#" class="navbar-brand">Hondutronics</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a href="#" class="nav-link">Beneficios</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Testimonios</a>
          </li>
          <li class="nav-item">
            <router-link to="shop" class="nav-link verde">Comprar</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="header">
      <h1 class="header_title"><span class="header_title--first">Controla tu casa</span> fácil y sin problemas</h1>
      <p class="header_text">La automatización de tu casa al alcance de tu mano. Ofrecemos paquetes de servicios personalizados y ajustados a tus gustos y necesidades.</p>
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

<style lang="scss" scoped>
.father{
  position: relative;
}
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
  padding: 30px 100px;

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

  @media only screen and (max-width: 600px) {

    &{
      height: 90vh;
    }
    &_title{
      width: 100vw;
      font-size: 3.5rem;
      text-align: center;
      padding: 0 5px;

      margin-top: 30px;

      position: absolute;
      left: 0;

      &--first {
        font-weight: normal;
        display: block;
      }
    }

    &_text {
      width: 100vw;
      font-size: 2rem;
      padding: 10px;
      margin: 10px 0px;
      text-align: center;
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0%, -50%);
    }

    Button{
      position: absolute;
      left: 50%;
      top: 80%;
      transform: translate(-50%, -50%);
      font-size: 1.3rem;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 992px){
    &_title{
      width: 100vw;
      font-size: 3.5rem;
      text-align: center;
      padding: 0;
      margin-top: 30px;
      position: absolute;
      left: 0;
    }

    &_text {
      width: 100vw;
      font-size: 2rem;
      padding: 10px;
      text-align: center;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0%, -50%);
    }

    Button{
      position: absolute;
      left: 50%;
      top: 70%;
      transform: translate(-50%, -50%);
    }
  }
}

.navbar{
  // padding: 0% 0% !important;
  background-image: linear-gradient(50deg,rgba(#1a2943, 0.9) -100%,rgba(#141d2d, 1) 100%);
  position: absolute;
  top:0;
  z-index: 100;
  width: 100%;
  font-size: 1.5rem;

  .navbar-brand{
    font-size: 1.5rem;
  }

  .verde {
      color: #00cd6c !important;
      background-color: rgba(green, 0.1);
      border-radius: 10%;
  }
}

// .menu {
//   li {
//     display: inline-block;
//     list-style: outside none none;
//     margin: 0 1.5em;
//     overflow: hidden;
//
//     &:last-child {
//       background-color: rgba(green, 0.1);
//       padding: 2px 20px;
//       border-radius: 10%;
//       a {
//           color: #00cd6c !important;
//       }
//     }
//
//     &:first-child {
//       margin-right: 10%;
//       margin-left: 0;
//     }
//
//     a {
//       padding: 0.3em 0;
//       color: white;
//       position: relative;
//       display: inline-block;
//       letter-spacing: 1px;
//       margin: 0;
//       text-decoration: none;
//       font-size: 1.6rem;
//     }
//   }
// }
@media only screen and (max-width: 600px) {
  .casaCompleta{
    filter: blur(25px);
    left: 50%;
  }
}

@media only screen and (max-width: 768px) {
  .casaCompleta{
    filter: blur(10px);
    left: 50%;
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
    right: -15%;
    transform: translate(0%, -50%);
  }
}
</style>
