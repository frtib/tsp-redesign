---
title: Financial and Reconciliation Services (FRS)
permalink: /pia/financial-and-reconciliation-services-frs/
---

## Overview

Financial and Reconciliation Services (FRS) enables FRTIB to track and disburse funds from Thrift Savings Plan (TSP) accounts; maintains the TSP’s General Ledger; and interfaces with the United States Treasury. This system also interfaces with the TSP’s fund managers, calculates share prices and investment-level tracking and re-balancing; conducts financial reports; and generates annual 1099 tax forms mailed to participants, beneficiaries, and third party payees. This PIA will review the components of FRS that collect and use personally identifiable information (PII).

The following subsystems and applications within FRS collect and/or use PII: (1) Savantage Altimate; (2) Omni Pay; (3) Cash Management and Investment (CaMI); (4) Accounting Systems Interface (ASI); (5) Tax System Processing Reporting Interface System (TRIS); (6) Application Security Administrator (ASA); and (7) Obligation Tracking and Invoicing System (OTIS).

Savantage Altimate Accounting is a commercial off-the-shelf (COTS) product that has been customized to meet the requirements of FRTIB. It contains the General Ledger for the TSP. Prior to 2009, this application was used to process disbursements to participants, their beneficiaries, and third party payees, and to verify account information. Since 2009, Omni Pay has taken over most of the aforementioned roles, so this application is now limited to payroll office information. Historical participant data is retained by the application.

Omni Pay is a COTS accounting software package that has also been customized to accommodate the TSP/Treasury interface that allows FRTIB to manage the G Fund. This application also processes disbursements for participants, their beneficiaries, and third party payees. Participant Service Representatives (PSRs) are also able to pull information from Omni Pay in order to verify account information. Additionally, Omni Pay sends 1099R tax data to its 1099R Print application for printing and mailing preparation.

The CaMI application enables FRTIB to manage the balance within the G Fund. While CaMI does not process, share, or maintain participant PII, it does collect and store the names and SANDD IDs of authorized users to authenticate individuals using the application.

ASI moves financial data into Oracle database tables to be used by the General Ledger. ASI receives financial data, which includes PII, from Omni Plus/Omni Security (within the CRS system boundary) and the Omni Pay subsystem within FRS. ASI processes the data and sends data feeds to the US Treasury (for checks and electronic fund transfers), to FRTIB’s annuity provider, and to Savantage Altimate (for input into the General Ledger). It also receives data from the US Treasury and makes the appropriate updates to Omni Pay.

TRIS transmits and displays participant investment data sent to, and received from, the Treasury Department for research purposes. It also displays and transmits for reconciliation the participant payroll contribution data for Payroll Offices. In addition, it provides the reporting information needed to balance participant, Treasury, and system accounts for participant contribution activity.

OTIS serves as the web-based budgeting application for FRTIB to obligate FRTIB funds for purchase orders, travel, contracts, task orders, and other requisitions against the General Ledger. Additionally, it is used by Office Directors to create new and projected budgets for submission to and approval by the FRTIB Board.

FRS also includes, ASA, an access management application used to manage access within FRS.

## Authority

_FRTIB should only create, collect, use, process, store, maintain, disseminate, or disclose PII if it has authority to do so, and any such authority should be identified in the appropriate notice._

The authorities that permit the collection and use of PII for FRS include:

-	Federal Records Act, _as amended_ (44 U.S.C. § 3101);
-	Federal Employees’ Retirement System Act of 1986 (FERSA), _as amended_ (5. U.S.C. Chapter 84); and
-	Federal Erroneous Retirement Coverage Corrections Act (FERCCA) (114 Stat. 770).

## Purpose Specification & Use Limitation

_FRTIB should provide notice of the specific purpose for which PII is collected and should only use, process, store, maintain, disseminate, or disclose PII for a purpose that is explained in the notice and is compatible with the purpose for which the PII was collected, or that is otherwise legally authorized._

1. Purpose of the system   
   FRS allows the Agency to track and disburse funds from TSP accounts, maintain the TSP’s General Ledger, and provide an interface with the United States Treasury.

