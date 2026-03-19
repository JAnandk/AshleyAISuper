// Mock data for Ashley AI Supervisor Dashboard

export const kpiData = [
  {
    id: 1,
    title: "Store Revenue",
    value: 3154200,
    change: 9.8,
    trend: "up",
    format: "currency",
    description: "Month-to-date sales"
  },
  {
    id: 2,
    title: "Conversion Rate",
    value: 21.4,
    change: 1.6,
    trend: "up",
    format: "percent",
    description: "Visits to closed orders"
  },
  {
    id: 3,
    title: "Inventory Availability",
    value: 93.2,
    change: 2.4,
    trend: "up",
    format: "percent",
    description: "Items in stock across stores"
  },
  {
    id: 4,
    title: "On-Time Delivery",
    value: 89.6,
    change: -1.2,
    trend: "down",
    format: "percent",
    description: "Orders delivered on schedule"
  }
];

export const salesTrendData = [
  { month: "Jan", revenue: 2450000, target: 2400000, lastYear: 2300000 },
  { month: "Feb", revenue: 2620000, target: 2550000, lastYear: 2350000 },
  { month: "Mar", revenue: 2780000, target: 2700000, lastYear: 2500000 },
  { month: "Apr", revenue: 2690000, target: 2750000, lastYear: 2580000 },
  { month: "May", revenue: 2920000, target: 2850000, lastYear: 2700000 },
  { month: "Jun", revenue: 3154200, target: 3000000, lastYear: 2820000 }
];

export const categoryPerformanceData = [
  { category: "Living Room", sales: 980000, growth: 12.4, margin: 38.2, volume: 1840 },
  { category: "Bedroom", sales: 860000, growth: 9.1, margin: 35.6, volume: 1620 },
  { category: "Mattresses", sales: 740000, growth: 14.8, margin: 41.3, volume: 1380 },
  { category: "Dining", sales: 520000, growth: 5.6, margin: 33.1, volume: 980 },
  { category: "Home Office", sales: 354200, growth: 18.2, margin: 36.9, volume: 760 }
];

export const topProductsData = [
  { sku: "LIV-210", name: "Harper Sectional Sofa", sales: 265000, growth: 16.5, stock: 74, engagement: 88 },
  { sku: "BED-142", name: "Crosby Queen Bed", sales: 214000, growth: 12.9, stock: 68, engagement: 84 },
  { sku: "MAT-305", name: "Restwell Hybrid Mattress", sales: 198000, growth: 19.4, stock: 82, engagement: 90 },
  { sku: "DIN-088", name: "Ridgewood Dining Set", sales: 176000, growth: 9.8, stock: 56, engagement: 79 },
  { sku: "OFF-411", name: "Harbor Writing Desk", sales: 149000, growth: 23.1, stock: 61, engagement: 86 }
];

export const regionalPerformanceData = [
  { region: "North", revenue: 945000, stores: 48, compliance: 92.4, growth: 13.6 },
  { region: "South", revenue: 862000, stores: 43, compliance: 88.9, growth: 10.8 },
  { region: "East", revenue: 798000, stores: 41, compliance: 91.2, growth: 9.7 },
  { region: "West", revenue: 549200, stores: 32, compliance: 87.6, growth: 7.4 }
];

export const engagementMetricsData = [
  { hour: "10am", footTraffic: 220, engagement: 110, conversion: 42 },
  { hour: "12pm", footTraffic: 480, engagement: 260, conversion: 86 },
  { hour: "2pm", footTraffic: 520, engagement: 310, conversion: 98 },
  { hour: "4pm", footTraffic: 610, engagement: 380, conversion: 132 },
  { hour: "6pm", footTraffic: 740, engagement: 470, conversion: 156 },
  { hour: "8pm", footTraffic: 390, engagement: 210, conversion: 70 }
];

