const inputUIElement = document.getElementById('inputUI')

var textNodes = [
    {
        id: 1,
        options: [
            {
                id:1,
                text: "walk away",
                exitid: 1
            },
            {
                id: 2,
                text: "Say: Not quite, I'm more of a nomad.",
                exitid: 2
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
          button.classList.add('btn' + option.id)
          /*button.addEventListener('click', () => selectOption(option))*/
          inputUIElement.appendChild(button)
      })
}

ShowNextScene(1)