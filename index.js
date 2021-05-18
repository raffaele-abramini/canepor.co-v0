const fetchAndPopulate = async (target) => {
  let data;

  try {
    data = await fetch("https://generatore-service.raff.ae/");
  } catch (e) {
    try {
      data = await fetch("http://localhost:3000");
    }
    catch (e2) {
      console.log(e);
    }
  }

  const content = await data.text();

  const args = JSON.parse(content);

  target.innerText = args.join(" ")
  target.classList.add("active")
}

const init = async () => {
  const target = document.getElementById("target");
  const button = document.getElementById("button");

  button.addEventListener("click", async () => {
    target.classList.remove("active")
    button.disabled = true;
    await fetchAndPopulate(target);
    await new Promise(r => setTimeout(r, 1000))
    button.disabled = false;
  })
  await fetchAndPopulate(target);
};


init();