<template lang="html">
  <div class="shop">

    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
    <div id="wrapper">
      <div class="cart-icon-top">
      </div>

      <div class="cart-icon-bottom">
      </div>

      <div id="checkout">
        CHECKOUT
        {{filteredCategories}}
      </div>

      <div id="header">
        <ul>
          <li><a href="">Hondutronics</a></li>
          <li><a href="">Home</a></li>
        </ul>
      </div>

      <div id="sidebar">
        <h3>CARRITO</h3>
        <div id="cart">
          <span class="empty">Carrito vacío.</span>
        </div>

        <h3>CATEGORIAS</h3>
        <label class="container">Switches y Botoneras
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <label class="container">Personalizado
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <label class="container">Receptores
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <label class="container">Controladores
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <label class="container">Comunicación
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <label class="container">Clima
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <label class="container">Sensores
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <label class="container">Seguridad
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <label class="container">Riego
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <label class="container">Kits
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <label class="container">Controles Remoto
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <label class="container">Audio y Video
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <label class="container">Aplicaciones
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <label class="container">Accesos
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
  </div>

  <div id="grid-selector">
    <div id="grid-menu">
      Vista:
      <ul>
        <li class="largeGrid"><a href=""></a></li>
        <li class="smallGrid"><a class="active" href=""></a></li>
      </ul>
    </div>
  </div>

  <div id="grid">
    <div  v-for="categoria in itemsFiltrados" :key="categoria.key">
      <div class="product" v-for="producto in categoria.articulos" :key="producto.key">
        <div class="info-large">
          <h4>{{producto.nombre}}</h4>
          <div class="sku">
            Código: <strong>419682</strong>
          </div>
          <div class="price-big">
            <!-- SI HAY DESCUENTO AGREGAR LO DE ABAJO -->
            <!-- <span>$43</span>$ {{producto.precio}} -->
            $ {{producto.precio}}
          </div>
          <button class="add-cart-large">Add To Cart</button>
        </div>
        <div class="make3D">
          <div class="product-front">
            <div class="shadow"></div>
            <img :src="producto.imagen" alt="" />
            <div class="image_overlay"></div>
            <div class="add_to_cart">Agregar al carrito</div>
            <div class="view_gallery">Ver galeria</div>
            <div class="stats">
              <div class="stats-container">
                <span class="product_price">$ {{producto.precio}}</span>
                <span class="product_name">{{producto.nombre}}</span>
                <p>{{producto.descripcion}}</p>
              </div>
            </div>
          </div>
          <div class="product-back">
            <div class="shadow"></div>
            <div class="carousel">
              <ul class="carousel-container">
                <li v-for="alternative in producto.alternativa" :key="alternative" ><img :src="alternative" alt=""></li>
                <!-- <li><img :src="producto.imagen" alt=""></li>
                <li><img :src="producto.imagen" alt=""></li>
                <li><img :src="producto.imagen" alt=""></li> -->
              </ul>
              <div class="arrows-perspective">
                <div class="carouselPrev">
                  <div class="y"></div>
                  <div class="x"></div>
                </div>
                <div class="carouselNext">
                  <div class="y"></div>
                  <div class="x"></div>
                </div>
              </div>
            </div>
            <div class="flip-back">
              <div class="cy"></div>
              <div class="cx"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>


import $ from 'jquery'
import _ from 'lodash'

