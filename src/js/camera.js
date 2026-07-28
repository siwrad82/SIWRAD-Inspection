/*
====================================
SIWRAD Inspection
Camera Engine
Version : 1.0.0
Build   : 005.1
====================================
*/

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

        previewImage.src = photo.webPath;
        previewImage.style.display = "block";
        previewText.style.display = "none";

    } catch (e) {

        alert("Pengambilan foto dibatalkan.");

    }

});