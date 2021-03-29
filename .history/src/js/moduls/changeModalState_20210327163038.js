import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    windowHeight = document.querySelectorAll("#height"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

  checkNumInputs("#width");
  checkNumInputs("#heigth");

  function bindActionToElems(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
     switch(item.nodeName){
         case "SPAN": 
         console.log('span')
         break;
     }
    });
  }
  bindActionToElems("click", windowForm, "form");
  bindActionToElems("input", windowHeight, "height");
  bindActionToElems("input", windowWidth, "width");
  bindActionToElems("change", windowType, "type");
  bindActionToElems("change", windowProfile, "profile");
};

export default changeModalState;
