<script>
// Select form
const form = document.querySelector(".form-container");

// ===== SHOW RANGE VALUES =====
const ranges = document.querySelectorAll("input[type=range]");

ranges.forEach(range => {
    const output = document.createElement("span");
    output.innerText = range.value;
    range.after(output);

    range.addEventListener("input", () => {
        output.innerText = range.value;
    });
});

// ===== FORM SUBMIT =====
form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Get values
    const name = form.querySelector("input[name=name]").value;
    const email = form.querySelector("input[name=email]").value;

    if(name === "" || email === "") {
        alert("Please fill all required fields!");
        return;
    }

    alert("Feedback submitted successfully!");
});

// ===== RESET MESSAGE =====
form.addEventListener("reset", function() {
    setTimeout(() => {
        alert("Form has been reset!");
    }, 100);
});
</script>