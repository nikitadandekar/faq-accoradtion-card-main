const desc = document.querySelectorAll(".discription-hidden");
console.log(desc);
const acc = document.querySelectorAll(".accordion");

// for (let i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", () => {
//     desc[i].classList.toggle("hidden");
//   });
// }
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", () => {
    desc[i].classList.toggle("discription-hidden");
  });
}
console.log("working");