export default {
  name: 'Shop',
  components: {

  },
  data(){
    return {
      items:{
        hub: {
          categoria: "controladores",
          key: "CATHUB",
          articulos:[
            {
              imagen: require('../assets/Hub1.png'),
              alternativa:[
                require('../assets/Hub1.png'),
                require('../assets/Hub2.png'),
                require('../assets/hub3.jpg')
              ],
              nombre: 'HUB',
              precio: 91.38,
              key: "ARTHUB001",
              descripcion:"Interfase entre WiFi y red eléctrica para envio de comandos Insteon. Se requiere para controlar Insteon desde: dispositivos inteligentes, computadora, internet."
            }
          ]
        },
        bombillos: {
          categoria: "Bombillos",
          key: "CATBOM",
          articulos: [
            {
              imagen: require('../assets/bulb1.png'),
              nombre: "Bombillo 1",
              precio: 37.71,
              key: "ARTBOM001",
              alternativa:[
                require('../assets/bulb1.png')
              ],
              descripcion:"Foco Led, se puede controlar desde cualquier equipo INSTEON, se puede dimear, solo consume 8W e ilumina como un foco de 60W."
            },
            {
              imagen: require('../assets/led2-1.png'),
              nombre: "Bombillo 2",
              precio: 37.71,
              key: "ARTBOM002",
              alternativa:[
                require('../assets/led2-1.png'),
                require('../assets/led2-2.png'),
                require('../assets/led2-3.png')
              ],
              descripcion:"Foco Led, se puede controlar desde cualquier equipo INSTEON, se puede dimear, solo consume 12W e ilumina como un foco de 75W."
            }
          ]
        }
      },
      itemsFiltrados:{

      },
      // filtrosActivados: ["controladores", "categoria2"]
      filtrosActivados: []
    }
  },computed: {
    filteredCategories(){
      // this.itemsFiltrados = {};
      return _.pickBy(this.items, (item) => {
        if(this.filtrosActivados.length === 0){
          console.log(`Primero: ${item.categoria}`);
          // this.itemsFiltrados = {...this.itemsFiltrados, item};
          console.log(`Items Filtrados: ${this.itemsFiltrados}`)
          return item;
        }else{
          for(let categoria in this.filtrosActivados){
            // console.log(`Segundo ${this.filtrosActivados[categoria]}`);
            if(this.filtrosActivados[categoria] === item.categoria){
              // console.log(`Item: ${item.categoria}`);
              return item;
            }
          }
        }
        // console.log(item);
        // return item;
      });
    }
  },mounted(){
    // $(document).ready(function(){
    $(".cart-icon-bottom").click(function(){
      alert("simon");
    })
    // }

    $(".largeGrid").click(function(){
      $(this).find('a').addClass('active');
      $('.smallGrid a').removeClass('active');

      $('.product').addClass('large').each(function(){
      });
      setTimeout(function(){
        $('.info-large').show();
      }, 200);
      setTimeout(function(){

        $('.view_gallery').trigger("click");
      }, 400);

      return false;
    });

    $(".smallGrid").click(function(){
      $(this).find('a').addClass('active');
      $('.largeGrid a').removeClass('active');

      $('div.product').removeClass('large');
      $(".make3D").removeClass('animate');
      $('.info-large').fadeOut("fast");
      setTimeout(function(){
        $('div.flip-back').trigger("click");
      }, 400);
      return false;
    });

    $(".smallGrid").click(function(){
      $('.product').removeClass('large');
      return false;
    });

    $('.product').each(function(i, el){
      // Lift card and show stats on Mouseover
      $(el).find('.make3D').hover(function(){
        $(this).parent().css('z-index', "20");
        $(this).addClass('animate');
        $(this).find('div.carouselNext, div.carouselPrev').addClass('visible');
      }, function(){
        $(this).removeClass('animate');
        $(this).parent().css('z-index', "1");
        $(this).find('div.carouselNext, div.carouselPrev').removeClass('visible');
      });

      // Flip card to the back side
      $(el).find('.view_gallery').click(function(){

        $(el).find('div.carouselNext, div.carouselPrev').removeClass('visible');
        $(el).find('.make3D').addClass('flip-10');
        setTimeout(function(){
          $(el).find('.make3D').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo( 80 , 1, function(){
            $(el).find('.product-front, .product-front div.shadow').hide();
          });
        }, 50);

        setTimeout(function(){
          $(el).find('.make3D').removeClass('flip90').addClass('flip190');
          $(el).find('.product-back').show().find('div.shadow').show().fadeTo( 90 , 0);
          setTimeout(function(){
            $(el).find('.make3D').removeClass('flip190').addClass('flip180').find('div.shadow').hide();
            setTimeout(function(){
              $(el).find('.make3D').css('transition', '100ms ease-out');
              $(el).find('.cx, .cy').addClass('s1');
              setTimeout(function(){$(el).find('.cx, .cy').addClass('s2');}, 100);
              setTimeout(function(){$(el).find('.cx, .cy').addClass('s3');}, 200);
              $(el).find('div.carouselNext, div.carouselPrev').addClass('visible');
            }, 100);
          }, 100);
        }, 150);
      });

      // Flip card back to the front side
      $(el).find('.flip-back').click(function(){

        $(el).find('.make3D').removeClass('flip180').addClass('flip190');
        setTimeout(function(){
          $(el).find('.make3D').removeClass('flip190').addClass('flip90');

          $(el).find('.product-back div.shadow').css('opacity', 0).fadeTo( 100 , 1, function(){
            $(el).find('.product-back, .product-back div.shadow').hide();
            $(el).find('.product-front, .product-front div.shadow').show();
          });
        }, 50);

        setTimeout(function(){
          $(el).find('.make3D').removeClass('flip90').addClass('flip-10');
          $(el).find('.product-front div.shadow').show().fadeTo( 100 , 0);
          setTimeout(function(){
            $(el).find('.product-front div.shadow').hide();
            $(el).find('.make3D').removeClass('flip-10').css('transition', '100ms ease-out');
            $(el).find('.cx, .cy').removeClass('s1 s2 s3');
          }, 100);
        }, 150);

      });

      // this.makeCarousel(el);
      function makeCarousel(el){
        var carousel = $(el).find('.carousel ul');
        var carouselSlideWidth = 315;
        var carouselWidth = 0;
        var isAnimating = false;
        var currSlide = 0;
        $(carousel).attr('rel', currSlide);

        $(carousel).find('li').each(function(){
          carouselWidth += carouselSlideWidth;
        });
        $(carousel).css('width', carouselWidth);

        $(el).find('div.carouselNext').on('click', function(){
          var currentLeft = Math.abs(parseInt($(carousel).css("left")));
          var newLeft = currentLeft + carouselSlideWidth;
          if(newLeft == carouselWidth || isAnimating === true){return;}
          $(carousel).css({'left': "-" + newLeft + "px",
          "transition": "300ms ease-out"
        });
        isAnimating = true;
        currSlide++;
        $(carousel).attr('rel', currSlide);
        setTimeout(function(){isAnimating = false;}, 300);
      });

      $(el).find('div.carouselPrev').on('click', function(){
        var currentLeft = Math.abs(parseInt($(carousel).css("left")));
        var newLeft = currentLeft - carouselSlideWidth;
        if(newLeft < 0  || isAnimating === true){return;}
        $(carousel).css({'left': "-" + newLeft + "px",
        "transition": "300ms ease-out"
      });
      isAnimating = true;
      currSlide--;
      $(carousel).attr('rel', currSlide);
      setTimeout(function(){isAnimating = false;}, 300);
    });

    $('.add_to_cart').click(function(){
      var productCard = $(this).parent();
      var position = productCard.offset();
      var productImage = $(productCard).find('img').get(0).src;
      var productName = $(productCard).find('.product_name').get(0).innerHTML;

      $("body").append('<div class="floating-cart"></div>');
      var cart = $('div.floating-cart');
      productCard.clone().appendTo(cart);
      $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');
      setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
      setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>$39</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";

        $("#cart .empty").hide();
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);

        $("#cart .cart-item").last()
        .addClass("flash")
        .find(".delete-item").click(function(){
          $(this).parent().fadeOut(300, function(){
            $(this).remove();
            if($("#cart .cart-item").size() == 0){
              $("#cart .empty").fadeIn(500);
              $("#checkout").fadeOut(500);
            }
          })
        });
        setTimeout(function(){
          $("#cart .cart-item").last().removeClass("flash");
        }, 10 );

      }, 1000);
    });
  }

  makeCarousel(el);
});


