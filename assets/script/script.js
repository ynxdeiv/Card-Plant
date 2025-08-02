const shareButton = document.getElementById("share-button");
const socialMedia = document.querySelector(".social-media");

shareButton.addEventListener("click", () => {
        if (socialMedia.style.display === "none" ) {
            socialMedia.style.display = "flex"; 
        } else {
            socialMedia.style.display = "none"; 
        }
    }
);