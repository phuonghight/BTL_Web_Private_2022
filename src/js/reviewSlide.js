$(".slider_wrapper").slick({
  dots: true,
  prevArrow: ".pre_review",
  nextArrow: ".next_review",
  appendDots: ".review_mini_control",
  dotsClass: "flex",
});

$(".review_mini_control ul li button").each((i, item) => {
  $(item).html("");
});
