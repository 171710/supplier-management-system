# Supplier Management System

<p align="center">
  A Salesforce CRM application for managing suppliers, business accounts, and payment statuses.
</p>

<p align="center">
  **Portfolio Project | Salesforce Development**
</p>

## Overview

The **Supplier Management System** is a Salesforce portfolio project designed to demonstrate practical skills in Salesforce application development.

It provides a centralized interface for managing supplier records, associating suppliers with business accounts, and tracking payment statuses.

The application combines Salesforce data management, Apex server-side logic, SOQL queries, and a custom Lightning Web Component (LWC) interface.

## Key Features

- Supplier record creation and management.
- Supplier and Account relationship management.
- Payment status tracking: Pending, Paid, and Overdue.
- Custom Lightning Web Component interface.
- Supplier search by supplier name or associated account.
- Payment status filtering.
- Manual data refresh.
- Success and error notifications.
- Apex controller for supplier data retrieval.
- Apex unit tests.

## Application Architecture

The application follows a layered Salesforce development architecture:

| Layer | Responsibility |
|---|---|
| Salesforce Data Model | Stores supplier and account information |
| Apex Controller | Retrieves supplier records using SOQL |
| Lightning Web Component | Provides the user interface |
| JavaScript | Handles search, filtering, refresh, and component interactions |
| HTML | Defines the component structure and supplier form |
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
- Empty result handling when no supplier records are available.

Latest test execution in a Salesforce Developer Edition org:

| Result | Count |
|---|---:|
| Tests executed | 2 |
| Tests passed | 2 |
| Tests failed | 0 |
| Pass rate | 100% |

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
sf project deploy start --target-org <org-alias>
```

Replace `<org-alias>` with the alias of your authenticated Salesforce organization.

**Note:** The repository contains the Apex classes and Lightning Web Component source code. The custom Salesforce data model, reports, dashboard, and other org-level configurations may require additional setup because their metadata has not yet been fully retrieved into this repository.

## Project Status

**Development Version — Portfolio Project**

The application has been implemented and tested in a Salesforce Developer Edition environment.

The repository includes the Apex controller, Apex unit tests, and Lightning Web Component source code.

Further improvements may include expanded test coverage, additional security validation, and retrieval of the remaining Salesforce metadata.

## Author

**Marco Cassuba**

Computer Science Student | Aspiring Salesforce Developer

- GitHub: https://github.com/171710
- Project Repository: https://github.com/171710/supplier-management-system
