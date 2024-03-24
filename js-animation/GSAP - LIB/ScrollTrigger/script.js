gsap.from("#page-1 #circle", {
    scale:0,
    delay:1,
    duration:2,
    rotate:720
})


gsap.from("#page-2 #circle", {
    scale:0,
    delay:1,
    duration:2,
    rotate:720,
    scrollTrigger: {
        trigger:"#page-2 #circle",
        scroller:"body",
        // markers:true,
        // start:"top:60%",
        // end:"top:30%",
        scrub:true
    }
})



gsap.from("#page-3 #circle", {
    scale:0,
    delay:1,
    duration:2,
    rotate:720,
    scrollTrigger: {
        trigger:"#page-3 #circle",
        scroller:"body",
        // markers:true,
        // start:"top:60%",
        // end:"top:30%",
        scrub:true
    }
})

