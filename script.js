const form = document.getElementById("entry-form");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  status.innerText = "Submitting...";

  try {
    await fetch("https://script.google.com/macros/s/AKfycbxoQW5UxfXuTD8acM2_djttCk3HbnGiY7hXTVXb0hTk1W1bMImfYll67v96swJtb2m-fg/exec", {
      method: "POST",
      body: data,
      mode: "no-cors", // ← fixes the CORS error
    });

    // Can't read the response with no-cors, so assume success if no exception thrown
    status.innerText = "Thanks! You're entered into the draw.";
    form.reset();

  } catch (err) {
    status.innerText = "Error submitting form.";
  }
});
