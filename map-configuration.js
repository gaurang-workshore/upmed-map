// Import GSAP and ScrollTrigger if you haven't already

// Set up ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Create a timeline for the animation
const animationTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_intro",
    start: "top 30%", // Adjust the start value to control when the animation starts
    end: "top 70%",   // Adjust the end value to control when the animation ends
    scrub: 0.5,       // Adjust the scrub value to make the animation slower and smoother
  },
});

animationTimeline.to(".section_intro", {
  padding: "0",
  ease: "none", // Change the ease mode to "none" for linear animation
});

animationTimeline.to(".cta41_component", {
  borderRadius: "0",
  ease: "none", // Change the ease mode to "none" for linear animation
}, 0);

animationTimeline.to(".intro", {
  maxWidth: "100vw",
  width: "100%", // Corrected property name
  ease: "none", // Change the ease mode to "none" for linear animation
}, 0);
