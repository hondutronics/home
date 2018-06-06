<template lang="html">
  <div class="pricing">
    <h1 class="titulo">
      Paquetes que se ajustan a tus necesidades.
    </h1>
    <div class="row">
      <div class="col-1-of-3">
        <div class="card">
          <div class="card__side card__side--front card__side--front-1">
            <div class="card__picture card__picture--1">
              &nbsp;
            </div>
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--1">Tu Cuarto</span>
            </h4>
            <div class="card__details">
              <ul>
                <li>1 HUB</li>
                <li>2 Focos Inteligentes</li>
                <li>Aplicación movil</li>
                <li>Atencion Personalizada</li>
                <li></li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-1">
            <div class="card__cta">
              <div class="card__price-box">
                <p class="card__price-only">Por tan solo</p>
                <p class="card__price-value">$ 177</p>
              </div>
              <a href="#popup" class="btn btn--white">Comprar</a>
              <a href="#popup" class="btn btn-2 btn--white">Personalizar</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1-of-3">
        <div class="card">
          <div class="card">
            <div class="card__side card__side--front card__side--front-2">
              <div class="card__picture card__picture--2">
                &nbsp;
              </div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--2">Tu Casa</span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>1 HUB</li>
                  <li>2 Focos Inteligentes</li>
                  <li>2 Toma Corrientes Inteligentes</li>
                  <li>Aplicación movil</li>
                  <li>Atencion Personalizada</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-2">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Por tan solo</p>
                  <p class="card__price-value">$ 282</p>
                </div>
                <a href="#popup" class="btn btn--white">Comprar</a>
                <a href="#popup" class="btn btn-2 btn--white">Personalizar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1-of-3">
        <div class="card">
          <div class="card">
            <div class="card__side card__side--front card__side--front-3">
              <div class="card__picture card__picture--3">
                &nbsp;
              </div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--3">Tu Negocio</span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>1 HUB</li>
                  <li>3 Focos Inteligentes</li>
                  <li>3 Toma Corrientes Inteligentes</li>
                  <li>Aplicación movil</li>
                  <li>Atencion Personalizada</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-3">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Por tan solo</p>
                  <p class="card__price-value">$ 378</p>
                </div>
                <a href="#popup" class="btn btn--white">Comprar</a>
                <a href="#popup" class="btn btn-2 btn--white">Personalizar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="u-center-text u-margin-top-huge">
      <a href="#" class="btn btn--green">Crea tu propio paquete</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pricing'
}
</script>

<style lang="scss" scoped>


//Colors
$color-primary : #55c57a;
$color-primary-dark : #28b485;
$color-primary-light : #7ed56f;

$color-grey-light-1 : #f7f7f7;
$color-grey-light-2 : #eee;

$color-gray-dark: #777;
$color-gray-dark-2: #999;
$color-gray-dark-3: #333;


$color-white: #fff;
$color-black: #000;

$color-secondary-light: #ffb900;
$color-secondary-dark: #ff7730;

$color-tertiary-light: #2998ff;
$color-tertiary-dark: #5643fa;

.u-center-text{
  text-align: center;
}

.pricing{
  padding: 20px 100px;
  margin-bottom: 10%;
}

.titulo{
  color: #2f4563;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10%;
  font-size: 3.2rem;
}

