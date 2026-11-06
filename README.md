# \# Azure Zero-Downtime Deployment using App Service Slots

# 

# \## Project Overview

# This project demonstrates application deployment on Azure App Service using staging slots and slot swapping to minimize production downtime.

# 

# \## Technologies Used

# \- Microsoft Azure

# \- Azure App Service

# \- Azure Deployment Slots

# \- Node.js

# \- PowerShell

# \- Azure CLI

# \- ZIP Deployment

# \- HTTP Smoke Testing

# 

# \## Architecture

# 

# Developer → Node.js Application → ZIP Deployment → Azure Staging Slot → Health Check → Smoke Test → Slot Swap → Production

# 

# \## Implementation Steps

# 

# 1\. Created Azure App Service.

# 2\. Created a staging deployment slot.

# 3\. Packaged the Node.js application into a ZIP file.

# 4\. Deployed the ZIP package to the staging slot.

# 5\. Verified staging using HTTP health checks.

# 6\. Created an automated PowerShell smoke test.

# 7\. Verified production availability.

# 8\. Performed staging-to-production slot swap.

# 9\. Verified the production application after deployment.

# 10\. Performed repeated production availability checks.

# 

# \## Testing Results

# 

# \- Staging HTTP Response: 200 OK

# \- Staging Smoke Test: PASSED

# \- Production HTTP Response: 200 OK

# \- Production Smoke Test: PASSED

# \- Deployment Slot Swap: SUCCESSFUL

# 

# \## Key Learning Outcomes

# 

# \- Azure App Service deployment

# \- Deployment slot management

# \- ZIP-based application deployment

# \- PowerShell automation

# \- Automated smoke testing

# \- Production deployment strategies

# \- Zero-downtime deployment concepts

# 

# \## Project Goal

# 

# Demonstrate a safer deployment workflow that validates application changes in staging before promoting them to production.

