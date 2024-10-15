const result = document.getElementById("result");
const buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerHTML) {
      case "C":
        result.innerHTML = "";
        break;
      case "=":
        try {
          result.innerHTML = eval(result.innerHTML);
        } catch {
          result.innerHTML = "Error";
        }
        break;
      case "←":
        if (result.innerHTML) {
          result.innerHTML = result.innerHTML.slice(0, -1);
        }
        break;
      default:
        result.innerHTML += e.target.innerHTML;
    }
  });
});
