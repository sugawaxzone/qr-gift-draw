const form = document.getElementById("entry-form");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const object = Object.fromEntries(data.entries());

  status.innerText = "Submitting...";

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbylYn_B_WYU_BDTTxEY2cJQ82zlmmp6erBEZ_wv9GGWAucxdNUI32hNrrwbwbZFp50/exec", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      status.innerText = "Thanks! You’re entered into the draw.";
      form.reset();
    } else {
      status.innerText = "Something went wrong. Please try again.";
    }
  } catch (err) {
    status.innerText = "Error submitting form.";
  }
});
