let my_list = []; // Leere Liste, um Elemente hinzuzufügen

function createHTMLList(liste) {
    let htmlElements = liste.map((listItem) => `<li>${listItem}</li>`);
    let flattenedList = htmlElements.join("");
    let ergebnis = `<ul>${flattenedList}</ul>`;
    return ergebnis;
}

function setUserInputList() {
    const userInput = document.getElementById("userInput").value;
    const listItems = userInput.split(",").map((item) => item.trim());
    my_list = listItems; // Ersetzt die aktuelle Liste mit der neuen Eingabe
    updateListDisplay();
}

function addItemToList() {
    const newItem = document.getElementById("singleItemInput").value.trim();
    if (newItem) {
        my_list.push(newItem);
        updateListDisplay();
    }
}

function removeLastItem() {
    if (my_list.length > 0) {
        my_list.pop();
        updateListDisplay();
    }
}

function updateListDisplay() {
    const listDiv = document.getElementById("liste");
    const content = createHTMLList(my_list);
    listDiv.innerHTML = content;
}