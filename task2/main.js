    const menubtn = document.getElementById("menu-btn");
    const navlinks = document.getElementById("nav-links");
    const menubtnIcon = menubtn.querySelectorAll("i");

    menubtn.addEventListener("click", (e) => {
        navlinks.classList.toggle("open");
    });

    const isOpen = navlinks.classList.contains("open");
    menubtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");


    navlinks.addEventListener("click", (e)=>{
            navlinks.classList.remove("open");
            menubtnIcon.setAttribute("class", "ri=-menu-line");
        });

    const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
    };
    scrollReveal().reveal(".content h1", {
        ...scrollRevealOption,
    });
    scrollReveal().reveal(".content h4", {
        ...scrollRevealOption,
        delay: 500
    });
    scrollReveal().reveal(".content h2,.content h6,.content form", {
        ...scrollRevealOption,
        delay: 1000
    });
    scrollReveal().reveal(".content p", {
        ...scrollRevealOption,
        delay: 1500
    });
    scrollReveal().reveal(".content .socials span", {
        ...scrollRevealOption,
        delay: 1500,
        interval: 500,
    });

