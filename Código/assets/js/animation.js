const reveals = document.querySelectorAll('.reveal')
console.log(reveals)
const observer = new IntersectionObserver((entrada) => {
    for(let i = 0; i < entrada.length;i++) {
    let entrou = entrada[i];

    if (entrou.isIntersecting) {
    entrou.target.classList.add('visible');
  }
    }
});
for (let i = 0; i < reveals.length; i++) {
  observer.observe(reveals[i]);
}