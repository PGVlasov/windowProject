const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    trigger.addEventListener("click", (e) => {
      if (e.target) {
        e.preventDefault();
      }
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    });
    close.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.classList.remove("modal-open");
      }
    });
  }
  const callEngineerBtn = document.querySelector(".popup_engineer_btn"),
    modalEngineer = document.querySelector(".popup_engineer"),
    modalEngineerClose = document.querySelector(".popup_engineer .popup_close");

  bindModal(callEngineerBtn, modalEngineer, modalEngineerClose);
};

export default modals;
