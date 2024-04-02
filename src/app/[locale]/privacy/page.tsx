'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="max-w-screen-2xl mx-auto w-full h-auto">
      <div className="h-auto pb-[5vh] bg-neutral-800">
        <Link className="text-white p-2 text-lg" href="/">
          Back
        </Link>
        <div className="">
          <h2 className="pt-[10vh] text-4xl font-bold text-white ">
            Privacy Policy
          </h2>
          <div className="pt-[4vh]   xl:w-2/5">
            <a
              download
              href="/Privātuma_politika.pdf"
              className="flex items-start gap-2 font-normal text-white text-md"
            >
              <div></div>
              Privātuma Politika (.pdf)
            </a>
            <a
              download
              href="/Privacy_Policy.pdf"
              className="flex items-start gap-2 font-normal text-white text-md"
            >
              <div></div>
              Privacy Policy (.pdf)
            </a>
            <a
              download
              href="/Политика_Конфиденциальности.pdf"
              className="flex items-start gap-2 font-normal text-white text-md"
            >
              <div></div>
              Политика Конфиденциальности (.pdf)
            </a>
          </div>
        </div>
      </div>

      <div className=" pt-12">
        <div className="">
          <div className="">
            <div className="p-2 ">
              <div>
                <p className="font-bold leading-3">Sia &ldquo;SeYul&ldquo;</p>
              </div>

              <div className="mt-3">
                <p className="leading-3">
                  Registration number:
                  <span className="font-bold">40203482359</span>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1 mt-3 pvn">
                <p className="leading-3">Tax number:</p>
                <p className="font-bold leading-3">LV40203482359</p>
              </div>

              <div className="flex flex-wrap items-center gap-1 mt-3">
                <p className="leading-3">Company adress:</p>
                <p className="font-bold leading-3">
                  Purvciema iela 53 - 108, Rīga, LV-1035
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center w-auto h-auto gap-8 ">
              <Link
                href="/#home"
                scroll={false}
                className="flex items-center w-10 gap-2"
              ></Link>
            </div>
          </div>
        </div>
        <div className="flex pt-12 flex-col items-center">
          <h3 className="font-semibold">
            Limited Liability Company &ldquo;SeYul&ldquo;
          </h3>
          <h3 className="pt-2 font-semibold">Privacy Policy</h3>
        </div>
        <div className="pt-4">
          <p>General information</p>
          <p className="pt-4">
            In accordance with Regulation (EU) 2016/679 of the European
            Parliament and of the Council of 27 April 2016 on the protection of
            natural persons with regard to the processing of personal data and
            on the free movement of such data, and repealing Directive 95/46/EC
            (General Data Protection Regulation), the Controller ensures a
            transparent and fair processing of personal data, which
            simultaneously complies with the regulatory enactments of the
            Republic of Latvia.
          </p>

          <p className="pt-2">
            This Privacy Policy, hereinafter referred to as the Policy,
            describes the procedure under which Limited Liability Company
            &ldquo;SeYul&ldquo;, reg. No 40203482359, hereinafter referred to as
            the Controller, processes the data of natural persons.
          </p>
          <p className="pt-2">
            The Controller of your Personal Data is Limited Liability Company
            &ldquo;SeYul&ldquo;, reg. No 40203482359, to whom you have submitted
            your Personal Data, whose Services you intend to use, or have used.
          </p>
          <p className="pt-2">
            When processing data, the Controller complies with the following
            principles of personal data processing:
          </p>

          <p className="pt-2">• Legitimacy;</p>

          <div className="flex gap-4 pt-2">
            <p>• Good faith;</p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>• Purpose limitations;</p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>• Accuracy;</p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>• Minimization;</p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>• Integrity and confidentiality;</p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>• Storage restrictions;</p>
          </div>
        </div>

        <div className="">
          <p className="pt-4">Definitions:</p>
          <p className="pt-2">
            `Processing: any operation or set of operations which is performed
            on personal data or on sets of personal data, whether or not by
            automated means, such as collection, recording, organisation,
            structuring, storage, adaptation or alteration, retrieval,
            consultation, use, disclosure by transmission, dissemination or
            otherwise making available, alignment or combination, restriction,
            erasure or destruction.
          </p>
          <p className="pt-2">
            Customer: a natural person who uses, has used, or has expressed a
            wish to use any services provided by the Controller or is related to
            them in any other way.
          </p>
          <p className="pt-2">
            Personal Data: any information relating to an identified or
            identifiable natural person (&ldquo;data subject&ldquo;); an
            identifiable natural person is one who can be identified, directly
            or indirectly, in particular by reference to an identifier such as a
            name, an identification number, location data, an online identifier
            or to one or more factors specific to the physical, physiological,
            genetic, mental, economic, cultural or social identity of that
            natural person.
          </p>
          <p className="pt-2">
            Data Subject: an identified or identifiable natural person
            (Customers).
          </p>
          <p className="pt-2">
            Service: any service provided by Limited Liability Company
            &ldquo;SeYul&ldquo;, reg. No 40203482359.
          </p>
          <p className="pt-2">
            The legal basis for personal data processing is as follows:
          </p>
          <div className="flex gap-4 pt-4">
            <p>
              • Application of a natural person (Customer) for the receipt of
              the Service and provision of the Service;
            </p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>• Return of money to the Customer;</p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>• Handling of Customer complaints;</p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>
              • Compliance with regulatory enactments of the Republic of Latvia;
            </p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>• Consent of the Data Subject (Customer);</p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>• Contractual obligations with the Data Subject;</p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>
              • Performance of commercial activities, provision of rental
              services to Data Subjects (Customers)
            </p>
          </div>
        </div>

        <div className="">
          <p className="pt-4">• Legal (legitimate) grounds:</p>
          <div className="flex gap-4 pt-2">
            <p>
              • Protection of the vital interests of the Data Subject or any
              other natural person: ensuring security on the premises of the
              Controller.
            </p>
          </div>
          <p className="pt-2">Purposes of personal data processing:</p>
          <p className="pt-2">
            To identify the Customer and provide the appropriate Service, as
            well as the process of calculating and making payments, to
            communicate with the Customer about the provision of the Service
            and/or the performance of the contract on related issues (incl. also
            for sending invoices), in some cases also to ensure the recovery of
            unpaid payments, Personal Data of Data Subjects are processed for
            the following purposes:
          </p>
          <div className="flex gap-4 pt-2">
            <p>
              • To take commercial activities, to provide vehicle rental
              services;
            </p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>• To establish labor relations and manage human resources;</p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>• Accounting;</p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>
              • Marketing, Customer acquisition, and Customer data collection;
            </p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>• Reporting, accounting, approvals, surveys;</p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>• Service advertising;</p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>• Sending commercial notifications;</p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>• Customer payment administration;</p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>• Protection of the Controller&lsquo;s legal interests;</p>
          </div>
          <div className="flex gap-4 pt-2">
            <p>• To provide security.</p>
          </div>
          <p className="pt-4">
            Categories of Personal Data: Personal Data processed by the
            Controller includes the following information:
          </p>
          <p className="pt-2">
            Identification data and, specifically: name, surname, personal
            identity number (national identification number), passport or ID
            card details, bank account details.
          </p>
          <p className="pt-2">
            Contact details and, specifically: address of the place of residence
            or address for communication purposes, address of correspondence,
            telephone number (for example, landline and mobile), e-mail address,
            language of communication.
          </p>
        </div>
        <div className="">
          <p className="pt-4">
            The Controller transfers the Customer&lsquo;s Personal Data to the
            following recipients of Personal Data, if this does not contradict
            the applicable laws and regulations:
          </p>
        </div>

        <div className="flex gap-4 pt-4">
          <p>
            • Parties related to the business activities of the Controller on
            the basis of the cooperation agreements concluded, including but not
            limited to data storage service providers, IT service providers,
            accounting service provider, banks, debt collection companies, etc.,
            if there is a reasonable need;
          </p>
        </div>
        <div className="flex gap-4 pt-4">
          <p>
            • Law enforcement authorities or other third parties, if it is
            deemed necessary in accordance with applicable laws and regulations
            to protect the rights and interests of the Controller.
          </p>
        </div>
        <p className="pt-4">
          Scope and period of Personal Data processing, storage of Personal
          Data:
        </p>
        <p className="pt-2">
          Personal Data is processed to the extent necessary and in accordance
          with the specified purposes (intentions) of Personal Data processing,
          in compliance with the requirements of the current laws and
          regulations of the Republic of Latvia.
        </p>
        <p className="pt-2">
          The Controller will store Personal Data within the period specified in
          laws and regulations, as well as until the purposes of processing
          Personal Data has been achieved (Personal Data are necessary for the
          purpose for which they have been received) and until there are legal
          grounds for storing the data.
        </p>
        <p className="pt-2">
          When assessing the duration of storage of Personal Data, the
          Controller takes into consideration the requirements of current
          regulatory enactments, aspects of performance of contractual
          obligations, instructions of the Customer (e.g., in case of consent),
          as well as the legitimate interests of the Controller. If the
          Customer&lsquo;s Personal Data is no longer needed for the specified
          purposes, the Controller will erase or destroy them.
        </p>
        <p className="pt-2">Periods of storage of Personal Data:</p>
        <div className="flex gap-4 pt-4">
          <p>
            • Personal Data necessary for the performance of contractual
            obligations are stored until the contract is executed and until
            other storage periods are met (see below);
          </p>
        </div>
        <div className="flex gap-4 pt-4">
          <p>
            • Personal Data that must be stored in order to comply with the
            requirements of the legislation – for periods specified in the
            relevant regulatory enactments, for example, the Accounting Law
            states that the supporting documents must be kept as long as they
            are necessary to establish the beginning of each economic
            transaction and track its progress, but not less than 5 years;
          </p>
        </div>
        <div className="flex gap-4 pt-4">
          <p>
            • Data to prove the fulfilment of the obligations of the Controller
            – for the general limitation period of the claim in accordance with
            the limitation periods for claims specified in regulatory
            enactments, namely, 10 years under the Civil Law, 3 years under the
            Commercial Law, and other periods, considering also the periods
            specified in the Civil Procedure Law for filing claims.
          </p>
        </div>
      </div>

      <div className="">
        <p className="pt-4">
          Periods for the storage of Personal Data are set out in the
          Controller&lsquo;s Personal Data Processing Register.
        </p>
        <p className="pt-2">Cookie Policy</p>
        <p className="pt-2">
          A cookie is a small text string (information) sent by a web server
          that is stored on the user&lsquo;s computer or other devices in the
          user&lsquo;s browser file directory.
        </p>
        <p className="pt-2">
          This helps the site to remember the settings chosen by the Customer to
          browse the site, so that they no longer need to be re-entered each
          time, and to make it easier to browse the site (for example, the
          language used). Cookies (after saving the IP address) do not identify
          the user as a person, only recognize the user as a previous visitor to
          the site. Cookies also help the Controller to collect website
          attendance statistics and optimize marketing communication.
        </p>
        <p className="pt-2">
          The Controller collects this information using an automatic Google
          Analytics tool that allows to see and analyze the pattern of visitors
          use of this website (this tool is provided by the US company Google
          Inc.).
        </p>
        <p className="pt-2">
          Here is more information about how Google Analytics works and what
          information this tool allows to collect and analyze:{' '}
          <a
            href="https://support.google.com/analytics/answer/1012034?hl=lv&ref_topic=6157800"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://support.google.com/analytics/answer/1012034?hl=lv&ref_topic=6157800
          </a>
        </p>
        <p className="pt-2">
          The Customer may disable (withdraw) data collected by Google Analytics
          at any time as described here:{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://tools.google.com/dlpage/gaoptout/
          </a>
          .
        </p>
        <p className="pt-2">Three types of cookies are used:</p>
        <p className="pt-2">
          1. Session cookies are temporary and disappear as soon as the website
          or browser is closed. Session cookies can be used to activate certain
          features and capabilities of the site.
        </p>
        <p className="pt-2">
          2. Constant cookies do not disappear at the end of the session and
          remain in the memory of your computer or any other device. They can be
          used, for example, to identify the Customer as a unique visitor to the
          site, save a randomly generated number, adapt the content of the site
          to the needs of the Customer, update previously selected information
          and settings, or collect statistics.
        </p>
        <p className="pt-2">
          3. Third-party cookies are used for advertising purposes, such as
          Google AdWords. They are used to customize advertising content,
          evaluate its effectiveness and optimize marketing communication.
        </p>
      </div>
      <div className="">
        <p className="pt-4">
          After changing the browser settings, the Customer can erase the saved
          cookies at any time and prevent them from being stored on his or her
          computer or any other device. Learn how to do this by clicking on the
          link:{' '}
          <a
            href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mozilla Firefox
          </a>
          ,{' '}
          <a
            href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Chrome
          </a>
          ,{' '}
          <a
            href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
            target="_blank"
            rel="noopener noreferrer"
          >
            Internet Explorer
          </a>
          .
        </p>
        <p className="pt-2">
          The Controller&lsquo;s website (online store) may use cookies.
        </p>
        <p className="pt-2">
          When visiting the Controller&lsquo;s website, the user is presented
          with a window with a notification about the use of cookies on the
          website. By closing this notification window, the user confirms that
          he or she has read the information about cookies and agrees using
          them. The use of cookies helps the Controller to record the number of
          visitors and collect statistics and information about the viewed
          Service. All this data is collected anonymously, meaning that the
          Controller cannot connect the data with an individual user or an
          authenticated user.
        </p>
        <p className="pt-2">Privacy and data security:</p>
        <p className="pt-2">
          The Controller&lsquo;s company uses appropriate technological and
          organizational measures to protect Personal Data.
        </p>
        <p className="pt-2">
          The Controller&lsquo;s security procedures and internal rules of
          procedure comply with applicable external laws and regulations
          governing the protection of personal data.
        </p>
        <p className="pt-2">
          The Controller&lsquo;s employees are trained and comply with
          confidentiality, security, and personal data protection requirements.
        </p>
        <p className="pt-2">
          Access to Customers’ Personal Data is provided only to authorized
          employees of the Controller; in some cases – to cooperation partners
          of the Controller on the basis of concluded agreements.
        </p>
        <p className="pt-2">
          The Controller will respond to any Customer objections regarding data
          processing and will take all steps to address Customer objections, if
          received.
        </p>
        <p className="pt-2">Rights of Data Subjects:</p>
        <p className="pt-2">
          In accordance with the current regulatory enactments governing the
          protection of personal data, Data Subjects have the following rights:
        </p>
        <p className="flex gap-4 pt-4 text-[16px]">
          • The right to restrict the processing of Personal Data;
        </p>
        <p className="flex gap-4 pt-4 text-[16px]">
          • The right to withdraw the consent to the processing of Personal
          Data;
        </p>
        <p className="flex gap-4 pt-4 text-[16px]">
          • The right to access Personal Data;
        </p>
        <p className="flex gap-4 pt-4 text-[16px] ">
          • The right to rectify or erase Personal Data from the
          Controller&lsquo;s systems, unless the Controller has legal grounds to
          continue processing such Personal Data.
        </p>
      </div>
      <div className="">
        <p className="pt-2">
          If the Data Subject notifies the Controller of his or her wish to
          exercise any of these rights, the Controller will respect it and
          respond to such request within one month of receipt of the request.
        </p>
        <p className="pt-2">
          The Data Subject has the right to contact the Controller in order to
          obtain information about the Personal Data held by the Controller
          regarding the Data Subject, to confirm or correct the Personal Data.
        </p>
        <p className="pt-2">
          The Data Subject has the right to request the erasure of the personal
          data held by the Controller, unless this requirement contradicts the
          laws and regulations in force in the Republic of Latvia.
        </p>
        <p className="pt-2">
          The Data Subject may make corrections to the submitted Personal Data
          at any time. In such case, it is necessary to contact the Controller
          by phone +371 25633358 or by sending a letter to the legal address of
          the Controller: Limited Liability Company &ldquo;SeYul&ldquo;, reg. No
          40203482359, Purvciema iela 53 - 108, Rīga, LV-1035, Latvia, or by
          sending an electronic letter to e-mail address: info@seyul.lv.
        </p>
        <p className="pt-2">
          The Data Subject has the right to submit a complaint regarding the
          processing of Personal Data to the supervisory authority, namely, the
          Data State Inspectorate, contact information: 17 Elijas Street, Riga,
          LV-1050, phone: +371 67223131, e-mail: info@dvi.gov.lv.
        </p>
        <p className="pt-2">
          Limited Liability Company &ldquo;SeYul&ldquo; (the Controller) has the
          right at any time to unilaterally amend this Policy in accordance with
          the applicable laws and regulations by publishing the amendments and
          the current version of the Privacy Policy on the website www.seyul.lv.
        </p>
        <p className="pt-2">
          This Privacy Policy has been updated and approved on 1 March 2024.
        </p>
        <p className="pt-2">
          This Privacy Policy is applicable to all Customers of Limited
          Liability Company ”SeYul” (controller) and is available on the website
          www.seyul.lv.
        </p>
      </div>
    </div>
  )
}

export default Policy
