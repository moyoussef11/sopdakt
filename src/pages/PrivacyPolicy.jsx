import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="py-20 bg-black text-white flex items-center justify-center">
        <p className="text-[28px]  font-bold leading-[75.2px] md:tracking-[35.6px] text-center">
          privacy policy
        </p>
      </div>
      <div className="info px-5 py-20 md:px-28">
        <h3 className="font-bold text-[34px] leading-[40px] uppercase">
          Privacy Policy for sopdakt E-Commerce SAE
        </h3>
        <p className="text-[20px] lowercase leading-[40px] text-center md:text-left">
          At sopdakt, we are committed to protecting the privacy of our
          customers and users. This Privacy Policy outlines how sopdakt
          E-Commerce SAE (referred to as "sopdakt", "we", "our", or "us")
          collects, uses, shares, and protects your personal information in
          accordance with applicable data protection laws in Egypt.
        </p>
        <ul className="list-disc flex flex-col gap-1 items-center md:items-start">
          <h4 className="text-[#FF3200] text-[32px] font-medium uppercase">
            1. Information We Collect
          </h4>
          <span>
            We collect personal information when you interact with us, such as
            when you:
          </span>
          <li className="ml-10">
            Register for an account on the sopdakt platform.
          </li>
          <li className="ml-10">
            Make purchases through our website or mobile applications.
          </li>
          <li className="ml-10">
            Contact our customer service or communicate with us.
          </li>
          <li className="ml-10">
            Participate in surveys, promotions, or events.
          </li>
        </ul>
        <ul className="list-disc my-2 flex flex-col gap-1 items-center md:items-start">
          <span className="font-semibold text-[26px] text-center">
            The types of personal information we may collect include:
          </span>
          <li className="ml-10">Name, address, email, and phone number. </li>
          <li className="ml-10">
            Payment information and transaction details.{" "}
          </li>
          <li className="ml-10">
            Device information, IP address, and browsing behavior.{" "}
          </li>
        </ul>
        <ul className="list-disc flex flex-col gap-1 items-center md:items-start">
          <h4 className="">1. How We Use Your Information</h4>
          <span>We use your personal information to:</span>
          <li className="ml-10">
            Provide, operate, and maintain the sopdakt platform.{" "}
          </li>
          <li className="ml-10">
            Process your transactions and deliver your orders.{" "}
          </li>
          <li className="ml-10">
            Communicate with you, including responding to your inquiries.{" "}
          </li>
          <li className="ml-10">
            Improve our services, content, and user experience.{" "}
          </li>
          <li className="ml-10">
            Prevent fraud and ensure the security of our platform.{" "}
          </li>
          <li className="ml-10">Comply with legal obligations. </li>
        </ul>
        <ul className="list-disc flex flex-col gap-1 items-center md:items-start">
          <h4 className="">1. Sharing Your Information</h4>
          <span>We may share your information with:</span>
          <li className="ml-10">Our affiliates and subsidiaries. </li>
          <li className="ml-10">
            Service providers who help us operate our business (e.g., payment
            processors, logistics partners).{" "}
          </li>
          <li className="ml-10">
            Law enforcement or regulatory authorities, when required by law.{" "}
          </li>
          <li className="ml-10">Third parties with your consent. </li>
        </ul>
        <ul className="list-disc flex flex-col gap-1 items-center md:items-start">
          <h4 className="">1.Data Transfers</h4>
          <span>
            Your personal information may be transferred to and stored in
            countries outside of Egypt. We ensure that such transfers comply
            with applicable data protection laws and that your information is
            adequately protected.
          </span>
        </ul>
        <ul className="list-disc flex flex-col gap-1 items-center md:items-start">
          <h4 className="text-[#FF3200] text-[32px] font-medium uppercase">
            2. Your Rights
          </h4>
          <span>You have the right to:</span>
          <li className="ml-10">
            Access and request a copy of your personal information.{" "}
          </li>
          <li className="ml-10">Correct or update your information. </li>
          <li className="ml-10">
            Object to or restrict the processing of your information.{" "}
          </li>
          <li className="ml-10">
            Withdraw your consent at any time, where applicable.{" "}
          </li>
          <li className="ml-10">
            Request the deletion of your personal information, subject to legal
            limitations.{" "}
          </li>
        </ul>
        <ul className="list-disc flex flex-col gap-1 items-center md:items-start">
          <h4 className="">1.Security</h4>
          <span>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            disclosure, alteration, or destruction. However, no method of
            transmission over the internet is 100% secure.
          </span>
        </ul>
        <ul className="list-disc flex flex-col gap-1 items-center md:items-start">
          <h4 className="">2.Cookies and Tracking Technologies</h4>
          <span>
            We use cookies and similar technologies to enhance your experience
            on the sopdakt platform, analyze usage, and personalize content and
            ads. You can control cookie settings through your browser.
          </span>
        </ul>
        <ul className="list-disc flex flex-col gap-1 items-center md:items-start">
          <h4 className="">3. Data Retention</h4>
          <span>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this policy, unless a longer
            retention period is required by law.
          </span>
        </ul>
        <ul className="list-disc flex flex-col gap-1 items-center md:items-start">
          <h4 className="">4. Children’s Privacy</h4>
          <span>
            The sopdakt platform is not intended for children under the age of
            18. We do not knowingly collect personal information from children.
          </span>
        </ul>
        <ul className="list-disc flex flex-col gap-1 items-center md:items-start">
          <h4 className="">5.Changes to This Policy</h4>
          <span>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </span>
        </ul>
        <ul className="list-disc flex flex-col gap-1 items-center md:items-start">
          <h4 className="">6.Contact Us</h4>
          <span>
            If you have any questions or concerns about this Privacy Policy or
            our privacy practices, please contact us at: Email:
            privacy@sopdakt.com Effective Date: January 1, 2024
          </span>
        </ul>
      </div>
    </>
  );
};

export default PrivacyPolicy;
