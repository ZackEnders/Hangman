var keyPress = document.getElementById('keyPress')
var startButton = document.getElementById('startButton')
var guesses = document.getElementById('guesses');
var mainBox = document.getElementById('mainBox');
var hint = document.getElementById('hint');
var notAletter = document.getElementById('notAletter')
var words = ['DOG','APPLE','TRUCK','BASKET','PHONE','SUBWAY']
var hints = ['An animal that loves to play fetch.','Falls from a tree and you can eat it.','Vehicle bigger than a car.','Something you can carry stuff in.','You use this device everyday.',`Public transportation that's underground.`]
var randomWord = Math.floor(Math.random() * words.length)
var wrongGuess = [];
var answerDisplay = [];
var answer = [];
var hintsDisplay = [];
var key;

console.log()

startButton.addEventListener('click', function(){
answer = words[randomWord]
hintsDisplay.push(hints[randomWord])
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
			}
	}
	if(!bool){
		for(var a = 0; a < answer.length; a++){
				if (answer[i] != key && /[^a-zA-Z]/.test(key) ){
					return
				}else if ((key == 'META') || (key == 'ALT') || (key == 'CONTROL') || (key == 'BACKSPACE') || (key == 'ENTER') || (key == 'SHIFT') || (key == 'TAB') || (key == ' ')){
						
					return;
				}else if (answer[i] != key){
					wrongGuess.push(key + ' ');
					guesses.innerHTML = wrongGuess.join(' ')
					return
				}
			}			
					notAletter.innerHTML = '';
	}

})

})

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}


// var Game = {


// 	startBtn: function(){
// 		document.addEventListener('keydown', function(x){

// 	key = x.key.toUpperCase()
// 	if(/[^a-zA-Z]/.test(key) || (key == 'META') || (key == 'ALT') || (key == 'CONTROL') || (key == 'BACKSPACE') || (key == 'ENTER') || (key == 'SHIFT') || (key == 'TAB') || (key == ' ')){

// 		notAletter.innerHTML = key + ` is not a letter!`;

// 	}else{
// 		keyPress.innerHTML = key ;
// 		notAletter.innerHTML = '';
// 	}
// 	for(var i = 0; i < answer.length; i++){
// 			if(key == answer[i]){
// 				answerDisplay[i] = key
// 				mainBox.innerHTML = answerDisplay.join(' ')
// 				return
// 			}
// 	}

// 	for(var a = 0; a < answer.length; a++){
// 			if (answer[i] != key && /[^a-zA-Z]/.test(key) ){
// 				return
// 			}else if ((key == 'META') || (key == 'ALT') || (key == 'CONTROL') || (key == 'BACKSPACE') || (key == 'ENTER') || (key == 'SHIFT') || (key == 'TAB') || (key == ' ')){
// 					return
// 			}else if (answer[i] != key){
// 				wrongGuess.push(key + ' ');
// 				guesses.innerHTML = wrongGuess.join(' ')
// 				return
// 			}
// 		}	
				
// 				notAletter.innerHTML = '';

// })
// 	}
// }


console.log(randomWord)
console.log(hintsDisplay)
console.log(answer)
console.log(words[randomWord].split(''))






console.log(answer.length);




// document.addEventListener('keydown', function(x){
// 	// var array = 'dog';
// 	if(/[^a-zA-Z]/.test(x.key) || (x.key === 'Meta') || (x.key === 'Alt') || (x.key === 'Control') || (x.key === 'Backspace') || (x.key === 'Enter') || (x.key === 'Shift') || (x.key === 'Tab') || (x.key === ' ')){

// 		notAletter.innerHTML = x.key + ` is not a letter!`;

// 	}else{
// 		// for(var i = 0; i < .length; i++){
// 		// 	if (array[i] == x.key){
// 		// 		console.log('g')
// 		// }
// 	// }
// 		keyPress.innerHTML = x.key ;
// 		notAletter.innerHTML = '';
// 	}
// })

// replaceAt()












// document.addEventListener('keydown', function(x){
// 			if(/[^a-zA-Z]/.test(x.key) || (x.key === 'Meta') || (x.key === 'Alt') || (x.key === 'Control') || (x.key === 'Backspace') || (x.key === 'Enter') || (x.key === 'Shift') || (x.key === 'Tab') || (x.key === ' ')){
						
// 				notAletter.innerHTML = x.key + ` is not a letter!`;
// 			}else{
// 				wrongGuess.push(x.key + ' ');
// 				guesses.innerHTML = wrongGuess.join('');
// 				notAletter.innerHTML = '';
// 				console.log(x)
// 			}
// 		})




