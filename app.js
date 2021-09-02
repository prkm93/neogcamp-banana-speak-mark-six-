const textInput = document.querySelector('#text-input');
const btnTranslate = document.querySelector('#btn-translate');
const bananaConversion = document.querySelector('#banana-conversion');
const serverURL = 'https://api.funtranslations.com/translate/minion.json';

btnTranslate.addEventListener('click', clickHandler)

function clickHandler() {
    const inputText = textInput.value; // taking input

    // calling server 
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => bananaConversion.textContent = json.contents.translated) //output
    .catch(error => console.error(error))
}


function getTranslationURL(text) {
    return (`${serverURL}?text=${encodeURI(text)}`);
}