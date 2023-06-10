import { useEffect, useState } from 'react';
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router';

import {Layout} from '../components/Layout';
import Head from 'next/head';

import {
  faCheckCircle,
  faRotate,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';


export async function getServerSideProps() {
  const supportEmailAddress = process.env.SUPPORT_EMAIL;

  return {
    props: {
      supportEmail: supportEmailAddress,
    },
  };
}

const VerificationStatus = ({visibility, verifying, isVerified}) => {
  return (
    <div className={`w-full xl:w-2/5 py-6 text-center overflow-y-hidden ${visibility}`}>
      {verifying ?
        <Fa icon={faRotate} className='text-[100px] md:text-[120px] lg:text-[200px] animate-spin text-gray-700' /> :
        isVerified ?
          <Fa icon={faCheckCircle} className='text-[100px] md:text-[120px] lg:text-[200px] text-blue-800' /> :
          <Fa icon={faExclamationCircle} className='text-[100px] md:text-[120px] lg:text-[200px] text-red-500' />}
    </div>
  );
};

const VerificationPage = ({ supportEmail }) => {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);
  const [verifying, setVerifing] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      // Get the verification token from the query parameter
      const { userId, secret } = router.query;

      if (userId && secret) {
        // Make an API request to verify the user
        try {
          const response = await fetch(`/api/verify?userId=${userId}&secret=${secret}`);
          if (response.ok) {
            setIsVerified(true);
          } 
        } catch (error) {}
      }
      setVerifing(false);
    };

    verifyUser();
  }, [router.query]);

  return (
    <Layout>
      <Head>
        <title>Verification Status - MindVerse</title>
        <meta name="description" content="Verification page to verify account status" />
      </Head>
      {VerificationStatus({visibility: "block xl:hidden", verifying, isVerified})}
      <div className="flex flex-col w-full xl:w-3/5 justify-center lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-blue-900 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
          Email Verification Status
        </h1>
        <p className='text-xl slide-in-bottom-subtitle mb-14 text-gray-600'>
          After successful verification, the application will seamlessly guide you to your <i>Home</i>, where your inaugural feeds awaits.
          To safeguard the integrity of our platform and foster genuine interactions, our vigilant system may prompt a re-verification 
          if any dubious activity is detected, ensuring the eradication of both spurious accounts (bots) and disruptive ones.
        </p>
        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle text-gray-800">
          {verifying ? "Verifying token from link ..." :
            isVerified ? "Account successfully verified!" :
              <span>Verification failed, kindly try again later or contact support at 
                <Link target='_blank' href={`mailto:${supportEmail}`}>{supportEmail}</Link>
              </span>}
        </p>

      </div>
      {VerificationStatus({visibility: "hidden xl:block", verifying, isVerified})}

    </Layout>
  );
};

export default VerificationPage;