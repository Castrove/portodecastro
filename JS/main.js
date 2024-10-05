const roleTxt = document.getElementById('roles');
const roles = ["Computer Engineer", "Developer", "Illustrator"]
let i = 0;

window.onload = () => {
    const selection = document.querySelectorAll(".selection a");

    for (let i=0; i<selection.length; i++){
        const page_select = selection[i];
        const page_btn = page_select.getAttribute("href");
        
        page_select.addEventListener('click', () => {
            document.querySelector('.is-active').classList.remove('is-active');
            document.querySelector('.current').classList.remove('current');
            document.querySelector(page_btn).classList.add('is-active');
            document.querySelector(`a[href='${page_btn}'`).classList.add('current');
        })
    }
}

let roleFlipper = setInterval(() => {
    if (document.getElementById("header").classList.contains("is-active")) {
        i = i % roles.length;
        roleTxt.innerHTML = roles[i];
        i++;
    } else { clearInterval(roleFlipper); }
}, 5000);