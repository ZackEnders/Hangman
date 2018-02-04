var keyPress = document.getElementById('keyPress');
var startButton = document.getElementById('startButton');
var guesses = document.getElementById('guesses');
var mainBox = document.getElementById('mainBox');
var hint = document.getElementById('hint');
var notAletter = document.getElementById('notAletter');
var words = ['DOG','APPLE','TRUCK','BASKET','PHONE','SUBWAY'];
var hints = ['An animal that loves to play fetch','Falls from a tree','A vehicle bigger than a car','Something you can carry stuff in','You use this device everyday','Public transportation that is underground'];
var randomWord = Math.floor(Math.random() * words.length);
var wrongGuess = [];
var answerDisplay = [];
var answer = [];
var hintsDisplay = [];
var key;
var guessCounter = document.getElementById('guessCounter');
var guessLeft = 3;
	
startButton.addEventListener('click', function(){
	window.location.reload();
})
	guessCounter.innerHTML = guessLeft;
	answer = words[randomWord];
	hintsDisplay.push(hints[randomWord]);	
	hint.innerHTML = hintsDisplay;
	
		for(var i = 0; i < answer.toString().split('').length; i++){
			answerDisplay.push('_');
		}
	
	mainBox.innerHTML = answerDisplay.join(' ');

document.addEventListener('keydown', function(x){

	var bool = false;
	key = x.key.toUpperCase()

	if(/[^a-zA-Z]/.test(key) || (key == 'META') || (key == 'ALT') || (key == 'CONTROL') || (key == 'BACKSPACE') || (key == 'ENTER') || (key == 'SHIFT') || (key == 'TAB') || (key == ' ')){

		notAletter.innerHTML = key + ` is not a letter!`;

	}else{
		keyPress.innerHTML = key ;
		notAletter.innerHTML = '';
	}
		for(var i = 0; i < answer.length; i++){
			
			if(key == answer[i]){
				answerDisplay[i] = key
				mainBox.innerHTML = answerDisplay.join(' ')
				bool = true;
					if(answer === answerDisplay.join('')){
						setTimeout(function() {alert('WINNER!');});
						window.location.reload()
					}
			}
		}
	if(!bool){

		for(var a = 0; a < answer.length; a++){
				
			if (answer[i] != key && /[^a-zA-Z]/.test(key) ){
					
					return;
				
			}else if ((key == 'META') || (key == 'ALT') || (key == 'CONTROL') || (key == 'BACKSPACE') || (key == 'ENTER') || (key == 'SHIFT') || (key == 'TAB') || (key == ' ')){

					return;

			}else if (answer[i] != key){
				
				if (wrongGuess.length == 2){
					setTimeout(function(){alert('LOSER! TRY AGAIN.')})
					window.location.reload();
				}
					guessLeft--;
					guessCounter.innerHTML = guessLeft;
					wrongGuess.push(key + ' ');
					guesses.innerHTML = wrongGuess.join(' ')
					return	
			}
		}			
			notAletter.innerHTML = '';
	}
})
// console.log(words[randomWord].split(''));




















