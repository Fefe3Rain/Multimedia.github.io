function changeBackground() {
    const colors = ['#f4f4f4', '#dfe6e9', '#ffeaa7', '#fab1a0', '#a29bfe'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function addItem() {
    const newItem = document.createElement('li');
    const itemText = prompt("Enter a new list item:");
    if (itemText) {
        newItem.textContent = itemText;
        document.getElementById('itemList').appendChild(newItem);
    }
}
