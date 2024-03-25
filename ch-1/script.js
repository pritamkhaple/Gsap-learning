// gsap.to(".box",{
//     x:299,
//     duration:2,
//     delay:1,
//     backgroundColor:"yellow",
//     rotate:360,
//     scale:0.5,
//     yoyo:true,
//     repeat:-1,
//     opacity: 1,
// })

// gsap.to("h1",{
//     x:200,
//     duration:1,
//     stagger:1,
//     yoyo:true,
//     repeat:-1,
//     opacity: 1,
// })

var tl = gsap.timeline();

tl.to("h1",{
    // x:10,
    y:10,
    rotation:10,
    duration:1,
    repeat:-1,
    // rotate:60,
    delay:1
})

tl.to("h2",{
    x:500,
    duration:1,
    repeat:-1,
    delay:1
})

tl.to("h3",{
    x:400,
    duration:1,
    repeat:-1,
    delay:1
})