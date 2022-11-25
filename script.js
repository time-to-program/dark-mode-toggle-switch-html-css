let toggleSwitch = document.querySelector("input");

toggleSwitch.addEventListener("change", (e) => {
  let body = document.querySelector("body");
  let title = document.querySelector("h4");

  if (e.target.checked) {
    body.style.backgroundColor = "#17193F";
    title.style.color = "#f8f8f8";
  } else {
    body.style.backgroundColor = "#f8f8f8";
    title.style.color = "#17193F";
  }
});
