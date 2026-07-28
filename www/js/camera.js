import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

const btnCamera = document.getElementById("btnCamera");
const previewImage = document.getElementById("previewImage");
const previewText = document.getElementById("previewText");

btnCamera.addEventListener("click", async () => {
    try {
        const photo = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera
        });

        previewImage.src = photo.webPath;
        previewImage.style.display = "block";
        previewText.style.display = "none";

    } catch (err) {
        alert("Pengambilan foto dibatalkan.");
        console.error(err);
    }
});