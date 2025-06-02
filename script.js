const form = document.getElementById("entry-form");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const object = Object.fromEntries(data.entries());

  status.innerText = "Submitting...";

  try {
    const res = await fetch("https://script.google.com/a/macros/waxzone.ca/s/AKfycbz1rpS5vcMkwyTpub-S69ddYGMUGpyFTbptAAkWTv8O0GoMJbHpkJuz8LE9xoIYMCs/exechttps://script.google.com/a/macros/waxzone.ca/s/AKfycbzRyVtv1BPahWocDAcoPyIbrCL_SW7hihdjJ_QosHtLDU7v0ura5uIetrvpx81vrA/exec", {
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