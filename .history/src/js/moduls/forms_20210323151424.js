const forms = () => {
  const form = document.querySelectorAll("form");
  const input = document.querySelectorAll("input");

  const message = {
    loading: "Загрузка....",
    success: "Мы скоро с вам свяжемся",
    falure: "что то пошло не так....",
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent(message.loading);
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.text();
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      const statusMessage = dacument.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);

      const formData = new FormData(item);
      postData("assets/server.php");
    });
  });
};

export default forms;
