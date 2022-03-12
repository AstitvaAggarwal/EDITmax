let filterA = document.getElementById("blur");
let filterB = document.getElementById("contrast");
let filterC = document.getElementById("hue-rotate");
let filterD = document.getElementById("sepia");
let noFlipBtn = document.getElementById("no-flip");
let flipXBtn = document.getElementById("flip-x");
let flipYBtn = document.getElementById("flip-y");
let uploadButton = document.getElementById("upload-button");
let DownloadButton = document.getElementById("Download-button");
let resetfilterchoice=document.getElementById("reset-button");
let image = document.getElementById("chosen-image");
// var photo;
// window.onload = function(){

// }
function resetFilter(){
    filterA.value = "0";
    filterB.value = "100";
    filterC.value = "0";
    filterD.value = "0";
    noFlipBtn.checked = true;
    addFilter();
    flipImage();
}


uploadButton.onchange = () => {
    resetFilter();
    document.querySelector(".image-container").
    style.display = "block";
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        // image.setAttribute("src", reader.result);
        // context.drawImage(img, 100, 100);
        image.setAttribute("src", reader.result);
        // context.drawImage(image, 0,0);
        //trying cv code
        let dst = new cv.Mat();
        img = cv.imread(image)
        cv.cvtColor(img, dst, cv.COLOR_RGBA2GRAY, 0);
        cv.imshow('myCanvas', dst);
    }
}
var canvas = document.getElementById('myCanvas'),
context = canvas.getContext('2d');



let sliders = document.querySelectorAll(".filter input[type='range']");
sliders.forEach( slider => {
    slider.addEventListener("input", addFilter);
});
function addFilter(){
    image.style.filter = `blur(${filterA.value}px) contrast(${filterB.value}%) hue-rotate(${filterC.value}deg) sepia(${filterD.value}%)`;
}
let radioBtns = document.querySelectorAll(".flip-option input[type='radio']");
radioBtns.forEach( radioBtn => {
    radioBtn.addEventListener("click", flipImage);
});
function flipImage(){
    if(flipXBtn.checked){
        image.style.transform = "scaleX(-1)";
    }
    else if(flipYBtn.checked){
        image.style.transform = "scaleY(-1)";
    }
    else{
        image.style.transform = "scale(1,1)";
    }
}