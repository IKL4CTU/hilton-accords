
"use strict";

// HILTON ACCORDS — DEPARTMENT OF JUSTICE
// Fictional case management and appeals interface.

const caseDetails = document.getElementById("caseDetails");
const complaintResult = document.getElementById("complaintResult");
const appealResult = document.getElementById("appealResult");

const cases = {
    hefty: {
        number: "HA-DOJ-001",
        title: "The People v. Director Hefty",
        finding:
            "Director Hefty conducted an independent " +
            "investigation into allegations concerning " +
            "Director Hefty. Following a comprehensive " +
            "review of all evidence selected by the " +
            "investigating Director, no wrongdoing " +
            "was discovered.",
        status: "CLOSED — DIRECTOR EXONERATED"
    },

    coffee: {
        number: "HA-DOJ-002",
        title: "Unauthorized Coffee Procurement",
        finding:
            "The Department investigated allegations " +
            "of excessive coffee expenditure within " +
            "the Department of Armed Forces. " +
            "Director Hefty determined that the " +
            "purchases were essential to operational " +
            "readiness and national continuity.",
        status: "DISMISSED — PROCUREMENT JUSTIFIED"
    },

    secretary: {
        number: "HA-DOJ-003",
        title: "Inquiry into Secretary of State Identity",
        finding:
            "The Department received a petition seeking " +
            "disclosure of the Secretary of State's " +
            "identity. After consultation with the " +
            "Office of the Secretary of State, " +
            "the Department was advised to mind " +
            "its own business.",
        status: "RESTRICTED — NO FURTHER INQUIRY"
    }
};

// Render plain text safely.

function addLine(container, text, tag = "p") {
    const element = document.createElement(tag);
    element.textContent = text;
    container.appendChild(element);
}

// CASE REGISTRY

document.querySelectorAll(".justice-case")
    .forEach(function(button) {
        button.addEventListener("click", function() {
            const selectedCase =
                cases[button.dataset.case];

            if (!selectedCase) return;

            caseDetails.hidden = false;
            caseDetails.replaceChildren();

            addLine(caseDetails, selectedCase.title, "h4");
            addLine(caseDetails,
                "CASE NUMBER: " + selectedCase.number);
            addLine(caseDetails, selectedCase.finding);
            addLine(caseDetails,
                "FINAL STATUS: " + selectedCase.status);

            caseDetails.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        });
    });

// PUBLIC COMPLAINTS

const complaintResponses = {
    hefty:
        "Your complaint concerning Director Hefty " +
        "has been assigned to Director Hefty for " +
        "independent investigation. Director Hefty " +
        "finds insufficient evidence of wrongdoing.",

    armed:
        "Your complaint concerning the Department " +
        "of Armed Forces has been referred to its " +
        "Director, Hefty. Director Hefty has " +
        "requested review by the Department " +
        "of Justice, also directed by Hefty.",

    secretary:
        "The Department cannot proceed without " +
        "the express written permission of the " +
        "Secretary of State. The Secretary has " +
        "declined to confirm whether such " +
        "permission is available.",

    communications:
        "Your complaint regarding the Department " +
        "of Communications has been forwarded " +
        "to Director Jay. Director Jay has issued " +
        "a press release confirming receipt, " +
        "but declining further comment.",

    general:
        "Your complaint has been accepted for " +
        "administrative review. The Department " +
        "has determined that no actionable " +
        "violation has occurred."
};

let complaintNumber = 0;

document.getElementById("fileComplaintButton")
    .addEventListener("click", function() {
        complaintNumber++;

        const topic =
            document.getElementById("complaintTopic").value;

        complaintResult.hidden = false;
        complaintResult.replaceChildren();

        addLine(
            complaintResult,
            "OFFICIAL COMPLAINT DETERMINATION",
            "h4"
        );

        addLine(
            complaintResult,
            "REFERENCE: HA-DOJ-CMP-" +
            String(complaintNumber).padStart(3, "0")
        );

        addLine(
            complaintResult,
            complaintResponses[topic]
        );

        addLine(
            complaintResult,
            "FINAL STATUS: NO FURTHER ACTION REQUIRED"
        );
    });

// JUDICIAL APPEALS

let appealNumber = 0;

document.getElementById("appealButton")
    .addEventListener("click", function() {
        appealNumber++;

        appealResult.hidden = false;
        appealResult.replaceChildren();

        addLine(
            appealResult,
            "OFFICIAL APPELLATE DETERMINATION",
            "h4"
        );

        addLine(
            appealResult,
            "APPEAL REFERENCE: HA-DOJ-APP-" +
            String(appealNumber).padStart(3, "0")
        );

        if (appealNumber === 1) {
            addLine(
                appealResult,
                "Your appeal has been reviewed by " +
                "Director Hefty. The original " +
                "determination is hereby affirmed."
            );
        } else if (appealNumber === 2) {
            addLine(
                appealResult,
                "Your request for reconsideration " +
                "has been independently reviewed " +
                "by Director Hefty, who concurs " +
                "with Director Hefty's prior ruling."
            );
        } else {
            addLine(
                appealResult,
                "The Department acknowledges your " +
                "continued disagreement. Director " +
                "Hefty has determined that further " +
                "appeals constitute an inefficient " +
                "use of judicial resources."
            );
        }

        addLine(
            appealResult,
            "FINAL STATUS: APPEAL DENIED"
        );
    });

console.log("Hilton Accords Department of Justice online.");