export const actionableAlertsData = [
  {
    id: 1,
    type: "critical",
    category: "Inventory",
    title: "Backorder Risk",
    message: "RFID scans show Harper Sectional Sofa below safety stock in North region (22 units remaining)",
    store: "Store #014 - Uptown",
    timestamp: "2 hours ago",
    action: "Replenish Now"
  },
  {
    id: 2,
    type: "warning",
    category: "Delivery",
    title: "Delivery Delays",
    message: "15 orders projected to miss ETA due to route congestion and dock backlog",
    store: "South Region",
    timestamp: "3 hours ago",
    action: "Re-route"
  },
  {
    id: 3,
    type: "info",
    category: "Sales Floor",
    title: "High Traffic, Low Close",
    message: "CCTV footfall up 18% but close rate down 6% in evening hours",
    store: "Multiple Locations",
    timestamp: "5 hours ago",
    action: "Review Coaching"
  },
  {
    id: 4,
    type: "success",
    category: "Service",
    title: "Service Backlog Cleared",
    message: "Same-day resolution achieved in 3 high-volume stores after triage automation",
    store: "East Region",
    timestamp: "1 day ago",
    action: "View Summary"
  }
];

export const recommendationsData = [
  {
    id: 1,
    type: "assortment",
    priority: "high",
    title: "Balance Floor Assortment",
    description: "Expand Living Room display depth while reducing underperforming Dining sets in East region stores",
    impact: "+$62K monthly revenue",
    confidence: 87
  },
  {
    id: 2,
    type: "pricing",
    priority: "high",
    title: "Bundle Financing Offer",
    description: "Bundle bedroom set with mattress to lift average ticket size",
    impact: "+12% attachment rate",
    confidence: 92
  },
  {
    id: 3,
    type: "inventory",
    priority: "medium",
    title: "Adjust Stock Buffers",
    description: "Increase safety stock for top sectionals based on RFID cycle counts",
    impact: "Reduce backorders by 48%",
    confidence: 84
  },
  {
    id: 4,
    type: "operations",
    priority: "medium",
    title: "Optimize Delivery Routes",
    description: "Shift two routes to earlier windows to improve on-time delivery",
    impact: "+6% on-time rate",
    confidence: 79
  }
];

export const playbookLibraryData = [
  {
    id: 1,
    domain: "Retail",
    title: "Stockout Risk: Recliners",
    trigger: "Sales velocity spike + inbound delay + low backroom count",
    explain: "Promo uplift and supplier ETA slip driving risk",
    recommend: "Pull substitute SKUs to front and launch cycle count",
    sensitivity: "Aggressive",
    status: "Active"
  },
  {
    id: 2,
    domain: "Retail",
    title: "Delivery Exception: Route Congestion",
    trigger: "ETA variance > 45 mins + high damage risk score",
    explain: "Weather + loading delays at DC",
    recommend: "Re-route 12 orders and notify customers",
    sensitivity: "Conservative",
    status: "Active"
  },
  {
    id: 3,
    domain: "Manufacturing",
    title: "Finish Defect Spike: Line 3",
    trigger: "Vision defects up + humidity rise + tool wear",
    explain: "Humidity and nozzle clog likely contributors",
    recommend: "Parameter adjust + short maintenance stop",
    sensitivity: "Aggressive",
    status: "Monitoring"
  }
];

export const twinStatusData = [
  {
    id: "store",
    title: "Store Command Center",
    zones: "Living, Bedroom, Mattress, Decor, Checkout, Pickup",
    signals: "Footfall, dwell, queue length, associate coverage",
    flags: 12,
    uptime: "99.2%"
  },
  {
    id: "plant",
    title: "Plant Command Center",
    zones: "Cutting, Assembly, Finishing, Packaging, Shipping",
    signals: "Throughput, WIP, takt, OEE, bottlenecks",
    flags: 7,
    uptime: "98.6%"
  }
];