.card{

  //Funcionality
  -webkit-perspective: 150rem;
  -webkit-perspective: 150rem;
          perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;
  z-index: 10;
  border: 0px solid white !important;

  &__side{
    height: 52rem;
    -webkit-transition: all .8s ease;
    transition: all .8s ease;
    font-size: 2.5rem;
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    -webkit-box-shadow: 0 1.5rem 4rem rgba($color-black, .15);
            box-shadow: 0 1.5rem 4rem rgba($color-black, .15);

    &--front{
      background-color: $color-white;
    }

    &--back{
      -webkit-transform: rotateY(-180deg);
              transform: rotateY(-180deg);

      &-1{
        background-image: -webkit-gradient(linear, left top, right bottom, from($color-secondary-light), to($color-secondary-dark));
        background-image: linear-gradient(to right bottom, $color-secondary-light, $color-secondary-dark);
      }
      &-2{
        background-image: -webkit-gradient(linear, left top, right bottom, from($color-primary-light), to($color-primary-dark));
        background-image: linear-gradient(to right bottom, $color-primary-light, $color-primary-dark);
      }
      &-3{
        background-image: -webkit-gradient(linear, left top, right bottom, from($color-tertiary-light), to($color-tertiary-dark));
        background-image: linear-gradient(to right bottom, $color-tertiary-light, $color-tertiary-dark);
      }
    }
  }

  &:hover &__side--front{
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
  }

  &:hover &__side--back{
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
  }


  //Front Side Styling
  &__picture{
    background-size: cover;
    height: 23rem;
    background-blend-mode: screen;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    &--1{
      background-image: -webkit-gradient(linear, left top, right bottom, from($color-secondary-light), to($color-secondary-dark)), url(../assets/apartamento2.jpg);
      background-image: linear-gradient(to right bottom, $color-secondary-light, $color-secondary-dark), url(../assets/apartamento2.jpg);
    }
    &--2{
      background-image: -webkit-gradient(linear, left top, right bottom, from($color-primary-light), to($color-primary-dark)), url(../assets/casa.jpeg);
      background-image: linear-gradient(to right bottom, $color-primary-light, $color-primary-dark), url(../assets/casa.jpeg);
    }
    &--3{
      background-image: -webkit-gradient(linear, left top, right bottom, from($color-tertiary-light), to($color-tertiary-dark)), url(../assets/restaurante.jpg);
      background-image: linear-gradient(to right bottom, $color-tertiary-light, $color-tertiary-dark), url(../assets/restaurante.jpg);
    }
  }

  &__heading{
    font-size: 2.8rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: right;
    color: $color-white;
    position: absolute;
    top: 12rem;
    right: 2rem;
    width: 75%;
    z-index: 20;
  }

  &__heading-span{
    padding: 1rem 1.5rem;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    &--1{
      -webkit-background-image: -webkit-gradient(linear, left top, right bottom, from(rgba($color-secondary-light, .85)), to(rgba($color-secondary-dark, .85)));
      -webkit-background-image: linear-gradient(to right bottom, rgba($color-secondary-light, .85), rgba($color-secondary-dark, .85));
      background-image: -webkit-gradient(linear, left top, right bottom, from(rgba($color-secondary-light, .85)), to(rgba($color-secondary-dark, .85)));
      background-image: linear-gradient(to right bottom, rgba($color-secondary-light, .85), rgba($color-secondary-dark, .85));
    }
    &--2{
      -webkit-background-image: -webkit-gradient(linear, left top, right bottom, from(rgba($color-primary-light, .85)), to(rgba($color-primary-dark, .85)));
      -webkit-background-image: linear-gradient(to right bottom, rgba($color-primary-light, .85), rgba($color-primary-dark, .85));
      background-image: -webkit-gradient(linear, left top, right bottom, from(rgba($color-primary-light, .85)), to(rgba($color-primary-dark, .85)));
      background-image: linear-gradient(to right bottom, rgba($color-primary-light, .85), rgba($color-primary-dark, .85));
    }
    &--3{
      -webkit-background-image: -webkit-gradient(linear, left top, right bottom, from(rgba($color-tertiary-light, .85)), to(rgba($color-tertiary-dark, .85)));
      -webkit-background-image: linear-gradient(to right bottom, rgba($color-tertiary-light, .85), rgba($color-tertiary-dark, .85));
      background-image: -webkit-gradient(linear, left top, right bottom, from(rgba($color-tertiary-light, .85)), to(rgba($color-tertiary-dark, .85)));
      background-image: linear-gradient(to right bottom, rgba($color-tertiary-light, .85), rgba($color-tertiary-dark, .85));
    }
  }

  &__details{
    padding: 3rem;

    ul{
      list-style: none;
      width: 100%;
      // margin: 0 auto;
      position: absolute;
      left: 50%;
      top: 50%;
      padding-left: 0;
      padding-right: 0;
      transform: translate(-50%, 0%);
      // text-align: center;
      li{
        text-align: center;
        font-size: 1.5rem;
        padding: 1rem;

        &:not(:last-child){
          border-bottom: 1px solid color-grey-light-2;
        }
      }
    }
  }

  //Back Side Styling
  &__cta{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    text-align: center;

    .btn-2{
      margin-top: 15px;
    }
  }

  &__price-box{
    text-align: center;
    margin-bottom: 8rem;
    color: $color-white;
  }

  &__price-only{
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  &__price-value{
    font-size: 6rem;
    font-weight: 100;
  }


  // @include respond(tab-port){
  //   //Funcionality
  //   height: auto;
  //   border-radius: 3px;
  //   background-color: $color-white;
  //   -webkit-box-shadow: 0 1.5rem 4rem rgba($color-black, .15);
  //           box-shadow: 0 1.5rem 4rem rgba($color-black, .15);
  //   // z-index: 10;
  //
  //   &__side{
  //     height: auto;
  //     font-size: 2.5rem;
  //     position: relative;
  //     box-shadow: none;
  //
  //
  //     &--back{
  //       transform: rotateY(0);
  //
  //       clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
  //     }
  //   }
  //
  //   &__details{
  //     padding: 1rem 3rem;
  //   }
  //
  //   &:hover &__side--front{
  //     -webkit-transform: rotateY(0);
  //             transform: rotateY(0);
  //   }
  //
  //   //Back Side Styling
  //   &__cta{
  //     position: relative;
  //     top: 0;
  //     left: 0;
  //     transform: translate(0);
  //     width: 100%;
  //     padding: 7rem 4rem 4rem 4rem;
  //   }
  //
  //   &__price-box{
  //     margin-bottom: 3rem;
  //   }
  //
  //   &__price-value{
  //     font-size: 5rem;
  //   }
  // }
}





//GRID
$grid-width: 114rem;
$gutter-vertical: 8rem;
$gutter-vertical-small: 6rem;
$gutter-horizontal: 6rem;

.row{
  max-width: $grid-width;
  // background-color: #eee;
  margin: 0 auto;

  // @include respond(tab-port){
  //   max-width: 50rem;
  //   padding: 0 3rem;
  // };

  &:not(:last-child){
    margin-bottom: $gutter-vertical;

    // @include respond(tab-port){
    //   margin-bottom: $gutter-vertical-small;
    // };
  }

  &::after{
    content: "";
    display: table;
    clear: both;
  }

  [class^="col-"]{ //Agarra todos los atributos que inician con col-
    // background-color: orangered;
    float: left;
    // color: black;
    &:not(:last-child){
      margin-right: $gutter-horizontal;

      // @include respond(tab-port){
      //   margin-right: 0;
      //   margin-bottom: $gutter-vertical-small;
      // };
    }

    // @include respond(tab-port){
    //   width: 100% !important;
    // };
  }

  .col-1-of-2{
    width: calc((100% - #{$gutter-horizontal})/2);
  }

  .col-1-of-3{
    width: calc((100% - 2 * #{$gutter-horizontal})/3);
  }

  .col-2-of-3{
    width: calc(2 * ((100% - 2 * #{$gutter-horizontal})/3) + #{$gutter-horizontal});
  }

  .col-1-of-4{
    width: calc((100% - 3 * #{$gutter-horizontal})/4);
  }

  .col-2-of-4{
    width: calc(2 * (100% - 3 * #{$gutter-horizontal})/4  + #{$gutter-horizontal});
  }

  .col-3-of-4{
    width: calc(3 * (100% - 3 * #{$gutter-horizontal})/4  + 2 * #{$gutter-horizontal});
  }

}

</style>
