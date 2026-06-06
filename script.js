const form = document.getElementById("entry-form");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  status.innerText = "Submitting...";

  try {
    await fetch("https://script.google.com/macros/s/AKfycbxpNdalXM6O8ncdMSXlufzQMORg4x_UaasRGst0N15Fm_VbTWn_WNduOmwJu6LDfG5rzw/exec", {
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
