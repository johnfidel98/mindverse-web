import Link from 'next/link';
import { PageLayout } from '../components/Layout';
import Head from 'next/head';

export async function getServerSideProps() {
  const supportEmailAddress = process.env.SUPPORT_EMAIL;

  return {
    props: {
      supportEmail: supportEmailAddress,
    },
  };
}

const TermsPage = ({ supportEmail }) => {
  return (
    <PageLayout>
      <Head>
        <title>Terms & Conditions - MindVerse</title>
      </Head>
      <div className="bg-gray-200 text-gray-700 py-8 px-4 sm:px-6 lg:px-8 overflow-y-auto overflow-x-hidden">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-6">Effective Date: 1/6/2023</p>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">1. Privacy Policy and Violation</h2>
          <p>
            By using the MindVerse application, you agree to comply with our <Link href="/privacy-policy" className="text-blue-700">Privacy Policy</Link> and 
            terms and conditions. Users who violate 
            our <Link href="/privacy-policy" className="text-blue-700">Privacy Policy</Link> or terms and conditions may be subject to temporary 
            or permanent banning from the application.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">2. Dispute Resolution</h2>
          <p>
            Any disputes arising from the use of the MindVerse application 
            shall be resolved in accordance with the laws governed by Kenya.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">3. Prohibited Content</h2>
          <p>
            Users are strictly prohibited from posting any malicious or explicit 
            content. This includes, but is not limited to, pornographic materials 
            in any form. Additionally, users must not post content that promotes 
            or appears to promote substance abuse or encourages another user to 
            commit a criminal offense.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">4. Content Editing and Deletion</h2>
          <p>
            We reserve the right to edit or delete any content published by any 
            user. Furthermore, we may use user-generated content for analytics 
            and content optimization to enhance the user experience of the MindVerse 
            application. Please refer to our <Link href="/privacy-policy" className="text-blue-700">Privacy Policy</Link> for more information 
            on how we handle and process user data.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">5. User Liability</h2>
          <p>
            We are not liable for any content posted by users. We strongly advise 
            users not to use ideas obtained from user-generated content to better 
            themselves. Users should exercise their own judgment and discretion 
            while using any information obtained from the MindVerse application's content.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">6. Compliance with New Policies</h2>
          <p>
            We are committed to staying updated with new policies and regulations. 
            As new policies come into effect, we will make necessary updates to 
            our terms and conditions to ensure compliance. Please refer to our 
            website or contact our support team at <Link className="text-blue-700" target='_blank' href={`mailto:${supportEmail}`}>{supportEmail}</Link> for the 
            latest information on new policies and their implications for your use 
            of the application.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>
            For general inquiries, please contact <Link className="text-blue-700" target='_blank' href={`mailto:${supportEmail}`}>{supportEmail}</Link>. For matters 
            related to user data safety and privacy, you can also reach out to <Link className="text-blue-700" target='_blank' href={`mailto:${supportEmail}`}>{supportEmail}</Link>.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsPage;