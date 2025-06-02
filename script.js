// function insertAndWatchCustomPrice() {
//   const panel = document.querySelector(".site3dConfiguratorPanelContent");
//   const originalPriceEl = document.querySelector(
//     ".site3dConfiguratorPanelPrice"
//   );

//   if (!panel || !originalPriceEl) {
//     setTimeout(insertAndWatchCustomPrice, 300);
//     return;
//   }

//   // 1. Создаём кастомный блок и добавляем после панели
//   const customPriceDiv = document.createElement("div");
//   customPriceDiv.className = "custom-price-container";
//   customPriceDiv.style.marginTop = "10px";
//   customPriceDiv.style.fontSize = "18px";
//   customPriceDiv.style.fontWeight = "bold";
//   customPriceDiv.style.color = "#ff5722";

//   const span = document.createElement("span");
//   span.textContent = "Цена: —";
//   customPriceDiv.appendChild(span);

//   // Вставляем кастомный блок после .site3dConfiguratorPanelContent
//   panel.insertAdjacentElement("afterend", customPriceDiv);

//   // 2. Следим за изменением текстового содержимого оригинального блока
//   let lastPrice = "";

//   const observer = new MutationObserver(() => {
//     const newPrice = originalPriceEl.textContent.trim();
//     if (newPrice !== lastPrice && newPrice !== "") {
//       lastPrice = newPrice;
//       span.textContent = "Цена: " + newPrice;
//     }
//   });

//   observer.observe(originalPriceEl, {
//     childList: true,
//     characterData: true,
//     subtree: true,
//   });
// }

// // Запускаем
// insertAndWatchCustomPrice();
