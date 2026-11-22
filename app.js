import './styles.css';

const defaultMenuItems = [
  { id: 'classic', name: '1-Pc. Classic Fried Chicken Meal', short: '1-Pc. Classic Chicken', category: 'Fried Chicken', price: 89, stock: '112 in stock', desc: 'BOM: 1 cut, 1 rice, 1 gravy', bom: [{ id: 'chicken', qty: 1 }, { id: 'breading', qty: 1 }] },
  { id: 'spicy', name: '1-Pc. Spicy Chicken Rice Meal', short: '1-Pc. Spicy Chicken', category: 'Rice Meals', price: 95, stock: '84 in stock', desc: '1 Pc. hot & spicy, 1 rice', bom: [{ id: 'chicken', qty: 1 }, { id: 'breading', qty: 1 }] },
  { id: 'whole', name: 'Whole Fried Chicken (8-Pc)', short: 'Whole Chicken', category: 'Fried Chicken', price: 420, stock: '14 packs left', desc: 'BOM: 8 cuts, 120g fry mix', bom: [{ id: 'chicken', qty: 8 }, { id: 'breading', qty: 2 }] },
  { id: 'popcorn', name: 'Chicken Popcorn (Large)', short: 'Chicken Popcorn', category: 'Fried Chicken', price: 85, stock: '48 in stock', desc: 'BOM: 150g chicken, 70g mix', bom: [{ id: 'chicken', qty: 1 }, { id: 'breading', qty: 1 }] },
  { id: 'ricebowl', name: '1-Pc. Spicy Chicken Rice Bowl', short: 'Spicy Rice Bowl', category: 'Rice Meals', price: 99, stock: '65 in stock', desc: '1 Pc. spicy chicken, rice', bom: [{ id: 'chicken', qty: 1 }, { id: 'breading', qty: 1 }] },
  { id: 'soda', name: '1.5L Bottled Soda', short: '1.5L Bottled Soda', category: 'Snacks & Drinks', price: 75, stock: '38 in stock', desc: 'BOM: 1 × 1.5L PET bottle', bom: [{ id: 'soda', qty: 1 }] },
  { id: 'family', name: 'Meal Boxes & Family Bucket', short: 'Family Bucket', category: 'Rice Meals', price: 520, stock: '22 in stock', desc: '8 cuts, 4 rice, 1 bucket', bom: [{ id: 'chicken', qty: 8 }, { id: 'breading', qty: 2 }] }
];

const defaultSuppliers = [
  { id: 'cavite', category: 'Poultry', name: 'Cavite Prime Poultry Supply', contact: 'Contact: R. Mendoza · 0917-554-8921', detail: 'Barangay San Juan, Cavite', lead: 'Same-Day Delivery' },
  { id: 'south', category: 'Dry Goods', name: 'South Luzon Food Ingredients', contact: 'Contact: A. Villanueva · 0918-432-1904', detail: 'Cabuyao, Laguna', lead: '1–2 Business Days' },
  { id: 'metro', category: 'Packaging', name: 'MetroPack Cavite Trading', contact: 'Contact: L. Reyes · 0922-881-3340', detail: 'Imus, Cavite', lead: '1–2 Business Days' }
];

const defaultInventory = [
  { id: 'chicken', name: 'Fresh Chicken Cuts (8-pc Pack)', sku: 'SKU: ING-001 · Unit Cost: ₱560.00', category: 'Poultry', qty: 14, unit: 'packs', reorder: 25, expiry: 'Nov 24, 2026', cost: 560, beginning: 40, poRestocks: 120, bomUsage: 146 },
  { id: 'breading', name: 'Five Star Breading Mix (5kg)', sku: 'SKU: ING-002 · Unit Cost: ₱640.00', category: 'Dry Goods', qty: 4, unit: 'bags', reorder: 8, expiry: 'Jan 12, 2027', cost: 640, beginning: 10, poRestocks: 16, bomUsage: 22 },
  { id: 'oil', name: 'Palm Cooking Oil (17L Carboy)', sku: 'SKU: ING-003 · Unit Cost: ₱1,450.00', category: 'Dry Goods', qty: 2, unit: 'jugs', reorder: 5, expiry: 'Feb 10, 2027', cost: 1450, beginning: 6, poRestocks: 8, bomUsage: 12 },
  { id: 'fillet', name: 'Boneless Chicken Fillet (1kg)', sku: 'SKU: ING-004 · Unit Cost: ₱210.00', category: 'Poultry', qty: 18, unit: 'packs', reorder: 10, expiry: 'Nov 25, 2026', cost: 210, beginning: 25, poRestocks: 30, bomUsage: 37 },
  { id: 'boxes', name: '1-Pc. Meal Paper Box (100s)', sku: 'SKU: ING-005 · Unit Cost: ₱95.00', category: 'Packaging', qty: 12, unit: 'bundles', reorder: 5, expiry: 'Non-Perishable', cost: 95, beginning: 7, poRestocks: 10, bomUsage: 5 },
  { id: 'soda', name: '1.5L Bottled Soda (Case of 12)', sku: 'SKU: ING-006 · Unit Cost: ₱980.00', category: 'Beverages', qty: 6, unit: 'cases', reorder: 3, expiry: 'Apr 20, 2027', cost: 980, beginning: 10, poRestocks: 3, bomUsage: 7 }
];

const defaultState = {
  page: 'dashboard',
  menuItems: defaultMenuItems,
  suppliers: defaultSuppliers,
  posCategory: 'All items',
  posSearch: '',
  inventorySearch: '',
  inventoryFilter: 'All Stock',
  poFilter: 'All POs',
  payment: 'Cash',
  tendered: 1000,
  grossSales: 18450,
  dailySalesDate: '',
  completedOrders: 142,
  paymentCounts: { Cash: 1412, GCash: 874, Maya: 318 },
  paymentTotals: { Cash: 185846, GCash: 114688, Maya: 42176 },
  menuMetrics: { classic: { sold: 265, revenue: 113300 }, spicy: { sold: 940, revenue: 83660 }, whole: { sold: 610, revenue: 57950 }, popcorn: { sold: 480, revenue: 40800 } },
  auditLog: [],
  inventory: defaultInventory,
  cart: [{ id: 'classic', qty: 2 }, { id: 'whole', qty: 1 }, { id: 'soda', qty: 1 }],
  purchaseOrders: [
    { id: 'PO-2026-0118', date: new Date(Date.now() - 0 * 86400000).toLocaleDateString('en-PH', { month: 'short', day: '2-digit', year: 'numeric' }), supplier: 'Cavite Prime Poultry Supply', items: '30× Fresh Chicken Cuts (8-pc)', lines: [{ id: 'chicken', qty: 30 }], total: 16800, status: 'Pending', received: false },
    { id: 'PO-2026-0117', date: new Date(Date.now() - 1 * 86400000).toLocaleDateString('en-PH', { month: 'short', day: '2-digit', year: 'numeric' }), supplier: 'South Luzon Food Ingredients', items: '6× Breading Mix, 4× Cooking Oil', lines: [{ id: 'breading', qty: 6 }, { id: 'oil', qty: 4 }], total: 9640, status: 'In Transit', received: false },
    { id: 'PO-2026-0116', date: new Date(Date.now() - 3 * 86400000).toLocaleDateString('en-PH', { month: 'short', day: '2-digit', year: 'numeric' }), supplier: 'MetroPack Cavite Trading', items: '15× Meal Boxes, 10× Family Buckets', lines: [{ id: 'boxes', qty: 15 }], total: 4350, status: 'Delivered', received: true },
    { id: 'PO-2026-0115', date: new Date(Date.now() - 5 * 86400000).toLocaleDateString('en-PH', { month: 'short', day: '2-digit', year: 'numeric' }), supplier: 'Cavite Prime Poultry Supply', items: '25× Chicken Cuts, 15× Chicken Fillet', lines: [{ id: 'chicken', qty: 25 }, { id: 'fillet', qty: 15 }], total: 17150, status: 'Delivered', received: true },
    { id: 'PO-2026-0114', date: new Date(Date.now() - 7 * 86400000).toLocaleDateString('en-PH', { month: 'short', day: '2-digit', year: 'numeric' }), supplier: 'South Luzon Food Ingredients', items: '8× Five Star Breading Mix', lines: [{ id: 'breading', qty: 8 }], total: 5120, status: 'Delivered', received: true }
  ],
  recentTransactions: [
    { id: 'OR-2026-0842', date: new Date(Date.now() - 0 * 86400000).toLocaleDateString('en-PH', { month: 'short', day: '2-digit', year: 'numeric' }), cashier: 'M. Santos', items: '2× Classic Chicken Meal, 1× 1.5L Soda', payment: 'GCash', amount: 245 },
    { id: 'OR-2026-0841', date: new Date(Date.now() - 1 * 86400000).toLocaleDateString('en-PH', { month: 'short', day: '2-digit', year: 'numeric' }), cashier: 'M. Santos', items: '1× Whole Fried Chicken Family Pack', payment: 'Cash', amount: 420 },
    { id: 'OR-2026-0840', date: new Date(Date.now() - 2 * 86400000).toLocaleDateString('en-PH', { month: 'short', day: '2-digit', year: 'numeric' }), cashier: 'M. Santos', items: '3× Spicy Chicken Rice Bowl', payment: 'Maya', amount: 297 },
    { id: 'OR-2026-0839', date: new Date(Date.now() - 3 * 86400000).toLocaleDateString('en-PH', { month: 'short', day: '2-digit', year: 'numeric' }), cashier: 'M. Santos', items: '2× Crispy Chicken Popcorn (Large)', payment: 'Cash', amount: 170 }
  ],
  salesByDay: [41000, 52000, 37000, 61000, 68000, 54000, 58000],
  spoilageLoss: 1420
};

