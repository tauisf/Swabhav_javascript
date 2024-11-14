let div_container = document.body.appendChild(document.createElement("div"));
div_container.classList.add("border", "border-black", "container");

let div_navbar = div_container.appendChild(document.createElement("div"));
div_navbar.classList.add("navbar-expand-lg", "navbar-light", "bg-light", "border", "border-black");

let buttondiv = div_navbar.appendChild(document.createElement("div"));
buttondiv.classList.add("navbarer", "p-2", "border", "border-black");

let addTimeSheetButton = buttondiv.appendChild(document.createElement("button"));
addTimeSheetButton.innerText = "Add Timesheet";
addTimeSheetButton.classList.add("btn", "btn-outline-success");

function createTimesheet() {
    let timesheetDiv = div_container.appendChild(document.createElement("div"));
    timesheetDiv.classList.add("p-2", "border", "border-black", "main");

    let deleteTimesheetDiv = document.createElement("div");
    deleteTimesheetDiv.classList.add("mb-2");
    let deleteTimesheetButton = document.createElement("button");
    deleteTimesheetButton.textContent = "Delete Timesheet";
    deleteTimesheetButton.classList.add("btn", "btn-outline-danger");
    deleteTimesheetButton.onclick = function () {
        timesheetDiv.remove();
    };
    deleteTimesheetDiv.appendChild(deleteTimesheetButton);
    timesheetDiv.appendChild(deleteTimesheetDiv);

    let previewButtonDiv = document.createElement("div");
    previewButtonDiv.classList.add("mb-2");
    let previewButton = document.createElement("button");
    previewButton.textContent = "Preview";
    previewButton.classList.add("btn", "btn-outline-primary");
    previewButton.onclick = function () {
        displayPreview(timesheetDiv);  // Show the preview
    };
    previewButtonDiv.appendChild(previewButton);
    timesheetDiv.appendChild(previewButtonDiv);

    let dateDiv = timesheetDiv.appendChild(document.createElement("div"));
    dateDiv.innerText = "Date";
    dateDiv.classList.add("p-2", "border", "border-black");

    let dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.classList.add("form-control");
    dateDiv.appendChild(dateInput);

    let OnleaveDiv = timesheetDiv.appendChild(document.createElement("div"));
    OnleaveDiv.innerText = "On Leave";
    OnleaveDiv.classList.add("p-2", "border", "border-black");

    let leaveSelect = document.createElement("select");
    leaveSelect.classList.add("form-control");

    let yesOption = document.createElement("option");
    yesOption.value = "yes";
    yesOption.textContent = "Yes";

    let noOption = document.createElement("option");
    noOption.value = "no";
    noOption.textContent = "No";

    leaveSelect.appendChild(yesOption);
    leaveSelect.appendChild(noOption);
    OnleaveDiv.appendChild(leaveSelect);

    let activityDiv = timesheetDiv.appendChild(document.createElement("div"));
    activityDiv.innerText = "Add Activity";
    activityDiv.classList.add("p-2", "border", "border-black");

    createActivityForm(activityDiv);
}

addTimeSheetButton.addEventListener("click", function() {
    createTimesheet();
});

