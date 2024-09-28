const inputUIElement = document.getElementById('inputUI')
const textBoxElement = document.getElementById('text')

var textNodes = null

fetch('../plots/plot.json')
.then(function (response) {
    return response.json()
})
.then(function (obj) {
    console.log(obj)
    textNodes = obj
    startGame()
    })
.catch(function (error) {
    console.error(error)
})


/*
var textNodes = [
    {
        id: 1,
        options: [
            {
                text: "testing testin",
                exitid: 2,
                exitText: [
                    {
                        class: "NPCChat",
                        text: "You Leave. <br> The End."
                    },
                    {
                        class: "PCChat",
                        text: "har ahhr"
                    }
                ]
            },
            {
                text: "onother button",
                exitid: 3,
                exitText: null
            }
        ]
    },
    {
        id: 2,
        options: [
            {
                text: "the next one",
                exitid: 3
            }
        ]
    },
    {
        id: 3,
        options: [
            {
                text: "the third",
                exitid: 0
            }
        ]
    }
]
*/


function ShowNextScene(sceneNumber) {
    const textNode = textNodes.find(textNodes => textNodes.id === sceneNumber)

    while (inputUIElement.firstChild) {
        inputUIElement.removeChild(inputUIElement.firstChild)
    }

    textNode.options.forEach(option => {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        inputUIElement.appendChild(button)
    })
}

function selectOption(option) {
    const exitId = option.exitid
    const exitTexts = option.exitText
    if (exitId == 0) {
        return startGame()
    }

    if (exitTexts != null) {
        exitTexts.forEach(exitText => { 
            const text = document.createElement('p')
            text.innerHTML = exitText.text
            text.classList.add(exitText.class)
            textBoxElement.appendChild(text)
        })
    }
    ShowNextScene(exitId)
}

function startGame() {
    selectOption(textNodes[0].options[0])
}