2. Intended use of PII   
   Applications within FRS use PII to ensure accurate disbursements, manage 1099R forms, and authenticate users in order to administer and maintain participant accounts.

3. Sharing of PII<sup>1</sup>   
   Some FRS applications share PII outside FRTIB. Omni Pay shares a 1099R print connection with its vendor in order to print and mail 1099R statements to participants, beneficiaries, and payees.

   ASI has a connection with the US Treasury. After receiving financial data from Omni Plus/Omni Security and Omni Pay/Omni Filing 1099R, ASI processes the data and feeds it to the US Treasury to write checks and make electronic fund transfers on behalf of the TSP. Additionally, ASI has a connection with its annuity provider.
{:.alpha}  

1. FRTIB has entered into an Interconnection Security Agreement (ISA) and/or Memorandum of Understanding (MOU) to cover these connections where applicable.
{:.footnotes}

## Data Minimization

_FRTIB should only create, collect, use, process, store, maintain, disseminate, or disclose PII that is directly relevant and necessary to accomplish a legally authorized purpose, and should only maintain PII for as long as is necessary to accomplish that purpose._

1. Types of PII collected  
   Savantage Altimate includes General Ledger accounting information, as well as employee and contractor numbers, names, usernames, and passwords. Historical data maintained by the application includes: participant SSNs, names, and bank account information.

   Omni Pay and its Omni Filing 1099R application maintains participant, beneficiary, and payee information within the system, including: SSNs, names, bank account information (e.g., checks, electronic fund transfers, etc.), mailing addresses, dates of birth, tax information, and historical payment information.

   CaMI uses User IDs to manage user roles within the application. This system also collects and retains User IDs and passwords for service accounts to authenticate users.

   ASI contains Treasury credits/debits; intra-government payment and collection transactions for processing, reconciliation, and General Ledger information. In addition, ASI also includes TSP participant and beneficiary names, SSNs, addresses, and bank account information.

   ASA maintains User IDs, passwords, and usernames to manage access to FRS applications.

   OTIS includes User IDs and passwords, electronic signatures, SSNs, names and addresses of FRTIB personnel and Board members, as well as vendor names, addresses, and tax IDs.

2. Records Retention   
   TSP records must be retained for 99 years. Any records relating to the administration of a participant’s TSP account that are collected, used, or retained as part of FRS must comply with FRTIB’s retention schedule for TSP documents. Additionally, FRTIB retains routine procurement files for 6 years and 3 months, in accordance with the General Records Schedule (GRS) 3, Item 3. Procurement files involving investments and other information concerning the TSP must be retained for 99 years.
{:.alpha}

## Individual Participation

_FRTIB should involve individuals in the process of using PII and, to the extent practicable, seek individual consent for the creation, collection, use, processing, storage, maintenance, dissemination, or disclosure of PII. FRTIB should also establish procedures to receive and address individuals’ privacy-related complaints and inquiries._

1. Notice and Opportunities for Consent   
   Federal employees in the FERS retirement system and members of the uniformed services who began serving on or after January 1, 2018 are automatically enrolled in the TSP. A participant’s employing agency or service provides participants with relevant information about the TSP. Federal employees in the CSRS retirement system and members of the uniformed services who began serving before January 1, 2018 are enrolled in the TSP after making a contribution election. The form used to make a contribution election contains a Privacy Act Notice.

2. Inquiries & Redress   
   None of the applications within the FRS system allow participants to directly access their information. However, participants and their beneficiaries do have options to access their account information and information about the TSP by calling the ThriftLine or by logging into MyAccount.

   Generally, the Privacy Division has published regulations notifying individuals how they can access and amend records that FRTIB maintains about them in its Privacy Act Regulations at 5 C.F.R., Title VI, Part 1630.4-1630.9.
{:.alpha}

## Data Quality & Integrity

_FRTIB should create, collect, use, process, store, maintain, disseminate, or disclose PII with the accuracy, relevance, timeliness, and completeness reasonably necessary to ensure fairness._

