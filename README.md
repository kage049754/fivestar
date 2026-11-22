# FiveStar ERP

Browser-based ERP demonstration for a restaurant branch. It is a client-side classroom demo: it does not process real payments or synchronize records between devices.

## Run locally

```bash
npm install
npm run dev
```

Build and preview the production site:

```bash
npm run build
npm run preview
```

## Functional modules

- **Dashboard:** live branch sales, completed orders, open purchase orders, stock alerts, and recent transactions.
- **POS & Sales:** searchable menu catalog, categories, cart quantities, payment methods, tender/change validation, generated receipt numbers, and automatic recipe/BOM stock deductions.
- **Inventory & BOM:** searchable stock ledger, dynamic reorder status, expiry checks, stock adjustments, spoilage logging, new ingredients, and purchase-order restocking.
- **Suppliers & Purchase Orders:** supplier directory with add-supplier workflow, generated PO numbers, quantity-based cost estimates, approval, delivery receiving, one-time stock sync, and CSV export.
- **Reports & Analytics:** payment breakdown, menu rankings, inventory valuation, calculated COGS/gross profit, full operations CSV export, and printable operations report (Save as PDF from the browser print dialog).

## Data and limitations

Demo records and changes are stored in the current browser using localStorage. They persist in that browser but do not sync between devices. The app does not provide server-side accounts, shared branch data, or real payment processing. Default suppliers, menu items, inventory, and opening sales figures are fictional seed data. Users can add menu items, suppliers, and ingredients. Completing a sale updates local sales totals and deducts recipe ingredients; receiving an approved/in-transit PO adds its inventory quantities once.

## Deployment and verification

GitHub Actions runs `npm install` and `npm run build` on pushes to `main`, uploads the `dist/` output as the `github-pages` artifact, and deploys it to GitHub Pages.
