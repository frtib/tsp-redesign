---
title: Interfacing Services System (ISS)
permalink: /pia/interfacing-services-system-iss/
---

## Overview

The Interfacing Services System (ISS) supports critical Thrift Savings Plan (TSP) recordkeeping operations, including: payroll contributions from employing Federal agencies; loan payments; data matching services; and reports distribution for the Federal Retirement Thrift Investment Board (FRTIB). ISS features are provided by the follow subsystems and their associated modules: (1) Agency Payroll Services; (2) Federal Reserve Bank; (3) Lockbox Services; (4) Federal Office of Child Support Enforcement; and (5) Death Master File. These subsystems of ISS process information, including PII, as described below:

1. Agency Payroll Services   
   This subsystem consists of applications that enable the payroll systems from other Federal agencies to submit their payroll data for TSP participants to FRTIB.

2. Federal Reserve Bank   
   The Federal Reserve Bank (FRB) processing system enables payroll offices at employing Federal agencies to send loan payments as Automated Clearing House (ACH) credits to the TSP via the Federal Reserve.

3. Lockbox Services   
   This application processes the following information: (1) participant rollover checks; (2) loan payments; and (3) miscellaneous payments and adjustments to participant accounts.

4. Federal Office of Child Support Enforcement   
   FRTIB receives information from the Federal Office of Child Support Enforcement (FOSCE) application, which FRTIB uses to comply with court orders pertaining to any child supporting debts.

5. Death Master File   
   The Death Master File (DMF) determines whether a TSP participant has died. If a participant’s account matches with this information, then FRTIB establishes a “death hold status” for the respective accounts and notifies the participant’s beneficiaries.

## Authority

_FRTIB should only create, collect, use, process, store, maintain, disseminate, or disclose PII if it has authority to do so, and any such authority should be identified in the appropriate notice._

The authorities that permit the collection and use of PII for ISS include:

- Federal Records Act, _as amended_ (44 U.S.C. § 3101);
- Federal Employees’ Retirement System Act of 1986 (FERSA), _as amended_ (5. U.S.C. Chapter 84); and
- Federal Erroneous Retirement Coverage Corrections Act (FERCCA) (114 Stat. 770).

## Purpose Specification & Use Limitation

_FRTIB should provide notice of the specific purpose for which PII is collected and should only use, process, store, maintain, disseminate, or disclose PII for a purpose that is explained in the notice and is compatible with the purpose for which the PII was collected, or that is otherwise legally authorized._

1. Purpose of the system   
   ISS enables FRTIB to properly receive, administer, and maintain TSP account information.

2. Intended use of PII   
   ISS applications use PII to securely receive payroll information, administer participant accounts, and share data between FRTIB systems reliably by using PII to crosscheck identities and account status.

3. Sharing of PII   
   ISS only shares information externally through Agency Payroll Services and FOCSE. Agency Payroll Services shares information with payroll offices of employing Federal agencies to verify and administer participant account information. For FOCSE, FRTIB obtains the SSNs of individuals who are delinquent in child support payments and matches them with the SSNs of those within the TSP database. FRTIB only shares matches made by this process with FOCSE in order to request and obtain a court order to garnish matching TSP accounts for child support payments owed.
{:.alpha}  

## Data Minimization

_FRTIB should only create, collect, use, process, store, maintain, disseminate, or disclose PII that is directly relevant and necessary to accomplish a legally authorized purpose, and should only maintain PII for as long as is necessary to accomplish that purpose._

1. Types of PII collected  
   For participants and their beneficiaries, ISS collects and uses names, addresses, dates of birth, dates of death, email addresses, SSNs, employment related information (e.g., pay grade, service completion date, etc.), and financial information (e.g., salary, plan contributions, account numbers, etc.). ISS also uses FRTIB employee and contract user IDs to assign access privileges to the system.

2. Records Retention   
   TSP records must be retained for 99 years. Any records relating to the administration of a participant’s TSP account that are collected, used, or retained as part of ISS must comply with FRTIB’s retention schedule for TSP records.
{:.alpha}

## Individual Participation

_FRTIB should involve individuals in the process of using PII and, to the extent practicable, seek individual consent for the creation, collection, use, processing, storage, maintenance, dissemination, or disclosure of PII. FRTIB should also establish procedures to receive and address individuals’ privacy-related complaints and inquiries._

1. Notice and Opportunities for Consent   
   Payroll Data: Federal employees in the FERS retirement and members of the uniformed services who began serving on or after January 1, 2018 are automatically enrolled in the TSP. A participant’s employing agency or service provides participants with relevant information about the TSP. Federal employees in the Civil Service Retirement System (CSRS) and members of the uniformed services who began serving before January 1, 2018 are enrolled in the TSP after making a contribution election. The form used to make a contribution election contains a Privacy Act Notice.

   LockBox: TSP forms used to initiate a loan or rollover transaction contain Privacy Act Notices.  

   FOSCE – FRTIB outlines the specific circumstances under which a participant may be required to make child support payments from their TSP account. Pursuant to 5 C.F.R. §1653.12, there must be a valid court order which expressly related to the TSP, and must either expressly require payment from the participant’s account, or require the TSP to freeze the account.

