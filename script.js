var input = document.querySelector('#input');
var characterCount = document.querySelector('#characters-count');
var wordCount = document.querySelector('#words-count');
var sentenceCount = document.querySelector('#sentences-count');
var paragraphCount = document.querySelector('#paragraphs-count')

input.addEventListener('input', function () {
    if (input.value) {

        //character count
        characterCount.innerHTML = input.value.length;

        //word count
        wordArray = input.value.split(" ").filter((word) => word != "");
        wordCount.innerHTML = wordArray.length;

        //setence count
        sentenceArray = input.value.split(/[.!?]/)
        sentenceCount.innerHTML = sentenceArray.length - 1;

        //paragraph count
        paragraphArray = input.value.split("\n\n").filter((emptySpace) => emptySpace.trim() != "");
        paragraphCount.innerHTML = paragraphArray.length;
    }
    else {
        characterCount.innerHTML = 0;
        wordCount.innerHTML = 0;
        sentenceCount.innerHTML = 0;
        paragraphCount.innerHTML = 0;
    }
})