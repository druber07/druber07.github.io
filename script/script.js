const navSlide = () => {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("navbar");
    
    

    burger.addEventListener('click', () =>{
        nav.classList.toggle('navbar-active{');
        alert("asd");
    });
}

const app = () =>{
    navSlide();
}
app()