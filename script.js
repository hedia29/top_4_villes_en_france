//une fois que le documen est prét
$(document).ready(function() {
  //declaration des variables -captuer les li dans une variable
  var $mainMenuItems = $("#main-menu ul").children("li"),
  //nombre d'element dans le menu 
  totalMainMenuItems = $mainMenuItems.length,
  //l'index de l'elemnt qui est ouvert
  openedIndex = 0,
  //declarer la fonction d'initailisation
    init = function() {
      bindEvents();
      if(validIndex(openedIndex))
      {
        animateItem($mainMenuItems.eq(openedIndex),true,700);
      }
     
        }
        //on attache les evenemts de nos animations
        bindEvents = function(){
          //quand il y aura un click sur les images on execute
           $mainMenuItems.children(".images").click(function() {
           //obtenir l'index de l'image sur laquelle on click 
          var newIndex = $(this).parent().index(),
          //selction le li sur lequel on a cliqué
            $item = $mainMenuItems.eq(newIndex);
            //si le nouvel index sur lequel j'ai cliquer = à l'index ouvert alors on va le fermer

        if (openedIndex === newIndex) {
          animateItem($item, false, 250);
          //aucun index est ouvert
          openedIndex = -1;
        } 
        else {
          //si lindex est valide
          if (validIndex(newIndex)) {
            //on ferme  celui qui est ouvert
            animateItem($mainMenuItems.eq(openedIndex), false, 250);
            openedIndex = newIndex;
            animateItem($item, true, 250);
          }
        }


      });
           $('.button').hover(
              function(){
                $(this).addClass("hoverButton");

              },
              function(){
              $(this).removeClass("hoverButton");
              }
            );
           //quand on click sur le bouton on lance l'element
           $(".button").click(function(){
            //on cherche l'index de l'element
            var newIndex =$(this).index();
            $item = $mainMenuItems.eq(newIndex);

        if (openedIndex === newIndex) {
          animateItem($item, false, 250);
          openedIndex = -1;
        } else {
          if (validIndex(newIndex)) {
            animateItem($mainMenuItems.eq(openedIndex), false, 250);
            openedIndex = newIndex;
            animateItem($item, true, 250);
          }
        }


           });

    },
//checker si l'indice est valide
    validIndex = function(indexToCheck) {
      return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);

    },
    //animation des li 
    animateItem = function($item, toOpen, speed) {
      //declartion des variables
        var $colorImage = $item.find('.color'),
        //si li est ouvert ou fermé (?)
        itemParam = toOpen ? {
          width: "420px"
        } : {
          width: "140px"
        },
        //quand l item est ouvert son left = 0px, quand il est ferme son left = 140px;
        colorImageParam = toOpen ? {
          left: "0px"
        } : {
          left: "140px"
        };

      $colorImage.animate(colorImageParam, speed);
      $item.animate(itemParam, speed);


    };
//ececution de la fonction init
  init();
});