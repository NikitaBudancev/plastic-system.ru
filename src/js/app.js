import $ from "jquery";
import "slick-carousel";
import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";

$(function () {
  $(".slider-partners").slick({
    slidesToShow: 9,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".slider-default").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  if (window.matchMedia("(max-width: 1210px)").matches) {
    $(".slider-mobile").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  let menuList = document.querySelectorAll(".menu");

  menuList.forEach((menu) => {
    menu.addEventListener("click", (event) => {
      
      event.stopPropagation();
      
      let toggleBtnSubmenu = event.target.closest(".submenu-btn");
      let menuItemParent = event.target.closest(".menu__item.parent");
      let submenuBox = event.target.closest(".submenu-box");



      console.log(menuItemParent);

      if (toggleBtnSubmenu) {
        let currentMenuItem = toggleBtnSubmenu.closest(".submenu__item");
        console.log('test1');
        currentMenuItem.classList.toggle("active");
      } else if (!submenuBox && menuItemParent && $(window).width() < 1160) {
        $(menuItemParent.querySelector(".submenu-box")).fadeToggle(100);
        $(".fade").fadeToggle(100);
      } else {
        return;
      }
    });
  });

  let mobileBtn = document.querySelector(".btn-menu-mobile");
  let mobileMenu = document.querySelector(".header__bottom-center-top");

  mobileBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    $(".fade").fadeToggle(300);
  });

  $(".fade").on("click", function () {
    mobileMenu.classList.remove("active");
    $(".submenu-box").fadeOut(100);
    $(this).fadeOut(100);
  });

  let catalogGrid = document.querySelector(".catalog-grid");
  let catalogBlock = document.querySelector(".products__list-grid");

  if (catalogBlock) {
    catalogGrid.addEventListener("click", function (event) {
      let gridBtn = event.target.closest(".grid-btn");

      console.log(gridBtn);

      if (gridBtn) {
        let grid = gridBtn.dataset.grid;

        switch (grid) {
          case "default":
            catalogBlock.classList.remove("grid-full");
            break;
          case "column":
            catalogBlock.classList.add("grid-full");
            break;
        }
      } else {
        return;
      }
    });
  }


  $(".tabs-wrapper").each(function () {
    let ths = $(this);
    ths.find(".tab-item").not(":first").hide();
    ths
      .find(".tab")
      .click(function () {
        ths
          .find(".tab")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
        ths.find(".tab-item").hide().eq($(this).index()).fadeIn();
      })
      .eq(0)
      .addClass("active");
  });

  $('.button-hide').on('click', function(){
    $('.container-hide').fadeToggle(100);
  })


  $('.catalog-sections__button').on('click', function(){
    $('.catalog-sections').toggleClass('active');

    if($(this).html() == 'Показать еще') {
      $(this).html('Скрыть');
    }else {
      $(this).html('Показать еще');
    }

  })

});

