(function() {
var enter = document.querySelector('.enter');
var nickname = document.querySelector('.nickname');
var  bck = document.querySelector('.bck');
var hidden = document.querySelector('.hidden');
var h1 = document.querySelector('h1');



function enterSite() {
	//console.log('yup');
  if (nickname!= null) {
    bck.style.backgroundColor = "lightgrey";
    h1.style.paddingTop = "5%";
    enter.style.visibility = "hidden";
    nickname.style.visibility = "hidden";
    hidden.style.visibility = "visible";

  }

}







enter.addEventListener('click', enterSite, false);
})();