const saved = JSON.parse(localStorage.getItem('fivestar-erp-demo') || localStorage.getItem('firestar-erp-demo') || 'null');
const state = { ...defaultState, ...(saved || {}) };
if (!Array.isArray(state.menuItems)) state.menuItems = defaultMenuItems.map((item) => ({ ...item, bom: item.bom.map((part) => ({ ...part })) }));
if (!Array.isArray(state.suppliers)) state.suppliers = defaultSuppliers.map((vendor) => ({ ...vendor }));
if (!Array.isArray(state.inventory) || !state.inventory.length) state.inventory = defaultInventory.map((item) => ({ ...item }));
if (!Array.isArray(state.purchaseOrders)) state.purchaseOrders = defaultState.purchaseOrders.map((item) => ({ ...item }));
if (!Array.isArray(state.recentTransactions)) state.recentTransactions = defaultState.recentTransactions.map((item) => ({ ...item }));
if (!Array.isArray(state.auditLog)) state.auditLog = [];

state.spoilageLoss ??= defaultState.spoilageLoss;
if (!Array.isArray(state.salesByDay) || state.salesByDay.length !== 7 || Math.max(...state.salesByDay) < 1000) state.salesByDay = [...defaultState.salesByDay];
state.paymentCounts = { ...defaultState.paymentCounts, ...(state.paymentCounts || {}) };
state.paymentTotals = { ...defaultState.paymentTotals, ...(state.paymentTotals || {}) };
state.menuMetrics = { ...defaultState.menuMetrics, ...(state.menuMetrics || {}) };
state.purchaseOrders.forEach((po) => { if (!po.lines) po.lines = defaultState.purchaseOrders.find((item) => item.id === po.id)?.lines || []; });
state.inventory.forEach((item) => { item.beginning ??= item.qty; item.poRestocks ??= 0; item.bomUsage ??= 0; });

const pageMeta = {
  dashboard: { label: 'Dashboard Overview', title: 'Dashboard Overview', subtitle: 'A live operating snapshot of your Paradahan branch, integrated sales, inventory, and supplier workflow.' },
  pos: { label: 'POS & Sales Terminal', title: 'POS & Sales Terminal', subtitle: 'Ring up orders, deduct recipe ingredients, and keep the branch stock ledger in sync.' },
  inventory: { label: 'Inventory & BOM', title: 'Inventory & BOM Management', subtitle: 'Track ingredient stock levels, expiry windows, reorder points, and FIFO movement.' },
  suppliers: { label: 'Suppliers & POs', title: 'Suppliers & Purchase Orders', subtitle: 'Coordinate active vendors and move purchase orders from request to stock-synced delivery.' },
  reports: { label: 'Reports & Analytics', title: 'Reports & Analytics', subtitle: 'Review branch performance, payment channels, menu margin, and inventory asset value.' }
};

const navItems = [
  { id: 'dashboard', label: 'Dashboard Overview', icon: '⌂' },
  { id: 'pos', label: 'POS & Sales Terminal', icon: '▣' },
  { id: 'inventory', label: 'Inventory & BOM', icon: '▤' },
  { id: 'suppliers', label: 'Suppliers & POs', icon: '⌑' },
  { id: 'reports', label: 'Reports & Analytics', icon: '▥' }
];

