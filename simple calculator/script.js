function apendvalue(value) {
  document.getElementById("result").value += value;
}

function clearresult() {
  document.getElementById("result").value = "";
}

function backspace() {
  const back = document.getElementById("result");
  back.value = back.value.slice(0, -1);
}

function calculatresult() {
  try {
    const resultfield = document.getElementById("result");
    resultfield.value = eval(resultfield.value);
  } catch (error) {
    alert("Invalid expression");
  }
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
  const toggleBtn = document.getElementById("themeToggle");
  toggleBtn.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
}
