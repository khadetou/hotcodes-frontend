import Buttons from "@/components/dashboard/blog/Buttons";
import Orders from "@/components/dashboard/orders";
import React, { useState } from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import WelcomeBanner from "../WelcomeBanner";

const OrdersScreens = () => {
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
              <Orders />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default OrdersScreens;