$('.add-cart-large').each(function(i, el){
  $(el).click(function(){
    var carousel = $(this).parent().parent().find(".carousel-container");
    var img = carousel.find('img').eq(carousel.attr("rel"))[0];
    var position = $(img).offset();

    var productName = $(this).parent().find('h4').get(0).innerHTML;

    $("body").append('<div class="floating-cart"></div>');
    var cart = $('div.floating-cart');
    $("<img src='"+img.src+"' class='floating-image-large' />").appendTo(cart);

    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);

    setTimeout(function(){
      $('div.floating-cart').remove();
      $("body").removeClass("MakeFloatingCart");


      var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+img.src+"' alt='' /></div><span>"+productName+"</span><strong>$39</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";

      $("#cart .empty").hide();
      $("#cart").append(cartItem);
      $("#checkout").fadeIn(500);

      $("#cart .cart-item").last()
      .addClass("flash")
      .find(".delete-item").click(function(){
        $(this).parent().fadeOut(300, function(){
          $(this).remove();
          if($("#cart .cart-item").size() == 0){
            $("#cart .empty").fadeIn(500);
            $("#checkout").fadeOut(500);
          }
        })
      });
      setTimeout(function(){
        $("#cart .cart-item").last().removeClass("flash");
      }, 10 );

    }, 1000);


  });
});



}

}