2. Inquiries & Redress   
   Although participants and their beneficiaries cannot directly access their information in ISS, they do have options to access information regarding their accounts or the TSP generally. Participants may access their account information via My Account in order to view or make changes to their information. Participants may also call into FRTIB’s ThriftLine in order to speak with a PSR representative. Once the participant’s identity is authenticated, the PSR representative can assist the caller with information about his or her account. Additionally, PSR associates can mail account specific information to participants.
{:.alpha}

## Data Quality & Integrity

_FRTIB should create, collect, use, process, store, maintain, disseminate, or disclose PII with the accuracy, relevance, timeliness, and completeness reasonably necessary to ensure fairness._

1. Sources of PII   
   1. Agency Payroll Services   
      The employing Federal agencies collect information directly from eligible employees and submit the information to FRTIB on the participant’s behalf.

   2. Federal Reserve Bank   
      The payroll offices at employing Federal agencies send loan payments as ACH credits through the Federal Reserve, which are subsequently routed to FRTIB where they are then matched to the corresponding participant account.

   3. Lockbox Services   
      Participants initiate requests associated with this component of ISS and complete the required forms.

   4. Federal Office of Child Support Enforcement   
      The Federal Office of Child Support Enforcement, within Health and Human Services, sends a file to FRTIB which contains individual names and SSNs.

   5. Death Master File   
      Every month, FRTIB receives data from the Social Security Administration’s updated Death Master File (DMF) and compares it against participants contained within the TSP file.
{:.alpha}

## Security

_FRTIB should establish administrative, technical, and physical safeguards to protect PII commensurate with the risk and magnitude of the harm that would result from its unauthorized access, use, modification, loss, destruction, dissemination, or disclosure._

1. Authorization to Operate  
   ISS was assessed and has a current Authority to Operate (ATO).

2. Safeguards  
   ISS will only allow authorized users access to appropriate information and information systems. Access to the system is restricted to FRTIB employees and contractors whose responsibilities require access. Users are granted permission by system administrators or designated representatives in accordance with FRTIB’s policy regarding least privilege, need-to-know, and separation of duties. Access to all electronic records, including those maintained in ISS is limited to authorized users and is subject to network controls. FRTIB monitors and logs activity on FRTIB networks.
{:.alpha}

## Transparency

_FRTIB should be transparent about information policies and practices with respect to PII, and should provide clear and accessible notice regarding creation, collection, use, processing, storage, maintenance, dissemination, and disclosure of PII._

1. Applicable SORN(s)  

   FRTIB-1: Thrift Savings Plan (TSP) Records, available at 9 Fed. Reg. 21246 (April 15, 2014).

2. Availability of Privacy Notices   
   Whenever possible, the FRTIB provides notice to individuals about its policies regarding the use and disclosure of PII at the time the FRTIB collects the information. The FRTIB forms that collect PII contain appropriate Privacy Act Notices. FRTIB provides additional notice to participants about how their information is used through its [System of Records Notices](/how-we-protect-your-data/system-of-records-notices/), and at [www.tsp.gov/privacy]({{ site.baseurl }}/privacy/).

   When hired, and annually thereafter, all FRTIB federal employees and contractors are required to sign Rules of Behavior. The document explicitly notifies employees and contractors that they have no reasonable expectation of privacy while using FRTIB networks or devices and notifies employees and contractors that their activity is subject to monitoring. Users are also notified via a warning banner that their activity is monitored when logging into an FRTIB device.
   {:.alpha}

## Accountability

_FRTIB should be accountable for complying with these principles and applicable privacy requirements, and should appropriately monitor, audit, and document compliance. FRTIB should also clearly define the roles and responsibilities with respect to PII for all employees and contractors, and should provide appropriate training to all employees and contractors who have access to PII._

1. Roles and Responsibilities  
   The Office of Participant Services (OPS) and employing agencies’ payroll offices (external) handle the administration of participant accounts that occurs through ISS. These offices also coordinate with the Federal Reserve to process loan payments for participant accounts. OPS and FRTIB’s Special Processing Unit handle rollover checks and additional loan information. OPS coordinates with FOCSE regarding compliance with court orders to garnish participant accounts owning child support. Finally, OPS and the Death Benefits Unit coordinate with the Social Security Administration to facilitate the Agency’s use of the Death Master File.  

2. Training  
   All FRTIB employees and contractors with access to ISS must complete privacy awareness and security awareness trainings upon hire and annually thereafter. FRTIB’s privacy awareness training describes users’ responsibilities when handling PII and the penalties for mishandling privacy-sensitive data.  FRTIB’s security awareness training describes information security best practices to be used when using FRTIB systems and processing sensitive data. Users who do not complete required training are denied access to all FRTIB information systems.

3. Audit  
   Activity on FRTIB networks, including ISS and its applications is monitored and logged to ensure information and information systems are used appropriately.
{:.alpha}

## Privacy Officials

  > Megan Grumbine  
  > Senior Agency Official for Privacy  
  > Federal Retirement Thrift Investment Board

  > Sarah Smith  
  > Chief Privacy Officer  
  > Federal Retirement Thrift Investment Board