const today = () => new Date();
const formatDate = (date = today()) => date.toLocaleDateString('en-PH', { month: 'short', day: '2-digit', year: 'numeric' });
const dateKey = (date = today()) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
const dateRangeLabel = () => {
  const now = today();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  return `${start.toLocaleDateString('en-PH', { month: 'short', day: 'numeric' })} – ${formatDate(now)}`;
};
if (!state.dailySalesDate) state.dailySalesDate = dateKey();
else if (state.dailySalesDate !== dateKey()) { state.grossSales = 0; state.dailySalesDate = dateKey(); }
state.recentTransactions.forEach((tx, index) => { if (!tx.date) tx.date = formatDate(new Date(today().getTime() - index * 86400000)); });
const money = (value) => `₱${Number(value || 0).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const wholeMoney = (value) => `₱${Number(value || 0).toLocaleString('en-PH', { maximumFractionDigits: 0 })}`;
const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const getMenuItem = (id) => state.menuItems.find((item) => item.id === id);
const getInventoryItem = (id) => state.inventory.find((item) => item.id === id);
const isExpiringSoon = (item) => {
  const expiry = new Date(item.expiry);
  if (Number.isNaN(expiry.getTime())) return false;
  const days = (expiry.getTime() - today().setHours(0, 0, 0, 0)) / 86400000;
  return days >= 0 && days <= 30;
};
const nextReceiptId = () => {
  const latest = state.recentTransactions.reduce((max, tx) => Math.max(max, Number(String(tx.id).split('-').pop()) || 0), 0);
  return `OR-${today().getFullYear()}-${String(latest + 1).padStart(4, '0')}`;
};
const nextPurchaseOrderId = () => {
  const latest = state.purchaseOrders.reduce((max, po) => Math.max(max, Number(String(po.id).split('-').pop()) || 0), 0);
  return `PO-${today().getFullYear()}-${String(latest + 1).padStart(4, '0')}`;
};
const save = () => localStorage.setItem('fivestar-erp-demo', JSON.stringify({ ...state, page: undefined, posSearch: '', inventorySearch: '' }));

function stockStatus(item) {
  if (item.qty <= Math.max(1, Math.ceil(item.reorder * 0.7))) return { label: 'Critical', className: 'critical' };
  if (item.qty <= item.reorder) return { label: 'Low Stock', className: 'low' };
  return { label: 'In Stock', className: 'ok' };
}

function productAvailability(menuItem) {
  const limits = menuItem.bom.map((part) => Math.floor((getInventoryItem(part.id)?.qty || 0) / part.qty));
  const available = limits.length ? Math.max(0, Math.min(...limits)) : 0;
  return { available, label: available ? `${available} servings available` : 'Out of stock', canAdd: available > 0 };
}

function orderTotals() {
  const subtotal = state.cart.reduce((sum, line) => {
    const item = getMenuItem(line.id);
    return sum + (item ? item.price * line.qty : 0);
  }, 0);
  return { subtotal, total: subtotal, change: Math.max(0, Number(state.tendered || 0) - subtotal) };
}

function openToast(title, message, type = 'success') {
  const root = document.querySelector('#toastRoot');
  if (!root) return;
  if (!root.classList.contains('toast-stack')) root.className = 'toast-stack';
  const toast = document.createElement('div');
  toast.className = `toast ${type === 'error' ? 'error' : ''}`;
  toast.innerHTML = `<div><strong>${esc(title)}</strong><span>${esc(message)}</span></div>`;
  root.appendChild(toast);
  setTimeout(() => toast.remove(), 3600);
}

function statusPill(status) {
  const map = { Pending: 'pending', 'In Transit': 'transit', Delivered: 'delivered' };
  return `<span class="status-pill ${map[status] || 'ok'}">${esc(status)}</span>`;
}

function shell() {
  const meta = pageMeta[state.page] || pageMeta.dashboard;
  return `<div class="app-shell">
    <aside class="sidebar" id="sidebar">
      <div class="brand"><div class="brand-mark">★</div><div><div class="brand-name">FiveStar ERP</div><div class="brand-sub">Paradahan Branch</div></div></div>
      <div class="nav-label">Operations</div>
      <nav class="nav">
        ${navItems.map((item) => `<button class="nav-button ${state.page === item.id ? 'active' : ''}" data-nav="${item.id}"><span class="nav-icon">${item.icon}</span>${item.label}</button>`).join('')}
      </nav>
      <div class="sidebar-spacer"></div>
      <div class="server-card"><div class="server-row"><span class="server-dot"></span>Demo Mode: Local Storage</div><div class="server-meta">Laguna · Paradahan, Tanza<br><strong>Role: Branch Manager</strong></div></div>
    </aside>
    <main class="main">
      <header class="topbar"><div class="topbar-left"><button class="menu-toggle" id="mobileMenu" aria-label="Open navigation">☰</button><div class="crumb">FiveStar ERP&nbsp; / &nbsp;<strong>${meta.label}</strong></div></div><div class="topbar-actions"><div class="date-chip">◷&nbsp; ${dateRangeLabel()}</div><button class="btn btn-outline" data-nav="suppliers">+ Create PO</button><button class="btn btn-primary" data-nav="pos">Open POS Terminal</button></div></header>
      <section class="content" id="view">${renderPage(meta)}</section>
    </main>
  </div>`;
}

function pageHead(meta, actions = '') {
  return `<div class="page-head"><div><div class="eyebrow">FiveStar ERP Operations Console</div><h1>${meta.title}</h1><p class="page-subtitle">${meta.subtitle}</p></div><div class="head-actions">${actions}</div></div>`;
}

function kpi(label, value, note, tone = '') {
  return `<div class="kpi-card ${tone}"><div class="kpi-label">${label}</div><div class="kpi-value">${value}</div><div class="kpi-note ${tone === 'alert' ? 'warn' : tone === 'positive' ? '' : 'neutral'}">${note}</div></div>`;
}

function renderPage(meta) {
  if (state.page === 'pos') return renderPOS(meta);
  if (state.page === 'inventory') return renderInventory(meta);
  if (state.page === 'suppliers') return renderSuppliers(meta);
  if (state.page === 'reports') return renderReports(meta);
  return renderDashboard(meta);
}

function renderDashboard(meta) {
  const lowStock = state.inventory.filter((item) => stockStatus(item).className !== 'ok');
  const pending = state.purchaseOrders.filter((po) => po.status !== 'Delivered').length;
  const maxSales = Math.max(1, ...state.salesByDay);
  return `${pageHead(meta, '<button class="btn btn-outline" data-nav="reports">View Reports</button><button class="btn btn-primary" data-nav="pos">Start New Sale</button>')}
    <div class="kpi-grid">
      ${kpi(`Today's Gross Sales · ${formatDate()}`, money(state.grossSales), 'Updated after each completed sale', 'positive')}
      ${kpi('Completed POS Orders', `${state.completedOrders} Orders`, 'BOM stock auto-synced', '')}
      ${kpi('Low-Stock Alerts', `${lowStock.length} Ingredients`, lowStock.length ? 'Critical · Reorder Needed' : 'All levels healthy', 'alert')}
      ${kpi('Open Supplier POs', `${pending} Orders`, `${money(state.purchaseOrders.filter((po) => po.status === 'Pending').reduce((sum, po) => sum + po.total, 0))} incoming`, '')}
    </div>
    <div class="grid-2">
      <div class="panel"><div class="panel-title-row"><div><div class="panel-title">Weekly Sales vs. Raw Ingredient Consumption (₱)</div><div class="panel-caption">Paradahan Branch POS revenue compared against BOM ingredient usage</div></div><span class="status-pill ok">Gross Sales</span></div>
        <div class="chart"><div class="chart-axis"><span>${wholeMoney(maxSales)}</span><span>${wholeMoney(maxSales * .66)}</span><span>${wholeMoney(maxSales * .33)}</span><span>₱0</span></div><div class="chart-main">${state.salesByDay.map((value, index) => `<div class="chart-group"><div class="bar" style="height:${Math.max(3, (value / maxSales) * 82)}%"></div><div class="bar alt" style="height:${Math.max(2, (value * 0.363 / maxSales) * 82)}%"></div><span class="chart-day">${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</span></div>`).join('')}</div></div>
        <div class="legend"><span><i></i>Gross Sales</span><span><i class="alt"></i>Stock Cost</span></div>
      </div>
      <div class="panel"><div class="panel-title-row"><div><div class="panel-title">Live Low-Stock Watchlist</div><div class="panel-caption">Reorder points updated from the inventory ledger</div></div><span class="status-pill critical">${lowStock.length} alerts</span></div>
        <div class="watch-list">${lowStock.slice(0, 4).map((item) => { const status = stockStatus(item); return `<div class="watch-item"><div><div class="watch-name">${esc(item.name.replace(/ \(.*/, ''))}</div><div class="watch-meta">${item.qty} ${item.unit} left · Reorder Point: ${item.reorder}</div></div><button class="btn btn-dark btn-small" data-action="restock" data-id="${item.id}">Create PO</button></div>`; }).join('') || '<div class="empty-state">No low-stock ingredients right now.</div>'}</div>
      </div>
    </div>
    <div class="panel" style="margin-top:15px"><div class="panel-title-row"><div><div class="panel-title">Recent POS Transactions & Auto-Deducted Raw Stock (BOM)</div><div class="panel-caption">Latest receipt activity from the branch terminal</div></div><button class="text-link" data-nav="reports">View Full Ledger →</button></div>
      <div class="table-wrap"><table class="data-table"><thead><tr><th>Receipt #</th><th>Cashier</th><th>Menu Items Sold</th><th>Auto-Deducted Inventory</th><th>Payment</th><th>Amount</th></tr></thead><tbody>${state.recentTransactions.slice(0, 5).map((tx) => `<tr><td><strong>${esc(tx.id)}</strong><div class="subtext">${esc(tx.date || 'Opening demo record')}</div></td><td>${esc(tx.cashier)}</td><td>${esc(tx.items)}</td><td><span class="subtext">BOM deduction synced</span></td><td><span class="status-pill ${tx.payment === 'Cash' ? 'ok' : 'transit'}">${esc(tx.payment)}</span></td><td class="money">${money(tx.amount)}</td></tr>`).join('')}</tbody></table></div>
    </div>`;
}

function renderPOS(meta) {
  const categories = ['All items', 'Fried Chicken', 'Rice Meals', 'Snacks & Drinks'];
  const query = state.posSearch.trim().toLowerCase();
  const products = state.menuItems.filter((item) => (state.posCategory === 'All items' || item.category === state.posCategory) && (!query || `${item.name} ${item.desc}`.toLowerCase().includes(query)));
  const totals = orderTotals();
  const bom = {};
  state.cart.forEach((line) => { const item = getMenuItem(line.id); item?.bom.forEach((part) => { bom[part.id] = (bom[part.id] || 0) + part.qty * line.qty; }); });
  const stockReady = Object.entries(bom).every(([id, qty]) => (getInventoryItem(id)?.qty || 0) >= qty);
  return `${pageHead(meta, '<button class="btn btn-outline" data-action="add-menu-item">+ Add Menu Item</button><button class="btn btn-outline" data-action="clear-cart">Clear Current Order</button><button class="btn btn-primary" data-action="quick-checkout">Complete Sale</button>')}
    <div class="pos-layout">
      <div class="menu-panel">
        <div class="panel"><div class="menu-toolbar"><div class="tabs">${categories.map((category) => `<button class="tab ${state.posCategory === category ? 'active' : ''}" data-pos-category="${category}">${category}</button>`).join('')}</div><div class="search-wrap"><span class="search-icon">⌕</span><input id="posSearch" class="search-input" placeholder="Search menu item…" value="${esc(state.posSearch)}" /></div></div>
          <div class="product-grid">${products.map((item) => `<div class="product-card"><span class="product-stock ${productAvailability(item).available <= 5 ? 'warn' : ''}">${productAvailability(item).label}</span><h3>${esc(item.name)}</h3><p>${esc(item.desc)}</p><div class="product-bottom"><div class="product-price">${money(item.price)}</div><button class="btn btn-dark btn-small" data-action="add-cart" data-id="${item.id}" ${productAvailability(item).canAdd ? '' : 'disabled'}>+ Add to Cart</button></div></div>`).join('') || '<div class="empty-state" style="grid-column:1/-1">No menu items match this search.</div>'}</div>
        </div>
        <div class="panel bom-preview"><div class="panel-title-row"><div><div class="panel-title">Live Bill of Materials (BOM) Auto-Deduction Preview</div><div class="panel-caption">Completing the active cart will automatically subtract these raw ingredients.</div></div><span class="status-pill ${stockReady ? 'ok' : 'critical'}">${stockReady ? 'Stock Check Ready' : 'Insufficient Stock'}</span></div><div class="bom-items">${Object.entries(bom).map(([id, qty], index) => { const item = getInventoryItem(id); return `<div class="bom-item ${index % 3 === 2 ? 'yellow' : ''}"><div><strong>${esc(item?.name || id)}</strong><span>Current balance: ${item?.qty || 0} ${item?.unit || 'units'}</span></div><div class="bom-qty">-${qty} ${item?.unit || 'unit'}</div></div>`; }).join('') || '<div class="empty-state" style="grid-column:1/-1">Add menu items to preview ingredient deductions.</div>'}</div><div class="subtext" style="margin-top:12px;color:var(--green);font-weight:800">${stockReady ? '✓ Stock validation passed: all required recipe ingredients are above minimum threshold.' : '! Stock validation failed: insufficient ingredient balance for this order.'}</div></div>
      </div>
      <div class="panel order-panel"><div class="panel-title-row"><div><div class="panel-title">Current Order</div><div class="order-no">${nextReceiptId()} · Paradahan Branch</div></div><button class="text-link" data-action="clear-cart">Clear All</button></div>
        <div class="order-items">${state.cart.length ? state.cart.map((line) => { const item = getMenuItem(line.id); return `<div class="order-item"><div><div class="order-item-name">${esc(item.name)}</div><div class="order-item-meta">${money(item.price)} each</div></div><div style="display:flex;align-items:center;gap:7px"><div class="qty-control"><button data-action="cart-minus" data-id="${item.id}">−</button><span>${line.qty}</span><button data-action="cart-plus" data-id="${item.id}">+</button></div><strong style="font-size:10px;min-width:54px;text-align:right">${money(item.price * line.qty)}</strong></div></div>`; }).join('') : '<div class="empty-state">Your order is empty.<br>Add a menu item to start.</div>'}</div>
        <div class="payment-block"><label class="field-label">Payment Method</label><div class="payment-grid">${['Cash', 'GCash', 'Maya'].map((method) => `<button class="payment-btn ${state.payment === method ? 'active' : ''}" data-action="set-payment" data-payment="${method}">${method}</button>`).join('')}</div><div class="tendered-row"><div><label class="field-label">Amount Tendered (₱)</label><input class="field-input" id="tendered" type="number" min="0" step="1" value="${Number(state.tendered || 0)}" /></div><div class="change-box"><span>Exact Change</span><strong>${money(totals.change)}</strong></div></div></div>
        <div class="order-total"><div class="total-row"><span>Subtotal (${state.cart.reduce((sum, line) => sum + line.qty, 0)} items)</span><strong>${money(totals.subtotal)}</strong></div><div class="total-row"><span>Change Due</span><strong style="color:var(--green)">${money(totals.change)}</strong></div><div class="total-row grand"><span>TOTAL PAYABLE</span><strong>${money(totals.total)}</strong></div></div>
        <button class="btn btn-primary checkout-btn" data-action="complete-sale" ${state.cart.length ? '' : 'disabled'}>Complete Sale & Deduct Stock</button>
      </div>
    </div>`;
}

function renderInventory(meta) {
  const totalValue = state.inventory.reduce((sum, item) => sum + item.qty * item.cost, 0);
  const low = state.inventory.filter((item) => stockStatus(item).className !== 'ok').length;
  const expiring = state.inventory.filter(isExpiringSoon).length;
  const query = state.inventorySearch.trim().toLowerCase();
  const rows = state.inventory.filter((item) => (!query || `${item.name} ${item.sku}`.toLowerCase().includes(query)) && (state.inventoryFilter === 'All Stock' || (state.inventoryFilter === 'Low & Critical' && stockStatus(item).className !== 'ok') || (state.inventoryFilter === 'FIFO Expiring Soon' && isExpiringSoon(item))));
  return `${pageHead(meta, '<button class="btn btn-outline" data-action="adjust-spoilage">Log Spoilage / Adjust</button><button class="btn btn-primary" data-action="add-ingredient">+ Add Ingredient</button>')}
    <div class="inventory-summary"><div class="mini-stat"><div><div class="mini-stat-label">Tracked Raw Ingredients</div><div class="mini-stat-value">${state.inventory.length} Items</div></div><div class="mini-stat-icon">▤</div></div><div class="mini-stat"><div><div class="mini-stat-label">Total Stock Valuation</div><div class="mini-stat-value">${wholeMoney(totalValue)}</div></div><div class="mini-stat-icon">₱</div></div><div class="mini-stat"><div><div class="mini-stat-label">Reorder Alerts</div><div class="mini-stat-value" style="color:var(--red)">${low} Flagged</div></div><div class="mini-stat-icon">!</div></div><div class="mini-stat"><div><div class="mini-stat-label">FIFO Expiry Watch</div><div class="mini-stat-value" style="color:var(--gold)">${expiring} Batches</div></div><div class="mini-stat-icon" style="color:var(--gold);background:var(--gold-soft)">◷</div></div></div>
    <div class="panel"><div class="toolbar"><div class="tabs">${['All Stock', 'Low & Critical', 'FIFO Expiring Soon'].map((filter) => `<button class="tab ${state.inventoryFilter === filter ? 'active' : ''}" data-inventory-filter="${filter}">${filter}</button>`).join('')}</div><div class="search-wrap"><span class="search-icon">⌕</span><input id="inventorySearch" class="search-input" placeholder="Search ingredient or SKU…" value="${esc(state.inventorySearch)}" /></div></div>
      <div class="table-wrap"><table class="data-table"><thead><tr><th>SKU & Ingredient Name</th><th>Category</th><th>Current Stock</th><th>Reorder Pt.</th><th>FIFO Expiry</th><th>Status</th><th>Actions</th></tr></thead><tbody>${rows.map((item) => { const status = stockStatus(item); return `<tr><td><strong>${esc(item.name)}</strong><div class="subtext">${esc(item.sku)}</div></td><td>${esc(item.category)}</td><td><strong>${item.qty} ${esc(item.unit)}</strong></td><td>${item.reorder} ${esc(item.unit)}</td><td>${esc(item.expiry)}</td><td><span class="status-pill ${status.className}">${status.label}</span></td><td><div style="display:flex;gap:5px"><button class="btn btn-dark btn-small" data-action="restock" data-id="${item.id}">Restock</button><button class="btn btn-outline btn-small" data-action="adjust" data-id="${item.id}">Adjust</button></div></td></tr>`; }).join('') || '<tr><td colspan="7"><div class="empty-state">No ingredients match the current filter.</div></td></tr>'}</tbody></table></div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px"><span class="subtext">Showing ${rows.length} of ${state.inventory.length} tracked ingredients · ${state.auditLog.length} audit entries recorded this session</span><div style="display:flex;gap:6px"></div></div>
    </div>`;
}

function renderSuppliers(meta) {
  const filtered = state.poFilter === 'All POs' ? state.purchaseOrders : state.purchaseOrders.filter((po) => po.status === state.poFilter);
  return `${pageHead(meta, '<button class="btn btn-outline" data-action="add-supplier">+ Add Supplier</button><button class="btn btn-primary" data-action="create-po">+ Create Purchase Order</button>')}
    <div class="vendor-grid">${state.suppliers.map((vendor) => `<div class="vendor-card"><div class="vendor-top"><span class="vendor-category">${vendor.category}</span><span class="vendor-active">Active Vendor</span></div><h3>${vendor.name}</h3><div class="vendor-contact">${vendor.contact}<br>${vendor.detail}</div><div class="vendor-footer"><span>Lead Time: ${vendor.lead}</span><button class="text-link" data-action="create-po" data-supplier="${vendor.id}">Create PO →</button></div></div>`).join('')}</div>
    <div class="panel"><div class="panel-title-row"><div><div class="panel-title">Purchase Orders (PO) & Stock Receiving Tracker</div><div class="panel-caption">Marking a purchase order as Delivered automatically increments raw ingredient stock.</div></div><div class="tabs">${['All POs', 'Pending', 'In Transit', 'Delivered'].map((filter) => `<button class="tab ${state.poFilter === filter ? 'active' : ''}" data-po-filter="${filter}">${filter}${filter === 'All POs' ? ` (${state.purchaseOrders.length})` : ''}</button>`).join('')}</div></div>
      <div class="table-wrap"><table class="data-table"><thead><tr><th>PO Number</th><th>Supplier</th><th>Ordered Items</th><th>Total Cost</th><th>Status</th><th>Receiving Action</th></tr></thead><tbody>${filtered.map((po) => `<tr><td><strong>${esc(po.id)}</strong><div class="subtext">${esc(po.date)}</div></td><td>${esc(po.supplier)}</td><td>${esc(po.items)}</td><td class="money">${money(po.total)}</td><td>${statusPill(po.status)}</td><td>${po.status === 'Pending' ? `<button class="btn btn-dark btn-small" data-action="approve-po" data-id="${po.id}">Approve PO</button>` : po.status === 'In Transit' ? `<button class="btn btn-primary btn-small" data-action="deliver-po" data-id="${po.id}">Mark Delivered</button>` : '<span class="subtext" style="color:var(--green);font-weight:800">✓ Stock Synced</span>'}</td></tr>`).join('') || '<tr><td colspan="6"><div class="empty-state">No purchase orders in this view.</div></td></tr>'}</tbody></table></div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px"><span class="subtext">Total Monthly Procurement Spend: ${money(state.purchaseOrders.reduce((sum, po) => sum + po.total, 0))} · Purchase orders can be exported as a CSV ledger</span><button class="btn btn-outline btn-small" data-action="export-po">Export PO Ledger</button></div>
    </div>`;
}

function renderReports(meta) {
  const valuation = state.inventory.reduce((sum, item) => sum + item.qty * item.cost, 0);
  const reportRevenue = Object.values(state.paymentTotals).reduce((sum, value) => sum + Number(value || 0), 0);
  const reportCogs = state.inventory.reduce((sum, item) => sum + Number(item.bomUsage || 0) * Number(item.cost || 0), 0);
  const reportProfit = reportRevenue - reportCogs;
  const paymentRows = [
    { key: 'Cash', label: 'Cash Payments', cls: '' },
    { key: 'GCash', label: 'GCash E-Wallet', cls: 'red' },
    { key: 'Maya', label: 'Maya E-Wallet', cls: 'gold' }
  ];
  const paymentTotal = Object.values(state.paymentTotals).reduce((sum, value) => sum + Number(value || 0), 0);
  const orderTotal = Object.values(state.paymentCounts).reduce((sum, value) => sum + value, 0);
  const topProducts = state.menuItems.map((item) => ({ ...item, ...(state.menuMetrics[item.id] || { sold: 0, revenue: 0 }) })).sort((a, b) => b.revenue - a.revenue).slice(0, 4);
  return `${pageHead(meta, `<div class="date-chip">Period: ${dateRangeLabel()}</div><button class="btn btn-outline" data-action="export-csv">Export CSV</button><button class="btn btn-primary" data-action="export-pdf">Export PDF Report</button>`)}
    <div class="kpi-grid">${kpi('Gross Revenue', money(reportRevenue), 'Updated from POS payment records', 'positive')}${kpi('Cost of Goods Sold (COGS)', money(reportCogs), `${reportRevenue ? (reportCogs / reportRevenue * 100).toFixed(1) : '0.0'}% of revenue`, '')}${kpi('Gross Profit', money(reportProfit), `${reportRevenue ? (reportProfit / reportRevenue * 100).toFixed(1) : '0.0'}% gross margin`, 'positive')}${kpi('Spoilage & Variance Loss', money(state.spoilageLoss), `${reportRevenue ? (state.spoilageLoss / reportRevenue * 100).toFixed(2) : '0.00'}% of gross revenue`, '')}</div>
    <div class="report-grid"><div class="panel report-card report-highlight"><div class="panel-title-row"><div><div class="panel-title">Sales Breakdown by Payment Channel</div><div class="panel-caption">Verified POS shift settlements across Cash and E-Wallets</div></div><span class="status-pill ok">${orderTotal.toLocaleString()} Orders</span></div><div class="payment-bars">${paymentRows.map((row) => { const amount = state.paymentTotals[row.key]; const pct = paymentTotal ? amount / paymentTotal * 100 : 0; return `<div class="payment-bar-line"><div class="payment-bar-head"><span>${row.label} (${state.paymentCounts[row.key].toLocaleString()} orders)</span><span>${money(amount)} · ${pct.toFixed(1)}%</span></div><div class="progress ${row.cls}"><span style="width:${pct}%"></span></div></div>`; }).join('')}</div><div class="subtext" style="margin-top:18px">Total Receipts Audited: ${orderTotal.toLocaleString()} POS Transactions · Average Order Value: ${money(orderTotal ? paymentTotal / orderTotal : 0)}</div></div>
      <div class="panel report-card report-highlight"><div class="panel-title-row"><div><div class="panel-title">Top-Selling Menu Items & Margin Analysis</div><div class="panel-caption">Ranked by Paradahan Branch revenue and BOM ingredient cost</div></div></div><div class="ranking">${topProducts.map((item, index) => `<div class="rank-row"><span class="rank-number">${index + 1}</span><div><div class="rank-name">${esc(item.name)}</div><div class="rank-meta">${item.sold.toLocaleString()} sold</div></div><strong class="money">${wholeMoney(item.revenue)}</strong></div>`).join('')}</div></div></div>
    <div class="panel" style="margin-top:15px"><div class="panel-title-row"><div><div class="panel-title">Itemized Inventory Usage & Current Asset Valuation Summary</div><div class="panel-caption">Live view of raw ingredient movement and ending stock value</div></div><button class="text-link" data-nav="inventory">View Full Valuation Sheet →</button></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Raw Ingredient</th><th>Beginning</th><th>PO Restocks</th><th>BOM Usage</th><th>Ending Stock</th><th>Unit Cost</th><th>Asset Value</th></tr></thead><tbody>${state.inventory.slice().sort((a, b) => (b.qty * b.cost) - (a.qty * a.cost)).slice(0, 4).map((item) => `<tr><td><strong>${esc(item.name)}</strong></td><td>${item.beginning} ${item.unit}</td><td style="color:var(--green);font-weight:800">+${item.poRestocks} ${item.unit}</td><td style="color:var(--red);font-weight:800">-${item.bomUsage} ${item.unit}</td><td><strong>${item.qty} ${item.unit}</strong></td><td>${money(item.cost)}</td><td class="money">${money(item.qty * item.cost)}</td></tr>`).join('')}</tbody></table></div><div style="display:flex;justify-content:space-between;margin-top:14px"><span class="subtext">Showing top 4 high-value ingredients · Total Branch Inventory Asset Valuation (All ${state.inventory.length} items): ${money(valuation)}</span><button class="text-link" data-nav="inventory">View Full Valuation Sheet →</button></div></div>`;
}
function render() {
  document.querySelector('#app').innerHTML = shell();
}

function setPage(page) {
  state.page = page;
  document.querySelector('#sidebar')?.classList.remove('open');
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function adjustInventory(id, amount, kind = 'adjust', reason = '') {
  const item = getInventoryItem(id);
  if (!item || !Number.isFinite(Number(amount))) return false;
  if (item.qty + amount < 0) return false;
  item.qty += amount;
  if (kind === 'restock') item.poRestocks = (item.poRestocks || 0) + Math.max(0, amount);
  if (kind === 'bom') item.bomUsage = (item.bomUsage || 0) + Math.max(0, -amount);
  if (kind === 'adjust' && reason) {
    state.auditLog.unshift({ date: formatDate(), item: item.name, amount, reason });
    if (reason === 'Spoilage' && amount < 0) state.spoilageLoss = (state.spoilageLoss || 0) + Math.abs(amount) * item.cost;
  }
  state.auditLog = state.auditLog.slice(0, 25);
  save();
  return true;
}

function addToCart(id) {
  const product = getMenuItem(id);
  const availability = productAvailability(product);
  const currentQty = state.cart.find((item) => item.id === id)?.qty || 0;
  if (!availability.canAdd || currentQty >= availability.available) return openToast('Insufficient ingredients', `${product.short}: only ${availability.available} serving(s) can be prepared from current stock.`, 'error');
  const line = state.cart.find((item) => item.id === id);
  if (line) line.qty += 1;
  else state.cart.push({ id, qty: 1 });
  save();
  render();
  openToast('Item added to order', `${getMenuItem(id).short} is ready in the active cart.`);
}

function removeFromCart(id, delta) {
  const line = state.cart.find((item) => item.id === id);
  if (!line) return;
  if (delta > 0) { const product = getMenuItem(id); const availability = productAvailability(product); if (line.qty >= availability.available) return openToast('Insufficient ingredients', `Only ${availability.available} serving(s) are available for ${product.short}.`, 'error'); }
  line.qty += delta;
  if (line.qty <= 0) state.cart = state.cart.filter((item) => item.id !== id);
  save();
  render();
}

function completeSale() {
  if (!state.cart.length) return openToast('Order is empty', 'Add at least one menu item before completing a sale.', 'error');
  const totals = orderTotals();
  if (Number(state.tendered || 0) < totals.total) return openToast('Payment is short', `Tendered amount must be at least ${money(totals.total)}.`, 'error');
  const deductions = {};
  state.cart.forEach((line) => getMenuItem(line.id)?.bom.forEach((part) => { deductions[part.id] = (deductions[part.id] || 0) + part.qty * line.qty; }));
  const unavailable = Object.entries(deductions).filter(([id, qty]) => (getInventoryItem(id)?.qty || 0) < qty);
  if (unavailable.length) return openToast('Insufficient stock', unavailable.map(([id, qty]) => `${getInventoryItem(id)?.name || id}: need ${qty}`).join(' · '), 'error');
  Object.entries(deductions).forEach(([id, amount]) => adjustInventory(id, -amount, 'bom'));
  if (state.dailySalesDate !== dateKey()) { state.grossSales = 0; state.dailySalesDate = dateKey(); }
  state.grossSales += totals.total;
  state.completedOrders += 1;
  state.salesByDay[(today().getDay() + 6) % 7] += totals.total;
  state.paymentCounts[state.payment] = (state.paymentCounts[state.payment] || 0) + 1;
  state.paymentTotals[state.payment] = (state.paymentTotals[state.payment] || 0) + totals.total;
  state.cart.forEach((line) => { const metric = state.menuMetrics[line.id] || { sold: 0, revenue: 0 }; metric.sold += line.qty; metric.revenue += getMenuItem(line.id).price * line.qty; state.menuMetrics[line.id] = metric; });
  state.recentTransactions.unshift({ id: nextReceiptId(), date: formatDate(), cashier: 'M. Santos', items: state.cart.map((line) => `${line.qty}× ${getMenuItem(line.id).short}`).join(', '), payment: state.payment, amount: totals.total });
  state.recentTransactions = state.recentTransactions.slice(0, 8);
  state.cart = [];
  state.tendered = 1000;
  save();
  render();
  openToast('Sale completed & stock deducted', `${money(totals.total)} posted via ${state.payment}. BOM ingredients were deducted from inventory.`);
}
function openModal(type, payload = {}) {
  const root = document.querySelector('#modalRoot');
  if (type === 'adjust') {
    const item = getInventoryItem(payload.id);
    root.innerHTML = `<div class="modal-backdrop" id="modalBackdrop"><div class="modal"><div class="modal-head"><div><h2>Adjust Stock Ledger</h2><p>Apply a positive or negative quantity adjustment for ${esc(item.name)}.</p></div><button class="close-btn" data-close-modal>×</button></div><form id="adjustForm"><input type="hidden" name="id" value="${item.id}" /><div class="form-grid"><div class="form-field"><label class="field-label">Adjustment Qty</label><input class="field-input" name="amount" type="number" value="0" required /></div><div class="form-field"><label class="field-label">Reason</label><select class="field-select" name="reason"><option>Spoilage</option><option>Manual Count</option><option>Receiving Correction</option><option>Transfer</option></select></div></div><div class="form-actions"><button type="button" class="btn btn-outline" data-close-modal>Cancel</button><button class="btn btn-primary">Save Adjustment</button></div></form></div></div>`;
  } else if (type === 'add-ingredient') {
    root.innerHTML = `<div class="modal-backdrop" id="modalBackdrop"><div class="modal"><div class="modal-head"><div><h2>Add Ingredient</h2><p>Create a new tracked ingredient for the BOM inventory ledger.</p></div><button class="close-btn" data-close-modal>×</button></div><form id="ingredientForm"><div class="form-grid"><div class="form-field full"><label class="field-label">Ingredient Name</label><input class="field-input" name="name" placeholder="e.g. Chili Garlic Sauce" required /></div><div class="form-field"><label class="field-label">Category</label><select class="field-select" name="category"><option>Poultry</option><option>Dry Goods</option><option>Packaging</option><option>Beverages</option></select></div><div class="form-field"><label class="field-label">Unit</label><input class="field-input" name="unit" placeholder="bottles" required /></div><div class="form-field"><label class="field-label">Starting Stock</label><input class="field-input" name="qty" type="number" min="0" value="0" required /></div><div class="form-field"><label class="field-label">Reorder Point</label><input class="field-input" name="reorder" type="number" min="0" value="5" required /></div><div class="form-field"><label class="field-label">Unit Cost</label><input class="field-input" name="cost" type="number" min="0" value="100" required /></div><div class="form-field"><label class="field-label">FIFO Expiry</label><input class="field-input" name="expiry" placeholder="Dec 30, 2026" required /></div></div><div class="form-actions"><button type="button" class="btn btn-outline" data-close-modal>Cancel</button><button class="btn btn-primary">Add Ingredient</button></div></form></div></div>`;
  } else if (type === 'add-menu-item') {
    root.innerHTML = `<div class="modal-backdrop" id="modalBackdrop"><div class="modal"><div class="modal-head"><div><h2>Add Menu Item</h2><p>Create a POS product and link its recipe to tracked inventory.</p></div><button class="close-btn" data-close-modal>×</button></div><form id="menuForm"><div class="form-grid"><div class="form-field full"><label class="field-label">Menu Item Name</label><input class="field-input" name="name" required /></div><div class="form-field"><label class="field-label">Category</label><select class="field-select" name="category"><option>Fried Chicken</option><option>Rice Meals</option><option>Snacks & Drinks</option></select></div><div class="form-field"><label class="field-label">Selling Price (₱)</label><input class="field-input" name="price" type="number" min="0.01" step="0.01" required /></div><div class="form-field full"><label class="field-label">Description</label><input class="field-input" name="desc" required /></div><div class="form-field full"><label class="field-label">Recipe Ingredient</label><select class="field-select" name="ingredient">${state.inventory.map((item) => `<option value="${item.id}">${esc(item.name)} (${esc(item.unit)})</option>`).join('')}</select></div><div class="form-field"><label class="field-label">Ingredient Qty per Serving</label><input class="field-input" name="ingredientQty" type="number" min="1" value="1" required /></div><div class="form-field"><label class="field-label">Short Name</label><input class="field-input" name="short" required /></div></div><div class="form-actions"><button type="button" class="btn btn-outline" data-close-modal>Cancel</button><button class="btn btn-primary">Save Menu Item</button></div></form></div></div>`;
  } else if (type === 'add-supplier') {
    root.innerHTML = `<div class="modal-backdrop" id="modalBackdrop"><div class="modal"><div class="modal-head"><div><h2>Add Supplier</h2><p>Add a vendor to the live supplier directory and purchase-order form.</p></div><button class="close-btn" data-close-modal>×</button></div><form id="supplierForm"><div class="form-grid"><div class="form-field full"><label class="field-label">Supplier Name</label><input class="field-input" name="name" required /></div><div class="form-field"><label class="field-label">Category</label><select class="field-select" name="category"><option>Poultry</option><option>Dry Goods</option><option>Packaging</option><option>Beverages</option><option>Equipment</option><option>Other</option></select></div><div class="form-field"><label class="field-label">Lead Time</label><input class="field-input" name="lead" placeholder="1–2 Business Days" required /></div><div class="form-field full"><label class="field-label">Contact Details</label><input class="field-input" name="contact" placeholder="Contact person · Phone number or email" required /></div><div class="form-field full"><label class="field-label">Address / Location</label><input class="field-input" name="detail" required /></div></div><div class="form-actions"><button type="button" class="btn btn-outline" data-close-modal>Cancel</button><button class="btn btn-primary">Save Supplier</button></div></form></div></div>`;
  } else if (type === 'create-po') {
    const initialIngredient = getInventoryItem(payload.ingredient) || state.inventory[0];
    const initialQty = 10;
    root.innerHTML = `<div class="modal-backdrop" id="modalBackdrop"><div class="modal"><div class="modal-head"><div><h2>Create Purchase Order</h2><p>Start a supplier request for the next receiving cycle.</p></div><button class="close-btn" data-close-modal>×</button></div><form id="poForm"><div class="form-grid"><div class="form-field full"><label class="field-label">Supplier</label><select class="field-select" name="supplier">${state.suppliers.map((vendor) => `<option value="${vendor.id}" ${payload.supplier === vendor.id ? 'selected' : ''}>${vendor.name}</option>`).join('')}</select></div><div class="form-field"><label class="field-label">Ingredient to Receive</label><select class="field-select" name="ingredient">${state.inventory.map((item) => `<option value="${item.id}" ${payload.ingredient === item.id ? 'selected' : ''}>${esc(item.name)}</option>`).join('')}</select></div><div class="form-field"><label class="field-label">Qty</label><input class="field-input" name="qty" type="number" min="1" value="${initialQty}" required /></div><div class="form-field full"><label class="field-label">Items Ordered</label><input class="field-input" name="items" value="${initialQty}× ${esc(initialIngredient?.name || 'Ingredient')}" required /></div><div class="form-field"><label class="field-label">Estimated Total</label><input class="field-input" name="total" type="number" min="0" step="0.01" value="${((initialIngredient?.cost || 0) * initialQty).toFixed(2)}" required /></div><div class="form-field"><label class="field-label">Expected Date</label><input class="field-input" name="date" value="${formatDate(new Date(today().getTime() + 3 * 86400000))}" required /></div></div><div class="form-actions"><button type="button" class="btn btn-outline" data-close-modal>Cancel</button><button class="btn btn-primary">Create Purchase Order</button></div></form></div></div>`;
  }
}

function closeModal() { document.querySelector('#modalRoot').innerHTML = ''; }

function exportPrintableReport() {
  const revenue = Object.values(state.paymentTotals).reduce((sum, value) => sum + Number(value || 0), 0);
  const cogs = state.inventory.reduce((sum, item) => sum + Number(item.bomUsage || 0) * Number(item.cost || 0), 0);
  const payments = Object.entries(state.paymentTotals).map(([method, amount]) => `<tr><td>${esc(method)}</td><td>${Number(state.paymentCounts[method] || 0).toLocaleString()}</td><td>${money(amount)}</td></tr>`).join('');
  const products = state.menuItems.slice().sort((a, b) => (state.menuMetrics[b.id]?.revenue || 0) - (state.menuMetrics[a.id]?.revenue || 0)).map((item) => `<tr><td>${esc(item.name)}</td><td>${Number(state.menuMetrics[item.id]?.sold || 0).toLocaleString()}</td><td>${money(state.menuMetrics[item.id]?.revenue || 0)}</td></tr>`).join('');
  const inventory = state.inventory.slice().sort((a, b) => (b.qty * b.cost) - (a.qty * a.cost)).map((item) => `<tr><td>${esc(item.name)}</td><td>${item.qty} ${esc(item.unit)}</td><td>${item.reorder}</td><td>${money(item.qty * item.cost)}</td></tr>`).join('');
  const html = `<!doctype html><html><head><title>FiveStar ERP Operations Report</title><style>body{font:13px Arial;padding:28px;color:#172338}h1{margin-bottom:4px}h2{margin:24px 0 8px;font-size:16px}.summary{display:flex;gap:24px;margin:18px 0}.summary div{padding:12px;background:#f2f4f7;flex:1}table{width:100%;border-collapse:collapse;margin-top:10px}th,td{padding:8px;border-bottom:1px solid #ddd;text-align:left}th{background:#f2f4f7}@media print{body{padding:0}}</style></head><body><h1>FiveStar ERP</h1><p>Operations Report · ${dateRangeLabel()}</p><div class="summary"><div>Gross Revenue<br><strong>${money(revenue)}</strong></div><div>Cost of Goods Sold<br><strong>${money(cogs)}</strong></div><div>Gross Profit<br><strong>${money(revenue-cogs)}</strong></div></div><h2>Payment Channels</h2><table><thead><tr><th>Method</th><th>Orders</th><th>Amount</th></tr></thead><tbody>${payments}</tbody></table><h2>Menu Performance</h2><table><thead><tr><th>Menu Item</th><th>Units Sold</th><th>Revenue</th></tr></thead><tbody>${products}</tbody></table><h2>Inventory Valuation</h2><table><thead><tr><th>Ingredient</th><th>Stock</th><th>Reorder Point</th><th>Asset Value</th></tr></thead><tbody>${inventory}</tbody></table></body></html>`;
  const win = window.open('', '_blank');
  if (!win) return openToast('Pop-up blocked', 'Allow pop-ups to print or save this report as PDF.', 'error');
  win.document.write(html); win.document.close(); win.focus(); win.print();
}

