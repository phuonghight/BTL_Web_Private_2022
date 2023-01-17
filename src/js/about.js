// Navbar in mobile
$(".main_video").click((e) => {
  updateVideo();
});

$(".menu_mobile_btn").click(() => {
  $(".menu_mobile_btn").toggleClass("open");
  $(".nav_mobile").toggleClass("show");
  $("body").toggleClass("stop-scrolling");
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  // Pc
  "(min-width: 1025px)": function () {
    const showAnim = gsap
      .from(".header", {
        yPercent: -100,
        paused: true,
        duration: 0.3,
      })
      .progress(1);

    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom center",
      // markers: true,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  },

  // Tablet & Mobile
  "(max-width: 1023px)": function () {},
});

// Read more
let checked = false;
$("#readmore").click(() => {
  !checked && $(".cur_testimonials_des").css("maxHeight", "500px");
  checked && $(".cur_testimonials_des").css("maxHeight", "180px");
  checked = !checked;
});

// Slide in testimonials

let curIndex = 1;

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

$(".pre_btn").click((e) => {
  if (curIndex == 1) return;
  curIndex--;
  updateTestimonals(curIndex);
  stopControl(curIndex);
});

$(".next_btn").click((e) => {
  if (curIndex == 4) return;
  curIndex++;
  updateTestimonals(curIndex);
  stopControl(curIndex);
});
