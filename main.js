// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


// YOUR CODE GOES HERE
replaceAllButton.addEventListener("click", function () {
    let inputValue = findInput.value;
    let replaceValue = document.querySelector(".replace-input").value;

    for (let x = 0; x < rowElements.length; x++) {
        const currentRowElement = rowElements[x]
        const cellElements = getCellElements(currentRowElement)
        for (let y = 0; y < cellElements.length; y++) {
            const currentCellElement = cellElements[y]

            let cellsStrings = currentCellElement.innerHTML
            while (cellsStrings.includes(inputValue)) {
                cellsStrings = cellsStrings.replace(inputValue, replaceValue)
            }

            currentCellElement.innerHTML = cellsStrings
        }
    }

})
