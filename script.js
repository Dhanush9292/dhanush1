//selecting popupbox overlay button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popupbox")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//cancle button
var canclepopup = document.getElementById("cancle-popup")

canclepopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select container add-book,add-title-input,book-author-input,book-descrption-input

    var container = document.querySelector(".container")
    var addbook= document.getElementById("add-book")
    var booktitleinput= document.getElementById("book-title-input")
    var bookauthorinput= document.getElementById("book-author-input")
    var bookdescriptioninput= document.getElementById("book-description-input")

//add function
    addbook.addEventListener("click", function(event){
    event.preventDefault()

    var div = document.createElement("div")
    div.setAttribute("class", "book-container")

    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h4>${bookauthorinput.value}</h4>
        <p>${bookdescriptioninput.value}</p>
        <button onclick="deletebook(event)">Delete</button>`

    container.append(div)

    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

//delete button 
function deletebook(event)
{
    event.target.parentElement.remove()
}