function exportPurchaseOrders() {
  const rows = [['PO Number','Date','Supplier','Items','Total','Status'], ...state.purchaseOrders.map((po) => [po.id,po.date,po.supplier,po.items,po.total,po.status])];
  const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"','""')}"`).join(',')).join('\n');
  const url = URL.createObjectURL(new Blob([csv], {type:'text/csv;charset=utf-8'}));
  const link = document.createElement('a'); link.href=url; link.download='fivestar-purchase-orders.csv'; link.click(); URL.revokeObjectURL(url);
  openToast('PO ledger exported', 'Purchase order records downloaded as CSV.');
}

function exportCSV() {
  const revenue = Object.values(state.paymentTotals).reduce((sum, value) => sum + Number(value || 0), 0);
  const cogs = state.inventory.reduce((sum, item) => sum + Number(item.bomUsage || 0) * Number(item.cost || 0), 0);
  const lines = [
    ['FiveStar ERP Operations Report', dateRangeLabel()],
    [],
    ['Sales Summary', 'Amount'],
    ['Gross Revenue', revenue],
    ['Cost of Goods Sold', cogs],
    ['Gross Profit', revenue - cogs],
    [],
    ['Payment Method', 'Orders', 'Amount'],
    ...Object.entries(state.paymentTotals).map(([method, amount]) => [method, state.paymentCounts[method] || 0, amount]),
    [],
    ['Menu Item', 'Units Sold', 'Revenue'],
    ...state.menuItems.slice().sort((a, b) => (state.menuMetrics[b.id]?.revenue || 0) - (state.menuMetrics[a.id]?.revenue || 0)).map((item) => [item.name, state.menuMetrics[item.id]?.sold || 0, state.menuMetrics[item.id]?.revenue || 0]),
    [],
    ['Ingredient', 'Category', 'Current Stock', 'Unit', 'Reorder Point', 'Unit Cost', 'Asset Value'],
    ...state.inventory.map((item) => [item.name, item.category, item.qty, item.unit, item.reorder, item.cost, item.qty * item.cost])
  ];
  const csv = lines.map((row) => row.map((cell) => `"${String(cell ?? '').replaceAll('"', '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'fivestar-operations-report.csv';
  link.click();
  URL.revokeObjectURL(url);
  openToast('Operations report exported', 'Sales, payment, menu, and inventory data were downloaded as CSV.');
}
function updatePurchaseOrderEstimate(form) {
  if (!form) return;
  const ingredient = getInventoryItem(form.elements.ingredient.value);
  const qty = Number(form.elements.qty.value || 0);
  if (!ingredient || !Number.isFinite(qty) || qty < 0) return;
  form.elements.total.value = (ingredient.cost * qty).toFixed(2);
  form.elements.items.value = `${qty}× ${ingredient.name}`;
}

