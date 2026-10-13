
const requestButton =
    document.getElementById("informationRequest");

const response =
    document.getElementById("secretaryResponse");

let requestCount = 0;

requestButton.addEventListener("click", function() {
    requestCount++;

    if (requestCount === 1) {
        response.textContent =
            "Your inquiry has been received. " +
            "The Secretary of State has declined to respond.";
    } else if (requestCount === 2) {
        response.textContent =
            "Your continued interest has been noted. " +
            "Further information remains unavailable.";
    } else {
        response.textContent =
            "FINAL DETERMINATION: Wouldn't you like to know. " +
            "This matter is now closed.";
    }
});
