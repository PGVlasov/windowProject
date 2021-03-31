const images = () => {
  const imgPopup = document.createElement("div");
  const workSection = document.querySelector(".works");
  const bigImage = document.createElement("ing");

  imgPopup.classList.add("popup");
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "cenret";

  imgPopup.appendChild(bigImage);
};
