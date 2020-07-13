const transalate = document.querySelectorAll(".transalate")

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    transalate.forEach(element => {
        let speed = element.dataset.speed;
        element.getElementsByClassName.transform = `transalateY(${scroll * speed}px)`;
    })
})