// Deals page: every product that has a discount, with filters and sorting.
(function () {
  const state = { category: 'all', min: 0, sort: 'discount' };
  const label = (c) => c[0].toUpperCase() + c.slice(1);
  const saving = (p) => p.oldPrice - p.price;

  function filtered() {
    const list = PRODUCTS.filter((p) => p.discount > 0 && (state.category === 'all' || p.category === state.category) && p.discount >= state.min);
    const sorters = {
      discount: (a, b) => b.discount - a.discount,
      saving: (a, b) => saving(b) - saving(a),
      priceAsc: (a, b) => a.price - b.price,
      priceDesc: (a, b) => b.price - a.price,
    };
    return list.sort(sorters[state.sort]);
  }

  function banner() {
    const top = [...PRODUCTS].sort((a, b) => saving(b) - saving(a))[0];
    const maxOff = Math.max(...PRODUCTS.map((p) => p.discount));
    document.querySelector('[data-deal-banner]').innerHTML = `<div>
      <div class="eyebrow">Biggest saving today</div>
      <h2>Save ${EH.money(saving(top))} on the ${EH.escape(top.name)}</h2>
      <p>Now ${EH.money(top.price)} instead of ${EH.money(top.oldPrice)}. Discounts go up to ${maxOff}% across the store.</p></div>
      <a class="btn btn-orange" href="product.html?id=${top.id}">View deal</a>`;
  }

  function render() {
    const list = filtered();
    document.querySelector('[data-product-count]').textContent = `${list.length} deal${list.length === 1 ? '' : 's'}`;
    const root = document.querySelector('[data-deals-root]');
    renderProducts(list, root);
    if (!list.length) root.querySelector('.empty h2').textContent = 'No deals match these filters.';
  }

  document.addEventListener('DOMContentLoaded', () => {
    const cat = document.querySelector('[data-deal-category]');
    [...new Set(PRODUCTS.map((p) => p.category))].forEach((c) => cat.insertAdjacentHTML('beforeend', `<option value="${c}">${label(c)}</option>`));
    const q = new URLSearchParams(location.search).get('category');
    if (q && PRODUCTS.some((p) => p.category === q)) { state.category = q; cat.value = q; }
    cat.addEventListener('change', (e) => { state.category = e.target.value; render(); });
    document.querySelector('[data-deal-min]').addEventListener('change', (e) => { state.min = Number(e.target.value); render(); });
    document.querySelector('[data-deal-sort]').addEventListener('change', (e) => { state.sort = e.target.value; render(); });
    banner();
    render();
  });
})();