export const retailTwinLayout = {
  zones: [
    { id: 'living', name: 'Living Room', position: [-8, 0, 6], size: [4, 2.5, 4], color: '#0ea5e9' },
    { id: 'bedroom', name: 'Bedroom', position: [-2, 0, 6], size: [4, 2.5, 4], color: '#22c55e' },
    { id: 'mattress', name: 'Mattress', position: [4, 0, 6], size: [4, 2.5, 4], color: '#eab308' },
    { id: 'decor', name: 'Decor', position: [-8, 0, 0], size: [4, 2.5, 4], color: '#8b5cf6' },
    { id: 'dining', name: 'Dining', position: [-2, 0, 0], size: [4, 2.5, 4], color: '#38bdf8' },
    { id: 'checkout', name: 'Checkout', position: [4, 0, 0], size: [4, 2.5, 4], color: '#f97316' },
    { id: 'pickup', name: 'Pickup', position: [-8, 0, -6], size: [4, 2.5, 4], color: '#14b8a6' },
    { id: 'back-office', name: 'Back Office', position: [-2, 0, -6], size: [4, 2.2, 4], color: '#64748b' },
    { id: 'receiving', name: 'Receiving', position: [4, 0, -6], size: [4, 2.2, 4], color: '#f59e0b' },
  ],
  flags: [
    {
      id: 'retail-1',
      title: 'Queue Build-Up',
      message: 'CCTV shows queue length > 6 for 12 minutes.',
      severity: 'warning',
      zone: 'Checkout',
      source: 'CCTV + POS',
      position: [4, 1.8, -0.2],
    },
    {
      id: 'retail-2',
      title: 'Phantom Inventory',
      message: 'RFID mismatch for Harper Sectional (3 units).',
      severity: 'critical',
      zone: 'Living Room',
      source: 'RFID',
      position: [-8, 1.8, 6.6],
    },
    {
      id: 'retail-3',
      title: 'At-Risk Shopper',
      message: 'High dwell + low engagement flagged.',
      severity: 'info',
      zone: 'Mattress',
      source: 'CCTV + Associate App',
      position: [4, 1.8, 6.6],
    },
    {
      id: 'retail-4',
      title: 'Pickup Delay',
      message: 'Order staging behind SLA threshold.',
      severity: 'success',
      zone: 'Pickup',
      source: 'WMS',
      position: [-8, 1.8, -5.6],
    },
  ],
};

export const manufacturingTwinLayout = {
  zones: [
    { id: 'cutting', name: 'Cutting', position: [-8, 0, 6], size: [4, 2.5, 4], color: '#38bdf8' },
    { id: 'assembly', name: 'Assembly', position: [-2, 0, 6], size: [4, 2.5, 4], color: '#4ade80' },
    { id: 'finishing', name: 'Finishing', position: [4, 0, 6], size: [4, 2.5, 4], color: '#facc15' },
    { id: 'upholstery', name: 'Upholstery', position: [-8, 0, 0], size: [4, 2.5, 4], color: '#a855f7' },
    { id: 'packaging', name: 'Packaging', position: [-2, 0, 0], size: [4, 2.5, 4], color: '#fb923c' },
    { id: 'shipping', name: 'Shipping', position: [4, 0, 0], size: [4, 2.5, 4], color: '#2dd4bf' },
    { id: 'quality', name: 'Quality Lab', position: [-8, 0, -6], size: [4, 2.5, 4], color: '#f97316' },
    { id: 'maintenance', name: 'Maintenance', position: [-2, 0, -6], size: [4, 2.5, 4], color: '#64748b' },
    { id: 'warehouse', name: 'Warehouse', position: [4, 0, -6], size: [4, 2.5, 4], color: '#0ea5e9' },
  ],
  flags: [
    {
      id: 'mfg-1',
      title: 'Finish Defect Spike',
      message: 'Vision inspection detects +18% blemishes.',
      severity: 'critical',
      zone: 'Finishing',
      source: 'Vision + QMS',
      position: [4, 1.8, 6.6],
    },
    {
      id: 'mfg-2',
      title: 'Vibration Alert',
      message: 'Spindle vibration trending up on Line 1.',
      severity: 'warning',
      zone: 'Cutting',
      source: 'Condition Monitoring',
      position: [-8, 1.8, 6.6],
    },
    {
      id: 'mfg-3',
      title: 'WIP Bottleneck',
      message: 'WIP stack > 32 units at Assembly.',
      severity: 'info',
      zone: 'Assembly',
      source: 'MES',
      position: [-2, 1.8, 6.6],
    },
    {
      id: 'mfg-4',
      title: 'Packaging Ahead',
      message: 'Shift ahead of takt by 9%.',
      severity: 'success',
      zone: 'Packaging',
      source: 'SCADA',
      position: [-2, 1.8, -0.2],
    },
  ],
};

