let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// Navbar 
const heartEl = document.querySelector(".heartcount");
const coinEl = document.querySelector(".coincount");
const copyEl = document.querySelector(".copycount"); 

// History 
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearHistory");

// cards
document.querySelectorAll(".card").forEach(card => {
  const heart = card.querySelector(".fa-heart");
  const copyBtn = card.querySelector(".fa-copy")?.parentElement;
  const callBtn = card.querySelector(".fa-phone")?.parentElement;
  const numberEl = card.querySelector(".number");
  const number = numberEl?.innerText;
  const service = card.querySelector("h1")?.innerText;

  // Heart click
  if (heart) {
    heart.addEventListener("click", () => {
      heart.classList.toggle("fa-solid");
      heart.classList.toggle("fa-regular");
      heart.classList.toggle("text-red-500");
      heartCount++;
      heartEl.textContent = heartCount;
    });
  }

  // Copy button
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      if (number) {
        navigator.clipboard.writeText(number);
        alert(`Number ${number} copied`);
        copyCount++;
        copyEl.textContent = copyCount;
      }
    });
  }

  // Call button
  if (callBtn) {
    callBtn.addEventListener("click", () => {
      if (coinCount < 20) {
        alert("❌ফোন করার জন্য পর্যাপ্ত কয়েন নেই!");
        return;
      }

      coinCount -= 20;
      coinEl.textContent = coinCount;

      const time = new Date().toLocaleTimeString();
      alert(`📞${number} নম্বরে কল করা হচ্ছে`);

      // call history
      const li = document.createElement("li");
li.className = "bg-gray-100 rounded-lg p-3 flex justify-between items-center shadow-sm";

li.innerHTML = `
  <div class="flex flex-col">
    <span class="font-semibold text-gray-800">${service}</span>
    <span class="text-gray-600">${number}</span>
  </div>
  <span class="text-gray-500 text-sm">${time}</span>
`;

historyList.appendChild(li);
    });
  }
});

// Clear history
clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});