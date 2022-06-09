import Messages from "@/components/dashboard/messages";
import React, { useState } from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import WelcomeBanner from "../WelcomeBanner";

const MessagesScreen = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />
            <div className="sm:flex sm:justify-between sm:items-center mb-8"></div>
            <div className="grid grid-cols-1 gap-6">
              <Messages />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default MessagesScreen;
