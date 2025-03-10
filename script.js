function createHTMLList(liste){

    let htmlElements = liste.map((listItem) => `<li>${listItem}</li>`)
    //console.log(htmlElements)
    let flattenedList = htmlElements.join("")
    //console.log(flattenedList)
    let ergebnis = `<ul>${flattenedList}</ul>`
    return ergebnis
} 

function setListContent(){
    let listDiv = document.getElementById("liste")
    let content = createHTMLList(my_list)
    listDiv.innerHTML = content
}