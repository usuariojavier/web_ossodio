// cuenta atras

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('oct 26, 2024 22:30:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('dias').innerText = Math.floor(distance / (day)),
        document.getElementById('horas').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutos').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('segundos').innerText = Math.floor((distance % (minute)) / second);

    }, second)

    // barra navegacion
    $(document).ready(function() {
        //responsive menu toggle
        $("#menutoggle").click(function() {
          $('.xs-menu').toggleClass('displaynone');

          });
        //add active class on menu
        $('ul li').click(function(e) {
          e.preventDefault();
          $('li').removeClass('active');
          $(this).addClass('active');
        });
      //drop down menu  
          $(".drop-down").hover(function() {
            $('.mega-menu').addClass('display-on');
          });
          $(".drop-down").mouseleave(function() {
            $('.mega-menu').removeClass('display-on');
          });
      
      });