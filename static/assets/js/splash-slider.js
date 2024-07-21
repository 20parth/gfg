let [a, b] = document.querySelectorAll(".splash-img");
console.log(a, b);

let imgPrefix = ["/assets/imgs/slider/"];
let imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
let n = imgs.length;
let i = 0;
let tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });
tl.to(a, { x: "-100%", duration: 1 });
tl.to(
  b,
  {
    x: "0%",
    duration: 1,
    onComplete: () => {
      i++;
      console.log(i);
    },
  },
  "<"
);
tl.set(a, {
  x: "0%",
  onComplete: () => {
    a.style.backgroundImage = `url(${imgPrefix + imgs[(i) % n]})`;
  },
});
tl.set(
  b,
  {x: "100%" ,
  onComplete: () => {
    b.style.backgroundImage = `url(${imgPrefix + imgs[(i + 1) % n]})`;
  },}
);
