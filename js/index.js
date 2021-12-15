$(document).ready(function () {
  /******* 메인 네비 *******/
  var mainNav = $("#header .h_nav ");
  $("#submn").css({ display: "none" });

  mainNav.mouseenter(function () {
    $("#submn").fadeIn();
  });

  $("#submn").mouseleave(function () {
    $(this).fadeOut();
  });

  $("#submn .sub_mns")
    .find("li")
    .mouseover(function () {
      $(this).addClass("on");
    });
  $("#submn .sub_mns")
    .find("li")
    .mouseout(function () {
      $(this).removeClass("on");
    });

  /******* 메인 이미지 슬라이드 *******/
  var current = 0;
  var setIntervalId;

  $("#main_img .img_group").on({
    mouseover: function () {
      clearInterval(setIntervalId);
    },
    mouseout: function () {
      timer();
    },
  });
  timer();

  function timer() {
    setIntervalId = setInterval(function () {
      var n = current + 1;
      if (n == 3) {
        n = 0;
      }
      move(n);
    }, 3000);
  }

  function move(m) {
    var currentEl = $("#main_img .img_group > li").eq(current);
    var nextEl = $("#main_img .img_group > li").eq(m);

    currentEl.css({ opacity: 1 }).animate({ opacity: 0 });
    nextEl.css({ opacity: 0 }).animate({ opacity: 1 });

    current = m;
  }

  /******* 공지사항 *******/

  var current_N = 0;
  var setIntervalId_N;

  timer_N();
  function timer_N() {
    setIntervalId_N = setInterval(function () {
      var n = current_N + 1;
      if (n == 5) {
        n = 0;
      }

      move_N(n);
    }, 5000);
  }

  function move_N(i) {
    var currentEl_N = $("#m_notice > div").eq(current_N);
    var nextEl_N = $("#m_notice > div").eq(i);
    currentEl_N.css({ opacity: 1, display: "none" }).animate({ opacity: 0 });
    nextEl_N.css({ opacity: 0, display: "block" }).animate({ opacity: 1 });
    current_N = i;
  }
  /******* 이벤트 *******/
  var current_E = 0;
  var setIntervalId_E;

  timer_E();
  function timer_E() {
    setIntervalId_E = setInterval(function () {
      var n = current_E + 1;
      if (n == 5) {
        n = 0;
      }

      move_E(n);
    }, 5000);
  }

  function move_E(j) {
    var currentEl_E = $("#m_event > div").eq(current_E);
    var nextEl_E = $("#m_event > div").eq(j);
    currentEl_E.css({ opacity: 1, display: "none" }).animate({ opacity: 0 });
    nextEl_E.css({ opacity: 0, display: "block" }).animate({ opacity: 1 });
    current_E = j;
  }

  /****** 컨텐츠 슬라이드 ******/
  var current_m = 0;

  $("#m_btns .m_btn1").click(function () {
    if (current_m > 0) {
      current_m--;
      slideTarget_m(current_m);
    } else {
      current_m = 2;
      slideTarget_m(current_m);
    }
  });
  $("#m_btns .m_btn2").click(function () {
    if (current_m < 2) {
      current_m++;
      slideTarget_m(current_m);
    } else {
      current_m = 0;
      slideTarget_m(current_m);
    }
  });
  function slideTarget_m(m) {
    var pos_m = m * -300 + "px";
    current_m = m;
    $(".m_images").animate({ left: pos_m });
  }

  /****** 스토어 슬라이드 ******/
  var current_s = 0;

  $("#s_btns .s_btn1").click(function (e) {
    if (current_s > 0) {
      current_s--;
      slideTarget_s(current_s);
    } else {
      current_s = 2;
      slideTarget_s(current_s);
    }
  });
  $("#s_btns .s_btn2").click(function (e) {
    if (current_s < 2) {
      current_s++;
      slideTarget_s(current_s);
    } else {
      current_s = 0;
      slideTarget_s(current_s);
    }
  });
  function slideTarget_s(s) {
    var pos_s = s * -300 + "px";
    current_s = s;
    $(".s_images").animate({ left: pos_s });
  }
});
