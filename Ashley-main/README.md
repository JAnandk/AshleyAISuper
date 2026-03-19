<p align="center">
  <h1 align="center">🤖 Ashley AI Supervisor</h1>
  <p align="center">
    <strong>Intelligent Operations Platform for Retail & Manufacturing</strong>
  </p>
  <p align="center">
    Observe → Explain → Recommend → Act
  </p>
</p>

---

## 🎯 Application Objective

**Ashley AI Supervisor** is an end-to-end operations intelligence platform purpose-built for **Consumer Packaged Goods (CPG)** companies, furniture retailers, and manufacturing enterprises. It acts as a **virtual AI supervisor** that continuously monitors retail stores, manufacturing plants, delivery networks, and field teams — surfacing anomalies, explaining root causes, recommending corrective actions, and enabling one-click execution.

The platform bridges the critical **data-to-action gap** that exists between raw operational signals (CCTV, RFID, POS, MES, SCADA, ERP) and the decisions that store managers, plant supervisors, and supply chain leaders must make in real time.

---

## 💼 Scope of Business Impact

### Revenue & Margin Optimization
- **Sales trend monitoring** with revenue-vs-target tracking enables real-time course correction
- **Category performance analytics** (Living Room, Bedroom, Mattress, Dining, Home Office) reveal growth pockets and margin opportunities
- **AI-driven recommendations** with confidence scoring (79–92%) project measurable impact (e.g., +$62K monthly revenue, +12% attachment rate)

### Operational Efficiency
- **OEE (Overall Equipment Effectiveness)** tracking at 78.4% with improvement pathways via predictive maintenance
- **First-pass yield** at 93.6% monitored through vision inspection systems
- **MTTR (Mean Time to Repair)** reduced to 2.8 hours through condition-based maintenance alerts
- **Scrap & rework** reduced to 4.2% with SPC-driven quality interventions

### Supply Chain & Delivery Performance
- **On-time delivery rate** tracking at 89.6% with AI-powered route optimization
- **Exception queue management** for at-risk orders with risk severity classification
- **Inventory availability** at 93.2% maintained through RFID-based cycle counts and safety stock algorithms

### Store & Workforce Productivity
- **Zone-level staffing coverage** monitoring (Living Room 92%, Checkout 81%)
- **AI-generated coaching prompts** for associates based on behavioral signals
- **Foot traffic-to-conversion analytics** to optimize floor engagement during peak hours

### Key Performance Indicators (KPIs)

| KPI | Metric | Business Lever |
|-----|--------|----------------|
| Store Revenue | $3.15M MTD (+9.8%) | Pricing, assortment, promotions |
| Conversion Rate | 21.4% (+1.6%) | Floor coverage, coaching |
| Inventory Availability | 93.2% (+2.4%) | RFID counts, replenishment |
| On-Time Delivery | 89.6% (-1.2%) | Route optimization, staging |
| OEE | 78.4% (+2.1%) | Maintenance, changeovers |
| First-Pass Yield | 93.6% (+1.4%) | SPC, vision inspection |

---

## 🧠 AI Supervisor Features

### 1. Playbook Studio — Prompt-to-Playbook Automation
The AI Supervisor Builder transforms operational intent into **governed, explainable micro-apps**:

- **Define trigger signals** from CCTV, RFID, POS, and MES data streams
- **Attach evidence** and causal hypotheses automatically
- **Set role-based actions** with configurable approval workflows
- **Tune sensitivity controls** (Aggressive/Conservative) per playbook to balance false-positive vs. false-negative trade-offs

**Example Playbooks:**
| Playbook | Domain | Trigger | Recommendation |
|----------|--------|---------|----------------|
| Stockout Risk: Recliners | Retail | Sales velocity spike + inbound delay | Pull substitute SKUs, launch cycle count |
| Delivery Exception: Route Congestion | Retail | ETA variance > 45 mins + high damage risk | Re-route 12 orders, notify customers |
| Finish Defect Spike: Line 3 | Manufacturing | Vision defects up + humidity rise | Parameter adjust + maintenance stop |

### 2. Digital Twin Command Centers
Dual 3D spatial visualization for **store** and **plant** operations:

- **Retail Twin**: 9 zones (Living Room, Bedroom, Mattress, Decor, Dining, Checkout, Pickup, Back Office, Receiving) with real-time spatial flags for queue build-ups, phantom inventory, at-risk shoppers, and pickup delays
- **Manufacturing Twin**: 9 zones (Cutting, Assembly, Finishing, Upholstery, Packaging, Shipping, Quality Lab, Maintenance, Warehouse) with anomaly flags for defect spikes, vibration alerts, WIP bottlenecks, and takt performance

Each digital twin surfaces **spatial anomalies with call-to-action flags** tied to source systems (CCTV, RFID, POS, Vision, SCADA, MES, WMS).

### 3. Actionable Alerts Engine
Multi-severity alert system with context-rich intelligence:

- **Critical**: Backorder risks detected by RFID scans (e.g., Harper Sectional below safety stock)
- **Warning**: Delivery delays from route congestion and dock backlogs
- **Info**: High traffic / low close-rate patterns spotted by CCTV footfall analysis
- **Success**: Service backlog clearance via triage automation

