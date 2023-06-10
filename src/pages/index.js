import { Layout } from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>MindVerse - Connect & Find Friends</title>
        <meta name="description" content="Revolutionize Your Social World: Connect, find friends & roam about and connect with the right groups!" />
      </Head>
      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start md:mt-10, md:pt-10 overflow-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-blue-900 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
          Connect & Find Friends
        </h1>
        <p className="leading-normal text-gray-800 text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
          Revolutionize Your Social World: Connect, find friends & roam about and connect with the right groups!
        </p>
        <div
          class="mb-4 rounded-lg bg-red-100 px-6 py-5 text-base text-success-700 fade-in"
          role="alert">
          <h4 class="mb-2 text-2xl text-blue-900 font-medium leading-tight">#AppwriteHackathon</h4>
          <p class="mb-4 text-gray-600">
            Website to assist in demo for my app submission for the <Link className='text-blue-800' href="https://hashnode.com/hackathons/appwrite">Appwrite Hackathon</Link>.
          </p>
          <hr class="border-red-600 opacity-30" />
          <p class="mb-0 mt-4 text-gray-600">
            N/B: This website partly handles account verification and recovery processes. The website project is open source and it's code is at <Link className='text-blue-800' href="https://github.com/johnfidel98/mindverse-web">GitHub</Link>.
          </p>
        </div>
        <p className="text-gray-600 font-bold pb-8 lg:pb-6 lg:pt-10 text-center md:text-left fade-in">Download App</p>
        <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
          {/* <Image src="/App Store.svg" alt="App Store" width={120} height={40} className="h-12 pr-4 bounce-top-icons" /> */}
          {/* <Link href="#">
            <Image src="/Play Store.svg" alt="Play Store" width={180} height={100} className="h-20 bounce-top-icons" />
          </Link> */}
          <Link href="#">
            <Image src="/Huawei AppGallery.png" alt="Huawei AppGallery" width={180} height={100} className="h-15 mt-3 bounce-top-icons" />
          </Link>
        </div>
      </div>
      <div className="w-full xl:w-3/5 py-6 overflow-y-hidden hidden lg:block">
        <Image src="/devices.svg" alt="Devices" width={600} height={400} className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" />
      </div>
    </Layout>
  );
};

export default HomePage;
