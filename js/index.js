var soundBtn =document.querySelector(".sound")
var copyBtn =document.querySelector(".copy")
var twitterBtn = document.querySelector(".twitter")

var quoteContent =document.querySelector(".quote")
var autherContent =document.querySelector(".auther")


var qoutes = [
    "“itakl tecayf testagel tatlayef.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“Everything you can imagine is real.”",

]
var authorName = [ "--Nelson Mandela",
    "― Badem samra",
    "― mohamed ramadan",
    "― refaie Eldsoki",
    "― El almany",
    "― Alb Elasd",
    "― Pablo Picasso"

]
function btnAct (){
do{
    let newQuote=    Math.floor(Math.random()*qoutes.length)
    console.log(newQuote )
    document.querySelector(".quote").innerHTML=qoutes[newQuote]
}while(false);

do{
    let newQuote=    Math.floor(Math.random()*authorName.length)
    console.log(newQuote )
    document.querySelector(".auther").innerHTML=authorName[newQuote]
}while(false);


    }

 
    soundBtn.addEventListener('click', function() {
   
      
    let utterance = new SpeechSynthesisUtterance(`${quoteContent.innerText} by ${autherContent.innerText}` );
    speechSynthesis.speak(utterance);
  
  });

   
  copyBtn.addEventListener('click', function() {
   
      navigator.clipboard.writeText(quoteContent.innerText)
   
  
  });

  twitterBtn.addEventListener('click', function() {
   let tweetUrl = `https://twitter.com/intent/tweet?url =${quoteContent.innerText}`;
   window.open(tweetUrl, "_blank");
//    twitterBtn.addEventListener("click", () => {
//     let tweetUrl = https://twitter.com/intent/tweet?url = ${quote.innerHTML};
//     window.open(tweetUrl, "_blank")
// })

});