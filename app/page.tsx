import ScrollUp from "../components/Common/ScrollUp";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Video from "../components/Video";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Video />
      <Features />
      
      {/* Web App Access Section */}
      <section className="overflow-hidden py-16 md:py-20 lg:py-28 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="w-full px-4 lg:w-22/24 xl:w-23/24">
            <div className="wow fadeInUp mb-12 rounded-md bg-green-accent py-11 px-8 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] backdrop-blur-sm text-center">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Expand Your Practice
              </h2>
              <p className="mb-8 text-base font-medium text-body-color">
                Streamline your mental health practice with our digital platform. 
                Increase operational efficiency, reach more patients, and enhance your clinical workflow. 
                Join our network of practitioners and organizations transforming mental healthcare delivery.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/join-platform"
                  className="btn-primary rounded-md py-4 px-8 text-base font-semibold transition duration-300 ease-in-out hover:shadow-signUp"
                >
                  Request to Join Platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
