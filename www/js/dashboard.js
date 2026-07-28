/*
====================================
SIWRAD Inspection
Dashboard Engine
Version : 1.0.0
Build   : 002
====================================
*/

function openInspection() {
    alert("Menu Inspeksi Baru");
}

function openHistory() {
    alert("Menu Riwayat");
}

function openPDF() {
    alert("Menu Export PDF");
}

function openExcel() {
    alert("Menu Export Excel");
}

function openSettings() {
    alert("Menu Pengaturan");
}

document.getElementById("inspection").onclick = openInspection;
document.getElementById("history").onclick = openHistory;
document.getElementById("pdf").onclick = openPDF;
document.getElementById("excel").onclick = openExcel;
document.getElementById("settings").onclick = openSettings;