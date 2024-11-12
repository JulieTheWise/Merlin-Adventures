const inputUIElement = document.getElementById('inputUI')
const textBoxElement = document.getElementById('text')
const inventoryElement = document.getElementById('inventory')
import { inventoryContents, UpdateInventory } from "./inventory.js"

var textNodes = null

//fetch the plot json
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
            if (exitText.class == "invAdd") {
                exitText.text.forEach(currentInvItem => {
                    inventoryContents.push(currentInvItem)
                })
                
                console.log(exitText.text)
                console.log(inventoryContents)
                UpdateInventory(inventoryContents, inventoryElement)
            }
            else {
                text.innerHTML = exitText.text
                text.classList.add(exitText.class)
                textBoxElement.appendChild(text)
            }
        })
    }
    ShowNextScene(exitId)
}

function startGame() {
    selectOption(textNodes[0].options[0])
}