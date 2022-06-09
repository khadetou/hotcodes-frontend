import { useState } from "react";

import Sidebar from "@/screens/dashboard/sidebar";

import Header from "@/screens/dashboard/header";

import WelcomeBanner from "../WelcomeBanner";
import ProfileForm from "@/components/dashboard/profileForm/ProfileForm";

const ProfileScreen = () => {
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
              <ProfileForm />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default ProfileScreen;
