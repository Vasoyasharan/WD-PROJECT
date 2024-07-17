// Initialize variables and fetch existing appointments from localStorage
var allAppointments;
var currentAppointmentId = null;

if (localStorage.getItem("allAppointmentsLocalStorage") !== null) {
    allAppointments = JSON.parse(localStorage.getItem("allAppointmentsLocalStorage"));
    displayAppointments();
} else {
    allAppointments = [];
    console.log("No appointments found.");
}

function addAppointment() {
    var patientName = document.getElementById("patientName").value;
    var doctorName = document.getElementById("doctorName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var symptoms = document.getElementById("symptoms").value;
    var appointmentDateTime = document.getElementById("appointmentDateTime").value;

    var newAppointment = {
        patientName: patientName,
        doctorName: doctorName,
        phoneNumber: phoneNumber,
        symptoms: symptoms,
        appointmentDateTime: appointmentDateTime
    };

    allAppointments.push(newAppointment);

    // Update localStorage
    localStorage.setItem("allAppointmentsLocalStorage", JSON.stringify(allAppointments));

    // Refresh display
    displayAppointments();

    // Clear input fields
    clearFields();
}

function updateAppointment(id) {
    var saveAppointmentButton = document.getElementById("saveAppointment");
    var addAppointmentButton = document.getElementById("addAppointment");

    // Fetch appointments from localStorage
    var appointments = JSON.parse(localStorage.getItem("allAppointmentsLocalStorage"));

    // Set current appointment ID for updating
    currentAppointmentId = id;

    // Populate form fields with current appointment data
    document.getElementById("patientName").value = appointments[id].patientName;
    document.getElementById("doctorName").value = appointments[id].doctorName;
    document.getElementById("phoneNumber").value = appointments[id].phoneNumber;
    document.getElementById("symptoms").value = appointments[id].symptoms;
    document.getElementById("appointmentDateTime").value = appointments[id].appointmentDateTime;

    // Update display
    displayAppointments();

    // Hide add button, show save button
    addAppointmentButton.style.display = "none";
    saveAppointmentButton.style.display = "block";
}

function saveAppointment() {
    var saveAppointmentButton = document.getElementById("saveAppointment");
    var addAppointmentButton = document.getElementById("addAppointment");

    // Fetch appointments from localStorage
    var appointments = JSON.parse(localStorage.getItem("allAppointmentsLocalStorage"));

    // Update appointment with current ID
    appointments[currentAppointmentId].patientName = document.getElementById("patientName").value;
    appointments[currentAppointmentId].doctorName = document.getElementById("doctorName").value;
    appointments[currentAppointmentId].phoneNumber = document.getElementById("phoneNumber").value;
    appointments[currentAppointmentId].symptoms = document.getElementById("symptoms").value;
    appointments[currentAppointmentId].appointmentDateTime = document.getElementById("appointmentDateTime").value;

    // Update localStorage
    localStorage.setItem("allAppointmentsLocalStorage", JSON.stringify(appointments));

    // Refresh display
    displayAppointments();

    // Clear input fields
    clearFields();

    // Reset current appointment ID
    currentAppointmentId = null;

    // Hide save button, show add button
    saveAppointmentButton.style.display = "none";
    addAppointmentButton.style.display = "block";
}

function deleteAppointment(appointmentID) {
    allAppointments.splice(appointmentID, 1);

    // Update localStorage
    localStorage.setItem("allAppointmentsLocalStorage", JSON.stringify(allAppointments));

    // Refresh display
    displayAppointments();
}

function displayAppointments() {
    var appointmentRows = "";
    for (var i = 0; i < allAppointments.length; i++) {
        appointmentRows += `
        <tr>
            <td>${i + 1}</td>
            <td>${allAppointments[i].patientName}</td>
            <td>${allAppointments[i].doctorName}</td>
            <td>${allAppointments[i].phoneNumber}</td>
            <td>${allAppointments[i].symptoms}</td>
            <td>${formatDateTime(allAppointments[i].appointmentDateTime)}</td>
            <td><button onclick="updateAppointment(${i})" class="btn btn-warning">Update</button></td>
            <td><button onclick="deleteAppointment(${i})" class="btn btn-danger">Delete</button></td>
        </tr>`;
    }
    document.getElementById("bodyAppointments").innerHTML = appointmentRows;
}

function clearFields() {
    document.getElementById("patientName").value = "";
    document.getElementById("doctorName").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("symptoms").value = "";
    document.getElementById("appointmentDateTime").value = "";
}

function searchAppointment(userWord) {
    var matchingAppointments = [];

    for (var i = 0; i < allAppointments.length; i++) {
        if (allAppointments[i].patientName.toLowerCase().includes(userWord.toLowerCase())) {
            matchingAppointments.push(allAppointments[i]);
        }
    }

    var appointmentRows = "";
    for (var i = 0; i < matchingAppointments.length; i++) {
        appointmentRows += `
        <tr>
            <td>${i + 1}</td>
            <td>${matchingAppointments[i].patientName}</td>
            <td>${matchingAppointments[i].doctorName}</td>
            <td>${matchingAppointments[i].phoneNumber}</td>
            <td>${matchingAppointments[i].symptoms}</td>
            <td>${formatDateTime(matchingAppointments[i].appointmentDateTime)}</td>
            <td><button onclick="updateAppointment(${i})" class="btn btn-warning">Update</button></td>
            <td><button onclick="deleteAppointment(${i})" class="btn btn-danger">Delete</button></td>
        </tr>`;
    }

    document.getElementById("bodyAppointments").innerHTML = appointmentRows;
}

function formatDateTime(dateTimeString) {
    var dateTime = new Date(dateTimeString);
    return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
}
