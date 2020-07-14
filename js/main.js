const hamburger = document.querySelector(".hamburger");
const bar = document.querySelector(".bar");
const list = document.querySelector(".list");
const link = document.querySelector(".list__item");
const links = document.querySelectorAll(".link");
const linksArr = Array.from(links);
function linksColor() {
  for (var i = 0; i < linksArr.length; i++) {
    if (!background) {
      linksArr[i].style.color = "#100e1d";
    } else {
      linksArr[i].style.color = "#57b0e2";
    }
  }
}

const icons = document.querySelector(".material-icons");

let showMenu = false;

hamburger.addEventListener("click", () => {
  if (!showMenu) {
    hamburger.classList.add("open");
    bar.classList.add("open");
    list.classList.add("open");
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    bar.classList.remove("open");
    list.classList.remove("open");
    showMenu = false;
  }
});

const toggle = document.querySelector(".material-icons");

let background = false;

toggle.addEventListener("click", () => {
  if (!background) {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#100e1d";
    linksColor();
    background = true;
  } else {
    document.body.style.backgroundColor = "#100e1d";
    document.body.style.color = "#fff";
    linksColor();
    background = false;
  }
});

// @media screen and (min-width: 787px) {
//   header {
//     box-shadow: -4px 25px 62px -27px rgba(0, 0, 0, 0.1);
//   }
//   .navbar {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;

//     &__item {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       .logo {
//         margin-right: 2em;
//       }
//     }
//   }
//   .hamburger {
//     display: none;
//   }

//   .list {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     box-shadow: none;

//     &__item {
//       padding: 0 2em;
//     }
//   }
// }

// .hero {
//   &__content2 {
//     p:nth-of-type(1) {
//       font-size: 36px;
//     }
//     p:nth-of-type(2) {
//       font-size: 18px;
//     }
//   }
// }
// .services__content {
//   .heading {
//     font-weight: bolder;
//   }
//   .items {
//     padding: 2em;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;

//     .item + .item {
//       margin-left: 20px;
//     }
//   }
// }

// .work__content {
//   position: relative;

//   h1 {
//     width: 30%;
//     position: absolute;
//   }

//   a {
//     display: inline-block;
//     position: absolute;
//     bottom: 50px;
//     right: 250px;
//     font-size: 30px;
//   }
// }
// .wrapper {
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   .wrapper2 {
//     margin-left: 2em;
//   }

//   .wrapper1 {
//     margin-top: 10em;
//   }
// }
