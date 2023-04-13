$("#img-scroll").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

function startmodal(modalId) {
  const modal = document.getElementById(modalId);
  $(modal).css("display", "flex");
}

function endmodal(modalId) {
  const modal = document.getElementById(modalId);
  $(modal).css("display", "none");
}
// modal epet
$("#epet").click(function () {
  startmodal("modal-container-epet");
});

$("#modal-container-epet").click(function () {
  endmodal("modal-container-epet");
});
// modal projeto 2
$("#brilhocar").click(function () {
  startmodal("modal-container-brilhocar");
});

$("#modal-container-brilhocar").click(function () {
  endmodal("modal-container-brilhocar");
});
// modal tech code
$("#techcode").click(function () {
  startmodal("modal-container-techcode");
});

$("#modal-container-techcode").click(function () {
  endmodal("modal-container-techcode");
});
// modal projeto 4
$("#programaemc").click(function () {
  startmodal("modal-container-programaemc");
});

$("#modal-container-programaemc").click(function () {
  endmodal("modal-container-programaemc");
});

// MENU
$(".bnt-menu").click(function () {
  $(".bnt-navbar-mobile").css("display", "flex");
});
$("h1").click(function () {
  $(".bnt-navbar-mobile").css("display", "none");
  $(".filter-mobile").css("display", "none");
  $(".filter-menu").css("display", "flex");
});

$(document).ready(function () {
  windowwidth = $(document).width();
  if (windowwidth <= 420) {
    $("input").click(function () {
      $(".filter-mobile").css("display", "none");
      $(".filter-menu").css("display", "flex");
    });
    $(".bnt-navbar").css("display","none");
    $(".bnt-menu").css("display","flex");
  }
});


// FILTER

$(".filter-menu").click(function () {
  $(".filter-mobile").css("display", "flex");
  $(".filter-menu").css("display", "none");
});

$("input").click(function () {
  switch ($("input:checked").val()) {
    case "all":
      $("div .language").css("display", "block");
      $("div .front").css("display", "block");
      $("div .back").css("display", "block");
      $("div .fullstack").css("display", "block");
      break;
    case "front":
      $("div .front").css("display", "block");
      $("div .back").css("display", "none");
      $("div .language").css("display", "none");
      $("div .fullstack").css("display", "none");
      break;
    case "back":
      $("div .back").css("display", "block");
      $("div .language").css("display", "none");
      $("div .front").css("display", "none");
      $("div .fullstack").css("display", "none");
      break;
    case "language":
      $("div .language").css("display", "block");
      $("div .front").css("display", "none");
      $("div .back").css("display", "none");
      $("div .fullstack").css("display", "none");
      break;
    case "fullstack":
      $("div .fullstack").css("display", "block");
      $("div .language").css("display", "none");
      $("div .front").css("display", "none");
      $("div .back").css("display", "none");
      break;
  }
});
$("input").click(function () {
  switch ($("input:checked").val()) {
    case "all":
      $("div .languages").css("display", "block");
      $("div .programming").css("display", "block");
      $("div .web").css("display", "block");
      break;
    case "languages":
      $("div .languages").css("display", "block");
      $("div .programming").css("display", "none");
      $("div .web").css("display", "none");
      break;
    case "programming":
      $("div .programming").css("display", "block");
      $("div .languages").css("display", "none");
      $("div .web").css("display", "none");
      break;
    case "web":
      $("div .web").css("display", "block");
      $("div .languages").css("display", "none");
      $("div .programming").css("display", "none");
      break;
  }
});
