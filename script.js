

let body = document.body
let toggle_btn = document.getElementsByClassName('slider')

// toggle_btn.addEventListner('click', toggle_theme);

function toggle_theme(e) {
    console.log(e)
    // document.body.classList.toggle("dark");
    setTimeout(()=>{
        document.body.classList.toggle("dark");
    }, 300)
}