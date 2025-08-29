let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
let heartEl = document.querySelector(".heartcount");
let coinEl  = document.querySelector(".coincount");
let copyEl  = document.querySelector(".copycount");
let historyList = document.getElementById("historyList");
let clearBtn = document.getElementById("clearHistory");
let cards = document.querySelectorAll(".card");
cards.forEach(function(card) {
  let heartBtn = card.querySelector(".fa-heart");
  let copyBtn  = card.querySelector(".fa-copy");
  let callBtn  = card.querySelector(".fa-phone");

  let number  = card.querySelector(".number").innerText;
  let service = card.querySelector("h1").innerText;
  if (heartBtn) {
    heartBtn.addEventListener("click", function() {
      heartBtn.classList.toggle("fa-solid");
      heartBtn.classList.toggle("fa-regular");
      heartBtn.classList.toggle("text-red-500");

      heartCount = heartCount + 1;
      heartEl.innerText = heartCount;
    });
  }
  if (copyBtn) {
    copyBtn.parentElement.addEventListener("click", function() {
      navigator.clipboard.writeText(number).then(function() {
        alert(`${number} নম্বরটি কপি করা হয়েছে`);
        copyCount = copyCount + 1;
        copyEl.innerText = copyCount;
      });
    });
  }
  if (callBtn) {
    callBtn.parentElement.addEventListener("click", function() {
      if (coinCount < 20) {
        alert("❌ফোন করার জন্য পর্যাপ্ত কয়েন নেই!");
        return;
      }
      coinCount = coinCount - 20;
      coinEl.innerText = coinCount;
      alert(`📞${number} নম্বরে কল করা হচ্ছে`);
      let li = document.createElement("li");
      li.className = "bg-gray-100 rounded-lg p-2";
      li.innerText = service + " (" + number + ") - " + new Date().toLocaleTimeString();
      historyList.appendChild(li);
    });
  }
});
clearBtn.addEventListener("click", function() {
  historyList.innerHTML = "";
});
