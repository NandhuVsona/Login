let nextBtn = document.querySelectorAll(".nextbtn");
let prevBtn = document.querySelectorAll(".pretbtn");
let formPage = document.querySelectorAll(".form-page");
let progress_line = document.querySelector(".progress-line");
let progress_Step = document.querySelectorAll(".progress-steps");
let currentPage = 0;

nextBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    currentPage++;
    progress_Step[currentPage].classList.add('active')
    updatePage();
  });
});

prevBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    progress_Step[currentPage].classList.remove('active')
    currentPage--;
    updatePage();
  });
});

function updatePage() {
  formPage.forEach((form) => {
    form.classList.remove("active");
  });
  formPage[currentPage].classList.add("active");
  progress_line.style.width = currentPage *50 + 'px';
  
}

//-----------
