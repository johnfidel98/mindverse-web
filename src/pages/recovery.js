import { useEffect, useState } from 'react';
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router';

import { Layout } from '../components/Layout';
import Head from 'next/head';

import {
  faCheckCircle,
  faRotate,
  faExclamationCircle,
  faCircleQuestion
} from "@fortawesome/free-solid-svg-icons";

const RecoveryStatus = ({ visibility, rst, isRst, psw }) => {
  return (
    <div className={`w-full xl:w-2/5 py-6 text-center overflow-y-hidden ${visibility}`}>
      {rst ?
        <Fa icon={faRotate} className='text-[100px] md:text-[120px] lg:text-[200px] animate-spin text-gray-700' /> :
        isRst ?
          <Fa icon={faCheckCircle} className='text-[100px] md:text-[120px] lg:text-[200px] text-blue-800' /> :
          psw == '' ? <Fa icon={faCircleQuestion} className='text-[100px] md:text-[120px] lg:text-[200px] text-blue-900' />: 
            <Fa icon={faExclamationCircle} className='text-[100px] md:text-[120px] lg:text-[200px] text-red-500' />}
    </div>
  );
};

const RecoveryPage = () => {
  const router = useRouter();

  const [isReset, setIsReset] = useState(false);
  const [resetting, setResetting] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const checkUrl = async () => {
      // Check the verification token from the query parameter
      const url = window.location.href;
      if (url.indexOf('userId=') == -1 || url.indexOf('secret=') == -1) {
        // Missing tokens
        router.push('/');
      }
    };

    checkUrl();
  }, [router]);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Start resetting process
    setResetting(true);

    // Get the verification token from the query parameter
    const { userId, secret } = router.query;

    if (userId && secret) {
      // Make an API request to verify the user
      try {
        fetch(`/api/recover?userId=${userId}&secret=${secret}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password1: password, password2: confirmPassword }),
        }).then((response) => {
          if (response.status == 200) {
            setResetting(false);
            setIsReset(true);

            // Go home in 10 sec
            setTimeout(() => router.push('/'), 10000);
          } else {
            setResetting(false);
            setIsReset(false);

            response.json().then((data) => {
              setErrorMessage(data.message);
            });
          }
        });
      } catch (error) {
        setResetting(false);
      }
    }

    // Reset form fields
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <Layout>
      <Head>
        <title>Account Recovery - MindVerse</title>
        <meta name="description" content="Recovery page to recover account access" />
      </Head>
      {RecoveryStatus({ visibility: "block xl:hidden", rst: resetting, isRst: isReset, psw: password })}
      <div className="flex flex-col w-full xl:w-3/5 justify-center lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-blue-900 font-bold leading-tight text-center lg:text-left slide-in-bottom-h1">
          Account Recovery Status
        </h1>
        <p className='text-xl slide-in-bottom-subtitle text-gray-600 mb-14 text-center lg:text-left'>
          Enter your new password to reset your account's credentials.
        </p>
        <form
          className="w-full bg-blue-900 rounded-lg shadow-md p-8 lg:w-4/5"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-300">Password Reset</h2>
          {errorMessage && (
            <div className="bg-red-100 text-red-700 border border-red-400 px-4 py-2 rounded mb-4">
              {errorMessage}
            </div>
          )}
          <div className='flex flex-col xl:flex-row mb-10'>
            <div className="w-full xl:mr-5">
              <label
                htmlFor="password"
                className="block text-blue-500 font-bold mb-2"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-blue-300 rounded mb-5 xl:mb-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="w-full xl:ml-5">
              <label
                htmlFor="confirmPassword"
                className="block text-blue-500 font-bold mb-2"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-2 border border-blue-300 rounded"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Reset Password
          </button>
        </form>

      </div>
      {RecoveryStatus({ visibility: "hidden xl:block", rst: resetting, isRst: isReset, psw: password })}

    </Layout>
  );
};

export default RecoveryPage;