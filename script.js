const ratingButtons = document.querySelectorAll(".rounded-full");
const submitBtn = document.querySelector('.btn');
const component = document.querySelector(".component");
const modal = document.querySelector(".modal");
const selected = document.getElementById("selected");

//console.log(ratingButtons);
ratingButtons.forEach((ratingBtn, index0) => {
ratingBtn.addEventListener('click',() => {
    //console.log(index0);
    ratingButtons.forEach((ratingBtn, index1) => {
    //console.log(index1);
        if(index0 >= index1) {
            ratingBtn.classList.add("active");
        }else{
            ratingBtn.classList.remove("active"); 
        }
    });

    selected.innerHTML = ratingBtn.innerHTML;
}); 
});




// modal default style ( not displayed)
modal.style.display = "none";


/*on click button function */
submitBtn.addEventListener('click', () => {
    component.style.display = "none";
    modal.style.display="initial";
    
});

