// inventory sizing on window resize
function SetSize() {
    let chatViewSize = document.getElementById('chatView').getBoundingClientRect(),
    inventoryButtonElement = document.getElementById('inventoryButton'),
    inventoryButtonSize = inventoryButtonElement.getBoundingClientRect();

    inventoryButtonElement.innerHTML = `
        <div class="inventoryIcon"></div>
        <div id="inventory" style="height: ${chatViewSize.height - inventoryButtonSize.height*0.7}px">
            <button class="invItem">some text</button>
        </div>
        <div id="inventoryHoverBridge" style="height: ${inventoryButtonSize.height*0.7}px">
    `
}

window.addEventListener('resize', function() {
    SetSize()
}, true);

SetSize()

let inventoryElement = document.getElementById('inventory')
const inventoryContents = []

function UpdateInventory(inventoryContents, inventoryElement) {
    while (inventoryElement.firstChild) {
        inventoryElement.removeChild(inventoryElement.firstChild)
    }

    inventoryContents.forEach(item => {
        let customhtml = ''
        if (item.customhtml) {
            customhtml = item.customhtml
        }
        inventoryElement.insertAdjacentHTML('beforeend', `
            <button class="invItem"><h3>${item.name}</h3><p>${item.discription}</p>${customhtml}</button>
        `)
    });
}

UpdateInventory(inventoryContents, inventoryElement)

export { inventoryContents, UpdateInventory}