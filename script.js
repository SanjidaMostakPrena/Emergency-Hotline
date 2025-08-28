// ===== HEADER COUNTERS =====
let heartCount = 0;
const heartBtn = document.querySelector('.heartcount');
heartBtn.addEventListener('click', () => {
  heartCount++;
  heartBtn.textContent = heartCount;
});

let coinCount = 100;
const coinBtn = document.querySelector('.coincount');
coinBtn.addEventListener('click', () => {
  coinCount += 10; // increase coins
  coinBtn.textContent = coinCount;
});

// ===== CARD HEARTS =====
document.querySelectorAll('.fa-heart').forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('text-red-500'); // toggle heart color
  });
});

// ===== COPY BUTTONS =====
document.querySelectorAll('button').forEach(btn => {
  if (btn.innerText.toLowerCase().includes('copy') || btn.innerHTML.includes('fa-copy')) {
    btn.addEventListener('click', () => {
      const number = btn.closest('div').querySelector('.number').textContent;
      navigator.clipboard.writeText(number)
        .then(() => alert(`Copied: ${number}`))
        .catch(err => console.error(err));
    });
  }
});

// ===== CALL BUTTONS =====
const historyList = document.getElementById('historyList');

document.querySelectorAll('button').forEach(btn => {
  if (btn.innerText.toLowerCase().includes('call') || btn.innerHTML.includes('fa-phone')) {
    btn.addEventListener('click', () => {
      const number = btn.closest('div').querySelector('.number').textContent;
      alert(`Calling: ${number}`);
      // Add to call history
      const li = document.createElement('li');
      li.textContent = `${number} - ${new Date().toLocaleTimeString()}`;
      historyList.prepend(li);
    });
  }
});

// ===== CLEAR HISTORY BUTTON =====
document.getElementById('clearHistory').addEventListener('click', () => {
  historyList.innerHTML = '';
});
