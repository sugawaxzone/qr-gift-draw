const form = document.getElementById("entry-form");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);
  status.innerText = "Submitting...";

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbwTbfv1pVDwEnX51lMFhYt_jcZxL95Oe50PG6adg6FZ_6ziNAcA9ETDPSoD38W0uX4/exec", {
      method: "POST",
      body: data,
    });

    const result = await res.text(); // ← Get raw response from server

    if (result === "SUCCESS") {
      status.innerText = "Thanks! You’re entered into the draw.";
      form.reset();
    } else if (result === "DUPLICATE") {
      status.innerText = "You’ve already entered. Only one entry per person is allowed.";
    } else {
      status.innerText = "Something went wrong. Please try again.";
    }
  } catch (err) {
    status.innerText = "Error submitting form.";
  }
});
