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
      let toggleBtnSubmenu = event.target.closest(".submenu-btn");
      let menuItemParent = event.target.closest(".menu__item.parent ");

      if (toggleBtnSubmenu) {
        let currentMenuItem = toggleBtnSubmenu.closest(".submenu__item");
        currentMenuItem.classList.toggle("active");
      } else if (menuItemParent && $(window).width() < 1160) {
        $(menuItemParent.querySelector(".submenu-box")).fadeToggle(100);
        $(".fade").fadeToggle(100);
        // let submenu = menuItemParent.querySelector('.submenu-box');

        // submenu.classList.toggle('active');
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
});
