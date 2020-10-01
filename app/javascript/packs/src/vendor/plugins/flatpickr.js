require("flatpickr/dist/flatpickr.css")

import flatpickr from "flatpickr";

document.addEventListener("turbolinks:load", () => {
  flatpickr("[data-behavior='flatpickr']", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
  })
})

import '../../custom/sass/vendors/plugins/flatpickr.scss';

