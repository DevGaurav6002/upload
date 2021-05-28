const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const img5 = document.querySelector("#img5");
const img6 = document.querySelector("#img6");
const img7 = document.querySelector("#img7");

const imgArray = [img1 , img2 , img3 , img4 , img5 , img6 , img7];

const uploadedImg = document.querySelector(".profile .post .uploaded-img img");

const uploadingImg = document.querySelector(".img-gallery .uploader .uploading-img img");

const uploadBtn = document.querySelector(".img-gallery .uploader .upload-btn button");

const createPostBtn = document.querySelector(".profile .bio .post-btn .btn");

const imageGallery = document.querySelector(".img-gallery .images");

const uploader = document.querySelector(".img-gallery .uploader");

createPostBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    imageGallery.style.visibility = "visible";
});

imgArray.filter((img) => {
    img.addEventListener("click" , (e) => {
        e.preventDefault();
        uploader.style.visibility = "visible";
        imageGallery.style.visibility = "hidden";
        uploadingImg.src = img.src;
    });
});

uploadBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    uploader.style.visibility = "hidden";
    uploadedImg.src = uploadingImg.src;
});
