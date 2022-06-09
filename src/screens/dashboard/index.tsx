import { useState } from "react";

import Sidebar from "@/screens/dashboard/sidebar";

import Header from "@/screens/dashboard/header";
import WelcomeBanner from "./WelcomeBanner";
import Card1 from "@/components/dashboard/Cards/Card1";
import Card2 from "@/components/dashboard/Cards/Card2";
import Card3 from "@/components/dashboard/Cards/Card3";
import Card4 from "@/components/dashboard/Cards/Card4";
import Card5 from "@/components/dashboard/Cards/Card5";
import Card6 from "@/components/dashboard/Cards/Card6";
import Card7 from "@/components/dashboard/Cards/Card7";

const DashboardScreen = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Right: Actions */}

              <button className="btn bg-pink-500 hover:bg-pink-600 !w-full max-w-[109px] h-[38px] rounded-md flex items-center justify-center text-white">
                <svg
                  className="w-4 h-4 fill-current opacity-50 shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden xs:block ml-2">Add Fund</span>
              </button>
            </div>
            <div className="grid grid-cols-12 gap-6">
              <Card1 />
              <Card2 />
              <Card3 />
              <Card4 />
              <Card5 />
              <Card6 />
              <Card7 />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default DashboardScreen;
