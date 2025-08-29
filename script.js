let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
 
const heartEl = document.querySelector(".heartcount");
const coinEl = document.querySelector(".coincount");
const copyEl = document.querySelector(".copycount"); 


const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearHistory");

document.querySelectorAll(".card").forEach(card => {
  const heart = card.querySelector(".fa-heart");
  const copyBtn = card.querySelector(".fa-copy")?.parentElement;
  const callBtn = card.querySelector(".fa-phone")?.parentElement;
  const numberEl = card.querySelector(".number");
  const number = numberEl?.innerText;
  const service = card.querySelector("h1")?.innerText;

  
const heartButtons = document.querySelectorAll(".card .fa-heart");


const heartEl = document.querySelector(".heartcount");

let heartCount = 0;

heartButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    heartCount++;
    heartEl.innerText = heartCount;
  });
});

  // Copy 
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      if (number) {
        navigator.clipboard.writeText(number);
        alert(`${number} নম্বরটি কপি করা হয়েছে`);
        copyCount++;
        copyEl.textContent = copyCount;
      }
    });
  }

  // Call 
  if (callBtn) {
    callBtn.addEventListener("click", () => {
      if (coinCount < 20) {
        alert("❌ফোন করার জন্য পর্যাপ্ত কয়েন নেই!");
        return;
      }

      coinCount -= 20;
      coinEl.textContent = coinCount;
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit',  hour12: true });
      alert(`📞${number} নম্বরে কল করা হচ্ছে`);

      // call 
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


