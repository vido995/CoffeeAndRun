import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Swiper from "swiper";
import { ScrollToTopOnMount, SectionsContainer, Section } from "react-fullpage";

var slider = new Swiper(".swiper-container", {
  pagination: ".swiper-pagination",
  direction: "vertical",
  slidesPerView: 1,
  paginationClickable: true,
  spaceBetween: 30,
  mousewheelControl: true,
  onSlideChangeStart: function(swiper) {
    var currentSlide = swiper.slides[swiper.activeIndex];
    console.log(currentSlide.getAttribute("data-bg"));
    console.log(currentSlide);
  }
});

var test = "aaaaaaaaaaaaaa";

class App extends React.Component {
  componentDidMount() {
    window.addEventListener("popstate", this.handleScroll);
    if (window.performance) {
      if (performance.navigation.type == 1) {
        window.location.href = "#sectionOne";
      } else {
        window.location.href = "#sectionOne";
      }
      let dot = document.getElementsByClassName("Navigation-Anchor")[0];
      console.log(dot);
      dot.classList.add("active");
    }
  }

  handleScroll() {
    let container = document.getElementsByClassName("workflow-container")[0];
    let items = document.getElementsByClassName("workflow-items-left")[0];
    let itemsRight = document.getElementsByClassName("workflow-items-right")[0];

    if (
      items.classList.value.includes("opacity-no") &&
      window.location.href.includes("sectionTwo")
    ) {
      items.classList.remove("opacity-no");
      itemsRight.classList.remove("opacity-no");

      items = document.getElementsByClassName(
        "workflow-items-left-container"
      )[0];
      itemsRight = document.getElementsByClassName(
        "workflow-items-right-container"
      )[0];

      let headerLeft = document.getElementsByClassName(
        "workflow-header-left"
      )[0];
      headerLeft.classList.add("workflow-header-left--animated");

      let headerRight = document.getElementsByClassName(
        "workflow-header-right"
      )[0];
      headerRight.classList.add("workflow-header-right--animated");

      let item = items.getElementsByClassName("workflow-item");
      item[0].classList.add("workflow-item--first");
      let itemText = item[0].getElementsByClassName("workflow-item-text")[0];
      itemText.classList.add("workflow-item-text--first");

      let arrowRight = items.getElementsByClassName("workflow-arrow-right");
      arrowRight[0].classList.add("workflow-arrow-right--first");

      item[1].classList.add("workflow-item--second");
      itemText = item[1].getElementsByClassName("workflow-item-text")[0];
      itemText.classList.add("workflow-item-text--second");
      item[2].classList.add("workflow-item--3");
      itemText = item[2].getElementsByClassName("workflow-item-text")[0];
      itemText.classList.add("workflow-item-text--3");
      arrowRight[1].classList.add("workflow-arrow-right--2");
      arrowRight[2].classList.add("workflow-arrow-right--3");

      let itemRight = itemsRight.getElementsByClassName("workflow-item");

      itemRight[2].classList.add("workflow-item--1");
      let itemTextRight = itemRight[2].getElementsByClassName(
        "workflow-item-text"
      )[0];
      itemTextRight.classList.add("workflow-item-text--1");

      itemRight[1].classList.add("workflow-item--2");
      itemTextRight = itemRight[1].getElementsByClassName(
        "workflow-item-text"
      )[0];
      itemTextRight.classList.add("workflow-item-text--2");

      itemRight[0].classList.add("workflow-item--3");
      itemTextRight = itemRight[0].getElementsByClassName(
        "workflow-item-text"
      )[0];
      itemTextRight.classList.add("workflow-item-text--3");

      let arrowLeft = itemsRight.getElementsByClassName("workflow-arrow-left");
      arrowLeft[2].classList.add("workflow-arrow-left--1");
      arrowLeft[1].classList.add("workflow-arrow-left--2");
      arrowLeft[0].classList.add("workflow-arrow-left--3");
    }
  }

  // handleScroll(event) {
  //     console.log('y', window.pageYOffset);
  //     if (window.pageYOffset != 0.1) {
  //     let counter = 0;
  //         if (Math.floor(window.pageYOffset/1) > 0) {
  //             counter++;
  //             console.log('aaa')
  //             let app = document.getElementsByClassName('coffee-and-run')[0];
  //             if (app.getElementsByTagName('div')[0].classList.value.includes('move-down-1')) {
  //                 app.getElementsByTagName('div')[0].classList = ['move-down-2'];
  //             } else {
  //                 app.getElementsByTagName('div')[0].classList = ['move-down-1'];
  //             }
  //             window.scrollBy(0, -1);
  //         } else if (window.pageYOffset == 0) {
  //             console.log('bbb')
  //             let app = document.getElementsByClassName('coffee-and-run')[0];
  //             app.getElementsByTagName('div')[0].classList = ['move-up-' + counter];
  //             counter--;
  //             window.scrollBy(0, 1);
  //             console.log('y', window.pageYOffset);
  //         }
  //     }
  // }
  render() {
    let options = {
      sectionClassName: "section",
      anchors: ["sectionOne", "sectionTwo", "sectionThree"],
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      sectionPaddingTop: "0",
      sectionPaddingBottom: "0",
      arrowNavigation: true
    };

    return (
      <div className="coffee-and-run">
        <ScrollToTopOnMount />
        <SectionsContainer className="container" {...options}>
          <Section>
            <Header />
          </Section>
          <Section>
            <Main />
          </Section>
          <Section>
            <Footer />
          </Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
