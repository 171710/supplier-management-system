# Supplier Management System

<p align="center">
  A Salesforce CRM application for supplier management, account relationships, and payment status tracking.
</p>

## Overview

The Supplier Management System is a Salesforce portfolio project developed to demonstrate practical skills in Salesforce administration and application development.

The application provides a centralized interface for managing supplier records, associating suppliers with business accounts, and monitoring payment statuses.

It combines Salesforce data management with a custom Lightning Web Component interface, Apex server-side logic, and SOQL queries.

## Key Features

- Supplier record management.
- Supplier and Account relationship management.
- Payment status tracking: Pending, Paid, and Overdue.
- Custom Lightning Web Component interface.
- Supplier search by name or associated account.
- Payment status filtering.
- Manual data refresh.
- Apex controller for supplier data retrieval.
- Apex unit testing.
- Supplier reports and dashboard configured in the Salesforce development org.

## Application Architecture

The application follows a simple Salesforce development architecture:

| Layer | Responsibility |
|---|---|
| Salesforce Data Model | Stores supplier and account information |
| Apex Controller | Retrieves supplier records using SOQL |
| Lightning Web Component | Displays supplier information |
| JavaScript | Implements search, filtering, and refresh logic |
| Apex Test Class | Validates controller functionality |

## Technologies

- Salesforce Platform
- Apex
- SOQL
- Lightning Web Components (LWC)
- JavaScript
- HTML
- Salesforce CLI
- Visual Studio Code
- Git and GitHub

## Project Structure

```text
supplier-management-system/
├── config/
├── force-app/
│   └── main/
│       └── default/
│           ├── classes/
│           │   ├── SupplierController.cls
│           │   └── SupplierControllerTest.cls
│           └── lwc/
│               └── supplierList/
│                   ├── supplierList.html
│                   ├── supplierList.js
│                   ├── supplierList.js-meta.xml
│                   └── __tests__/
├── scripts/
├── package.json
├── sfdx-project.json
└── README.md
```

## Testing

The `SupplierControllerTest` Apex test class validates:

- Supplier record retrieval.
- Associated Account information.
- Payment status values.

The test was successfully executed in a Salesforce Developer Edition org:

- Tests executed: 1
- Tests passed: 1
- Tests failed: 0

## Installation and Deployment

### Prerequisites

- Salesforce Developer Edition org.
- Salesforce CLI.
- Visual Studio Code.
- Salesforce Extension Pack.

### Clone the Repository

```bash
git clone https://github.com/171710/supplier-management-system.git
cd supplier-management-system
```

### Authenticate with Salesforce

```bash
sf org login web
```

### Deploy the Source Code

```bash
sf project deploy start
```

## Project Status

**Development version — Portfolio Project**

The repository currently contains the Apex controller, Apex test class, and Lightning Web Component source code.

The custom Salesforce data model, automation, reports, and dashboard were also configured in the development org. Their metadata has not yet been fully retrieved into this repository.

## Author

**Marco Cassuba**

Computer Science Student | Aspiring Salesforce Developer

GitHub: [github.com/171710](https://github.com/171710)

Project: [Supplier Management System](https://github.com/171710/supplier-management-system)