function handleAction(action, data = {}) {
  if (action === 'add-cart') return addToCart(data.id);
  if (action === 'cart-plus') return removeFromCart(data.id, 1);
  if (action === 'cart-minus') return removeFromCart(data.id, -1);
  if (action === 'set-payment') { state.payment = data.payment; save(); return render(); }
  if (action === 'complete-sale' || action === 'quick-checkout') return completeSale();
  if (action === 'clear-cart') { state.cart = []; save(); render(); return openToast('Order cleared', 'The current order has been reset.'); }
  if (action === 'restock') { const item = getInventoryItem(data.id); if (item) openModal('create-po', { ingredient: item.id }); else openModal('create-po'); return; }
  if (action === 'adjust') return openModal('adjust', { id: data.id });
  if (action === 'adjust-spoilage') return openModal('adjust', { id: state.inventory[0].id });
  if (action === 'add-ingredient') return openModal('add-ingredient');
  if (action === 'add-menu-item') return openModal('add-menu-item');
  if (action === 'add-supplier') return openModal('add-supplier');
  if (action === 'create-po') return openModal('create-po', { supplier: data.supplier });
  if (action === 'approve-po') { const po = state.purchaseOrders.find((item) => item.id === data.id); if (po?.status === 'Pending') { po.status = 'In Transit'; save(); render(); openToast('Purchase order approved', `${po.id} is now in transit from ${po.supplier}.`); } return; }
  if (action === 'deliver-po') { const po = state.purchaseOrders.find((item) => item.id === data.id); if (!po || po.status !== 'In Transit' || po.received) return openToast('Already processed', 'This purchase order cannot be received more than once.', 'error'); const validLines = (po.lines || []).filter((line) => getInventoryItem(line.id) && Number(line.qty) > 0); if (!validLines.length) return openToast('No receivable items', 'This purchase order has no valid inventory lines.', 'error'); validLines.forEach((line) => adjustInventory(line.id, Number(line.qty), 'restock', `PO ${po.id} received`)); po.status = 'Delivered'; po.received = true; save(); render(); openToast('Delivery received & synced', `${po.id} marked delivered. Ordered raw stock was updated automatically.`); return; }
  if (action === 'export-csv') return exportCSV();
  if (action === 'export-pdf') return exportPrintableReport();
  if (action === 'export-po') return exportPurchaseOrders();
}

