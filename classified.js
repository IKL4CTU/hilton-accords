
"use strict";

// HILTON ACCORDS CLASSIFIED NETWORK
// Fictional security system — for entertainment only.

const ACCESS_CODE = "inyalowda";
const ACCESS_CODE_ALT = "022591";
const ACCESS_CODE_ALT2 = "050288";

const loginScreen = document.getElementById("loginScreen");
const archiveScreen = document.getElementById("archiveScreen");
const accessForm = document.getElementById("accessForm");
const accessInput = document.getElementById("accessCode");
const accessMessage = document.getElementById("accessMessage");

const documentViewer = document.getElementById("documentViewer");
const documentNumber = document.getElementById("documentNumber");
const documentTitle = document.getElementById("documentTitle");
const documentBody = document.getElementById("documentBody");

const overridePanel = document.getElementById("overridePanel");

// DOCUMENT ARCHIVE

const documents = {
    secretary: {
        number: "HA-SEC-001",
        title: "Identity of the Secretary of State",
        body: `
            <p><strong>CLASSIFICATION:</strong> TOP SECRET</p>
            <p><strong>SUBJECT:</strong> Secretary of State</p>

            <p>
                Pursuant to executive policy, the identity
                of the Secretary of State remains
                <button type="button" class="redacted">
                    █████████
                </button>.
            </p>

            <p>
                Requests for identification, location,
                biography, or professional credentials
                shall receive the following response:
            </p>

            <p><strong>
                I can neither confirm nor deny without
                the express written permission of
                the Secretary of State.
            </strong></p>

            <p>
                Further inquiries are discouraged.
            </p>
        `
    },

    armed: {
        number: "HA-DOD-002",
        title: "Armed Forces Readiness Report",
        body: `
            <p><strong>DIRECTOR:</strong> Hefty</p>
            <p><strong>STATUS:</strong> READY IN RESERVE</p>

            <p>
                The Department of Armed Forces confirms
                that all operational systems remain
                prepared for executive deployment.
            </p>

            <p>
                Current readiness assessment:
                <strong>FULLY OPERATIONAL.</strong>
            </p>

            <p>
                Operational budget: UNDER REVIEW.
            </p>

            <p>
                Coffee procurement budget:
                UNANIMOUSLY APPROVED.
            </p>

            <p>
                Further deployment information remains
                classified under presidential authority.
            </p>
        `
    },

    justice: {
        number: "HA-DOJ-003",
        title: "Investigation of Director Hefty",
        body: `
            <p><strong>SUBJECT:</strong> Director Hefty</p>
            <p><strong>INVESTIGATOR:</strong> Director Hefty</p>

            <p>
                An independent investigation was
                authorized concerning the simultaneous
                administration of the Department
                of Armed Forces and Department of Justice.
            </p>

            <p>
                Following a comprehensive review,
                Director Hefty determined that
                Director Hefty committed no wrongdoing.
            </p>

            <p><strong>FINDING:</strong> EXONERATED</p>
            <p><strong>CASE STATUS:</strong> PERMANENTLY CLOSED</p>
            <p><strong>APPEALS AUTHORITY:</strong> Director Hefty</p>
        `
    },

    google: {
        number: "HA-COM-004",
        title: "Google Is Inyalowda Memorandum",
        body: `
            <p><strong>ISSUING OFFICE:</strong>
                Department of Communications</p>

            <p>
                The government acknowledges continued
                inquiries regarding the third
                founding principle.
            </p>

            <p>
                All requesters are instructed:
                <strong>Mi pensa you should
                educate yourself.</strong>
            </p>

            <p>
                Upon failure of conventional
                search-engine resources, the
                official response shall be:
            </p>

            <p><strong>
                Google Is Inyalowda.
                That's why they no pensa, sasa ke?
            </strong></p>

            <p>
                Director Jay has closed
                the clarification request.
            </p>
        `
    },

    snacks: {
        number: "HA-EXEC-005",
        title: "Presidential Emergency Snack Reserve",
        body: `
            <p><strong>CLASSIFICATION:</strong>
                TOP SECRET</p>

            <p>
                The President has directed the
                establishment of an emergency
                snack reserve for continuity
                of government operations.
            </p>

            <p>
                Reserve location:
                <button type="button" class="redacted">
                    ██████████████
                </button>
            </p>

            <p>
                Inventory levels are considered
                essential to national security.
            </p>

            <p>
                Unauthorized consumption shall
                be referred to the Department
                of Justice.
            </p>

            <p>
                Director Hefty will investigate.
            </p>
        `
    }
};

// FICTIONAL ACCESS VERIFICATION

accessForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const enteredCode = accessInput.value
        .trim()
        .toLowerCase();

    if (enteredCode === ACCESS_CODE) {
        loginScreen.classList.add("hidden");
        archiveScreen.classList.remove("hidden");

        accessMessage.textContent = "";
        accessInput.value = "";

        window.scrollTo(0, 0);

        console.log("Fictional clearance granted.");
    } else {
        accessMessage.style.color = "#e65a5a";
        accessMessage.textContent =
            "ACCESS DENIED. Request referred to the " +
            "Office of the Secretary of State.";

        accessInput.value = "";
    }
});

// OPEN CLASSIFIED DOCUMENTS

document.querySelectorAll(".document-card")
    .forEach(function(card) {

        card.addEventListener("click", function() {
            const id = card.dataset.document;
            const file = documents[id];

            if (!file) return;

            documentNumber.textContent = file.number;
            documentTitle.textContent = file.title;
            documentBody.innerHTML = file.body;

            documentViewer.classList.remove("hidden");
            overridePanel.classList.add("hidden");

            documentViewer.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

// REDACTION HANDLING

documentBody.addEventListener("click", function(event) {
    if (event.target.classList.contains("redacted")) {
        alert(
            "ACCESS DENIED.\n\n" +
            "Nice try.\n\n" +
            "I can neither confirm nor deny without " +
            "the express written permission " +
            "of the Secretary of State."
        );
    }
});

// CLOSE DOCUMENT

document.getElementById("closeDocument")
    .addEventListener("click", function() {
        documentViewer.classList.add("hidden");
    });

// PRESIDENTIAL OVERRIDE

document.getElementById("overrideButton")
    .addEventListener("click", function() {
        documentViewer.classList.add("hidden");
        overridePanel.classList.remove("hidden");

        overridePanel.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });

document.getElementById("dismissOverride")
    .addEventListener("click", function() {
        overridePanel.classList.add("hidden");
    });

// TERMINATE SESSION

document.getElementById("logoutButton")
    .addEventListener("click", function() {
        archiveScreen.classList.add("hidden");
        loginScreen.classList.remove("hidden");

        documentViewer.classList.add("hidden");
        overridePanel.classList.add("hidden");

        window.scrollTo(0, 0);
    });

console.log("Hilton Accords restricted network initialized.");
