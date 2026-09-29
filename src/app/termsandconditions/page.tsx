import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "The terms that apply when you use BrainPal's website, app and services.",
  alternates: { canonical: "/termsandconditions" },
};

const CONTACT = "hello@brainpal.com.au";

const SECTIONS: LegalSection[] = [
  {
    id: "agreement",
    title: "About these terms",
    body: (
      <>
        <p>
          These terms are an agreement between you and BrainPal Pty Ltd (&ldquo;BrainPal&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;) and apply to the BrainPal website, web app and related
          services (the &ldquo;Services&rdquo;). By using the Services you agree to these terms and to
          our <Link href="/privacy">Privacy Policy</Link>.
        </p>
        <p>If you do not agree, please do not use the Services.</p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Accounts and eligibility",
    body: (
      <ul>
        <li>You must be at least 18 years old to create a parent or guardian account.</li>
        <li>Child profiles may only be created by a parent or legal guardian, who is responsible for the child&rsquo;s use of the Services.</li>
        <li>You must give accurate information and keep your login details secure. You are responsible for activity on your account.</li>
      </ul>
    ),
  },
  {
    id: "early-access",
    title: "Early access",
    body: (
      <p>
        BrainPal is currently offered as an early-access product. Features may change, be limited or
        be withdrawn, and some features — including money and card features — may not yet be
        available or may be provided by third-party partners under their own terms. Joining the
        waitlist does not guarantee access.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>use the Services unlawfully, or to harm, harass or exploit anyone — especially children;</li>
          <li>attempt to access accounts or data that are not yours, or interfere with the Services&rsquo; security;</li>
          <li>copy, reverse engineer or resell the Services except as allowed by law;</li>
          <li>upload content that is illegal, harmful or infringes someone else&rsquo;s rights.</li>
        </ul>
        <p>We may suspend or close accounts that breach these terms.</p>
      </>
    ),
  },
  {
    id: "connected-accounts",
    title: "Connected accounts",
    body: (
      <p>
        You may choose to connect third-party accounts such as Google (Gmail and Google Calendar).
        You authorise us to access those accounts only as described in our{" "}
        <Link href="/privacy#google-user-data">Privacy Policy</Link>. You can disconnect at any time.
        Your use of third-party services is also governed by their own terms.
      </p>
    ),
  },
  {
    id: "ai",
    title: "AI companions",
    body: (
      <p>
        The PALs are AI companions. Their responses are generated automatically and may sometimes be
        incomplete or wrong. They are for general education and organisation only and are not
        financial, legal, medical or professional advice. Parents should supervise their
        child&rsquo;s use.
      </p>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    body: (
      <p>
        BrainPal owns the Services, including the BrainPal name, the PALs characters, designs and
        software. You keep ownership of content you provide, and give us a licence to use it only to
        operate and improve the Services for you.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Consumer law and liability",
    body: (
      <>
        <p>
          Nothing in these terms excludes rights you have under the Australian Consumer Law that
          cannot be excluded. Subject to those rights, the Services are provided &ldquo;as is&rdquo;
          and, to the extent permitted by law, BrainPal is not liable for indirect or consequential
          loss.
        </p>
        <p>
          Where our liability for a failure to comply with a consumer guarantee can be limited, it is
          limited to supplying the Services again or paying the cost of having them supplied again.
        </p>
      </>
    ),
  },
  {
    id: "ending",
    title: "Ending your use",
    body: (
      <p>
        You can stop using the Services and close your account at any time by contacting us. We may
        suspend or end access if you breach these terms or if we stop offering the Services, and
        will give reasonable notice where we can.
      </p>
    ),
  },
  {
    id: "general",
    title: "Changes, law and contact",
    body: (
      <>
        <p>
          We may update these terms and will post the new version here. Continuing to use the
          Services after an update means you accept it.
        </p>
        <p>
          These terms are governed by the laws of New South Wales, Australia. Questions? Email{" "}
          <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      kicker="Legal"
      title="Terms and Conditions"
      updated="29 September 2026"
      intro={<p>The ground rules for using BrainPal — written to be read, not skimmed past.</p>}
      sections={SECTIONS}
    />
  );
}
