gsap.from(".hero h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  delay: 0.5
});
gsap.from(".hero h4", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power2.out"
});
gsap.from(".hero p, #ourservices", {
  opacity: 0,
  y: 20,
  duration: 1,
  ease: "power2.out",
  delay: 1
});

