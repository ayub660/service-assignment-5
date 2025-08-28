

function getId(id) {
  return document.getElementById(id);
}

function getClass(className) {
  return document.getElementsByClassName(className);
}

// Heart Button
const hearts = document.querySelectorAll(".fa-heart");
const heartCount = getId("heart-count");

hearts.forEach((heart) => {
  heart.addEventListener("click", function () {
    let count = parseInt(heartCount.innerText);
    heartCount.innerText = count + 1;
  });
});

// Copy Button
const copyButtons = document.querySelectorAll(".fa-copy");
const copyCount = document.querySelector(".copy-count");

copyButtons.forEach((copyBtn) => {
  copyBtn.parentElement.addEventListener("click", function(){
    const card = copyBtn.closest(".card-emergency");
    const number = card.querySelector("p.text-2xl").innerText;
    navigator.clipboard.writeText(number);
    alert("Copied: " + number);

    let count = parseInt(copyCount.innerText);
    copyCount.innerText = count + 1;
  });
});

// Call Button
const callButtons = document.querySelectorAll(".fa-phone");
const coinCount = getId("coin-count");
const historyContainer = document.querySelector(".save.history");

callButtons.forEach((callBtn) => {
  callBtn.parentElement.addEventListener("click", function(){
    const card = callBtn.closest(".card-emergency");
    const serviceName = card.querySelector("h1").innerText;
    const number = card.querySelector("p.text-2xl").innerText;
    let currentCoin = parseInt(coinCount.innerText);

    if (currentCoin < 20) {
      alert("❌ Your balance is low. You can't make a call.");
      return;
    }

    coinCount.innerText = currentCoin - 20;
    alert("📞 Calling " + serviceName + ": " + number);

    const time = new Date().toLocaleTimeString();
    const historyCard = document.createElement("div");
    historyCard.classList = "flex justify-between items-center bg-gray-200 p-3 mb-3 rounded";
    historyCard.innerHTML = `
      <div>
        <h1 class="font-semibold">${serviceName}</h1>
        <p class="text-gray-500">${number}</p>
      </div>
      <p class="text-gray-500">${time}</p>
    `;
    historyContainer.appendChild(historyCard);
  });
});

// Clear History
const clearBtn = document.querySelector(".history-part button");

clearBtn.addEventListener("click", function () {
  historyContainer.innerHTML = "";
});