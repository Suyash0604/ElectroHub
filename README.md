# ElectroHub

> Everything Electronic. One Smart Hub.

A complete responsive multi-page electronics e-commerce frontend built with **HTML, CSS and vanilla JavaScript only**.

## Features
- 26+ connected HTML pages
- 76 demo products across 9 categories
- Global search, category/brand/rating filters and sorting
- Product detail pages with URL-based product IDs
- Cart and wishlist persisted in `localStorage`
- Frontend-only registration/login with demo account
- Protected profile, orders and checkout flows
- Multi-step checkout with simulated payment methods
- Order creation, order history and success page
- Responsive desktop/tablet/mobile navigation
- Toasts, empty states, breadcrumbs, badges, back-to-top button
- Accessible labels, semantic HTML and lazy-loaded product images
- No React, Angular, Vue, Bootstrap, Tailwind, jQuery or frontend framework

## Folder structure
```text
ElectroHub/
├── index.html
├── login.html
├── register.html
├── forgot-password.html
├── shop.html
├── smartphones.html
├── laptops.html
├── televisions.html
├── tablets.html
├── smartwatches.html
├── gaming.html
├── audio.html
├── cameras.html
├── accessories.html
├── product.html
├── wishlist.html
├── cart.html
├── checkout.html
├── order-success.html
├── orders.html
├── profile.html
├── about.html
├── contact.html
├── faq.html
├── privacy.html
├── terms.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── auth.css
├── js/
│   ├── products.js
│   ├── product-card.js
│   ├── main.js
│   ├── auth.js
│   ├── cart.js
│   ├── wishlist.js
│   ├── checkout.js
│   ├── orders.js
│   ├── product.js
│   └── shop.js
└── images/
    ├── smartphones/
    ├── laptops/
    ├── televisions/
    ├── tablets/
    ├── smartwatches/
    ├── gaming/
    ├── audio/
    ├── cameras/
    └── accessories/
```

## Run locally
Because this is a static site, you can open `index.html` directly in many browsers. For the most reliable local experience, run a simple HTTP server:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500/`.

## Demo login
- **Email:** `demo@electrohub.com`
- **Password:** `demo123`

The demo user is automatically created in localStorage if no users exist.

## How authentication works
`auth.js` stores demo users under `electrohub_users` and the current session under `electrohub_currentUser`. Checkout, orders and profile check for the current user and redirect to login if necessary. This is intentionally **not secure authentication** and must not be used with real credentials.

## How cart works
`cart.js` stores cart lines in `electrohub_cart`. Each line has a product ID, quantity and selected product options. Totals are calculated from the product database. The cart survives refreshes because it is stored in localStorage.

## How wishlist works
`wishlist.js` stores product IDs in `electrohub_wishlist`. Product cards and product detail pages can add/remove items, and the wishlist page can move saved products into the cart.

## How checkout works
Checkout requires a logged-in user and a non-empty cart. Address, delivery method and payment method are validated in the browser. Payment is simulated only. A successful checkout creates an order with a generated ID and stores it in `electrohub_orders`, clears the cart and redirects to `order-success.html`.

## localStorage keys
- `electrohub_users`
- `electrohub_currentUser`
- `electrohub_cart`
- `electrohub_wishlist`
- `electrohub_orders`
- `electrohub_lastOrder`

## Important demo note
Do not enter real passwords, card numbers, CVV values or other sensitive information. This project is a frontend demonstration with no backend and no real payment processing.

## Verification performed
The project generator verifies the expected HTML pages, CSS/JS files and 76-product database. JavaScript syntax is checked with Node where available, and internal relative links are checked for missing local targets.
