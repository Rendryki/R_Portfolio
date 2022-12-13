var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
        })

const item = document.querySelectorAll("[data-animation]");
const animeScroll = () => {
const windowTop = window.pageYOffset + window.innerHeight * 0.75 ;

item.forEach((element) => {
    if (windowTop > element.offsetTop) {
    element.classList.add("animate");
    } else {
    element.classList.remove("animate");
    }
});
};

window.addEventListener("scroll", ()=>{
animeScroll();
})



