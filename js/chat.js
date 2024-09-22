const inputUIElement = document.getElementById('inputUI')

fetch('../plots/plot.json')
.then((response) => response.json())
.then((json) => console.log(json))

var textNodes = [
    {
        id: 1,
        options: [
            {
                text: "testing testin",
                exitid: 2,
            },
            {
                text: "onother button",
                exitid: 3,
            }
        ],
        exitids: [
            {
                class: "narrator",
                text: "You Leave. <br> The End."
            },
            {
                class: "NPCChat",
                text: "Sounds like a good life"
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
    if (exitId <= 0) {
        return startGame()
    }
    /*
    state = Object.assign(state, option.setState)*/
    ShowNextScene(exitId)
}

function startGame() {
    ShowNextScene(1)
}

ShowNextScene(1)