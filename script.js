const ratingButtons = document.querySelectorAll(".rounded-full");
const submitBtn = document.querySelector(".btn");
const component = document.querySelector(".component");
const modal = document.querySelector(".modal");
const selected = document.getElementById("selected");

//console.log(ratingButtons);
ratingButtons.forEach((ratingBtn) => {
  ratingBtn.addEventListener("click", () => {
    ratingBtn.classList.add("active");
    //console.log(ratingBtn.innerHTML)


    selected.innerHTML = ratingBtn.innerHTML;
  });
});

// modal default style ( not displayed)
modal.style.display = "none";

/*on click button function */
submitBtn.addEventListener("click", () => {
  component.style.display = "none";
  modal.style.display = "initial";
});
