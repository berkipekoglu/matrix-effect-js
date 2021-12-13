const matrix = document.querySelector(".matrix");

// function for generating a random character
function makeId() {
  let result = "";

  // Characters that can be randomly picked
  // You can add anyting you like

  const allCharacters =
    "0123456789ABCDEFGĞHIİJKLMNOÖPQRSŞTUÜVWXYZアァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌ0123456789ABCDEFGĞHIİJKLMNOÖPQRSŞTUÜVWXYZフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾぢっつづでとどなにぬねのはばぱひびぴ0123456789ABCDEFGĞHIİJKLMNOÖPQRSŞTUÜVWXYZふぶぷへべぺほぼぽまみむめもゃやゅゆょらりるれろゎわゐゑをんゔゕゖ゙゚゛゜ゝゞゟ";

  // returning a random character
  result += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length))

  return result
}

function generateText(){
    // setting the width and height of the rain
    const w = 50
    const h = 10

    // looping through all columns 
    for (let i = 0; i < w; i++){
        // adding a random timeout delay for each column
        const timeout = Math.floor(Math.random() * 10) * 1000
        let delay = 0

        // create the columns
        const column = document.createElement('p')

        // loop through all rows
        for(let i = 0; i < h; i++){
            // create the rowns
            const letter = document.createElement('span')

            // generate a random character and add it to the span / row
            letter.innerHTML = makeId()

            // add the spans / rows to one column
            column.appendChild(letter)

            // delay each character animation by 100 miliseconds
            // this creates the rain drop effect
            delay += 100
            column.children[i].style.animationDelay = delay + "ms"
        }

        // delay each column by a random number of seconds
        setTimeout( () => {
            matrix.appendChild(column)
        }, timeout )
    }
}

// start the rain on page load
generateText()