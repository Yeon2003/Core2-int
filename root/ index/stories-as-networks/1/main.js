function toggleStyles() {
    var body = document.body;
    var biggerElements = document.querySelectorAll(".bigger");

    body.classList.toggle("black-background");

    if (body.classList.contains("black-background")) {
        biggerElements.forEach(function(element) {
            element.style.color = "white";
        });
    } else {
        biggerElements.forEach(function(element) {
            element.style.color = "black";
        });
    }
}