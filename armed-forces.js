
"use strict";

const reportButton =
    document.getElementById("readinessReportButton");

const reportPanel =
    document.getElementById("readinessReport");

let reportRequests = 0;

reportButton.addEventListener("click", function() {
    reportRequests++;

    reportPanel.hidden = false;

    if (reportRequests === 1) {
        reportPanel.innerHTML = `
            <h4>OFFICIAL READINESS REPORT</h4>
            <p><strong>Report:</strong> HA-DOTAF-001</p>
            <p><strong>Classification:</strong> PUBLIC RELEASE</p>
            <p><strong>Command Status:</strong> OPERATIONAL</p>
            <p><strong>Director:</strong> Hefty</p>
            <p>
                The Department remains fully prepared
                to fulfill its assigned responsibilities.
            </p>
            <p>
                Detailed operational information has
                been withheld in accordance with
                executive security policy.
            </p>
        `;
    } else if (reportRequests === 2) {
        reportPanel.innerHTML = `
            <h4>SUPPLEMENTAL REQUEST REVIEW</h4>
            <p>
                Your request for additional operational
                details has been received.
            </p>
            <p>
                Director Hefty has determined that the
                previously issued report contained
                sufficient information.
            </p>
            <p><strong>Status:</strong> REQUEST DENIED</p>
        `;
    } else {
        reportPanel.innerHTML = `
            <h4>FINAL COMMAND DETERMINATION</h4>
            <p>
                Repeated inquiries concerning operational
                readiness have been referred to the
                Department of Justice.
            </p>
            <p>
                Director Hefty has reviewed the complaint.
            </p>
            <p>
                Director Hefty concurs with Director Hefty.
            </p>
            <p><strong>CASE STATUS:</strong> CLOSED</p>
        `;
    }
});
