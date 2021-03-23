const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  function hudeTabContent() {
    content.forEach((item) => {
      item.style.display = "none";
    });
  }
  function showTabContent() {}
};

export default tabs;
