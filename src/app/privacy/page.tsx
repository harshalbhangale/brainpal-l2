import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How BrainPal collects, uses, stores and protects personal information — including data from connected Google accounts (Gmail and Google Calendar).",
  alternates: { canonical: "/privacy" },
};

const CONTACT = "hello@brainpal.com.au";

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          BrainPal Pty Ltd (&ldquo;BrainPal&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates the
          BrainPal website at brainpal.com.au, the BrainPal web app at app.brainpal.com.au and related
          services (together, the &ldquo;Services&rdquo;).
        </p>
        <p>
          We are bound by the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles
          (APPs). This policy explains what personal information we collect, why, and the choices you
          have.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p><strong>Information you give us</strong></p>
        <ul>
          <li>Parent or guardian account details: name, email address, phone number and password.</li>
          <li>Child profile details a parent chooses to add: first name, year level, school and learning preferences.</li>
          <li>Messages, questions and content you or your child share with the PALs.</li>
          <li>Early-access and waitlist sign-ups, and anything you send when you contact us.</li>
        </ul>
        <p><strong>Information from connected accounts</strong></p>
        <ul>
          <li>
            If a parent connects a Google account, the Gmail and Google Calendar data described in{" "}
            <a href="#google-user-data">Google user data</a>.
          </li>
        </ul>
        <p><strong>Information collected automatically</strong></p>
        <ul>
          <li>Device, browser and log information (IP address, pages visited, time and date of access).</li>
          <li>Essential cookies needed to keep you signed in and keep the Services secure.</li>
        </ul>
      </>
    ),
  },
  {
    id: "google-user-data",
    title: "Google user data (Gmail and Google Calendar)",
    body: (
      <>
        <p>
          BrainPal lets a parent optionally connect their Google account so the PALs can help the
          family stay on top of school life. Connecting Google is always opt-in and is done by the
          parent, never by a child.
        </p>
        <p><strong>What we access</strong></p>
        <ul>
          <li>
            <strong>Gmail (read-only):</strong> emails related to your child&rsquo;s school and
            activities — for example newsletters, excursion notices, permission slips and
            homework or event reminders.
          </li>
          <li>
            <strong>Google Calendar:</strong> your calendar events, so we can show upcoming school
            dates and, where you ask us to, add BrainPal reminders to your calendar.
          </li>
        </ul>
        <p><strong>How we use it</strong></p>
        <ul>
          <li>To find school-related emails and summarise the actions, dates and deadlines in them.</li>
          <li>To show those dates and reminders to you inside BrainPal and, if you choose, add them to your calendar.</li>
          <li>We use this data only to provide and improve these user-facing features for you.</li>
        </ul>
        <p><strong>What we never do</strong></p>
        <ul>
          <li>We do not sell Google user data.</li>
          <li>We do not use Google user data for advertising, including retargeting or personalised ads.</li>
          <li>We do not use Google user data to determine credit-worthiness or for lending purposes.</li>
          <li>
            We do not use Google user data to train generalised or non-personalised AI or machine
            learning models.
          </li>
          <li>
            Humans at BrainPal do not read your Google user data unless you give us explicit
            permission for specific messages, it is necessary for security purposes (such as
            investigating abuse), to comply with applicable law, or the data has been aggregated and
            anonymised for internal operations.
          </li>
        </ul>
        <p><strong>Sharing</strong></p>
        <p>
          We transfer Google user data only to the service providers we need to run these features
          (for example cloud hosting and the AI model provider that processes a summary request), under
          contracts that require them to keep it confidential and use it only on our instructions.
          We may also disclose it where required by law, or as part of a merger or acquisition with
          notice to you.
        </p>
        <p><strong>Storage, retention and deletion</strong></p>
        <p>
          Access tokens are encrypted at rest. We store only the summaries, dates and reminders
          derived from your emails and events — not a copy of your mailbox — and keep them while your
          Google account is connected. You can disconnect Google at any time in BrainPal settings or
          at{" "}
          <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer">
            myaccount.google.com/permissions
          </a>
          . When you disconnect, we revoke our access and delete the stored Google-derived data within
          30 days. You can also email {CONTACT} to request deletion.
        </p>
        <p><strong>Limited Use</strong></p>
        <p>
          BrainPal&rsquo;s use and transfer to any other app of information received from Google APIs
          will adhere to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noreferrer"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use personal information",
    body: (
      <ul>
        <li>To create and manage accounts and provide the Services.</li>
        <li>To personalise learning, money and safety features for each child.</li>
        <li>To keep children safe, including moderating content and alerting parents where appropriate.</li>
        <li>To communicate with you about the Services, including service and security notices.</li>
        <li>To maintain security, prevent fraud and comply with our legal obligations.</li>
      </ul>
    ),
  },
  {
    id: "children",
    title: "Children’s privacy",
    body: (
      <>
        <p>
          BrainPal is designed for families. Child profiles are created and controlled by a parent or
          guardian, who can view, correct or delete their child&rsquo;s information at any time. We
          collect only what is needed to provide the Services to the child, and we never use
          children&rsquo;s information for advertising.
        </p>
        <p>
          If you believe a child has given us personal information without a parent&rsquo;s consent,
          contact us at {CONTACT} and we will delete it.
        </p>
      </>
    ),
  },
  {
    id: "disclosure",
    title: "When we disclose information",
    body: (
      <>
        <p>We do not sell personal information. We share it only with:</p>
        <ul>
          <li>Service providers who help us operate the Services (hosting, email delivery, analytics, AI processing), under confidentiality obligations.</li>
          <li>Regulators, law enforcement or others where required or authorised by law.</li>
          <li>A buyer or successor if BrainPal is involved in a merger or acquisition, with notice to you.</li>
        </ul>
        <p>
          Some providers may store or process data outside Australia (for example in the United
          States). Where that happens, we take reasonable steps to ensure the information is handled
          consistently with the APPs.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security and retention",
    body: (
      <p>
        We protect personal information with encryption in transit and at rest, access controls and
        monitoring. We keep information only for as long as needed to provide the Services or meet
        legal obligations, then delete or de-identify it.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Access, correction and complaints",
    body: (
      <>
        <p>
          You can ask to access, correct or delete your personal information by emailing {CONTACT}.
          We will respond within 30 days.
        </p>
        <p>
          If you have a privacy complaint, contact us first and we will try to resolve it. If you are
          not satisfied, you can contact the Office of the Australian Information Commissioner at{" "}
          <a href="https://www.oaic.gov.au" target="_blank" rel="noreferrer">
            oaic.gov.au
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes and contact",
    body: (
      <p>
        We may update this policy from time to time and will post the new version here with a new
        &ldquo;last updated&rdquo; date. Questions? Email{" "}
        <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      kicker="Legal"
      title="Privacy Policy"
      updated="29 September 2026"
      intro={
        <p>
          Your family&rsquo;s trust is the whole point of BrainPal. Here&rsquo;s exactly what we
          collect, how we use it, and how you stay in control.
        </p>
      }
      sections={SECTIONS}
    />
  );
}
