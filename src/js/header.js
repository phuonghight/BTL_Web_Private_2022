const headerString = `<!-- header desktop -->
<div class="header nav-desktop top hiden_mobile">
    <div class="header_wraper flex-between">
        <a href="../../index.html" class="logo">
            <img src="../images/viivue-logo.svg" alt="">
        </a>
        <div class="menu">
            <ul class="menu_list flex-center">
                <li class="menu_item">
                    <a href="../../index.html" class="menu_item_link">Home</a>
                </li>
                <li class="menu_item" data-curPage="Work">
                    <a href="../html/work.html" class="menu_item_link">Work</a>
                </li>
                <li class="menu_item" data-curPage="Expertise">
                    <a href="../html/expertise.html" class="menu_item_link">Expertise</a>
                </li>
                <li class="menu_item" data-curPage="About">
                    <a href="../html/about.html" class="menu_item_link">About</a>
                </li>
                <li class="menu_item" data-curPage="Contac">
                    <a href="../html/contact.html" class="menu_item_link">Contact</a>
                </li>
            </ul>
        </div>
        <a href="../html/website-quotation.html" class="quotation_link btn">Get A Free Consulation</a>
    </div>
</div>

<!-- Header tablet and mobile -->
<div class="header header_mobile">
    <div class="container flex-between">
        <a href="../../index.html" class="logo">
            <img src="../images/viivue-logo.svg" alt="">
        </a>

        <div class="flex-between">
            <a style="padding: 5px 10px;" href="../html/website-quotation.html" class="quotation_link btn btn_mobile text-center">
                Get A Free Consulation
            </a>
            <div class="menu_mobile_btn">
                <div class="menu_mobile_btn_burger"></div>
                <div class="menu_mobile_btn_burger_after"></div>
            </div>
        </div>
    </div>
</div>

<!-- Navbar mobile -->
<div class="nav_mobile">
    <ul class="menu_mobile flex-cl-center">
        <li class="menu_item">
            <a href="../../index.html" class="menu_item_link">Home</a>
        </li>
        <li class="menu_item" data-curPage="Work">
            <a href="../html/work.html" class="menu_item_link">Work</a>
        </li>
        <li class="menu_item" data-curPage="Expertise">
            <a href="../html/expertise.html" class="menu_item_link">Expertise</a>
        </li>
        <li class="menu_item" data-curPage="About">
            <a href="../html/about.html" class="menu_item_link">About</a>
        </li>
        <li class="menu_item" data-curPage="Contac">
            <a href="../html/contact.html" class="menu_item_link">Contact</a>
        </li>
    </ul>

    <ul class="navbar_social_network">
        <li class="social_network_item">
            <a href="#" class="flex-cl-center">
                <i class="fa-brands fa-facebook-f"></i>
            </a>
        </li>
        <li class="social_network_item">
            <a href="#" class="flex-cl-center">
                <i class="fa-brands fa-dribbble"></i>
            </a>
        </li>
        <li class="social_network_item">
            <a href="#" class="flex-cl-center">
                <i class="fa-brands fa-linkedin-in"></i>
            </a>
        </li>
    </ul>
</div>`;

$("header").html(headerString);
$("head").append(
  '<link rel="stylesheet" type="text/css" href="../css/header.css">'
);
console.log($("header").attr("cur-page"));
$(`.menu_item[data-curPage=${$("header").attr("cur-page")}]`).addClass("cur-page");

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
    // Navbar desktop scroll
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
});
