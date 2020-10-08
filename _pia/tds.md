---
title: TSP Distributed Systems (TDS)
permalink: /pia/tsp-distributed-systems-tds/
---

## Overview

TSP Distributed Systems (TDS) is a General Support System which supports FRTIB’s six major applications: (1) Core Recordkeeping Services (CRS); (2) Participant Interaction Services (PIS); (3) Financial and Reconciliation Services (FRS); (4) Business Process Services (BPS); (5) Interfacing Services System (ISS); and (6) Application and Development Test Tools (ADTT)<sup>1</sup>. Although TDS does not collect, share, store, use, or process any PII within its defined boundaries, PII passes through the database and OS platforms as it is transported to and from FRTIB’s other internal information systems, such as when FRTIB’s major applications invoke processing services within TDS component servers and databases. PII also passes through TDS when databases for FRTIB’s major applications are backed-up.

TDS does not collect PII beyond limited credentialing (i.e., User IDs) for access and auditing purposes. Only platform services (e.g., processing and data transmission) provided as requested by FRTIB’s major applications collect PII.

## Authority

_FRTIB should only create, collect, use, process, store, maintain, disseminate, or disclose PII if it has authority to do so, and any such authority should be identified in the appropriate notice._

- Federal Employees’ Retirement System Act of 1986 (FERSA), _as amended_ (5 U.S.C. Chapter 84); and
- Federal Erroneous Retirement Coverage Corrections Act (FERCCA) 114 Stat. 770).

## Purpose Specification & Use Limitation

_FRTIB should provide notice of the specific purpose for which PII is collected and should only use, process, store, maintain, disseminate, or disclose PII for a purpose that is explained in the notice and is compatible with the purpose for which the PII was collected, or that is otherwise legally authorized._

1. Purpose of the system   
TDS provides infrastructure support for many of FRTIB’s systems. TDS supports the Agency’s mission by providing an operating system platform, as well as database, communication, and backup services for FRTIB’s major applications.

2. Intended use of PII   
TDS does not collect, use, disseminate, or maintain PII other than User IDs captured within audit logs to provide accountability on access to the system. However, other PII passes through the database and OS platforms as it is transported to and from FRTIB’s other internal information systems. For example, PII passes through TDS when the resident applications invoke processing services within TDS component servers and databases.

3. Sharing of PII   
TDS does not share PII externally.
{:.alpha}  

## Data Minimization

_FRTIB should only create, collect, use, process, store, maintain, disseminate, or disclose PII that is directly relevant and necessary to accomplish a legally authorized purpose, and should only maintain PII for as long as is necessary to accomplish that purpose._

1. Types of PII collected  
TDS only collects and uses User IDs for privileged users for maintaining audit logs on the system.

2. Records Retention   
TDS retains configuration and operational information required for the operation of the TDS components, which is not subject to a records retention schedule. Additionally, TDS does not collect or retain PII about individuals beyond what is required for auditing purposes.
{:.alpha}

## Individual Participation

_FRTIB should involve individuals in the process of using PII and, to the extent practicable, seek individual consent for the creation, collection, use, processing, storage, maintenance, dissemination, or disclosure of PII. FRTIB should also establish procedures to receive and address individuals’ privacy-related complaints and inquiries._

1. Notice and Opportunities for Consent   
When hired, all FRTIB employees and contractors are required to review and sign the Rule of Behavior as a condition of employment. This document informs users that they have no reasonable expectation of privacy on FRTIB devices and states that user activity on FRTIB information systems is subject to monitoring. Additionally, before users access their workstation, they are notified by the Warning Banner on the login screen that any use of the FRTIB system constitutes consent to monitoring.

2. Inquiries & Redress   
TDS only collects and uses PII relating to user login credentials and logs associated with user activity. This system does not contain specific procedures to enable individuals to correct inaccurate or erroneous information captured as part of TDS.
{:.alpha}

## Data Quality & Integrity

_FRTIB should create, collect, use, process, store, maintain, disseminate, or disclose PII with the accuracy, relevance, timeliness, and completeness reasonably necessary to ensure fairness._

1. Sources of PII   
All PII that passes through TDS does so as a payload in transit or as part of a processing request from a major application that reside on the operating systems provided by TDS. The only PII collected (i.e., user login credentials and logs associated with user activity) is done so directly from the user logging into and out of the system directly.
{:.alpha}

## Security

_FRTIB should establish administrative, technical, and physical safeguards to protect PII commensurate with the risk and magnitude of the harm that would result from its unauthorized access, use, modification, loss, destruction, dissemination, or disclosure._

1. Authorization to Operate  
TDS has been assessed and has a current Authority to Operate (ATO).

2. Safeguards  
Only authorized users may access appropriate information and information systems. Access to the system is restricted to FRTIB employees and contractors whose responsibilities require access. Users are granted permission by system administrators or designated representatives in accordance with FRTIB’s policy regarding least privilege, need-to-know, and separation of duties. FRTIB monitors and logs activity on FRTIB networks. Additionally, TDS maintains encryption services for all PII transmitted in order to provide confidentiality and integrity services to the major applications residing on its platform.
{:.alpha}

## Transparency

_FRTIB should be transparent about information policies and practices with respect to PII, and should provide clear and accessible notice regarding creation, collection, use, processing, storage, maintenance, dissemination, and disclosure of PII._

1. Applicable SORN(s)  
Information contained within TDS is not retrieved by a unique identifier and, accordingly, a SORN is not required.

2. Availability of Privacy Notices   
   Whenever possible, the FRTIB provides notice to individuals about its policies regarding the use and disclosure of PII at the time the FRTIB collects the information. The FRTIB forms that collect PII contain appropriate Privacy Act Notices. FRTIB provides additional notice to participants about how their information is used through its [System of Records Notices]({{ site.baseurl }}/how-we-protect-your-data/system-of-records-notices/), and at [www.tsp.gov/privacy]({{ site.baseurl }}/privacy/).

   When hired, all FRTIB federal employees and contractors are required to sign Rules of Behavior as a condition of employment. The document explicitly notifies employees and contractors that they have no reasonable expectation of privacy while using FRTIB networks or devices and notifies employees and contractors that their activity is subject to monitoring.
{:.alpha}

## Accountability

_FRTIB should be accountable for complying with these principles and applicable privacy requirements, and should appropriately monitor, audit, and document compliance. FRTIB should also clearly define the roles and responsibilities with respect to PII for all employees and contractors, and should provide appropriate training to all employees and contractors who have access to PII._

1. Roles and Responsibilities  
Only limited employees within FRTIB’s Office of Technology Services and contractor personnel who work on TDS systems have access to the system.  Individuals with access to TDS are limited to those who have a need-to-know as part of their official job responsibilities.

2. Training  
All FRTIB employees and contractors with access to TDS must complete privacy awareness and security awareness trainings upon hire and annually thereafter. FRTIB’s privacy awareness training describes users’ responsibilities when handling PII and the penalties for mishandling privacy-sensitive data.  FRTIB’s security awareness training describes information security best practices to be used when using FRTIB systems and processing sensitive data. Users who do not complete required training are denied access to all FRTIB information systems.

3. Audit  
Activity on FRTIB networks, including within TDS, is monitored and logged to ensure information and information systems are used appropriately.
{:.alpha}

## Privacy Officials

  > Megan Grumbine  
  > Senior Agency Official for Privacy  
  > Federal Retirement Thrift Investment Board

  > Sarah Smith  
  > Chief Privacy Officer  
  > Federal Retirement Thrift Investment Board

1. Please see the respective PIA for each listed major application for additional information regarding PII collection and use.
{:.footnotes}