export const observabilityMetricsData = [
  { metric: "Precision", value: "0.86", detail: "RFID stockout risk" },
  { metric: "Recall", value: "0.78", detail: "Delivery exceptions" },
  { metric: "Drift", value: "Low", detail: "CCTV footfall model" },
  { metric: "Latency", value: "42s", detail: "Edge video + POS streams" }
];

export const sensitivitySettingsData = [
  { playbook: "Stockout Risk", setting: "Aggressive", note: "Promo period" },
  { playbook: "Delivery Exceptions", setting: "Conservative", note: "Off-peak" },
  { playbook: "Finish Defects", setting: "Aggressive", note: "Quality gate" }
];

export const manufacturingKpiData = [
  {
    id: 1,
    title: "OEE",
    value: 78.4,
    change: 2.1,
    trend: "up",
    format: "percent",
    description: "Overall equipment effectiveness"
  },
  {
    id: 2,
    title: "First-Pass Yield",
    value: 93.6,
    change: 1.4,
    trend: "up",
    format: "percent",
    description: "Quality on first pass"
  },
  {
    id: 3,
    title: "Scrap & Rework",
    value: 4.2,
    change: -0.6,
    trend: "down",
    format: "percent",
    description: "Percent of output"
  },
  {
    id: 4,
    title: "MTTR",
    value: 2.8,
    change: -0.3,
    trend: "down",
    format: "number",
    description: "Hours to restore"
  }
];

export const manufacturingInsightsData = [
  {
    id: 1,
    type: "Quality",
    title: "SPC Alert: Glue Temp Variance",
    message: "Line 2 trending above control limits for 35 mins (SCADA temp sensors)",
    action: "Verify heater calibration"
  },
  {
    id: 2,
    type: "Maintenance",
    title: "Predictive Maintenance Window",
    message: "Spindle vibration trending up on Line 1 (condition monitoring)",
    action: "Schedule 45-min stop"
  },
  {
    id: 3,
    type: "Planning",
    title: "Material Constraint Risk",
    message: "Foam supply ETA slip may impact two orders (ERP + MES signals)",
    action: "Resequence schedule"
  }
];

export const storePerformanceData = [
  { store: "Store #014", revenue: 72000, compliance: 95, traffic: 2040, conversion: 22.1 },
  { store: "Store #027", revenue: 68000, compliance: 92, traffic: 1930, conversion: 20.4 },
  { store: "Store #033", revenue: 64000, compliance: 90, traffic: 1860, conversion: 19.6 },
  { store: "Store #051", revenue: 59000, compliance: 88, traffic: 1750, conversion: 18.2 },
  { store: "Store #062", revenue: 56000, compliance: 86, traffic: 1680, conversion: 17.5 }
];

export const channelInsightsData = [
  { channel: "In-Store", share: 62, revenue: 1955000, growth: 11.2 },
  { channel: "Online", share: 18, revenue: 567300, growth: 22.5 },
  { channel: "Call Center", share: 12, revenue: 378600, growth: 9.4 },
  { channel: "Trade & B2B", share: 8, revenue: 252300, growth: 6.1 }
];

export const complianceMetricsData = [
  { metric: "Showroom Readiness", target: 95, actual: 92.3, stores: 48 },
  { metric: "Tag Accuracy", target: 98, actual: 96.1, stores: 52 },
  { metric: "Delivery Prep", target: 93, actual: 90.4, stores: 46 },
  { metric: "Stock Availability", target: 92, actual: 89.7, stores: 50 }
];
