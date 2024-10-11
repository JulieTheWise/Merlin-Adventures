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

window.addEventListener('resize', function(event) {
    SetSize()
}, true);

SetSize()

let inventoryElement = document.getElementById('inventory'),
inventoryContents = [  
    {
        name: "The Greater Sword",
        discription: "Yeah, your sword is pretty great, but my sword will always be a little greater",
        costomhtml: '<img src="../src/image/greatersword.png" style="max-width: 100%;">',
    },
    {
        name: "A Water Bottle",
        discription: "A simple thing, but it keeps you hydrated",
    },
    
]

function UnpdateInventory(inventoryContents) {
    while (inventoryElement.firstChild) {
        inventoryElement.removeChild(inventoryElement.firstChild)
    }

    inventoryContents.forEach(item => {
        let costomhtml = ''

        if (item.costomhtml) {
            costomhtml = item.costomhtml
        }

        inventoryElement.insertAdjacentHTML('beforeend', `
            <button class="invItem"><h3>${item.name}</h3><p>${item.discription}</p>${costomhtml}</button>
            `)
    });
}

UnpdateInventory(inventoryContents)