"use strict";

(function($) {
  $(document).ready(function() {
    // Code
    let locate = window.location.pathname.split("/"),
      index = +locate.length - 1;
    if (locate[index] === "test-result.html") {
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
      let drowMail = JSON.parse(localStorage.getItem("mail"));
      console.log(drowMail);
      $(".drow__mail")[0].innerText = drowMail;
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
    ///button go to test

    $(".mail__button").on("click", () => {
      let input = $(".mail__input").val();
      function vaalidateEmail(input) {
        let valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return valid.test(input);
      }
      if (vaalidateEmail(input)) {
        localStorage.setItem("mail", JSON.stringify(input));
        window.location.href = "test-prof.html";
      } else {
        return;
      }
    });
    ///end button go to test
    //slider
    $(".uslider").slick({
      mobileFirst: true,
      dots: true,
      infinite: false,
      speed: 300,
      rows: 1,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    //slider-end
  });
})(jQuery);
