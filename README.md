# FiveStar ERP

Browser-based ERP demonstration for a restaurant branch. This is a client-side classroom demo; it does not process real payments or synchronize data between devices.

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

## Demo modules

- Dashboard overview and operational indicators
- POS sales terminal with cart, payment methods, change calculation, receipt numbering, and ingredient/BOM deduction
- Inventory ledger with stock adjustment validation, purchase-order restocking, reorder alerts, and expiry watch
- Supplier directory and purchase orders with approval and one-time stock receiving workflow
- Reports with inventory CSV export, purchase-order CSV export, and printable inventory report that can be saved as PDF through the browser print dialog

## Data and limitations

Demo state is stored in the current browser using localStorage. It is intended for a classroom demonstration and does not provide shared accounts, server-side persistence, or real payment processing. Sample supplier, inventory, and transaction details are fictional demo data. Restocking from Inventory creates a purchase order; stock is increased only after the PO is approved and marked delivered.

## Build verification

GitHub Actions runs `npm install` and `npm run build` on pushes and pull requests to `main`, then uploads the production `dist/` directory as the `fivestar-erp-dist` artifact.
