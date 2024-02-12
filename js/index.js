const sideMenu = document.querySelector("aside");
const closeBtn = document.querySelector("#close-btn");
const menuBtn = document.getElementById("btn-menu");
const darkMode = document.querySelector(".dark-mode");
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-variables");
  darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
  darkMode.querySelector("span:nth-child(2)").classList.toggle("active");
});

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
       <td>${order.productName}</td>
       <td>${order.productNumber}</td>
       <td>${order.paymentStatus}</td>
       <td class="${
         order.status === "Declined"
           ? "danger"
           : order.status === "Pending"
           ? "warning"
           : "primary"
       }">${order.status}</td>
       <td class="primary">Details</td>
    `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
