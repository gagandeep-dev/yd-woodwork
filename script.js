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

gsap.utils.toArray(".gallery-car").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: i * 0.2,
    ease: "power2.out"
  });
});

gsap.utils.toArray(".helpdesk-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    opacity: 0,
    scale: 0.9,
    duration: 1,
    delay: i * 0.3,
    ease: "back.out(1.7)"
  });
});


