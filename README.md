# Time Off Microservice

Microservice for **Time Off (vacation/leave) management** built with NestJS, responsible for managing employee balances, integrating with HCM systems, and processing leave requests with business rules.

---

# 🚀 Overview

This system simulates a corporate leave management environment, where:

- The system receives employee balances from HCM
- Stores and manages each employee’s balance
- Allows creation of time off requests
- Validates if sufficient balance is available
- Approves or rejects requests
- Automatically updates balances

---

# 🧱 System Architecture

The project follows a modular architecture based on NestJS, separating responsibilities into well-defined layers.

---

## 📦 Application Layers

### 1. Controller Layer (HTTP Interface)

Responsible for exposing API endpoints.

Responsibilities:
- Receive HTTP requests
- Perform basic input validation
- Delegate execution to services

Examples:
- `AppController`
- `TimeOffController`
- `HcmController`
- `BalanceController`

---

### 2. Service Layer (Business Logic)

Core layer of the system.

Responsible for:
- Approval and rejection rules
- Balance management
- Business rules validation
- Request processing

Examples:
- `TimeOffService`
- `BalanceService`
- `HcmService`

---

### 3. Domain Layer (Entities)

Defines the main business objects:

- Employee
- Balance
- TimeOffRequest

Responsible for maintaining domain rules and structure.

---

### 4. Data Layer (Persistence)

Storage layer (mock or future database integration):

- In-memory data simulation
- Future ORM support (TypeORM/Prisma)

---

# 🔄 System Flow

```text
HCM sends balance update
        ↓
Balance Service stores balance
        ↓
Employee creates Time Off request
        ↓
TimeOff Service validates balance
        ↓
System approves or rejects request
        ↓
Balance is updated


src/
 ├── balance/         # balance management
 ├── hcm/             # HCM integration
 ├── timeoff/         # leave management rules
 ├── app.controller.ts
 ├── app.service.ts
 ├── app.module.ts
 └── main.ts


How to Run the Project
1. Install dependencies

npm install


Build the project
npm run build
npm run start

Run unit tests
npm run test

Run end-to-end (E2E) tests
npm run test:e2e

Current coverage:
Statements: 100%
Branches: 100%
Functions: 100%
Lines: 100%




Business Rules
Employees cannot request more days than available balance
Every request starts as PENDING
Approval deducts balance automatically
Rejection does not affect balance
HCM can update balances at any time

Testing Strategy
Unit Tests
Test isolated service logic
E2E Tests
Test full API flows
Simulate real requests



Author

Obenson Maurice
