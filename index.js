
document.addEventListener("DOMContentLoaded", function(){
  let coinCount = 100;

  const coinElement = document.getElementById("coin-count")
  const historyContainer = document.getElementById("call-history")

  const cards = document.getElementsByClassName("card-emergency");

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const buttons = card.getElementsByTagName("button");
    let callButton;

    //Call button  call hostory
    for (let j = 0; j < buttons.length; j++) {
      if (buttons[j].innerHTML.includes("fa-phone")) {
        callButton = buttons[j];
        break;
      }
    }

    if (callButton) {
      callButton.addEventListener("click", function () {
        const h1 = card.getElementsByTagName("h1")[0];
        const numberEl = card.getElementsByTagName("p");

        let serviceName = h1.innerText.trim();
        let serviceNumber = "";

        for (let k = 0; k < numberEl.length; k++) {
          if (numberEl[k].classList.contains("text-2xl")) {
            serviceNumber = numberEl[k].innerText.trim();
            break;
          }
        }

        if (coinCount < 20) {
          alert("Not enough coins. Please load more.");
          return;
        }
        coinCount -= 20;
        coinElement.innerText = coinCount;
        alert(`Calling ${serviceName} (${serviceNumber})...`);

        const currentTime = new Date().toLocaleTimeString();
        const historyItem = document.createElement("p");
        historyItem.textContent = `${serviceName} at ${currentTime}`;
        historyContainer.appendChild(historyItem);
      });
    }
  }
});