import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2 bg-gradient-to-br from-slate-100 to-white">
      <div className="bg-white w-full sm:py-12 py-10 px-6 rounded-xl shadow-lg transition-all duration-300">
        <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic mb-4">
          About Shortify
        </h1>
        <p className="text-gray-700 text-base leading-relaxed mb-10 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          Shortify simplifies URL shortening for efficient sharing. Easily
          generate, manage, and track your shortened links. With a clean design
          and powerful features, Shortify is your go-to solution for
          professional link management.
        </p>

        <div className="space-y-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          <div className="flex items-start">
            <FaLink className="text-blue-500 text-3xl mr-4 hover:scale-110 transition-transform duration-200" />
            <div>
              <h2 className="sm:text-2xl text-xl font-semibold text-slate-800 mb-1">
                Simple URL Shortening
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Create short, memorable URLs in just a few clicks. Shortify’s
                user-friendly interface makes link shortening effortless and
                fast.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaShareAlt className="text-green-500 text-3xl mr-4 hover:scale-110 transition-transform duration-200" />
            <div>
              <h2 className="sm:text-2xl text-xl font-semibold text-slate-800 mb-1">
                Powerful Analytics
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Get deep insights into link performance with real-time analytics.
                Track clicks, locations, and referrals to improve your strategies.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaEdit className="text-purple-500 text-3xl mr-4 hover:scale-110 transition-transform duration-200" />
            <div>
              <h2 className="sm:text-2xl text-xl font-semibold text-slate-800 mb-1">
                Enhanced Security
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Shortify ensures your links are protected with strong encryption
                and secure redirection, keeping your data safe at all times.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaChartLine className="text-red-500 text-3xl mr-4 hover:scale-110 transition-transform duration-200" />
            <div>
              <h2 className="sm:text-2xl text-xl font-semibold text-slate-800 mb-1">
                Fast and Reliable
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Enjoy lightning-fast redirects and guaranteed uptime with
                Shortify's dependable infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
