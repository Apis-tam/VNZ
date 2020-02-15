"use strict";

(function($) {
  $(document).ready(function() {
    // Code
    let ansMass = [],
      qLi = $(".quiz__quest");

    $(".radio").on("change", function() {
      let answer = {
          name: $(this).attr("name"),
          value: $(this).val()
        },
        answerItem = ansMass.filter(item => item.name !== answer.name);
      ansMass = answerItem;
      ansMass.push(answer);

      localStorage.setItem("userAnswers", JSON.stringify(ansMass));
      /////bar
      let ansBar = +ansMass.length,
        sumQuestion = +qLi.length,
        lineBar = (ansBar * 100) / sumQuestion,
        div = $(".jstest__bar--line"),
        content = $(".jstest__bar--text");
      content[0].innerHTML = `Пройдено ${ansBar}/ ${sumQuestion}`;
      div[0].style.width = `${lineBar}%`;
    });
    // on click button/////////////////
    $(".jstest__button").click(function() {
      let error = $(".jstest__error"),
        msg = "Plaese, answer for all question!",
        answers;

      if (ansMass.length == qLi.length) {
      } else {
        error[0].innerHTML = msg;

        return;
      }
      error[0].innerHTML = "";

      window.location.href = "test-result.html";
      ///////////////////////////////////////////////
      //page result   , show result test
      let massAnswers = [],
        mathRes,
        sumAns,
        fantasyRes,
        mathContainer = $(".result__math"),
        fantasyContainer = $(".result__fantasy");
      answers = JSON.parse(localStorage.getItem("userAnswers"));
      answers.forEach(item => {
        massAnswers.push(+item.value);
      });
      sumAns = massAnswers.reduce((a, b) => {
        return a + b;
      }, 0);
      mathRes = (+sumAns * 10) / +sumQuestion;
      fantasyRes = 100 - +mathRes;
      mathContainer[0].innerHTML = `${mathRes}%<p>Математичний склад розуму</p>`;
      fantasyContainer[0].innerHTML = `${fantasyRes}%<p>Гуманітарний склад розуму</p>`;
    });
    //slider
    $(".uslider").slick({
      mobileFirst: true,
      dots: true,
      infinite: false,
      speed: 300,
      rows: 1,
      slidesPerRow: 1,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            rows: 1,
            slidesPerRow: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            rows: 1,
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            rows: 1,
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    //slider-end
  });
})(jQuery);
