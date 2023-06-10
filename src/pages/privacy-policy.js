import Link from 'next/link';
import Head from 'next/head';
import {PageLayout} from '../components/Layout';

export async function getServerSideProps() {
  const supportEmailAddress = process.env.SUPPORT_EMAIL;

  return {
    props: {
      supportEmail: supportEmailAddress,
    },
  };
}

const PrivacyPage = ({supportEmail}) => {
  return (
    <PageLayout>
      <Head>
        <title>Privacy Policy - MindVerse</title>
      </Head>
      <div className="bg-gray-200 text-gray-700 py-8 px-4 sm:px-6 lg:px-8 overflow-y-auto overflow-x-hidden">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-6">Effective Date: 1/6/2023</p>
        <p className="mb-6">
          Thank you for choosing NashIntelli and using the MindVerse application
          ("MindVerse"). At NashIntelli, we are committed to protecting your
          privacy and ensuring the security of your personal information. This
          Privacy Policy outlines how we collect, use, disclose, and safeguard
          your data when you use our application. By using MindVerse, you consent
          to the practices described in this policy.
        </p>

        <h2 className="text-2xl font-bold mb-4">1. Collection of Information</h2>
        <p className="mb-4">
          <strong>1.1 Personal Information:</strong> We may collect certain
          personal information that you voluntarily provide to us, such as your
          name, email address, and contact information when you register an
          account or contact our support team.
        </p>
        <p className="mb-6">
          <strong>1.2 Usage Data:</strong> We automatically collect information
          on how you interact with MindVerse, including the features you use, the
          pages you visit, and the actions you take. This information may
          include your IP address, device type, browser type, operating system,
          and other technical details.
        </p>

        <h2 className="text-2xl font-bold mb-4">2. Use of Information</h2>
        <p className="mb-4">
          <strong>2.1 Provide and Improve MindVerse:</strong> We use the collected
          information to provide you with the requested services and to improve
          the functionality, usability, and performance of MindVerse.
        </p>
        <p className="mb-4">
          <strong>2.2 Communication:</strong> We may use your email address to
          respond to your inquiries, provide support, and send important updates
          regarding MindVerse.
        </p>
        <p className="mb-6">
          <strong>2.3 Aggregated Data:</strong> We may aggregate and anonymize
          the data collected from multiple users to analyze trends, improve our
          services, and for other research and statistical purposes.
        </p>

        <h2 className="text-2xl font-bold mb-4">3. Data Disclosure</h2>
        <p className="mb-4">
          <strong>3.1 Third-Party Service Providers:</strong> We may share your
          personal information with trusted third-party service providers that
          help us operate, improve, and support MindVerse, such as hosting
          services, customer support, and analytics providers.
        </p>
        <p className="mb-6">
          <strong>3.2 Legal Requirements:</strong> We may disclose your
          information if required to do so by law, or if we believe that such
          action is necessary to comply with a legal obligation, protect and
          defend our rights or property, investigate fraudulent or illegal
          activities, or protect the personal safety of our users.
        </p>
        <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
        <p className="mb-6">
          We take the security of your personal information seriously and
          employ reasonable measures to protect it from unauthorized access,
          use, disclosure, or alteration. However, please note that no method of
          transmission over the internet or electronic storage is 100% secure,
          and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-bold mb-4">5. Your Choices</h2>
        <p className="mb-4">
          You have certain rights and choices regarding the collection and use 
          of your personal information. You can update or delete your account 
          information by contacting our support team at <Link className="text-blue-700" target='_blank' href={`mailto:${supportEmail}`}>{supportEmail}</Link>. If you wish to opt
           out of receiving promotional emails or marketing communications, you can 
           unsubscribe by following the instructions provided in the email.
        </p>

        <h2 className="text-2xl font-bold mb-4">6. Links to Third-Party Sites</h2>
        <p className="mb-6">
          MindVerse may contain links to third-party websites or services. We are not 
          responsible for the privacy practices or the content of such external 
          sites. We encourage you to review the privacy policies of these 
          websites before providing any personal information.
        </p>

        <h2 className="text-2xl font-bold mb-4">7. Changes to this Privacy Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. The updated version 
          will be posted on our website, and we will notify you of any material 
          changes via email or through MindVerse. It is your responsibility to review 
          the Privacy Policy periodically for any updates.
        </p>

        <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
        <p className="mb-6">
          If you have any questions, concerns, or requests regarding this Privacy 
          Policy or the handling of your personal information, please contact us 
          at <Link className="text-blue-700" target='_blank' href={`mailto:${supportEmail}`}>{supportEmail}</Link>.
        </p>

        <p className="mb-6">
          <strong>Terms and Conditions:</strong> For our terms and conditions, 
          please visit our <Link href="/terms-and-conditions" className="text-blue-700">Terms and Conditions</Link> page.
        </p>

        <p className="mb-0">
          This Privacy Policy is effective as of 1/6/2023.
        </p>
      </div>
    </PageLayout>
  );
};

export default PrivacyPage;