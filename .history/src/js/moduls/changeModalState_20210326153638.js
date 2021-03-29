const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelector("#width"),
    windowHeigth = document.querySelector("#heigth"),
    windowType = document.querySelector("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

  windowForm.forEach((item, i) => {
    item.addEventListener("click", () => {
      state.form = i;
    });
  });
};

export default changeModalState;