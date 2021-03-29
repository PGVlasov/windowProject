import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    windowHeigth = document.querySelectorAll("#heigth"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

  checkNumInputs("#width");
  checkNumInputs("#heigth");

  function bindActionToElems(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        if (elem.length > 1) {
          state[prop] = i;
        } else {
          state[prop] = item.value;
        }

        console.log(state);
      });
    });
  }
  bindActionToElems("click", windowForm, "form");
  bindActionToElems("input", windowHeigth, "heigth");
  bindActionToElems("input", windowWidth, "width");
};

export default changeModalState;