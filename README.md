# Brew & Bite — Café & Restaurant

A responsive single-page website for a fictional café, built with plain HTML, CSS and JavaScript as a junior frontend portfolio project. All content (menu, prices, reviews, address, hours) is sample data.

## Features

- Sticky navigation, accessible mobile hamburger menu (Escape closes it), smooth scrolling
- Hero, menu categories, filterable menu list (8 items, prices in EGP), about, why-choose-us, reviews, contact, call-to-action and footer
- Contact form with client-side validation and friendly messages
- Dynamic footer year, visible focus styles, skip link, reduced-motion support
- Image fallback: if a photo fails to load, a beige placeholder shows instead

## Technologies

HTML5, CSS3 (Grid, Flexbox, custom properties, `clamp()`), vanilla JavaScript. Google Fonts (Fraunces, DM Sans) and Unsplash photos are loaded from the web. No frameworks or build tools.

## Folder structure

```
brew-and-bite/
├── index.html   # page structure and content
├── style.css    # all styling
├── script.js    # menu toggle, filter, form validation, year
└── README.md
```

## Run locally

Open `index.html` in any modern browser. An internet connection is needed for fonts and photos.

## Deploy with GitHub Pages

1. Create a GitHub repository and upload the four files (keep `index.html` in the root).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a minute your site is live at `https://<username>.github.io/<repository>/`.

## Limitations

- **The contact form is a demo.** There is no backend, so nothing is sent or stored. It only validates input and shows a confirmation.
- "Order Now" buttons jump to the menu; there is no ordering or checkout system.
- Address, phone, email, social links, hours, prices and reviews are placeholders, and there is no real map.
- Photos come from Unsplash URLs, which could change or be removed over time.

## Ideas for future versions

- Connect the form to a service such as Formspree or a small backend
- Add a real map embed once there is a real address
- Add a cart/ordering flow, and menu data stored in a JavaScript array or JSON file
- Download and host images locally, in WebP format
- Add Arabic language support with right-to-left layout