function createActivityForm(activityDiv) {
    let formDiv = document.createElement("div");
    formDiv.classList.add("activity-form", "p-3", "border", "border-black", "mb-3", "position-relative");

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("d-flex", "justify-content-between", "mb-2");

    let addActivityButton = document.createElement("button");
    addActivityButton.textContent = "Add Activity";
    addActivityButton.classList.add("btn", "btn-outline-primary");
    addActivityButton.onclick = function() {
        createActivityForm(activityDiv);
    };

    buttonContainer.appendChild(addActivityButton);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn", "btn-outline-danger", "d-none");

    deleteButton.onclick = function () {
        formDiv.remove();
    };

    buttonContainer.appendChild(deleteButton);

    formDiv.appendChild(buttonContainer);

    let projectLabel = document.createElement("label");
    projectLabel.textContent = "Project: ";
    let projectSelect = document.createElement("select");
    projectSelect.classList.add("form-control");
    let projectOption1 = document.createElement("option");
    projectOption1.textContent = "Project 1";
    let projectOption2 = document.createElement("option");
    projectOption2.textContent = "Project 2";
    projectSelect.appendChild(projectOption1);
    projectSelect.appendChild(projectOption2);
    formDiv.appendChild(projectLabel);
    formDiv.appendChild(projectSelect);

    let subprojectLabel = document.createElement("label");
    subprojectLabel.textContent = "Subproject: ";
    let subprojectSelect = document.createElement("select");
    subprojectSelect.classList.add("form-control");
    let subprojectOption1 = document.createElement("option");
    subprojectOption1.textContent = "Subproject 1";
    let subprojectOption2 = document.createElement("option");
    subprojectOption2.textContent = "Subproject 2";
    subprojectSelect.appendChild(subprojectOption1);
    subprojectSelect.appendChild(subprojectOption2);
    formDiv.appendChild(subprojectLabel);
    formDiv.appendChild(subprojectSelect);

    let batchLabel = document.createElement("label");
    batchLabel.textContent = "Batch: ";
    let batchSelect = document.createElement("select");
    batchSelect.classList.add("form-control");
    let batchOption1 = document.createElement("option");
    batchOption1.textContent = "Batch 1";
    let batchOption2 = document.createElement("option");
    batchOption2.textContent = "Batch 2";
    batchSelect.appendChild(batchOption1);
    batchSelect.appendChild(batchOption2);
    formDiv.appendChild(batchLabel);
    formDiv.appendChild(batchSelect);

    let hoursLabel = document.createElement("label");
    hoursLabel.textContent = "Hours Needed: ";
    let hoursDiv = document.createElement("div");
    hoursDiv.classList.add("d-flex", "align-items-center");

    let hoursInput = document.createElement("input");
    hoursInput.type = "number";
    hoursInput.classList.add("form-control", "w-auto");
    hoursInput.placeholder = "Hours";
    hoursDiv.appendChild(hoursInput);

    let minutesInput = document.createElement("input");
    minutesInput.type = "number";
    minutesInput.classList.add("form-control", "w-auto", "ml-2");
    minutesInput.placeholder = "Minutes";
    hoursDiv.appendChild(minutesInput);

    formDiv.appendChild(hoursLabel);
    formDiv.appendChild(hoursDiv);

    let activityLabel = document.createElement("label");
    activityLabel.textContent = "Activity Description: ";
    let activityTextarea = document.createElement("textarea");
    activityTextarea.classList.add("form-control");
    formDiv.appendChild(activityLabel);
    formDiv.appendChild(activityTextarea);

    activityDiv.appendChild(formDiv);

    if (activityDiv.children.length > 1) {
        deleteButton.classList.remove("d-none");
    }
}
function displayPreview() {

    document.querySelectorAll('.preview-div, .overlay').forEach(el => el.remove());

    let timesheetDivs = document.querySelectorAll(".main");

    let previewDiv = document.createElement("div");
    previewDiv.classList.add("preview-div");

    let table = document.createElement("table");
    table.classList.add("table", "table-bordered");

    let tableHeader = document.createElement("thead");
    tableHeader.innerHTML = `
        <tr>
            <th>TimeSheetNO</th>
            <th>SrNO</th>
            <th>Date</th>
            <th>On Leave</th>
            <th>Project</th>
            <th>Subproject</th>
            <th>Batch</th>
            <th>Activity</th>
            <th>Hours</th>
            <th>Minutes</th>
        </tr>
    `;
    table.appendChild(tableHeader);

    let tableBody = document.createElement("tbody");

    timesheetDivs.forEach((timesheetDiv, timesheetIndex) => {
        let dateInput = timesheetDiv.querySelector("input[type='date']");
        let onLeaveSelect = timesheetDiv.querySelector("select");

        let activityForms = timesheetDiv.querySelectorAll('.activity-form');

        activityForms.forEach((form, formIndex) => {
            let projectSelect = form.querySelector("select");
            let subprojectSelect = form.querySelectorAll("select")[1];
            let batchSelect = form.querySelectorAll("select")[2];
            let activityTextArea = form.querySelector("textarea");

            let hoursInput = form.querySelector("input[type='number']");
            let minutesInput = form.querySelectorAll("input[type='number']")[1];

            let hours = parseInt(hoursInput.value || 0);
            let minutes = parseInt(minutesInput.value || 0);

            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${timesheetIndex + 1}</td>
                <td>${formIndex + 1}</td>
                <td>${dateInput.value}</td>
                <td>${onLeaveSelect.value}</td>
                <td>${projectSelect.value}</td>
                <td>${subprojectSelect.value}</td>
                <td>${batchSelect.value}</td>
                <td>${activityTextArea.value}</td>
                <td>${hours}</td>
                <td>${minutes}</td>
            `;
            tableBody.appendChild(row);
        });
    });

    table.appendChild(tableBody);
    previewDiv.appendChild(table);

    let cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.classList.add("btn", "btn-outline-danger", "cancel-btn");
    cancelButton.onclick = function () {
        previewDiv.style.display = "none";
        overlay.style.display = "none";
    };
    previewDiv.appendChild(cancelButton);

    document.body.appendChild(previewDiv);

    
    previewDiv.style.position = "fixed";
    previewDiv.style.top = "50%";
    previewDiv.style.left = "50%";
    previewDiv.style.transform = "translate(-50%, -50%)";
    previewDiv.style.zIndex = "1000";
    previewDiv.style.backgroundColor = "white";
    previewDiv.style.padding = "20px";
    previewDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    previewDiv.style.maxHeight = "80vh";
    previewDiv.style.width = "80%";
    previewDiv.style.overflowY = "auto";


    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "999";
    document.body.appendChild(overlay);

    cancelButton.onclick = function () {
        previewDiv.remove();
        overlay.remove();
    };
}
