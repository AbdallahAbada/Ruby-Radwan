// SELECT ELEMENTS
const contactLink = document.querySelector('.contact');
const contactSection = document.querySelector('#contact')

// EVENT LISTNER
contactLink.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(document)
    $(document).scrollTop(600)
})

$("#contact").click(function () {
    // any value you need
});