// Categories page: one card per category with its product count and price range.
(function () {
  const CATEGORIES = [
    ['smartphones', 'Smartphones', 'smartphones.html', 'Phones built for work, play and photography.'],
    ['laptops', 'Laptops', 'laptops.html', 'Thin-and-light, creator and gaming laptops.'],
    ['televisions', 'Televisions', 'televisions.html', 'QLED, OLED and 4K smart TVs.'],
    ['tablets', 'Tablets', 'tablets.html', 'Tablets for study, drawing and entertainment.'],
    ['smartwatches', 'Smartwatches', 'smartwatches.html', 'Fitness and health tracking on your wrist.'],
    ['gaming', 'Gaming', 'gaming.html', 'Consoles, controllers, monitors and accessories.'],
    ['audio', 'Audio', 'audio.html', 'Earbuds, headphones, speakers and soundbars.'],
    ['cameras', 'Cameras', 'cameras.html', 'Mirrorless and instant cameras.'],
    ['accessories', 'Accessories', 'accessories.html', 'Chargers, storage, hubs and everyday add-ons.'],
  ];

  // Product whose photo is shown on the category tile.
  const COVERS = { laptops: 'xps14', tablets: 'ipad-air', smartphones: 'a56' };

  document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('[data-categories-root]');
    root.innerHTML = CATEGORIES.map(([key, name, page, text]) => {
      const items = PRODUCTS.filter((p) => p.category === key);
      const best = items.find((p) => p.id === COVERS[key]) || items.find((p) => p.image.endsWith('.jpg')) || items[0];
      const prices = items.map((p) => p.price);
      const maxOff = Math.max(...items.map((p) => p.discount));
      return `<a class="category-tile" href="${page}">
        <div class="category-tile-image"><img src="${best.image}" alt="${EH.escape(name)}" loading="lazy"></div>
        <div class="category-tile-body">
          <h2>${name}</h2>
          <p>${text}</p>
          <div class="category-tile-meta"><span>${items.length} products</span><span>From ${EH.money(Math.min(...prices))}</span></div>
          <span class="badge-off">Up to ${maxOff}% off</span>
        </div></a>`;
    }).join('');
    EH.updateCounts();
  });
})();
