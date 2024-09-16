const scroll = new LocomotiveScroll({
    el: document.querySelector('.cont'),
    smooth: true
});

var timeout;

function mouseSkew(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", (dets)=>{

        clearTimeout(timeout);

        xprev = dets.clientX;
        xprev = dets.clientY;
        

        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        xscale = gsap.utils.clamp(.8,1.2, xdiff);
        yscale = gsap.utils.clamp(.8,1.2, ydiff);


        mouseMove(xscale, yscale);
        
        
        timeout = setTimeout(()=>{
            document.querySelector(".mouse").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`
        },100)
    })
}

function mouseMove(xscale, yscale){
window.addEventListener("mousemove", (dets)=>{
    document.querySelector(".mouse").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`
    document.querySelector(".mouse").style.opacity = 1;
})
}


function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from(".nav", {
        y: "-10",
        opacity : 0,
        duration : 1.5,
        ease : Expo.easeInOut
    })
    .to(".boundElem",{
        y:0,
        ease: Expo.easeInOut,
        duration : 1.5,
        delay : -1,
        stagger: .2
    })
    tl.from(".herofooter", {
        y: "-10",
        opacity : 0,
        duration : 1.5,
        delay: -1,
        ease : Expo.easeInOut
    })

}


mouseMove();
mouseSkew()
firstPageAnim();

document.querySelectorAll(".headings").forEach((headings)=>{

    var rotate = 0;
    var diffrot = 0;
  
    headings.addEventListener("mouseleave", (dets)=>{

    gsap.to(headings.querySelector("img"),{
        opacity: 0,
        ease : Power3,
        duration : 0.5,
        })
    });

    headings.addEventListener("mousemove", (dets)=>{

        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        
        gsap.to(headings.querySelector("img"),{
            opacity: 1,
            ease : Power3,
            left : dets.clientX,
            rotate : gsap.utils.clamp(-20,20, diffrot)
        })
    });
});

let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes")

setInterval(() => {
    let setTime = new Date();
    hours.innerText = setTime.getHours();
    minutes.innerText = setTime.getMinutes();
}, 1000);
