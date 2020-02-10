"use strict";

(function($) {
  $(document).ready(function() {
    // Code
    $(".radio").on("change", function() {
      console.log($(this).val());
    });
    let quizBox = document.querySelector(".jstest__test"),
      result = [],
      button = document.querySelector(".jstest__button");
    button.click = res();
    function res() {
      let q1 = document.querySelector(".radio"),
        q = document.querySelector(".quiz__q");

      // for (let i = 0; i < q.lenght; i++) {
      //   if (q.childNodes.checked === true) {
      //     result += q.childNodes.value.checked;
      //   }
      // }
      console.log(result);
    }
    // Quiz js for/////////////
    // let questions = [
    //   {
    //     question:
    //       "1.Уявіть, що ви на виставці.Що вас найбільше приваблює в експонатах?",
    //     answers: {
    //       a: "колір, досконалість форм",
    //       b: "як і з чого вони зроблені",
    //       c: "що хотів висловити автор"
    //     },
    //     correctAnswer: "b"
    //   },
    //   {
    //     question: "2.Якій нагороді ви б зраділи найбільше?",
    //     answers: {
    //       c: "за громадську діяльність.",
    //       b: "за науковий винахід",
    //       a: "за художній твір"
    //     },
    //     correctAnswer: "c"
    //   },
    //   {
    //     question: "3.Яким журналам надаєте перевагу?",
    //     answers: {
    //       a: "літeратурно-художні",
    //       b: "наукові",
    //       c: "історичні"
    //     },
    //     correctAnswer: "c"
    //   },
    //   {
    //     question: "4.Сьогодні ви дома один, що ви будете робити?",
    //     answers: {
    //       a: "Відпочивати,дивитися фільми",
    //       b: "Почните виконувати давно заплановані справи",
    //       c: "зустрінетесь із друзями"
    //     },
    //     correctAnswer: "c"
    //   },
    //   {
    //     question: "5.Ніч для Вас -це ...",
    //     answers: {
    //       c: "Час відпочинку,спокою",
    //       a: "Чудовий момент по мріяти, вигадати щось нове",
    //       b: "час коли потрібно виспатись після тяжкого робочого дня"
    //     },
    //     correctAnswer: "c"
    //   },
    //   {
    //     question:
    //       "6.Ви щойно склали екзамен, і Вам здається, що сдали його добре. Але ви отримали оцінку нижче середньої :",
    //     answers: {
    //       a:
    //         "Ви подумаєте, що відбулась помилка, розпочните діалог с єкзаменатором,щоб він ще раз перевірив Вашу роботу",
    //       c: "Вам соромно, Ви впадаєте в депрессію.",
    //       b: "Ви незадоволені собою і приймаете рішення сісти за навчання"
    //     },
    //     correctAnswer: "c"
    //   },
    //   {
    //     question: "7.Ви застрягли у ліфті :",
    //     answers: {
    //       b: "Ви починаете думати щоб могло зламатися, і яка конструкція луфту",
    //       a:
    //         "почните фантазувати, мріяти як проведете відпустку поки чекаєте майстра.",
    //       c:
    //         "ви почните хвилюватися, і думати про негативні наслідки цієї події"
    //     },
    //     correctAnswer: "c"
    //   },
    //   {
    //     question: "8.Ваш холодильник працює с кожним днем гірше :",
    //     answers: {
    //       b:
    //         "Ви починаєте моніторити ціни на холодильники, не чекаючи остаточної поломки",
    //       a:
    //         "Ви не приділяете цьому великого значення, коли зламається тоді почните вирішувати цю проблему",
    //       c: "Ви його помиєте, та переведете його у єкономічний режим"
    //     },
    //     correctAnswer: "c"
    //   },
    //   {
    //     question: "9.Завтра Ви летите на відпочинок :",
    //     answers: {
    //       b: "Ви превіряете всі речі що зібрали, плануете маршрут",
    //       a: "Майже весь час думаєте як Ви будете відпочивати",
    //       c: "Ви спокійні, ставите будильник на потрібну Вам годину"
    //     },
    //     correctAnswer: "c"
    //   },
    //   {
    //     question: "10.Ви на роботі , вам кажуть погану новину:",
    //     answers: {
    //       b: "Ви сідаєте за роботу стиснув зуби",
    //       a: "Ви вийдите на свіже повітря та наберете друга",
    //       c: "Ви візьмите відгул"
    //     },
    //     correctAnswer: "c"
    //   }
    // ];
    // //DOM ELEments
    // let testContainer = document.querySelector(".jstest__test"),
    //   button = document.querySelector(".jstest__button"),
    //   resultsContainer = document.querySelector(".result-test");
    // //add manes DOM elements
    // testContainer.id = "test";
    // button.id = "submit";
    // resultsContainer.id = "results";
    // //run function
    // showQuestions(questions, testContainer);
    // button.onclick = function() {
    //   showResult(questions, testContainer, resultsContainer);
    // };

    // //apppend elements inside HTML
    // document.body.append(testContainer, button, resultsContainer);

    // function showQuestions(list, container) {
    //   let output = [],
    //     answersOutput;
    //   for (let i = 0; i < list.length; i++) {
    //     answersOutput = [];

    //     for (let item in list[i].answers) {
    //       let elem = `<label class="answer-${item}">
    //         <input type="radio" name="question-${i}"  value="${item}">${list[i].answers[item]}</label>`;

    //       answersOutput.push(elem);
    //     }

    //     let string = `<div class="question">${
    //       list[i].question
    //     }</div><div class="answers">${answersOutput.join("")}</div>`;
    //     output.push(string);
    //   }

    //   container.innerHTML += output.join("");
    // }
    // function showResult(list, container, results) {
    //   let correctAnswers = 0,
    //     userAnswer = "",
    //     answerLabel = "",
    //     answersContainer = container.querySelectorAll(".answers"),
    //     labels = container.querySelectorAll("label");

    //   labels.forEach(label => {
    //     label.removeAttribute("style");
    //   });

    //   for (let i = 0; i < list.length; i++) {
    //     userAnswer = answersContainer[i].querySelector(
    //       `input[name="question-${i}"]:checked`
    //     );

    //     if (userAnswer === null) {
    //       alert("Please fill all fields");
    //       return;
    //     }
    //     answerLabel = answersContainer[i].querySelector(
    //       `label.answer-${userAnswer.value}`
    //     );
    //     if (userAnswer.value === list[i].correctAnswer) {
    //       correctAnswers++;
    //     }
    //   }
    // }

    // END quiz///////////////

    //slider
    $(".uslider").slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      rows: 2,
      slidesPerRow: 1,
      mobileFirst: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            rows: 2,
            slidesPerRow: 1,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            arrows: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            arrows: false,
            dots: false
          }
        }
      ]
    });
    // proba

    //end proba
    //slider-end
  });
})(jQuery);
