// Preparation

// select the dom elements

const formEl = document.querySelector("form")
const submitEl = document.querySelector(".addTaskBtn")
const listEl = document.getElementById("list")
const removeBtnEl = document.querySelector(".removeTaskBtn")
const checkBoxEl = document.querySelector(".checkbox")
const checkMarkEl = document.querySelector(".checkmark")

// append a list item to the listEl once the submitEl gets clicked

submitEl.addEventListener("click", (e) => {
   e.preventDefault() // prevents the form default

   // call the function to add the user input on the page
   renderLi()

   formEl.reset()

})










// FUNCTIONS

function renderLi() {
   // save the user input into a variable
   const toDoThing = document.querySelector("input").value

   // 👇🏻 add the toDoThing inside the listEl

   //👉🏻 initialize a variable that defines the needed markup

   const markup = `<li class="d-flex gap-2 mb-3">
                    <div class="checkbox">
                      <span class="checkmark"><i class="fa-solid fa-check"></i></span>
                    </div>
                    <span class="task">${toDoThing}</span>
                    <span class="removeTaskBtn">
                      <i class="fa-solid fa-xmark"></i>
                    </span>
                  </li>`

   //👉🏻 insert the markup on the dom inside the listEl

   listEl.innerHTML += markup

   addEventListenerClick()

   const liCollection = listEl.children

   for (let index = 0; index < liCollection.length; index++) {
      const thisLi = liCollection[index];
      const removeBtn = thisLi.querySelector(".removeTaskBtn")
      console.log(removeBtn);
      removeBtn.addEventListener("click", function () {
         console.log(typeof (thisLi), thisLi);

         thisLi.remove()
      })

   }

}


function addEventListenerClick() {

   const liArray = listEl.children

   // change the checkmark color to white once the checkbox is clicked and viceversa

   for (let index = 0; index < liArray.length; index++) {
      const thisLi = liArray[index];
      const checkbox = thisLi.querySelector(".checkbox")

      const checkmark = checkbox.querySelector(".checkmark")
      checkbox.addEventListener("click", function () {

         if (!checkmark.classList.contains("text-white")) {
            checkmark.classList.add("text-white");
         } else {
            checkmark.classList.remove("text-white");
         }
      })
   }
}