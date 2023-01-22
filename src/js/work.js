const btn = document.getElementById("js-addmore-btn")
const cardElements = document.querySelectorAll(".card");
btn.addEventListener("click", function () {
  // Hien thi tat ca cac card bi an
  cardElements.forEach((item) => {
    item.classList.remove("js-showmore");
  });

  // Chinh sua thuoc tinh display cua button => display: none
  btn.style.display = 'none'
});
