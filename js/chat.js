const inputUIElement = document.getElementById('inputUI')

var textNodes = [
    {
        id: 1,
        options: [
            {
                text: "walk away adn do some more stuff to test the sytem when there is a lot of words",
                exitid: 1
            },
            {
                text: "Say: Not quite, I'm more of a nomad.",
                exitid: 2
            },
            {
                text: "hello test button",
                exitid: 2
            },
            {
                text: "yet another one this is the max tho dw",
                exitid: 3
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
          button.classList.add('btn')
          /*button.addEventListener('click', () => selectOption(option))*/
          inputUIElement.appendChild(button)
      })
}

ShowNextScene(1)