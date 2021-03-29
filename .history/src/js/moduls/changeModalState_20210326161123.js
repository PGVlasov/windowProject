import checkNumInputs from ('./checkNumInputs')

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelector("#width"),
    windowHeigth = document.querySelector("#heigth"),
    windowType = document.querySelector("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

    checkNumInputs("#width");
    checkNumInputs("#heigth)

  windowForm.forEach((item, i) => {
    item.addEventListener("click", () => {
      state.form = i;
      console.log(state);
    });
  });
};

export default changeModalState;