1. Sources of PII   
   FRTIB receives participant information from participants’ employing agencies. The individual agencies validate the accuracy of the participant data before transmitting any information to FRTIB.
{:.alpha}

## Security

_FRTIB should establish administrative, technical, and physical safeguards to protect PII commensurate with the risk and magnitude of the harm that would result from its unauthorized access, use, modification, loss, destruction, dissemination, or disclosure._

1. Authorization to Operate  
   FRS was assessed and has a current Authority to Operate (ATO).
2. Safeguards  
   FRS will only allow authorized users access to appropriate information and information systems. Access to the system is restricted to FRTIB employees and contractors whose responsibilities require access. Users are granted permission by system administrators or designated representatives in accordance with FRTIB’s policy regarding least privilege, need-to-know, and separation of duties. Access to all electronic records within FRTIB, including those maintained within FRS, is controlled access and network controls. FRTIB monitors and logs activity on FRTIB networks.
{:.alpha}

## Transparency

_FRTIB should be transparent about information policies and practices with respect to PII, and should provide clear and accessible notice regarding creation, collection, use, processing, storage, maintenance, dissemination, and disclosure of PII._

1. Applicable SORN(s)

   FRTIB-1: Thrift Savings Plan (TSP) Records, available at 9 Fed. Reg. 21246 (April 15, 2014).

   FRTIB-7: Contractor and Consultant Records, available at 81 Fed. Reg. 7, 106 (Feb. 10, 2016)

   FRTIB-12: Debt Collection Records, available at 81 Fed. Reg. 7, 106 (Feb. 10, 2016)

   GSA/GOVT-4: Contracted Travel Services Program, available at 74 Fed. Reg. 26700 (July 6, 2009)

2. Availability of Privacy Notices   
   Whenever possible, the FRTIB provides notice to individuals about its policies regarding the use and disclosure of PII at the time the FRTIB collects the information. The FRTIB forms that collect PII contain appropriate Privacy Act Notices. FRTIB provides additional notice to participants about how their information is used through its [System of Records Notices]({{ site.baseurl }}/how-we-protect-your-data/system-of-records-notices/), and at [www.tsp.gov/privacy]({{ site.baseurl }}/privacy/).

   When hired, and annually thereafter, all FRTIB federal employees and contractors are required to sign Rules of Behavior. The document explicitly notifies employees and contractors that they have no reasonable expectation of privacy while using FRTIB networks or devices and notifies employees and contractors that their activity is subject to monitoring. Users are also notified via a warning banner that their activity is monitored when logging into an FRTIB device.
   {:.alpha}

## Accountability

_FRTIB should be accountable for complying with these principles and applicable privacy requirements, and should appropriately monitor, audit, and document compliance. FRTIB should also clearly define the roles and responsibilities with respect to PII for all employees and contractors, and should provide appropriate training to all employees and contractors who have access to PII._

1. Roles and Responsibilities  
   FRS subsystems and applications facilitate the daily operations of the Office of the Chief Financial Officer (OCFO). As such, employees and contractors within the OCFO are assigned roles and duties within this system. No offices or agencies external to FRTIB have assigned roles or responsibilities within any FRS subsystem or application.

2. Training  
   All FRTIB employees and contractors with access to FRS must complete privacy awareness and security awareness trainings upon hire and annually thereafter. FRTIB’s privacy awareness training describes users’ responsibilities when handling PII and the penalties for mishandling privacy-sensitive data.  FRTIB’s security awareness training describes information security best practices to be used when using FRTIB systems and processing sensitive data. Users who do not complete required training are denied access to all FRTIB information systems.

3. Audit  
   Activity on FRTIB networks, including FRS and its applications is monitored and logged to ensure information and information systems are used appropriately.
{:.alpha}

## Privacy Officials

  > Megan Grumbine  
  > Senior Agency Official for Privacy  
  > Federal Retirement Thrift Investment Board

  > Sarah Smith  
  > Chief Privacy Officer  
  > Federal Retirement Thrift Investment Board
