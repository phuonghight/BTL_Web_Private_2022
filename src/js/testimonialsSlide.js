// Read more
let showMore = [false, false, false, false];

$("#readmore").click(() => {
  if (!showMore[curIndex - 1]) {
    $(".cur_testimonials_des").css("maxHeight", "500px");
  } else if (showMore[curIndex - 1]) {
    $(".cur_testimonials_des").css("maxHeight", "180px");
  }
  showMore[curIndex - 1] = !showMore[curIndex - 1];
});

// Slide in testimonials

var curIndex = 1;

function stopControl(index) {
  if (index == 1) {
    $(".pre_btn").addClass("stop_control");
  } else if (index == 4) {
    $(".next_btn").addClass("stop_control");
  } else {
    $(".pre_btn").removeClass("stop_control");
    $(".next_btn").removeClass("stop_control");
  }
}

function updateTestimonals(index) {
  [...$(".testimonials_des")].forEach((el, i) => {
    el.classList.remove("cur_testimonials_des");
    if (index == i + 1) {
      el.classList.add("cur_testimonials_des");
    }
  });

  [...$(".testimonials_user_wraper")].forEach((el, i) => {
    el.classList.remove("cur_user");
    if (index == i + 1) {
      el.classList.add("cur_user");
    }
  });
}

function updateCheckbox(index) {
  showMore.forEach((item, i) => {
    if (i == index - 1 && item) {
      $("#readmore").prop("checked", true);
    } else if (i == index - 1 && !item) {
      $("#readmore").prop("checked", false);
    }
  });
}

function updateUI(index) {
  updateTestimonals(index);
  stopControl(index);
  updateCheckbox(index);
}

$(".pre_btn").click((e) => {
  if (curIndex == 1) return;
  curIndex--;
  updateUI(curIndex);
});

$(".next_btn").click((e) => {
  if (curIndex == 4) return;
  curIndex++;
  updateUI(curIndex);
});
