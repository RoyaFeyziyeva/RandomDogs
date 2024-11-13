const dogButton = document.querySelector(".dogButton");
const dogImage = document.querySelector(".dogImage");

dogButton.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      
      dogImage.src = data.message;
      dogImage.style.display = "block";
    })
    .catch(error => {
      console.error("Xəta baş verdi:", error);
    });
});
