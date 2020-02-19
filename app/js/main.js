"use strict";

(function($) {
  $(document).ready(function() {
    // Code
    if (window.location.href === "http://localhost:9000/test-result.html") {
      resultFn();
    }
    function resultFn() {
      let massAnswers = [],
        resTextMath = $(".result__math--text"),
        resTextFantasy = $(".result__fantasy--text"),
        sumQuestion = JSON.parse(localStorage.getItem("SQ")),
        mathRes,
        sumAns,
        fantasyRes,
        mathContainer = $(".result__math"),
        fantasyContainer = $(".result__fantasy"),
        answers = JSON.parse(localStorage.getItem("userAnswers"));
      answers.forEach(item => {
        massAnswers.push(+item.value);
      });
      sumAns = massAnswers.reduce((a, b) => {
        return a + b;
      }, 0);
      mathRes = (+sumAns * 10) / +sumQuestion;
      fantasyRes = 100 - +mathRes;
      mathContainer[0].innerHTML = `<p>${mathRes}%</p><p>Математичний склад розуму</p>`;
      fantasyContainer[0].innerHTML = `<p>${fantasyRes}%</p><p>Гуманітарний склад розуму</p>`;

      if (mathRes > 50) {
        resTextMath[0].innerHTML =
          "<p>У Вас математичний (аналітичний) склад розуму. Люди з таким складом розуму віддають перевагу законам, правилам і формулам.</p><p>На відміну від гуманітаріїв, ці особистості здатні адекватніше оцінювати ситуацію і вирішувати серйозні питання.</p><p>Факти, об`єктивні відомості і цифри - це те, чим краще керуються такі люди. Дані здібності є близькими до математичних або технічних.</p>";
      } else if (mathRes == 50) {
        resTextMath[0].innerHTML =
          "У Вас однаково розвінуті  обидві півкулі головного мозку. Сміливо вибирайте профессію до душі";
      } else {
        resTextFantasy[0].innerHTML =
          "<p>У Вас творчий склад розуму. Люди з таким складом розуму віддають перевагу творчості та комунікаціям.</p><p>Творчисть, фантазія та натхнення - це те, чим краще керуються такі люди. </p>";
      }
      //show choose button about prof///////////////////////
      $.ajax({
        url: `https://my-json-server.typicode.com/Apis-tam/vnzProfDb/prof`,
        type: "GET"
      }).then(res => {
        res.forEach(item => {
          $(".result__prof").append(profFn(item));
        });
      });
    }
    function profFn(num) {
      let profDOM = ` <a href="${num.link}" class="result__button">${num.name}</a>`;
      console.log(num.name);
      return profDOM;
    }
    ///end funcRes
    let ansMass = [],
      qLi = $(".quiz__quest");
    localStorage.setItem("SQ", JSON.stringify(qLi.length));

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