document.addEventListener('click', (event) => {
  const nav = event.target.closest('[data-nav]');
  if (nav) return setPage(nav.dataset.nav);
  if (event.target.closest('#mobileMenu')) return document.querySelector('#sidebar')?.classList.toggle('open');
  if (event.target.closest('[data-close-modal]')) return closeModal();
  if (event.target.id === 'modalBackdrop') return closeModal();
  const posTab = event.target.closest('[data-pos-category]');
  if (posTab) { state.posCategory = posTab.dataset.posCategory; render(); return; }
  const inventoryFilter = event.target.closest('[data-inventory-filter]');
  if (inventoryFilter) { state.inventoryFilter = inventoryFilter.dataset.inventoryFilter; render(); return; }
  const poFilter = event.target.closest('[data-po-filter]');
  if (poFilter) { state.poFilter = poFilter.dataset.poFilter; render(); return; }
  const action = event.target.closest('[data-action]');
  if (action) return handleAction(action.dataset.action, action.dataset);
});

document.addEventListener('input', (event) => {
  if (event.target.closest('#poForm') && event.target.name === 'qty') updatePurchaseOrderEstimate(event.target.form);
  if (event.target.id === 'posSearch') { state.posSearch = event.target.value; render(); const input = document.querySelector('#posSearch'); input?.focus(); input?.setSelectionRange(input.value.length, input.value.length); }
  if (event.target.id === 'inventorySearch') { state.inventorySearch = event.target.value; render(); const input = document.querySelector('#inventorySearch'); input?.focus(); input?.setSelectionRange(input.value.length, input.value.length); }
  if (event.target.id === 'tendered') { state.tendered = Number(event.target.value || 0); render(); const input = document.querySelector('#tendered'); input?.focus(); input?.setSelectionRange(input.value.length, input.value.length); }
});

