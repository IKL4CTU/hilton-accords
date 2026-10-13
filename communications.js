
"use strict";

// HILTON ACCORDS
// DEPARTMENT OF COMMUNICATIONS

const briefingButton =
    document.getElementById("briefingButton");

const briefingOutput =
    document.getElementById("briefingOutput");

const inquiryButton =
    document.getElementById("inquiryButton");

const inquiryTopic =
    document.getElementById("inquiryTopic");

const inquiryOutput =
    document.getElementById("inquiryOutput");

// OFFICIAL PRESS BRIEFINGS

const briefings = [
    {
        title: "Statement on Government Transparency",
        message:
            "The Hilton Accords remains committed to " +
            "the highest standards of transparency. " +
            "All information approved for disclosure " +
            "has been disclosed. Any information not " +
            "disclosed has not been approved for disclosure."
    },
    {
        title: "Statement Concerning Director Hefty",
        message:
            "The Department acknowledges questions " +
            "regarding Director Hefty's simultaneous " +
            "leadership of multiple government agencies. " +
            "An independent review was completed by " +
            "Director Hefty. The findings are conclusive."
    },
    {
        title: "Statement on the Secretary of State",
        message:
            "The Office of the Secretary of State " +
            "remains fully operational. The identity " +
            "and location of the Secretary remain " +
            "undisclosed. This should not be interpreted " +
            "as evidence that the Secretary is missing."
    },
    {
        title: "Statement on National Information Policy",
        message:
            "The Department has received continued " +
            "requests for clarification concerning " +
            "Google Is Inyalowda. Mi pensa you should " +
            "educate yourself. No further statement " +
            "will be issued at this time."
    },
    {
        title: "Statement on Recent Allegations",
        message:
            "The Office of Communications categorically " +
            "denies all allegations not previously " +
            "acknowledged. Any allegations already " +
            "acknowledged remain under review by the " +
            "appropriate government authority, " +
            "which is most likely Director Hefty."
    }
];

let briefingNumber = 0;

briefingButton.addEventListener("click", function() {
    const briefing =
        briefings[briefingNumber % briefings.length];

    briefingNumber++;

    briefingOutput.hidden = false;
    briefingOutput.replaceChildren();

    const heading = document.createElement("h4");
    heading.textContent = briefing.title;

    const reference = document.createElement("p");
    reference.textContent =
        "PRESS BRIEFING HA-COM-PB-" +
        String(briefingNumber).padStart(3, "0");

    const statement = document.createElement("p");
    statement.textContent = briefing.message;

    const signature = document.createElement("p");
    signature.textContent =
        "Issued by Director Jay, Department of Communications.";

    briefingOutput.append(
        heading, reference, statement, signature
    );
});

// PUBLIC INFORMATION REQUESTS

const inquiryResponses = {
    general:
        "The Department thanks you for your interest " +
        "in government affairs. Your question has been " +
        "referred to the appropriate office. " +
        "That office has not requested your question.",

    secretary:
        "I can neither confirm nor deny without the " +
        "express written permission of the Secretary " +
        "of State. The Secretary has not provided " +
        "such permission.",

    hefty:
        "Director Hefty has reviewed all available " +
        "evidence concerning Director Hefty and " +
        "determined that Director Hefty has acted " +
        "with complete propriety.",

    google:
        "Mi pensa you should educate yourself. " +
        "Google Is Inyalowda. That's why they " +
        "no pensa, sasa ke?",

    classified:
        "Your request concerns restricted information. " +
        "Please consult the Classified Archives. " +
        "The Department of Communications accepts " +
        "no responsibility for what happens next."
};

let inquiryNumber = 0;

inquiryButton.addEventListener("click", function() {
    inquiryNumber++;

    const topic = inquiryTopic.value;
    const response = inquiryResponses[topic];

    inquiryOutput.hidden = false;
    inquiryOutput.replaceChildren();

    const heading = document.createElement("h4");
    heading.textContent = "OFFICIAL GOVERNMENT RESPONSE";

    const reference = document.createElement("p");
    reference.textContent =
        "INQUIRY REFERENCE: HA-COM-REQ-" +
        String(inquiryNumber).padStart(3, "0");

    const statement = document.createElement("p");
    statement.textContent = response;

    const status = document.createElement("p");
    status.textContent =
        "STATUS: REVIEW COMPLETED — NO FURTHER ACTION.";

    inquiryOutput.append(
        heading, reference, statement, status
    );
});

console.log("Hilton Accords Communications Office online.");
