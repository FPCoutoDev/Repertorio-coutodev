
document.addEventListener('DOMContentLoaded', function() {
const subscribeBotton = document.getElementById("subscribe");
const audio = new Audio('/Código/assets/audio/audio (mp3cut.net).mp3')
const bannerGojo = document.getElementById('bannergojo')
const replacementImageSrc = '/Código/assets/images/replaceimage.png';
subscribeBotton.addEventListener('click' ,function(){

subscribeBotton.disabled = true;

audio.addEventListener('ended', function() {

  window.open('https://github.com/FPCoutoDev', '_blank');
});
audio.play();
bannerGojo.style.opacity = '0'
setTimeout(() => {
  bannerGojo.src = replacementImageSrc; // troca imagem
  bannerGojo.style.opacity = '1';       // volta a aparecer com fade-in
}, 500)
subscribeBotton.style
})
})