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
      trigger: ".banner",
      start: "top top",
      end: "bottom center",
      // markers: true,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".banner",
          start: "1% top",
          end: "50% top",
          scrub: true,
          // markers: true,
        },
      })
      .to(".banner .banner_content", { y: "30%", opacity: 0.5, scale: 0.9 })
      .to(".banner .banner_video", { y: "30%", opacity: 0.5, scale: 0.9 }, "<");

    [".device4", ".device3", ".device2", ".device1"].forEach((item, index) => {
      gsap.from(item, {
        y: `${20 * (index + 1)}%`,
        scrollTrigger: {
          trigger: ".slide1",
          start: "top 50%",
          end: "150% bottom",
          // markers: true,
          scrub: true,
        },
      });
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".main",
          start: "top top",
          end: "150% top",
          scrub: true,
          pin: ".main",
          // markers: true,
        },
      })
      .from(".slide1_content_heading", {
        y: "50%",
        opacity: 0,
        transformOrigin: "top left",
        rotate: 3,
      })
      .from(".slide1_content_des1", {
        y: "50%",
        opacity: 0,
        transformOrigin: "top left",
        rotate: 3,
      })
      .from(".slide1_content_des2", {
        y: "50%",
        opacity: 0,
        transformOrigin: "top left",
        rotate: 3,
      })
      .from(".slide1_content_des3", {
        y: "50%",
        opacity: 0,
        transformOrigin: "top left",
        rotate: 3,
      })
      .from(".work_btn", {
        y: "50%",
        opacity: 0,
        transformOrigin: "top left",
        rotate: 3,
      });
    // .from(".work_link", {
    //   y: "0",
    // });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".slide",
          start: "150% top",
          end: "600% bottom",
          pin: ".main",
          scrub: true,
          // markers: true,
        },
      })
      .to(".panel", { x: "-400%" });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".expertise",
        start: "top top",
        end: "150% bottom",
        scrub: true,
        // markers: true,
        pin: true,
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".expertise",
          start: "top 45%",
          end: "150% bottom",
          scrub: true,
          // markers: true,
          // pin: true,
        },
      })
      .from(".section_heading", {
        y: "50%",
        opacity: 0,
        transformOrigin: "top left",
        rotate: 5,
      })
      .from(".section_title", {
        y: "50%",
        opacity: 0,
        transformOrigin: "top left",
        rotate: 5,
      })
      .from(
        ".expertise_list",
        {
          y: "20%",
          opacity: 0,
          transformOrigin: "top left",
          rotate: 5,
        },
        ">"
      )
      .from(".expertise_btn", {
        y: "20%",
        opacity: 0,
        transformOrigin: "top left",
        rotate: 5,
      });

    gsap.to(".overlay-collum", {
      x: "-100%",
      scrollTrigger: {
        trigger: ".whatwedo",
        start: "100px top",
        end: "100px top",
        scrub: true,
        // markers: true,
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".whatwedo",
          start: "100px top",
          end: "100% top",
          scrub: true,
          // markers: true,
          // pin: ".overlay-collum",
        },
      })
      .to(".overlay-collum1", { y: "-30vh" })
      .to(".overlay-collum2", { y: "-30vh" })
      .to(".overlay-collum3", { y: "-30vh" })
      .to(".overlay-collum4", { y: "-30vh" })
      .to(".overlay-collum5", { y: "-30vh" })
      .to(".overlay-collum6", { y: "-30vh" });

    gsap.from(".brand", {
      backgroundColor: "white",
      scrollTrigger: {
        trigger: ".brand",
        start: "top top",
        end: "top top",
        scrub: true,
        // markers: true,
      },
    });

    gsap.to(".overlay-collum", {
      display: "none",
      scrollTrigger: {
        trigger: ".brand",
        start: "top top",
        end: "top top",
        scrub: true,
        // markers: true,
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".brand",
        start: "1px top",
        end: "1px top",
        scrub: true,
        // markers: true,
      },
    });

    // Brand
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".brand",
          start: "top top",
          end: "200% top",
          pin: true,
          scrub: true,
          // markers: true,
        },
      })
      .from(".brand_headding1", {
        y: "50%",
        opacity: 0,
        transformOrigin: "top left",
        rotate: 3,
      })
      .from(".brand_headding2", {
        y: "50%",
        opacity: 0,
        transformOrigin: "top left",
        rotate: 3,
      })
      .from(".brand_headding3", {
        y: "50%",
        opacity: 0,
        transformOrigin: "top left",
        rotate: 3,
      })
      .from(".brand_img", { y: "30%", opacity: 0 })
      .from(".brand_list-1", { x: "5%", opacity: 0 }, "<")
      .from(".brand_list-2", { x: "-5%", opacity: 0 }, "<");

    // Skew slide
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
      clamp = gsap.utils.clamp(-1, 1); // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.9,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(".skewElem", {
      transformOrigin: "right top, left bottom",
      force3D: true,
    });

    // Lets chat
    gsap.from(".Lets_chat .flex-between", {
      opacity: 0,
      y: "50%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".Lets_chat",
        start: "top center",
        end: "top center",
        // scrub: true,
        // markers: true,
      },
    });
  },

  // Tablet & Mobile
  "(max-width: 1023px)": function () {
    // Lets chat
    gsap.from(".Lets_chat .flex-between", {
      opacity: 0,
      y: "50%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".Lets_chat",
        start: "top center",
        end: "top center",
        // markers: true,
      },
    });

    // What we do
    gsap.from(".expertise_item", {
      opacity: 0,
      y: "20%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".expertise_item",
        start: "top 75%",
        end: "top 75%",
        // markers: true,
      },
    });

    // Brand
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".brand",
          start: "top top",
          end: "200% top",
          pin: true,
          scrub: true,
          // markers: true,
        },
      })
      .to(".brand_list-1", { x: "-50%" }, "<")
      .to(".brand_list-2", { x: "50%" }, "<");
  },
});

$(".main_video")
  .mousemove(function (e) {
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    // console.log(x, y);
    $(".mouse").css("top", `${y}px`);
    $(".mouse").css("left", `${x}px`);
    if (y <= 0) return;
  })
  .mouseout(function () {
    // console.log(x, y);
    $(".mouse").css("top", `${y}px`);
    $(".mouse").css("left", `${x}px`);
    if (y <= 0) return;
  });

let videoIsTrue = false;

function updateMouse() {
  let html;
  if (videoIsTrue) {
    html = `<div class="shape flex-cl-center"><i class="fa-solid fa-eye"></i></div>
    <div class="title">PLAY VIDEO</div>`;
  } else {
    html = `<div class="shape flex-cl-center"><i class="fa-solid fa-square"></i></div>
    <div class="title">CLOSE VIDEO</div>`;
  }

  $(".mouse").html(html);
}

function updateVideo() {
  const vid = document.createElement("video");
  vid.classList.add("video");
  vid.autoplay = true;
  vid.loop = true;

  if (videoIsTrue) {
    vid.muted = true;
    vid.src = "./src/videos/show-video.mp4";
  } else {
    vid.muted = false;
    vid.src =
      "https://www.viivue.com/wp-content/uploads/2022/05/ViiVue-ShowReel.mp4";
  }

  updateMouse();

  videoIsTrue = !videoIsTrue;
  $(".main_video").children()[0].replaceWith(vid);
}


// Navbar in mobile
$(".main_video").click((e) => {
  updateVideo();
});

$(".menu_mobile_btn").click(() => {
  $(".menu_mobile_btn").toggleClass("open");
  $(".nav_mobile").toggleClass("show");
  $("body").toggleClass("stop-scrolling");
});
