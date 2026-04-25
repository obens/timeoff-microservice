# 🕒 Time-Off Microservice

![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![NestJS](https://img.shields.io/badge/NestJS-framework-red)
![TypeORM](https://img.shields.io/badge/TypeORM-ORM-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

---

## 🚀 Overview

A backend microservice built with **NestJS** that manages employee time-off requests, ensuring consistency with an external **HCM system (mocked)**.

---

## 🧠 Core Features

- Employee time-off request lifecycle
- Balance tracking per employee & location
- Approval / rejection workflow
- Defensive balance validation
- HCM batch + single sync (source of truth simulation)

---

## 🏗️ Architecture

- NestJS modular architecture
- TypeORM (SQLite)
- REST API
- Jest E2E tests

---

## 📦 Modules

### Balance Module
Manages employee leave balance per location.

### TimeOff Module
Handles request lifecycle:
- PENDING
- APPROVED
- REJECTED

### HCM Module
Simulates external HR system:
- Batch sync
- Single sync
- Source of truth behavior

---

## 🔄 Business Flow

1. HCM sync updates balances
2. Employee requests time-off
3. Request stays PENDING
4. Manager approves or rejects
5. Approval deducts balance

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
