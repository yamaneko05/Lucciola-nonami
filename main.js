// header

$(".toggle-btn").on("click", function() {

  $("header").toggleClass("open");

});


// index.html #pickup

$(".slick").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000
});

$(".thumbnail li").on("click", function() {
  var index = $(".thumbnail li").index(this);
  $(".slick").slick("slickGoTo", index, true)
});


// shop.html

$(".tab li").on("click", function() {
  var method = $(this).data("method");
  var activeContent = $(`.${method}`);
  $(this).addClass("active");
  $(".tab li").not(this).removeClass("active");
  activeContent.show();
  $(".content").not(activeContent).hide();
});

$(".button li").on("click", function() {
  var target = $(this).data("target");
  var targetTop = $(`#${target}`).offset().top;
  $(window).scrollTop(targetTop - 70);
});