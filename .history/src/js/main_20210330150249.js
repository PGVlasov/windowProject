import "./slider";
import modals from "./moduls/madals";
import tabs from "./moduls/tabs";
import forms from "./moduls/forms";
import changeModalState from "./moduls/changeModalState";
import timer from "./moduls/timer";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let modalState = {};

  changeModalState(modalState);
  modals();
  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content > div > div",
    "after_click"
  );
  tabs(
    ".balcon_icons",
    ".balcon_icons_img",
    ".big_img>img",
    "do_image_more",
    "inline-block"
  );
  forms(modalState);
});
// ".balcon_items", ".balcon_items_img", ".big_img>img", '.do_image_more', "inline-block"
