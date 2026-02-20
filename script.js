function nextPage(url){
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = url;
  }, 500);
}

function typeEffect(el, text, speed){
  let i = 0;
  function typing(){
    if(i < text.length){
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

window.onload = () => {
  document.body.style.opacity = "1";
};

function startExperience(){
  localStorage.setItem("musicPlaying", "true");
  nextPage("story.html");
}
