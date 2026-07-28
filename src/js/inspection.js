/*
====================================
SIWRAD Inspection
Inspection Engine
Version : 1.0.0
Build   : 003
====================================
*/

const btnStart = document.getElementById("btnStart");

btnStart.addEventListener("click", function () {

    const equipment = document.getElementById("equipment").value.trim();
    const location = document.getElementById("location").value.trim();
    const assetNumber = document.getElementById("assetNumber").value.trim();
    const inspector = document.getElementById("inspector").value.trim();

    if (
        equipment === "" ||
        location === "" ||
        assetNumber === "" ||
        inspector === ""
    ) {
        alert("Silakan lengkapi semua data inspeksi.");
        return;
    }

    alert("Data inspeksi siap.\nCamera Engine akan dibuka pada Build 004.");

    // Build 004
    // window.location.href = "camera.html";
});