document.addEventListener('change', (event) => {
  if (event.target.closest('#poForm') && event.target.name === 'ingredient') updatePurchaseOrderEstimate(event.target.form);
});

document.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  if (form.id === 'adjustForm') {
    const item = getInventoryItem(data.get('id'));
    const amount = Number(data.get('amount') || 0);
    if (!item) return;
    if (!Number.isFinite(amount) || amount === 0) return openToast('Invalid adjustment', 'Enter a non-zero stock adjustment quantity.', 'error');
    if (item.qty + amount < 0) return openToast('Insufficient stock', `Cannot reduce ${item.name} below zero. Current stock: ${item.qty} ${item.unit}.`, 'error');
    adjustInventory(item.id, amount, 'adjust', data.get('reason')); closeModal(); render(); openToast('Stock adjustment saved', `${item.name} adjusted by ${amount > 0 ? '+' : ''}${amount} ${item.unit}.`);
  }
  if (form.id === 'ingredientForm') {
    const name = String(data.get('name') || '').trim();
    if (!name || state.inventory.some((item) => item.name.toLowerCase() === name.toLowerCase())) return openToast('Ingredient already exists', 'Enter a unique ingredient name before saving.', 'error');
    const id = `ingredient-${Date.now()}`;
    state.inventory.push({ id, name, sku: `SKU: ${id.toUpperCase()} · Unit Cost: ${money(data.get('cost'))}`, category: data.get('category'), qty: Number(data.get('qty')), unit: data.get('unit'), reorder: Number(data.get('reorder')), expiry: data.get('expiry'), cost: Number(data.get('cost')), beginning: Number(data.get('qty')), poRestocks: 0, bomUsage: 0 });
    save(); closeModal(); render(); openToast('Ingredient added', `${name} is now tracked in the inventory ledger.`);
  }
  if (form.id === 'menuForm') {
    const name = String(data.get('name') || '').trim();
    const price = Number(data.get('price'));
    const ingredient = getInventoryItem(data.get('ingredient'));
    const ingredientQty = Number(data.get('ingredientQty'));
    if (!name || state.menuItems.some((item) => item.name.toLowerCase() === name.toLowerCase())) return openToast('Menu item already exists', 'Enter a unique menu item name.', 'error');
    if (!Number.isFinite(price) || price <= 0 || !ingredient || !Number.isInteger(ingredientQty) || ingredientQty < 1) return openToast('Invalid menu item', 'Enter a valid price and recipe ingredient quantity.', 'error');
    const id = `menu-${Date.now()}`;
    state.menuItems.push({ id, name, short: String(data.get('short') || name).trim(), category: data.get('category'), price, desc: String(data.get('desc') || '').trim(), bom: [{ id: ingredient.id, qty: ingredientQty }] });
    state.menuMetrics[id] = { sold: 0, revenue: 0 };
    save(); closeModal(); render(); openToast('Menu item added', `${name} is now available in the POS catalog and uses ${ingredient.name} from inventory.`);
  }
  if (form.id === 'supplierForm') {
    const name = String(data.get('name') || '').trim();
    if (!name || state.suppliers.some((vendor) => vendor.name.toLowerCase() === name.toLowerCase())) return openToast('Supplier already exists', 'Enter a unique supplier name.', 'error');
    const id = `supplier-${Date.now()}`;
    state.suppliers.push({ id, name, category: data.get('category'), contact: `Contact: ${String(data.get('contact') || '').trim()}`, detail: String(data.get('detail') || '').trim(), lead: String(data.get('lead') || '').trim() });
    save(); closeModal(); render(); openToast('Supplier added', `${name} is now available in the supplier directory and PO form.`);
  }
  if (form.id === 'poForm') {
    const supplier = state.suppliers.find((vendor) => vendor.id === data.get('supplier'));
    const ingredient = getInventoryItem(data.get('ingredient'));
    const qty = Number(data.get('qty') || 0);
    const total = Number(data.get('total') || 0);
    if (!supplier || !ingredient || !Number.isInteger(qty) || qty < 1 || !Number.isFinite(total) || total < 0) return openToast('Invalid purchase order', 'Choose a supplier and ingredient, then enter a valid quantity and total.', 'error');
    state.purchaseOrders.unshift({ id: nextPurchaseOrderId(), date: data.get('date') || formatDate(), supplier: supplier?.name || 'New Supplier', items: data.get('items') || `${qty}× ${ingredient?.name || 'Ingredient'}`, lines: ingredient ? [{ id: ingredient.id, qty }] : [], total, status: 'Pending', received: false });
    save(); closeModal(); render(); openToast('Purchase order created', 'The new PO is pending branch manager approval.');
  }
});

document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });

render();
