const forms = () => {
  const form = document.querySelectorAll("form");
  const input = document.querySelectorAll("input");

  const message = {
    loading: "Загрузка....",
    success: "Мы скоро с вам свяжемся",
    falure: "что то пошло не так....",
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      const statusMessage = dacument.createElement("div");
    });
  });
};

export default forms;
