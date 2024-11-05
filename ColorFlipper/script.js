let childrens = document.querySelectorAll(".child");

function RandomColor() {
  let randomColor = `rgb(${Math.round(Math.random() * 256)}, ${Math.round(
    Math.random() * 256
  )}, ${Math.round(Math.random() * 256)})`;
  return randomColor
}

childrens.forEach((child) => {
    child.style.backgroundColor = RandomColor();
    setInterval(()=>{
        child.style.backgroundColor = RandomColor();
    },5000)
  child.addEventListener("click", ()=>{
    document.body.style.backgroundColor = child.style.backgroundColor
  })
});
