<template lang="html">
  <!-- <div class="boton"> -->
    <button type="button" name="button" class="btn btn--green">{{msg}}</button>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'Button',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
.btn{

  &,
  &:link,
  &:visited{
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.9rem 3.2rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all .2s;
    position: relative;
    font-size: 1.6rem;
    font-weight: bold;
    //Change for the button element
    border: none;
    cursor: pointer;
  }


  &:hover{
    // transform: translateY(-0.3rem);
    box-shadow: 0 0.7rem 1.5rem rgba(black, .2);

    &::after{
      // transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active,
  &:focus{
    outline: none;
    // transform: translateY(-0.1rem);
    // box-shadow: 0 0.5rem 1rem rgba(black, 0.2);
  }

  // &::after{
  //   content: "";
  //   display: inline-block;
  //   height: 100%;
  //   width: 100%;
  //   border-radius: 10rem;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   z-index: -1;
  //   transition: all .4s;
  // }

  &--white{
    background-color: white;
    color: #777;
    &::after{
      background-color: white;
    }
  }
  &--green{
    background-color: #00cd6c;
    color: white;
    &::after{
      background-color: #00cd6c;
    }
  }

  &--animated{
    animation: moveInBottom 1s ease-out .75s;
    animation-fill-mode: backwards;
  }
}

.btn-text{
  &:link,
  &:visited{
    font-size: 12px;
    // color: #2998ff;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid #2998ff;
    padding: 3px;
    transition: all .2s;
  }

  &:hover{
    // background-color: #2998ff;
    color: white;
    box-shadow: 0 1rem 2rem rgba(black, .15);
    transform: translateY(-2px);
  }

  &:active{
    box-shadow: 0 .5rem 1rem rgba(black, .15);
    transform: translateY(0);
  }
}
</style>
