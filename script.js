// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Parallax background animation
gsap.to(".parallax-bg", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
        trigger: ".landing-page",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Landing page content fade in
gsap.fromTo(".landing-content", 
    { opacity: 0, y: 50 },
    { 
        opacity: 1, 
        y: 0, 
        duration: 1.5, 
        ease: "power2.out",
        delay: 0.5
    }
);

// Character section animations - Hiccup & Toothless
ScrollTrigger.create({
    trigger: ".character-hiccup",
    start: "top 80%",
    end: "bottom 20%",
    onEnter: () => {
        // Actor image flies in from left
        gsap.fromTo(".character-hiccup .actor-image", 
            { x: -300, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
        
        // Character image flies in from right
        gsap.fromTo(".character-hiccup .character-image", 
            { x: 300, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
        );
        
        // Character info fades in
        gsap.fromTo(".character-hiccup .character-info", 
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", delay: 0.4 }
        );
    },
    onLeave: () => {
        // Trigger exit video animation
        const video = document.querySelector(".character-hiccup .exit-video");
        video.currentTime = 0;
        video.play();
        
        gsap.fromTo(video, 
            { left: "-100%", opacity: 0 },
            { 
                left: "110%", 
                opacity: 1, 
                duration: 3, 
                ease: "power1.inOut",
                onComplete: () => {
                    video.pause();
                    gsap.set(video, { opacity: 0, left: "-100%" });
                }
            }
        );
    }
});

// Character section animations - Astrid & Stormfly
ScrollTrigger.create({
    trigger: ".character-astrid",
    start: "top 80%",
    end: "bottom 20%",
    onEnter: () => {
        // Actor image flies in from left
        gsap.fromTo(".character-astrid .actor-image", 
            { x: -300, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
        
        // Character image flies in from right
        gsap.fromTo(".character-astrid .character-image", 
            { x: 300, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
        );
        
        // Character info fades in
        gsap.fromTo(".character-astrid .character-info", 
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", delay: 0.4 }
        );
    },
    onLeave: () => {
        // Trigger exit video animation
        const video = document.querySelector(".character-astrid .exit-video");
        video.currentTime = 0;
        video.play();
        
        gsap.fromTo(video, 
            { left: "-100%", opacity: 0 },
            { 
                left: "110%", 
                opacity: 1, 
                duration: 3, 
                ease: "power1.inOut",
                onComplete: () => {
                    video.pause();
                    gsap.set(video, { opacity: 0, left: "-100%" });
                }
            }
        );
    }
});

// Final banner animation
ScrollTrigger.create({
    trigger: ".final-banner",
    start: "top 80%",
    onEnter: () => {
        gsap.fromTo(".banner-content h1", 
            { opacity: 0, scale: 0.5, rotationY: 180 },
            { 
                opacity: 1, 
                scale: 1, 
                rotationY: 0, 
                duration: 1.5, 
                ease: "back.out(1.7)" 
            }
        );
    }
});

// Smooth scroll behavior
gsap.to(window, {
    duration: 0.5,
    scrollTo: { y: 0, autoKill: false },
    ease: "power2.inOut"
});

// Add scroll-based text animations
gsap.utils.toArray(".character-quote").forEach(quote => {
    gsap.fromTo(quote, 
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: quote,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Performance optimization - refresh ScrollTrigger on resize
window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
});

// Preload videos for smoother playback
document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll(".exit-video");
    videos.forEach(video => {
        video.load(); // Preload video metadata
    });
});
