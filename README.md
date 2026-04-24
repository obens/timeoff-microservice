# 🕒 Time-Off Microservice (NestJS)

A backend microservice for managing employee time-off requests with balance synchronization from an external Human Capital Management (HCM) system.

---

## 🚀 Overview

This project simulates a real-world HR system where:

- Employees request time-off (vacation/leave)
- Managers approve or reject requests
- The system validates available balance
- An external HCM system acts as the source of truth

---

## 🏗️ Architecture

- NestJS (modular architecture)
- TypeORM
- SQLite database
- REST API
- Jest (E2E tests)

---

## 📦 Modules

### Balance Module
- Stores employee balance per location
- Allows creation and deduction of days

### TimeOff Module
- Handles request lifecycle
- States: PENDING → APPROVED / REJECTED

### HCM Module (Mock)
- Simulates external HR system
- Supports batch and single sync
- Acts as source of truth for balances

---

## 🔄 Business Flow

1. HCM sync updates balances
2. Employee requests time-off
3. Request stays PENDING
4. Manager approves or rejects
5. Approval deducts balance
6. System prevents overdraft

---

## 📡 API Endpoints

### Balance
- GET /balance/:employeeId/:locationId
- POST /balance

### TimeOff
- POST /timeoff/request
- GET /timeoff
- POST /timeoff/:id/approve
- POST /timeoff/:id/reject

### HCM
- POST /hcm/sync-batch
- POST /hcm/sync-single

---

## 🧪 Testing

Run tests:

```bash
npm run test:e2e
