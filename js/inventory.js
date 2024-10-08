let chatViewSize = document.getElementById('chatView').getBoundingClientRect(),
inventoryButtonElement = document.getElementById('inventoryButton'),
inventoryButtonSize = inventoryButtonElement.getBoundingClientRect();

inventoryButtonElement.innerHTML = `
    <div class="inventoryIcon"></div>
    <div id="inventory" style="height: ${chatViewSize.height - inventoryButtonSize.height*0.7}px">
        <button class="invItem">some text</button>
    </div>
`