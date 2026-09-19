# Mock-Round-Practical-1

HELP DESK / SUPPORT TICKET SYSTEM
3-Hour React.js Practical Project Specification
Build a Support Ticket Management System for a company where employees can raise support tickets and support staff can manage, assign, search, filter and update them.
1. Project Objective
The objective is to evaluate a student's practical React.js skills through a realistic business workflow. The application should be responsive and should work with mock JSON/REST API data. Backend development is optional for the 3-hour assessment.
2. Main Features
Login / basic role handling
Create new support ticket
Auto-generate Ticket ID (example: TCK-1025)
Subject and description
Priority: Low / Medium / High
Status: Open / In Progress / Resolved / Closed
Assign ticket to an employee/support staff member
Ticket list with search
Filter by status, priority and assignee
Ticket details page
Update ticket status and assignee
Comments section (optional/bonus)
Dashboard with ticket counts and recent tickets
Responsive desktop/mobile layout
3. Screen Flow
Login → Dashboard
Dashboard → Tickets
Tickets → Ticket Details
Tickets → Create Ticket
Create Ticket → Ticket List / Ticket Details
Ticket Details → Update Status / Assign Employee
Sidebar → Dashboard / Tickets / Create Ticket / Employees
4. Screen Requirements
4.1 Login
Email
Password
Login button
Demo account / mock login is acceptable
4.2 Dashboard
Total Tickets
Open Tickets
In Progress Tickets
Resolved Tickets
Closed Tickets
High Priority Tickets
Priority summary
Status summary
Recent Tickets table
4.3 Ticket List
Ticket ID
Subject
Priority badge
Status badge
Assigned To
Created Date
View action
Search by Ticket ID or Subject
Filter by Status
Filter by Priority
Filter by Assignee
4.4 Create Ticket
Required fields:
Subject – required
Description – required
Priority – required
Assigned To – optional/required as defined by business rule
On successful submission: generate Ticket ID, set default status to Open, save the ticket and show a success notification.
4.5 Ticket Details
Ticket ID
Subject
Description
Priority
Current Status
Assigned employee
Created date / updated date
Status progress
Update Ticket action
Comments section – bonus
5. Suggested Database Structure
5.1 users
Field
Type
Description
id
int / string
Primary key
name
varchar(100)
Employee name
email
varchar(150)
Login / contact email
password
varchar
Mock password / hashed password in real backend
role
varchar(20)
employee / support
created_at
datetime
Created date


5.2 tickets
Field
Type
Description
id
int
Primary key
ticket_id
varchar(20)
Business Ticket ID, e.g. TCK-1025
subject
varchar(255)
Ticket subject
description
text
Issue description
priority
varchar(10)
Low / Medium / High
status
varchar(20)
Open / In Progress / Resolved / Closed
assigned_to
int
FK → users.id
created_by
int
FK → users.id
created_at
datetime
Created date
updated_at
datetime
Last updated date


5.3 ticket_comments 
Field
Type
Description
id
int
Primary key
ticket_id
int
FK → tickets.id
user_id
int
FK → users.id
comment
text
Comment text
created_at
datetime
Created date


5.4 ticket_status_history
Field
Type
Description
id
int
Primary key
ticket_id
int
FK → tickets.id
status
varchar(20)
New status
changed_by
int
FK → users.id
created_at
datetime
Changed date


