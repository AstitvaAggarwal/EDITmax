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
<<<<<<< HEAD
let filterOPENCV1=document.getElementById("opencvfilter1");

=======
// var photo;
// window.onload = function(){

// }
>>>>>>> c257b9cadb41b4267d936882d1e3e9403662c520
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
    document.querySelector(".image-container").style.display = "block";
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        // image.setAttribute("src", reader.result);
        // context.drawImage(img, 100, 100);
        image.setAttribute("src", reader.result);
<<<<<<< HEAD
        img = cv.imread(image);
        cv.imshow('myCanvas', img);
=======
        // context.drawImage(image, 0,0);
        //trying cv code
        let dst = new cv.Mat();
        img = cv.imread(image)
        cv.cvtColor(img, dst, cv.COLOR_RGBA2GRAY, 0);
        cv.imshow('myCanvas', dst);
>>>>>>> c257b9cadb41b4267d936882d1e3e9403662c520
    }
    
}
<<<<<<< HEAD
=======
var canvas = document.getElementById('myCanvas'),
context = canvas.getContext('2d');


>>>>>>> c257b9cadb41b4267d936882d1e3e9403662c520

let sliders = document.querySelectorAll(".filter input[type='range']");
sliders.forEach( slider => {
    slider.addEventListener("input", addFilter);
});

function addFilter(){
    image.style.filter = `blur(${filterA.value}px) contrast(${filterB.value}%) hue-rotate(${filterC.value}deg) sepia(${filterD.value}%)`;
}

let checked = document.querySelectorAll(".cusfilter input[type='checkbox']");
checked.forEach( checker => {
    checker.addEventListener('change', addcusFilter);
});

function addcusFilter(){
    //render image anyways
    img = cv.imread(image);
    cv.imshow('myCanvas', img);

    //if checked then apply filter only
    if (this.checked) {
        console.log("This is Checked")
        let dst = new cv.Mat();
        img = cv.imread(image)
        cv.Canny(img, dst, 50, 100, 3, false);
        cv.imshow('myCanvas', dst);
        dst.delete();
    }
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