</script>

<style lang="css" scoped>
* { margin: 0px; padding: 0px; }
body {
  font-family: "Open Sans", sans-serif;
}
</style>


<style lang="scss">
// .header{
//   height: 100px;
// }

// .navbar-brand,
// .navbar-toggler-icon,
// .nav-link{
//   color: white !important;
//   font-size: 2rem;
// }
//
// .articulos{
//   height: 350px;
//   width: 250px;
//   border: 1px solid rgba(black, 0.1);
//   text-align: center;
//
//   img{
//     width: 100px;
//   }
//
//   Button{
//     font-size: .5rem;
//   }

/*	Reset & General
---------------------------------------------------------------------- */

#wrapper{
  overflow: hidden;
  height: 1153px;
  // width: 1643px;
  background:#fff;
}
#header{
  height:92px;
  background:#fff;
  border-bottom:1px solid #eee;
}
#header ul{padding:33px 0 0 45px;}
#header li{
  list-style:none;
  float:left;
  margin-right:30px;
}
#header li a{
  font-weight:700;
  color:#333;
  font-size:14px;
  text-decoration:none;
  text-transform:uppercase;
  letter-spacing:1px;
}
#headerli a:hover{
  color:#000;
  cursor:pointer;
}
#grid-selector{
  height: 10px;
  width: 1291px;
  padding: 40px 0 40px 30px;
  float: left;
  color: #5d5f68;
  font-size: 14px;
}
#grid-menu{
  float:right;
  width:105px;
}
#grid-menu ul{
  width: 65px;
  float: right;
  position: relative;
  top: -1px;}
  #grid-menu li{
    float:right;
    width:25px;
    height:25px;
    list-style:none;
  }
  #grid-menu li a{
    display:block;
    width:25px;
    height:25px;
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/grid-menu.png") 0 0  no-repeat;
  }
  #grid-menu li.smallGrid{margin-right:7px;}
  #grid-menu li.smallGrid a{background-position:0 -33px;}
  #grid-menu li.largeGrid a{background-position:-37px 0;}

  #grid-menu li.smallGrid a.active{background-position:0 0;}
  #grid-menu li.largeGrid a.active{background-position:-37px -33px;}


  #grid{
    // overflow-x: hidden;
    // width: 100%;
    width: 1335px;
    position: absolute;
    left: 340px;
    height: 1200px;
    top: 180px;
  }
  #sidebar{
    float:left;
    background:#fff;
    width:290px;
    padding:13px 0 0 45px;
    height:1400px;
    border-right:1px solid #eee;
  }
  #sidebar h3{
    color:#262626;
    text-transform:uppercase;
    font-size:14px;
    font-weight:700;
    padding:35px 0 10px 0;
    letter-spacing:1px;
    clear:both;
  }
  #cart{padding:0px;}
  #cart .empty{
    font-style:italic;
    color:#a0a3ab;
    font-size:14px;
    letter-spacing:1px;
  }



  #sidebar img{margin-top:6px;}

  .product{
    position: relative;
    perspective: 800px;
    width:306px;
    height:340px;
    transform-style: preserve-3d;
    transition: transform 5s;
    float:left;
    margin-right: 23px;
    -webkit-transition: width 500ms ease-in-out;
    -moz-transition: width 500ms ease-in-out;
    -ms-transition: width 500ms ease-in-out;
    -o-transition: width 500ms ease-in-out;
    transition: width 500ms ease-in-out;
  }
  .product-front img{width:100%;}
  .product-front, .product-back{
    width:315px;
    height:480px;
    background:#fff;
    position:absolute;
    left:-5px;
    top:-5px;
    -webkit-transition: all 100ms ease-out;
    -moz-transition: all 100ms ease-out;
    -o-transition: all 100ms ease-out;
    transition: all 100ms ease-out;
  }
  .product-back{
    display:none;
    transform: rotateY( 180deg );
  }
  .make3D.animate .product-back,
  .make3D.animate .product-front,
  div.large .product-back{
    top:0px;
    left:0px;
    -webkit-transition: all 100ms ease-out;
    -moz-transition: all 100ms ease-out;
    -o-transition: all 100ms ease-out;
    transition: all 100ms ease-out;
  }
  .make3D{
    width:305px;
    height:470px;
    position:absolute;
    top:10px;
    left:10px;
    overflow:hidden;
    transform-style: preserve-3d;
    -webkit-transition:  100ms ease-out;
    -moz-transition:  100ms ease-out;
    -o-transition:  100ms ease-out;
    transition:  100ms ease-out;
  }
  div.make3D.flip-10{
    -webkit-transform: rotateY( -10deg );
    -moz-transform: rotateY( -10deg );
    -o-transform: rotateY( -10deg );
    transform: rotateY( -10deg );
    transition:  50ms ease-out;
  }
  div.make3D.flip90{
    -webkit-transform: rotateY( 90deg );
    -moz-transform: rotateY( 90deg );
    -o-transform: rotateY( 90deg );
    transform: rotateY( 90deg );
    transition:  100ms ease-in;
  }
  div.make3D.flip190{
    -webkit-transform: rotateY( 190deg );
    -moz-transform: rotateY( 190deg );
    -o-transform: rotateY( 190deg );
    transform: rotateY( 190deg );
    transition:  100ms ease-out;
  }
  div.make3D.flip180{
    -webkit-transform: rotateY( 180deg );
    -moz-transform: rotateY( 180deg );
    -o-transform: rotateY( 180deg );
    transform: rotateY( 180deg );
    transition:  150ms ease-out;
  }
  .make3D.animate{
    top:5px;
    left:5px;
    width:315px;
    height:480px;
    box-shadow:0px 5px 31px -1px rgba(0, 0, 0, 0.15);
    -webkit-transition:  100ms ease-out;
    -moz-transition:  100ms ease-out;
    -o-transition:  100ms ease-out;
    transition:  100ms ease-out;
  }
  div.large .make3D{
    top:0;
    left:0;
    width:315px;
    height:480px;
    -webkit-transition:  300ms ease-out;
    -moz-transition:  300ms ease-out;
    -o-transition:  300ms ease-out;
    transition:  300ms ease-out;
  }
  .large div.make3D{box-shadow:0px 5px 31px -1px rgba(0, 0, 0, 0);}
  .large div.flip-back{display:none;}
  .stats-container{
    background:#fff;
    position:absolute;
    top:382px;
    left:0;
    width: 252px;
    height: 300px;
    padding: 24px 40px 35px 32px;
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
  }
  .make3D.animate .stats-container{
    top:265px;
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
  }
  .stats-container .product_name{
    font-size: 15px;
    color: #393c45;
    font-weight: 700;
  }
  .stats-container p{
    font-size:15px;
    color:#b1b1b3;
    padding:2px 0 20px 0;
  }
  .stats-container .product_price{
    float:right;
    color:#00cd6c;
    font-size:22px;
    font-weight:600;
  }
  .image_overlay{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:#00cd6c;
    opacity:0;
  }
  .make3D.animate .image_overlay{
    opacity:0.7;
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
  }
  .product-options{
    padding:0;
  }
  .product-options strong{
    font-weight:700;
    color:#393c45;
    font-size:14px;
  }
  .product-options span{
    color:#969699;
    font-size:14px;
    display:block;
    margin-bottom:8px;
  }
  .add_to_cart{
    position:absolute;
    top:80px;
    left:50%;
    width:152px;
    font-size:15px;
    margin-left:-78px;
    border:2px solid #fff;
    color:#fff;
    text-align:center;
    text-transform:uppercase;
    font-weight:700;
    padding:10px 0;
    opacity:0;
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
  }
  .add_to_cart:hover{
    background:#fff;
    color:#00cd6c;
    cursor:pointer;

  }
  .make3D.animate .add_to_cart{
    opacity:1;
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
  }
  .view_gallery{
    position:absolute;
    top:144px;
    left:50%;
    width:152px;
    font-size:15px;
    margin-left:-78px;
    border:2px solid #fff;
    color:#fff;
    text-align:center;
    text-transform:uppercase;
    font-weight:700;
    padding:10px 0;
    opacity:0;
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
  }
  .view_gallery:hover{
    background:#fff;
    color:#00cd6c;
    cursor:pointer;

  }
  .make3D.animate .view_gallery{
    opacity:1;
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
  }


  div.shadow{
    width:335px;height:520px;
    opacity:0;
    position:absolute;
    top:0;
    left:0;
    z-index:3;
    display:none;
    background: -webkit-linear-gradient(left,rgba(0,0,0,0.1),rgba(0,0,0,0.2));
    background: -o-linear-gradient(right,rgba(0,0,0,0.1),rgba(0,0,0,0.2));
    background: -moz-linear-gradient(right,rgba(0,0,0,0.1),rgba(0,0,0,0.2));
    background: linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.2));
  }
  .product-back div.shadow{
    z-index:10;
    opacity:1;
    background: -webkit-linear-gradient(left,rgba(0,0,0,0.2),rgba(0,0,0,0.1));
    background: -o-linear-gradient(right,rgba(0,0,0,0.2),rgba(0,0,0,0.1));
    background: -moz-linear-gradient(right,rgba(0,0,0,0.2),rgba(0,0,0,0.1));
    background: linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.1));
  }
  .flip-back{
    position:absolute;
    top:20px;
    right:20px;
    width:30px;
    height:30px;
    cursor:pointer;
  }
  .cx, .cy{
    background:#d2d5dc;
    position:absolute;
    width:0px;
    top:15px;
    right:15px;
    height:3px;
    -webkit-transition: all 250ms ease-in-out;
    -moz-transition: all 250ms ease-in-out;
    -ms-transition: all 250ms ease-in-out;
    -o-transition: all 250ms ease-in-out;
    transition: all 250ms ease-in-out;
  }
  .flip-back:hover .cx, .flip-back:hover .cy{
    background:#979ca7;
    -webkit-transition: all 250ms ease-in-out;
    -moz-transition: all 250ms ease-in-out;
    -ms-transition: all 250ms ease-in-out;
    -o-transition: all 250ms ease-in-out;
    transition: all 250ms ease-in-out;
  }
  .cx.s1, .cy.s1{
    right:0;
    width:30px;
    -webkit-transition: all 100ms ease-out;
    -moz-transition: all 100ms ease-out;
    -ms-transition: all 100ms ease-out;
    -o-transition: all 100ms ease-out;
    transition: all 100ms ease-out;
  }
  .cy.s2{
    -ms-transform: rotate(50deg);
    -webkit-transform: rotate(50deg);
    transform: rotate(50deg);
    -webkit-transition: all 100ms ease-out;
    -moz-transition: all 100ms ease-out;
    -ms-transition: all 100ms ease-out;
    -o-transition: all 100ms ease-out;
    transition: all 100ms ease-out;
  }
  .cy.s3{
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all 100ms ease-out;
    -moz-transition: all 100ms ease-out;
    -ms-transition: all 100ms ease-out;
    -o-transition: all 100ms ease-out;
    transition: all 100ms ease-out;
  }
  .cx.s1{
    right:0;
    width:30px;
    -webkit-transition: all 100ms ease-out;
    -moz-transition: all 100ms ease-out;
    -ms-transition: all 100ms ease-out;
    -o-transition: all 100ms ease-out;
    transition: all 100ms ease-out;
  }
  .cx.s2{
    -ms-transform: rotate(140deg);
    -webkit-transform: rotate(140deg);
    transform: rotate(140deg);
    -webkit-transition: all 100ms ease-out;
    -moz-transition: all 100ms ease-out;
    -ms-transition: all 100ease-out;
    -o-transition: all 100ms ease-out;
    transition: all 100ms ease-out;
  }
  .cx.s3{
    -ms-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    -webkit-transition: all 100ease-out;
    -moz-transition: all 100ms ease-out;
    -ms-transition: all 100ms ease-out;
    -o-transition: all 100ms ease-out;
    transition: all 100ms ease-out;
  }
  .carousel{
    width:315px;
    height:500px;
    overflow:hidden;
    position:relative;
  }
  .carousel ul{
    position:absolute;
    top:0;
    left:0;
  }
  .carousel li{
    width:315px;
    height:500px;
    float:left;
    overflow:hidden;
  }
  .carousel img{
    margin-top: -22px;
    width: 110%;
  }
  .arrows-perspective{
    width:315px;
    height:55px;
    position: absolute;
    top: 218px;
    transform-style: preserve-3d;
    transition: transform 5s;
    perspective: 335px;
  }
  .carouselPrev, .carouselNext{
    width: 50px;
    height: 55px;
    background: #ccc;
    position: absolute;
    top:0;
    transition: all 200ms ease-out;
    opacity:0.9;
    cursor:pointer;
  }
  .carouselNext{
    top:0;
    right: -26px;
    -webkit-transform: rotateY( -117deg );
    -moz-transform: rotateY( -117deg );
    -o-transform: rotateY( -117deg );
    transform: rotateY( -117deg );
    transition: all 200ms ease-out;

  }
  .carouselNext.visible{
    right:0;
    opacity:0.8;
    background: #fff;
    -webkit-transform: rotateY( 0deg );
    -moz-transform: rotateY( 0deg );
    -o-transform: rotateY( 0deg );
    transform: rotateY( 0deg );
    transition: all 200ms ease-out;
  }
  .carouselPrev{
    left:-26px;
    top:0;
    -webkit-transform: rotateY( 117deg );
    -moz-transform: rotateY( 117deg );
    -o-transform: rotateY( 117deg );
    transform: rotateY( 117deg );
    transition: all 200ms ease-out;

  }
  .carouselPrev.visible{
    left:0;
    opacity:0.8;
    background: #fff;
    -webkit-transform: rotateY( 0deg );
    -moz-transform: rotateY( 0deg );
    -o-transform: rotateY( 0deg );
    transform: rotateY( 0deg );
    transition: all 200ms ease-out;
  }
  .carousel .x, .carousel .y{
    height:2px;
    width:15px;
    background:#00cd6c;
    position:absolute;
    top:31px;
    left:17px;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .carousel .x{
    -ms-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    top:21px;
  }
  .carousel .carouselNext .x{
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .carousel .carouselNext .y{
    -ms-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }
  div.floating-cart{
    position:absolute;
    top:0;
    left:0;
    width:315px;
    height:480px;
    background:#fff;
    z-index:200;
    overflow:hidden;
    box-shadow:0px 5px 31px -1px rgba(0, 0, 0, 0.15);
    display:none;
  }

  div.floating-cart .stats-container{display:none;}
  div.floating-cart .product-front{width:100%; top:0; left:0;}
  div.floating-cart.moveToCart{
    left: 75px !important;
    top: 55px !important;
    width: 47px;
    height: 47px;
    -webkit-transition: all 800ms ease-in-out;
    -moz-transition: all 800ms ease-in-out;
    -ms-transition: all 800ms ease-in-out;
    -o-transition: all 800ms ease-in-out;
    transition: all 800ms ease-in-out;
  }
  body.MakeFloatingCart div.floating-cart.moveToCart{
    left: 90px !important;
    top: 140px !important;
    width: 21px;
    height: 22px;
    box-shadow:0px 5px 31px -1px rgba(0, 0, 0, 0);
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -ms-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
  }
  div.cart-icon-top{
    position:absolute;
    background:#fff url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/cart.png") 0 -3px no-repeat;
    margin:0;
    width:21px;
    height:3px;
    z-index:1;
    top: 135px;
    left: 120px;
  }
  div.cart-icon-bottom{
    position:absolute;
    background:#fff url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/cart.png") 0 -3px no-repeat;
    margin:0;
    width:21px;
    height:19px;
    z-index:1;
    top: 138px;
    left: 120px;
  }
  body.MakeFloatingCart div.cart-icon-top{z-index:30;}
  body.MakeFloatingCart div.cart-icon-bottom{z-index:300;}
  .cart-item{
    padding: 11px 0 5px 110px;
    height: 62px;
    width: 210px;
    margin-left: -45px;
    position:relative;
    background:#fff;
    -webkit-transition: all 1000ms ease-out;
    -moz-transition: all 1000ms ease-out;
    -ms-transition: all 1000ms ease-out;
    -o-transition: all 1000ms ease-out;
    transition: all 1000ms ease-out;
  }
  .cart-item.flash{background:#fffeb0;}
  .cart-item-border{
    position:absolute;
    bottom:0;
    left:45px;
    background:#edeff0;
    height: 1px;
    width: 230px;
  }
  .cart-item .img-wrap{
    width:50px;
    height:50px;
    overflow:hidden;
    // border:5px solid black;
    float:left;
    margin-left:-65px;
  }
  .cart-item img{width:100%; position:relative;top:-10px;}
  .cart-item strong{color:#00cd6c; font-size:16px;}
  .cart-item span{
    color: #393c45;
    display: block;
    font-size: 14px;
  }

  .cart-item .delete-item{
    background:url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/delete-item.png") 0 0 no-repeat;
    width:15px;
    height:15px;
    float:right;
    margin-right:18px;
    display:none;
  }
  .cart-item:hover .delete-item{display:block;cursor:pointer}


  #info{
    position: absolute;
    top: 20px;
    left: 676px;
    text-align: center;
    width: 413px;

  }
  #info p{font-size:15px; padding:3px;color:#b1b1b3}
  #info a{text-decoration:none;}
  #checkout{
    border: 2px solid #00cd6c;
    font-size: 13px;
    font-weight: 700;
    padding: 3px 9px;
    position: absolute;
    top: 130px;
    left: 170px;
    color: #00cd6c;
    display:none;
  }

  .product.large{
    width:639px;
    margin-bottom:25px;
    overflow:hidden;
    -webkit-transition: all 500ms ease-in-out;
    -moz-transition: all 500ms ease-in-out;
    -ms-transition: all 500ms ease-in-out;
    -o-transition: all 500ms ease-in-out;
    transition: all 500ms ease-in-out;
  }




  /* ---------------- */
  .floating-image-large{
    position:absolute;
    top:0;
    left:0;
    width:100%;
  }
  .info-large{
    display:none;
    position: absolute;
    top: 0;
    left: 0px;
    padding: 42px;
    width: 245px;
    height: 395px;
    -webkit-transition: all 500ms ease-out;
    -moz-transition: all 300ms ease-out;
    -ms-transition: all 300ms ease-out;
    -o-transition: all 300ms ease-out;
    transition: all 300ms ease-out;
  }
  .large .info-large{
    left: 310px;
    -webkit-transition: all 300ms ease-out;
    -moz-transition: all 300ms ease-out;
    -ms-transition: all 300ms ease-out;
    -o-transition: all 300ms ease-out;
    transition: all 300ms ease-out;
  }

  .info-large h4{
    text-transform:uppercase;
    font-size:28px;
    color:#000;
    font-weight:400;
    padding:0;
  }
  div.sku{
    font-weight: 700;
    color: #d0d0d0;
    font-size: 12px;
    padding-top: 11px;
  }
  div.sku strong{
    color:#000;
  }
  .price-big{
    font-size: 34px;
    font-weight: 600;
    color: #00cd6c;
    margin-top: 21px;
  }
  .price-big span{
    color:#d0d0d0;
    font-weight:400;
    text-decoration:line-through;
  }

  .add-cart-large{
    border: 3px solid #000;
    font-size: 17px;
    background: #fff;
    text-transform: uppercase;
    font-weight: 700;
    padding: 10px;
    font-family: "Open Sans", sans-serif;
    width: 246px;
    margin-top: 38px;
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -ms-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
  }
  .add-cart-large:hover{
    color: #00cd6c;
    border-color:#00cd6c;
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -ms-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
    cursor:pointer;
  }
  .info-large h3{
    letter-spacing: 1px;
    color: #262626;
    text-transform: uppercase;
    font-size: 14px;
    clear:left;
    margin-top:20px;
    font-weight: 700;
    margin-bottom:3px;
  }


  .colors-large{
    margin-bottom:38px;
  }
  .colors-large li{
    float:left;
    list-style:none;
    margin-right:7px;
    width:16px;
    height:16px;
  }
  .colors-large li a{
    float:left;
    width:16px;
    height:16px;
    border-radius:50%;
  }
  .colors-large li a:hover{
    width:19px;
    height:19px;
    position:relative;
    top:-1px;
    left:-1px;
  }

  .sizes-large{
  }
  .sizes-large span{
    font-weight:600;
    color:#b0b0b0;
  }
  .sizes-large span:hover{color:#000;cursor:pointer;}

  .product.large:hover{
    box-shadow:0px 5px 31px -1px rgba(0, 0, 0, 0.15);
  }


  .container {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      margin-top: 10px;
      cursor: pointer;
      font-size: 20px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
  }

  /* Create a custom checkbox */
  .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
      background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
      background-color: #00cd6c;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
      content: "";
      position: absolute;
      display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
      display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
  }


  </style>
