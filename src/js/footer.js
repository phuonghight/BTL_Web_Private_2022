const footerString = `<div class="container">
<div class="before_hr footer_flex">
    <div class="left">
        <div class="footer_logo">
            <a href="../../index.html" class="footer_logo_link">
                <img src="../images/footer-logo.svg" alt="">
            </a>
        </div>
    </div>
    <div class="right flex">
        <ul class="footer_nav hiden_mobile">
            <li class="footer_nav_item">
                <div class="square-dot"></div>
                <a href="../html/work.html" class="footer_nav_link footer_link">Work</a>
            </li>
            <li class="footer_nav_item">
                <div class="square-dot"></div>
                <a href="../html/expertise.html" class="footer_nav_link footer_link">Expertise</a>
            </li>
            <li class="footer_nav_item">
                <div class="square-dot"></div>
                <a href="../html/about.html" class="footer_nav_link footer_link">About</a>
            </li>
            <li class="footer_nav_item">
                <div class="square-dot"></div>
                <a href="../html/contact.html" class="footer_nav_link footer_link">Contact</a>
            </li>
        </ul>
        <div class="footer_info">
            <ul class="footer_info_list">
                <li class="footer_info_item">
                    <i class="fa-solid fa-location-dot"></i>
                    <span class="footer_text">
                        Office
                        <br>
                        5th Floor – Robot Tower
                        <br>
                        308 – 308C Dien Bien Phu Street,
                        <br>
                        Ward 4, District 3, Ho Chi Minh City,
                        <br>
                        Vietnam
                    </span>
                </li>
                <br>
                <li class="footer_info_item">
                    <i class="fa-solid fa-phone"></i>
                    <span>
                        <a href="#" class="footer_text footer_link">(+84) 909 690 517</a>
                        <br>
                        <a href="#" class="footer_text footer_link">(+84) 28 6684 2991</a>
                    </span>
                </li>
                <br>
                <li class="footer_info_item">
                    <i class="fa-solid fa-envelope"></i>
                    <span>
                        <a href="#" class="footer_text footer_link">info@viivue.com</a>
                    </span>
                </li>
            </ul>

            <ul class="footer_social_network">
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
        </div>
    </div>
</div>

<hr>

<div class="after_hr flex-between flex-reverse">
    <span class="footer_text">Copyright © 2023. All rights reserved.</span>
    <div class="rules flex">
        <div class="term-of-use">
            <a href="#" class="footer_text footer_link">Term of Use</a>
        </div>
        <div class="policy">
            <a href="#" class="footer_text footer_link">Privacy Policy</a>
        </div>
    </div>
</div>
</div>`;

$("footer.footer").html(footerString);
$("head").append('<link rel="stylesheet" type="text/css" href="../css/footer.css">');
