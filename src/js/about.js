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
        duration: 0.4,
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
