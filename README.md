# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

| File or Folder | Purpose                              |
| -------------- | ------------------------------------ |
| `app/`         | content for UI frontends goes here   |
| `db/`          | your domain models and data go here  |
| `srv/`         | your service models and code go here |
| `package.json` | project metadata and configuration   |
| `readme.md`    | this getting started guide           |

## Next Steps

-   test services update local variables cf de forecasting-srv and watch-service:ts
-   test approuter do the first step and then in the router call cf de forecasting-router and add
    "TENANT_HOST_PATTERN": "^(.\*).localhost",
    "destinations": [
    {
    "name": "forecasting-srv",
    "url": "http://localhost:4004",
    "forwardAuthToken": true
    },
    {
    "name": "ui5",
    "url": "https://ui5.sap.com/1.108.4"
    }
    ]

call start:hybrid
