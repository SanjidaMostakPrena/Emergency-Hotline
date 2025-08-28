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




//all cards
document.querySelectorAll(".p-6 > div").forEach(card => {
  const heart = card.querySelector("button > i.fa-heart");
  const copyBtn = card.querySelector("button > i.fa-copy")?.parentElement;
  const callBtn = card.querySelector("button > i.fa-phone")?.parentElement;
  const numberEl = card.querySelector(".number");
  const number = numberEl?.innerText;
  const service = card.querySelector("h1")?.innerText;

  //  Heart click
  if (heart) {
    heart.addEventListener("click", () => {
      heart.classList.toggle("fa-solid");
      heart.classList.toggle("fa-regular");
      heartCount++;
      heartEl.textContent = heartCount;
    });
  }

  //  Copy button
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      if (number) {
        navigator.clipboard.writeText(number);
        alert(`Number ${number} copied!`);
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
      alert('📞999 নম্বরে ফায়ার প্রদানকারীকে কল করা হচ্ছে');

      // Add to call history
      const li = document.createElement("li");
      li.className = "bg-gray-100 rounded-lg p-2 text-sm";
      li.textContent = `${service} (${number}) - ${time}`;
      historyList.appendChild(li);
    });
  }
});

//  Clear history
clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
