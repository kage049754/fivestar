# FiveStar ERP

Browser-based ERP demonstration for a restaurant branch.

## Run locally

```bash
npm install
npm run dev
```

Build the production site:

```bash
npm run build
npm run preview
```

## Demo modules

- Dashboard overview and operational indicators
- POS sales terminal with cart, payment methods, change calculation, and ingredient/BOM deduction
- Inventory ledger with stock adjustment, restocking, reorder alerts, and expiry watch
- Supplier directory and purchase orders with approval and receiving workflow
- Reports with inventory CSV export, purchase-order CSV export, and printable report/PDF via the browser print dialog

## Data and limitations

Demo state is stored in the current browser using localStorage. It is intended for a classroom demonstration and does not provide shared accounts, server-side persistence, or real payment processing. Sample supplier and transaction details are fictional demo data.

## Build verification

GitHub Actions runs `npm install` and `npm run build` on pushes and pull requests to `main`, then uploads the production `dist/` directory as the `fivestar-erp-dist` artifact.
