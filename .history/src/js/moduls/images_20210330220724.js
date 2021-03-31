const images = () => {
  const imgPopup = document.createElement("div");
  const workSection = document.querySelector(".works");
  const bigImage = document.createElement("ing");

  imgPopup.classList.add("popup");
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.display = "none";

  imgPopup.appendChild(bigImage);


  workSection.addEventListener("click", (e)=>{
    e.preventDefault()

    let target = e.target

    if(target&& target.classList.contains('preview'))
  })
};

export default images;
