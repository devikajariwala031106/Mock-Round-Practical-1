# Mock-Round-Practical-1

# Support Ticket Management System (Help Desk API)

A production-ready **Support Ticket Management System** designed for internal company use. This project maps an enterprise workflow where employees can seamlessly raise IT/operations support requests, and support staff can manage, assign, search, filter, and track lifecycle status updates.

Built as a **3-Hour React.js Practical Assessment Project Architecture**, this system evaluates rigorous state management, component decomposition, custom hooks, and dynamic data binding using a decoupled mock API layout.

---

## 🚀 Key Features

*   **Secure Authentication & Role Handling:** Distinct view permissions and operations for `Support Staff` and standard `Employees`.
*   **Dynamic Command Dashboard:** Real-time data aggregation calculating total tickets, high-priority counts, status distribution summaries, and interactive lists of recent submissions.
*   **Ticket Lifecycle Factory:** Programmatic generation of incremental business Ticket IDs (e.g., `TCK-1025`) upon form validation and submission.
*   **Granular Multi-Filter Grid:** Complex multi-faceted searching across Ticket IDs or Subjects, cross-referenced against global filters for `Status`, `Priority`, and `Assignee`.
*   **Status Progress Engine:** Interactive detail views empowering staff to modify current ticket states (`Open` ➔ `In Progress` ➔ `Resolved` ➔ `Closed`) and alter live personnel assignments.

---

## 🛠️ Recommended Tech Stack

| Technology / Package | Layer | Purpose |
| :--- | :--- | :--- |
| **React.js (v18+)** | Core | Main single-page application framework |
| **Vite** | Build Tool | Next-generation ultra-fast dev server and bundle pipeline |
| **React Router Dom** | Routing | Declarative client-side screen flow navigation |
| **Context API & Hooks** | State | Global auth distribution and state-synchronisation hooks |
| **Tailwind CSS / Bootstrap** | Styling | Fully responsive mobile & desktop viewport presentation |
| **Axios** | Network | HTTP client abstraction layer for standard REST calls |
| **JSON Server** | Backend Mock | Independent zero-coding local REST API endpoints |

---

## 📂 Project Architecture

The application strictly enforces separation of concerns across a clean React structure:

```text
src/
├── components/          # Reusable structural and visual layout units
│   ├── Sidebar.jsx       # Global application navigation matrix
│   ├── Header.jsx        # Contextual top bar with authentication hooks
│   ├── TicketCard.jsx    # Dashboard metric overview blocks
│   ├── TicketTable.jsx   # Tabular grid presenting filterable data sets
│   ├── StatusBadge.jsx   # Visual UI markers for Open/In Progress/Resolved
│   └── PriorityBadge.jsx # Color-coded warning elements for Low/Medium/High
├── pages/               # Root screen viewport components
│   ├── Login.jsx         # Access barrier and user matching validation
│   ├── Dashboard.jsx     # High-level analytics and aggregates layout
│   ├── Tickets.jsx       # Consolidated main search and filter view
│   ├── CreateTicket.jsx  # Controlled input form capturing new requests
│   └── TicketDetails.jsx # In-depth overview with mutable task assignments
├── services/            # Base network client infrastructure
│   └── api.js            # Axios instances configured for standard REST methods
├── hooks/               # Encapsulated state and business logic hooks
│   └── useTickets.jsx    # Unified context provider managing standard state layers
├── utils/               # Isolated functional logic
│   ├── ticketUtils.js    # Automated ID generation and timestamp parse routines
│   └── validation.js     # Form field format enforcement
└── data/                # Static local data fallbacks
    └── mockData.json     # Standard structural arrays for users and issues
```

---

## 💾 Structural Database Mapping

The data layer mimics a schema that scales to production relational systems:

*   **Users (`/users`):** Stores identity keys, names, emails, and operational `role` access levels (`employee` / `support`).
*   **Tickets (`/tickets`):** Maps specific problem descriptions, priorities, states, ownership IDs (`created_by`), and operational assignment keys (`assigned_to`).
*   **Ticket Comments (`/tickets/:id/comments`):** Appends conversational logs indexed to individual tickets.

---

## 🏁 How to Run Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) installed on your system.

### 2. Clone and Install Dependencies
```bash
git clone https://github.com
cd your-repo-name
npm install
```

### 3. Start the Mock REST API Server
In a separate terminal tab, initiate the mock data provider to serve the endpoints on port `5000`:
```bash
# Using json-server globally or via npx
npx json-server --watch src/data/mockData.json --port 5000
```

### 4. Boot the React Client Development Server
In your main terminal tab, launch the local build instance:
```bash
npm run dev
```
Open the provided local URL (typically `http://localhost:5173`) in your web browser.

---

## 🔐 Demo Accounts / Test Credentials

| Assigned Role | Email Address | Password |
| :--- | :--- | :--- |
| **Support Staff** | `support@company.com` | `123456` |
| **Employee User** | `employee@company.com` | `123456` |

---

## 🎯 Implementation Strategy

This app maps explicitly to standard React competency milestones:
1. **Routing & Framework Core:** Seamless routing transitions across five distinct page states.
2. **Form Lifecycle Handling:** Strict requirements check for inputs with success toasts on generation.
3. **Array Matrix Processing:** Performance-optimised filtering arrays tracking three parameters simultaneously.
4. **Context Distribution:** Clean implementation of hook states to bridge data elements effortlessly.