6. Dummy JSON Data
6.1 users.json
[
  {"id": 1, "name": "Rahul Patel", "email": "rahul@company.com", "role": "support"},
  {"id": 2, "name": "Neha Sharma", "email": "neha@company.com", "role": "support"},
  {"id": 3, "name": "Amit Shah", "email": "amit@company.com", "role": "employee"},
  {"id": 4, "name": "Priya Shah", "email": "priya@company.com", "role": "employee"}
]
6.2 tickets.json
[
  {
    "id": 1,
    "ticket_id": "TCK-1025",
    "subject": "Unable to access company email",
    "description": "Employee cannot log in to company email.",
    "priority": "High",
    "status": "Open",
    "assigned_to": 1,
    "created_by": 3,
    "created_at": "2026-09-12T09:30:00",
    "updated_at": "2026-09-12T09:30:00"
  },
  {
    "id": 2,
    "ticket_id": "TCK-1024",
    "subject": "Laptop not working",
    "description": "Laptop is not turning on.",
    "priority": "Medium",
    "status": "In Progress",
    "assigned_to": 2,
    "created_by": 4,
    "created_at": "2026-09-11T10:24:00",
    "updated_at": "2026-09-11T11:00:00"
  }
]
7. REST API Design (Mock JSON Server / Backend)
Suggested Base URL: http://localhost:5000/api
Method
Endpoint
Purpose
POST
/auth/login
Login user
GET
/users
Get users / assignees
GET
/users/:id
Get user details
GET
/tickets
Get all tickets
POST
/tickets
Create ticket
GET
/tickets/:id
Get ticket details
PUT
/tickets/:id
Update ticket
DELETE
/tickets/:id
Delete ticket – optional
GET
/tickets/:id/comments
Get comments – bonus
POST
/tickets/:id/comments
Add comment – bonus
GET
/dashboard/stats
Dashboard statistics – optional


8. Recommended React Technology Stack
Technology / Package
Required?
Use
React.js
YES
Main frontend framework
React Hooks
YES
useState, useEffect, useMemo etc.
React Router
YES
Page navigation
JavaScript ES6+
YES
Application/business logic
Bootstrap / React-Bootstrap
Recommended
Responsive UI and components
CSS
YES
Custom styling
Axios
Recommended
API calls
JSON Server / Mock API
Recommended
Mock REST API for practical
Redux / Redux Toolkit
Optional
Use only if student knows global state
React Toastify
Recommended
Success/error notifications
React Icons
Recommended
Sidebar, actions and UI icons
Chart.js / Recharts
Optional
Dashboard charts
LocalStorage
Recommended
Persistence without backend
Formik / React Hook Form
Optional
Form management
Yup
Optional
Form validation


9. Suggested Folder Structure
src/
├── components/
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── TicketCard.jsx
│   ├── TicketTable.jsx
│   ├── StatusBadge.jsx
│   └── PriorityBadge.jsx
├── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Tickets.jsx
│   ├── CreateTicket.jsx
│   └── TicketDetails.jsx
├── services/
│   └── api.js
├── hooks/
│   └── useTickets.js
├── utils/
│   ├── ticketUtils.js
│   └── validation.js
├── data/
│   └── mockData.json
├── App.jsx
└── main.jsx
- "Unable to load tickets"
10. Redux – When to Use
Redux Toolkit is optional for a 3-hour practical. It can be used to manage authenticated user, ticket list and global filters. If the practical is intended to test basic React skills, useState/useEffect and a custom hook are sufficient.
11. Student Evaluation – 100 Marks
Area
Marks
UI implementation from Figma/image
15
React component structure
10
Routing and navigation
10
Create ticket + validation
15
Search and filters
15
Ticket details + update status
10
API integration / Axios
10
Dashboard calculations
5
Notifications / error handling
5
Code quality / responsive design
5





12.  3-Hour Practical Timeline
Time
Suggested Work
0–20 min
Project setup, routing and layout
20–60 min
Dashboard + Ticket List UI
60–100 min
Create Ticket form + validation
100–140 min
Ticket Details + status/assignment
140–165 min
Search, filters and API integration
165–180 min
Testing, responsive fixes and final demo


13. Demo Data / Credentials
Role
Email
Password
Support Staff
support@company.com
123456
Employee
employee@company.com
123456


14. Expected Final Demo:  Link
The student should demonstrate: login → dashboard → ticket list → search/filter → create ticket → open ticket details → assign employee → change status → return to list → verify updated ticket → verify dashboard counts.





