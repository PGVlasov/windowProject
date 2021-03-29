const checkNumInputs = (selector) => {
  const numInputs = document.querySelector(selector);

  phoneInputs.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, "");
    });
  });
};

export default checkNumInputs;
