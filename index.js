var keyPress = document.getElementById('keyPress')
var startButton = document.getElementById('startButton')
var guesses = document.getElementById('guesses');
var mainBox = document.getElementById('mainBox');
var hint = document.getElementById('hint');

document.addEventListener('keydown', function(x){
	if(/[^a-zA-Z]/.test(x.key) || (x.key === 'Meta') || (x.key === 'Alt') || (x.key === 'Control') || (x.key === 'Backspace') || (x.key === 'Enter') || (x.key === 'Shift') || (x.key === 'Tab') || (x.key === ' ')){

		console.log(`That isn't a letter!`);

	}else{
		keyPress.innerHTML = x.key 
	}
})

var wrongGuess = [];
var answerDisplay= [];
var answer = [];
var words = ['DOG','','TRUCK','BASKET','PHONE','SUBWAY']
var hints = ['An animal that loves to play fetch.','CAT','TRUCK','BASKET','PHONE','SUBWAY']
var randomWord = Math.floor(Math.random() * words.length)
answer.push(words[randomWord]);
console.log(randomWord)
console.log(answer)


for(var i = 0; i < answer.toString().split('').length; i++){
	answerDisplay.push('_');
}

mainBox.innerHTML = answerDisplay.join(' ');
console.log(answer.toString().split('').length);


var Game = {

	startBtn: function(){
		document.addEventListener('keydown', function(x){
			if(/[^a-zA-Z]/.test(x.key) || (x.key === 'Meta') || (x.key === 'Alt') || (x.key === 'Control') || (x.key === 'Backspace') || (x.key === 'Enter') || (x.key === 'Shift') || (x.key === 'Tab') || (x.key === ' ')){
						
				console.log(`That isn't a letter!`);

			}else{
				wrongGuess.push(x.key + ' ')
				guesses.innerHTML = wrongGuess.join('');
				console.log(x)
			}

		})
	}
}


















