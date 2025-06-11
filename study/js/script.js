const display = document.getElementById('display');
const button = document.getElementById('btn');
button.addEventListener('click',function(){
  const UserInput  = prompt('how old are you please!');
  if(UserInput !== null) {
    const utterance = new SpeechSynthesisUtterance(UserInput);
    utterance.lan = 'en-Us';
    utterance.rate = 1;
    utterance.pitch = 1;
   utterance
  }
})