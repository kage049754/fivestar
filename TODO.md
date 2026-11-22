# FireStar ERP Prototype

- [x] Build the FiveStar ERP shell with dark navy sidebar, red active navigation, branch identity, status panel, top actions, responsive layout, and shared cards/tables/badges.
- [x] Implement Dashboard Overview with KPI cards, weekly sales chart, live low-stock watchlist, and recent POS transactions.
- [x] Implement POS & Sales Terminal with category tabs, search, product cards, cart quantities, payment methods, tendered amount, change calculation, and complete-sale flow.
- [x] Implement Inventory & BOM Management with filters, stock statuses, reorder points, FIFO expiry, restock, adjust/spoilage, and add-ingredient interactions.
- [x] Implement Suppliers & Purchase Orders with active vendor cards, PO creation, approval workflow, in-transit and delivered states, and stock-synced delivery feedback.
- [x] Implement Reports & Analytics with date controls, revenue/COGS KPIs, payment breakdown, top-selling analysis, inventory valuation, and CSV/PDF export demos.
- [x] Keep shared demo state in-browser so sales, restocks, approvals, and deliveries affect counts and values across screens.


## Corrections applied

- Rebranded the UI and document title from FireStar ERP to FiveStar ERP.
- Preserved existing demo data by migrating the previous `firestar-erp-demo` localStorage key to the new `fivestar-erp-demo` key on read.
- POS product availability is now calculated from current recipe ingredient balances; unavailable products cannot be added to the cart.
- Removed inactive inventory pagination controls.
- Replaced the PDF placeholder with a printable inventory report that can be saved as PDF from the browser print dialog.
- Implemented purchase-order CSV export.
- Added disabled-button styling and a GitHub Actions production build workflow.

## Verification

- GitHub Actions production build: passed on the latest correction commit.
- Artifact: `fivestar-erp-dist` (uploaded by the workflow).
- Storage remains browser-local demo data; this is not a multi-user server/database deployment.
