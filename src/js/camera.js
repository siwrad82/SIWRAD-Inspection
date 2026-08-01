/*
====================================
SIWRAD Inspection
Camera Engine
Version : 1.0.0
Build   : 005.2
====================================
*/
let currentPhoto = null;

const btnPreview = document.getElementById("btnPreview");
const btnCamera = document.getElementById("btnCamera");
const previewImage = document.getElementById("previewImage");
const previewText = document.getElementById("previewText");

btnCamera.addEventListener("click", async () => {
    try {
        const photo = await Capacitor.Plugins.Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: "uri",
    source: "CAMERA"
});

currentPhoto = photo.webPath || photo.path;

console.console.log("Photo:", photo);
console.log("currentPhoto:", currentPhoto);

previewImage.src = currentPhoto;
previewImage.style.display = "block";
previewText.style.display = "none";("Photo Object:", photo);
console.log("webPath:", photo.webPath);
console.log("path:", photo.path);
console.log("currentPhoto:", currentPhoto);
console.log("Photo:", photo);
console.log("currentPhoto:", currentPhoto);

previewImage.src = currentPhoto;
previewImage.style.display = "block";
previewText.style.display = "none";

    } catch (e) {
        console.error("Camera Error:", e);
    }
});
btnPreview.addEventListener("click", () => {

    if (!currentPhoto) {
        alert("Belum ada foto.");
        return;
    }

    previewImage.src = currentPhoto;
    previewImage.style.display = "block";
    previewText.style.display = "none";

});

    console.log("Preview:", currentPhoto);

    if (currentPhoto !== null) {
        previewImage.src = currentPhoto;
        previewImage.style.display = "block";
        previewText.style.display = "none";
    } else {
        alert("Belum ada foto.");
    }

});