Each alert includes the **source store**, **timestamp**, and a **one-click action button** (Replenish Now, Re-route, Review Coaching, View Summary).

### 4. AI Recommendations Engine
Data-driven suggestions scored by confidence level:

- **Assortment optimization**: Balance floor displays based on category performance signals
- **Pricing & promotions**: Bundle financing offers to lift average ticket size
- **Inventory management**: Adjust safety stock buffers using RFID cycle count data
- **Route optimization**: Shift delivery windows based on traffic pattern analysis

### 5. Observability & Model Governance
Built-in ML model monitoring:

| Metric | Value | Context |
|--------|-------|---------|
| Precision | 0.86 | RFID stockout risk model |
| Recall | 0.78 | Delivery exception detection |
| Drift | Low | CCTV footfall model stability |
| Latency | 42s | Edge video + POS stream processing |

### 6. Manufacturing Intelligence
Sensor-driven insights from MES, vision systems, and machine telemetry:

- **Line telemetry** (vibration alerts, vision defects, energy per unit, safety sensors)
- **SPC alerts** for process parameter variance (e.g., glue temperature on Line 2)
- **Predictive maintenance** windows based on condition monitoring (spindle vibration)
- **Material constraint** risk detection from ERP + MES signal fusion

### 7. Store Team Management
AI-augmented workforce management:

- **Zone coverage tracking** with real-time associate presence monitoring
- **Coaching prompts** auto-generated from AI Supervisor based on associate performance signals
- **Floor readiness** scoring across zones (Living Room, Bedroom, Mattress, Checkout)

---

## 🏗️ Architecture & Technology Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| React 19 | UI framework |
| Tailwind CSS 3 | Design system & responsive layout |
| Three.js | 3D Digital Twin visualization |
| Recharts | Interactive charting (area, bar, line) |
| Framer Motion | Animations & transitions |
| Lucide React | Icon system |
| React Router v7 | Client-side navigation |

### Backend
| Technology | Purpose |
|-----------|---------|
| FastAPI | REST API framework |
| MongoDB (Motor) | Async document database |
| Pydantic | Data validation & serialization |
| Python-Jose / JWT | Authentication |

### Design System
- **Color palette**: Professional blues, greens, and teals conveying trust and growth
- **Typography**: Inter (body), Space Grotesk (headings)
- **Modes**: Full light and dark mode support
- **Layout**: Responsive across desktop (1920×1080), tablet (768×1024), and mobile (375×667)

---

## 📁 Application Modules

| Module | Route | Description |
|--------|-------|-------------|
| Executive Dashboard | `/` | KPIs, charts, digital twins, playbooks, manufacturing ops, observability |
| Sales & Conversion | `/sales-conversion` | Revenue trends, conversion funnels, channel insights |
| Inventory & Assortment | `/inventory-assortment` | Stock levels, category mix, replenishment signals |
| Regional View | `/regional-view` | Multi-region performance (North, South, East, West) |
| Playbook Studio | `/playbook-studio` | Prompt-to-playbook builder with sensitivity tuning |
| Manufacturing Ops | `/manufacturing-ops` | OEE, line telemetry, quality, predictive maintenance |
| Delivery & Logistics | `/delivery-logistics` | On-time delivery, exception queue, route management |
| Store Teams | `/store-teams` | Staffing coverage, coaching prompts, floor readiness |
| Alerts | `/alerts` | Multi-severity operational alerts |
| Recommendations | `/recommendations` | AI-driven action recommendations with confidence scores |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18
- **Python** ≥ 3.10
- **MongoDB** (local or Atlas)

### Frontend
```bash
cd frontend
npm install
npm run dev
# Opens at http://localhost:3000
```

### Backend
```bash
cd backend
pip install -r requirements.txt
# Create .env file with MONGO_URL and DB_NAME
uvicorn server:app --reload --port 8000
```

### Environment Variables (Backend)
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=ashley
CORS_ORIGINS=http://localhost:3000
```

---

## 📊 Signal Sources

Ashley integrates and fuses signals from multiple operational data sources:

| Source | Signals | Use Case |
|--------|---------|----------|
| **CCTV** | Footfall, dwell time, queue length | Traffic analytics, anomaly detection |
| **RFID** | Inventory counts, tag accuracy, phantom stock | Stock availability, cycle count triggers |
| **POS** | Transaction data, conversion rate, ticket size | Revenue tracking, promotion compliance |
| **MES** | Throughput, WIP, takt time, OEE | Manufacturing performance |
| **SCADA/PLC** | Vibration, temperature, energy consumption | Predictive maintenance, SPC |
| **Vision Systems** | Defect detection, finish inspection | Quality management |
| **ERP** | Material supply, order status, scheduling | Supply chain risk detection |
| **WMS** | Order staging, pickup readiness, dock status | Delivery & logistics |

---

## 🛡️ Security & Privacy

- **Confidential computing** architecture for privacy-preserving data integration
- **Role-based access controls** for playbook execution and sensitivity tuning
- **Audit trail** on all AI Supervisor actions and recommendations
- **Secure mode indicator** for visual confirmation of data processing integrity

---

## 📄 License

Proprietary — © 2024 Ashley AI Supervisor. All rights reserved.

---

<p align="center">
  <sub>Operations intelligence and automation for the modern enterprise.</sub>
</p>
