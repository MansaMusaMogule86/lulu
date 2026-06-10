# 📖 Claiya Lou — Magical Personalized Storybooks

A premium, fully interactive personalized storybook gift website for Claiya Lou, featuring a complete e-commerce flow built with HTML, CSS, and JavaScript.

---

## ✅ Completed Features

### 🎨 Design & UX
- Magical, premium children's storybook aesthetic
- Responsive design (mobile, tablet, desktop)
- Animated hero section with floating particles and parallax
- Smooth scroll animations with IntersectionObserver
- Active navigation highlighting
- Dark gallery section with masonry-style grid
- Lightbox viewer for gallery and family photos (keyboard navigation)
- Social proof ticker (animated marquee)
- Announcement bar with close button

### 📚 Book Collection (19 Books)
| # | Title | Category |
|---|-------|----------|
| 1 | The Princess Inside | Princess & Magic |
| 2 | Unicorn Skies | Adventure |
| 3 | Super Girl | Empowerment |
| 4 | The Animal Keeper | Nature & Animals |
| 5 | Ocean Explorer | Adventure |
| 6 | The Enchanted Forest | Nature & Animals |
| 7 | The Fairy Garden | Princess & Magic |
| 8 | The Magic Maker | Princess & Magic |
| 9 | Safari Star | Adventure |
| 10 | Among the Stars | Adventure |
| 11 | Mermaid Queen | Adventure |
| 12 | Dr. Claiya's Animal Clinic | Nature & Animals |
| 13 | Chef Claiya's Rainbow Kitchen | Empowerment |
| 14 | Claiya's Easter Magic | Seasonal |
| 15 | Always & Forever Loved | Love & Family |
| 16 | The Three of Us | Love & Family |
| 17 | My Big Brother, My Hero | Love & Family |
| 18 | My Big Sister, My Guide | Love & Family |
| 19 | The Sibling Squad | Love & Family |

### 🛒 Full E-Commerce Flow
- **Filter tabs**: All Books · Princess & Magic · Adventure · Nature & Animals · Empowerment · Seasonal · Love & Family
- **Book Preview Modal**: Cover images + story sneak peek (2 story pages shown, rest blurred until personalized)
- **Personalise Modal** (3-step flow):
  - Step 1: Book selection + format (Hardcover $39.99 / Digital PDF $14.99 / Bundle $49.99)
  - Step 2: Child name · Age · Photo upload · Skin tone selector
  - Step 3: Gift dedication message · From name · Add-ons (Gift Wrap +$4.99 / Express +$12.99) · Live order summary
- **Cart Sidebar**: Slide-in panel · Add/remove items · Quantity control · Subtotal · Free shipping badge
- **Checkout Modal**: 2-column layout (form + summary) · Full delivery form · Card/PayPal/Apple Pay tabs · Live order total · Validation
- **Order Success Modal**: Confirmation number · What happens next steps · Confetti animation
- **Order saved to Table API**: `tables/orders` with all order details

### 👨‍👩‍👧 Family / Gallery Sections
- Claiya Lou photo gallery (6 real photos, lightbox enabled)
- Siblings section with intro cards (Brother / Claiya / Sister)
- Family memory photo grid (6 family photos, all lightbox enabled)
- Uncle Mehdi's quote card

### 💬 Social Proof
- 6 family reviews with avatars and verified badges
- Social proof ticker (live order updates)
- 4,800+ families · ★ 4.9 rating display

### ❓ FAQ
- 6 accordion questions with smooth open/close

---

## 🔗 Page Structure & Anchors

| Section | Anchor |
|---------|--------|
| Hero | `#hero` |
| Books Grid | `#books` |
| Claiya Gallery | `#gallery` |
| Family / Siblings | `#family` |
| How It Works | `#how-it-works` |
| Reviews | `#reviews` |
| FAQ | `#faq` |

---

## 🗄️ Data Model

### Table: `orders`
| Field | Type | Description |
|-------|------|-------------|
| customer_name | text | Full name from checkout |
| customer_email | text | Email (confirmation sent) |
| customer_phone | text | Optional phone |
| delivery_address | text | Full delivery address |
| order_items | rich_text | JSON array of ordered books |
| order_total | text | Total price in USD |
| gift_messages | rich_text | JSON array of gift messages |
| status | text | pending / processing / shipped |
| payment_method | text | Card / PayPal / Apple Pay |
| has_gift_wrap | text | yes / no |
| has_express | text | yes / no |
| book_titles | text | Comma-separated book titles |
| child_names | text | Comma-separated child names |
| book_formats | text | Comma-separated formats |
| order_date | datetime | ISO timestamp |
| notes | text | Internal notes |

### API Endpoints Used
- `POST tables/orders` — Creates new order on checkout
- `GET tables/orders` — (Admin) List all orders

---

## 📁 File Structure
```
index.html              Main page (all sections)
css/
  style.css             Complete stylesheet (2,400+ lines)
js/
  main.js               UI/UX animations, gallery, nav, FAQ
  store.js              Full store engine: books catalogue, cart, modals, checkout, Table API
README.md               This file
```

---

## 🚀 To Deploy
Click the **Publish tab** to make the site live. All images and functionality will work correctly on the live URL.

---

## 🧰 Local Install & Run

This project is a static website. To run it locally with one command:

1. Install dependencies:
  - `npm install`
2. Start local server:
  - `npm run dev`
3. Open the URL shown in terminal (default: `http://localhost:4173`)

### Available Scripts
- `npm run dev` — Start local development server
- `npm run start` — Alias for `dev`

---

## 📝 Recommended Next Steps
1. **Connect real payment processor** (Stripe, PayPal SDK)
2. **Email confirmation system** (currently displays confirmation number only)
3. **Admin order dashboard** — read from `tables/orders` to manage orders
4. **Real photo upload backend** — store uploaded child photos securely for the illustrators
5. **More seasonal books** — Halloween, Christmas, Eid collections
6. **Discount/promo code system** at checkout

---

*Made with ❤️ by Uncle Mehdi for Claiya Lou*
