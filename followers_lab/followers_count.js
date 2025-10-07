let count = 0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function checkCountValue() {
    if (count === 10) {
        alert("Your IG  gained 10 followers!");
    } else if (count === 20) {
        alert("Your account gained 20 followers!");
    }
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}