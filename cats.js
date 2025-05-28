const btn = document.getElementById("get-cat-btn");
const img = document.getElementById("cat-image");
const loadingText = document.getElementById("loading-text");

const CAT_API_URL = "https://api.thecatapi.com/v1/images/search?size=small";

btn.addEventListener("click", async () => {
  loadingText.style.display = "block";
  img.style.display = "none";

  try {
    const response = await fetch(CAT_API_URL);
    const data = await response.json();
    const catUrl = data[0].url;

    img.src = catUrl;
    img.onload = () => {
      loadingText.style.display = "none";
      img.style.display = "block";
    };
  } catch (error) {
    alert("Oops! Failed to fetch a cat image.");
    loadingText.style.display = "none";
    console.error(error);
  }
});
