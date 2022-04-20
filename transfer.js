
let left = document.getElementById("left")
let right = document.getElementById("right")


function leftNode() {
    for (const item of left.children) {
        if (item.children[0].checked) {
            right.appendChild(item)
        }
    }
}
function rightNode() {
    for (const item of right.children) {
        if (item.children[0].checked) {
            left.appendChild(item)
        }
    }
}