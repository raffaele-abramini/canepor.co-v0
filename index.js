const init = async () => {
  const data = await fetch("https://generatore-service.raff.ae/");
  const content = await data.text();

  const args = JSON.parse(content);

  const elem = document.getElementById("target");

  elem.innerText = args.join(" ")
  elem.classList.add("active")
};


init();