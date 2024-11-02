
document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector("main");
    mainContent.style.opacity = 0; 
    mainContent.style.transform = "translateY(-20px)"; 

    setTimeout(() => {
        mainContent.style.transition = "opacity 0.5s ease, transform 0.5s ease"; 
        mainContent.style.opacity = 1; 
        mainContent.style.transform = "translateY(0)";
    }, 300); 
});


const buttons = document.querySelectorAll("button, .cta-button"); 

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.classList.add("pulse-button"); 
    });

    button.addEventListener("mouseleave", () => {
        button.classList.remove("pulse-button"); 
    });
});


document.addEventListener("scroll", () => {
    const projectItems = document.querySelectorAll(".project-item"); 

    projectItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) { 
            item.style.opacity = 1; 
            item.style.transform = "translateY(0)"; 
        } else {
            item.style.opacity = 0; 
            item.style.transform = "translateY(20px)"; 
        }
    });
});


document.querySelectorAll(".project-item").forEach(item => {
    item.style.opacity = 0; 
    item.style.transform = "translateY(20px)"; 
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
});






