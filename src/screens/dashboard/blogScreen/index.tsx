import Buttons from "@/components/dashboard/blog/Buttons";
import Cards from "@/components/dashboard/blog/Cards";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import React, { useState } from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import WelcomeBanner from "../WelcomeBanner";

const BlogScreen = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const buttons = [
    {
      text: "Developement",
      color: "bg-blue-500",
    },
    {
      text: "Design",
      color: "bg-green-500",
    },
    {
      text: "Marketing",
      color: "bg-orange-500",
    },
    {
      text: "Business",
      color: "bg-purple-500",
    },
  ];

  const { user } = useTypedSelector((state) => state.authReducer);

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
              <div>
                {buttons.map(({ text, color }, i) => (
                  <Buttons text={text} className={color} key={i} />
                ))}
              </div>

              {user?.roles.includes("admin") && (
                <button className="btn bg-pink-500 hover:bg-pink-600 !w-full max-w-[109px] h-[38px] rounded-md flex items-center justify-center text-white">
                  <svg
                    className="w-4 h-4 fill-current opacity-50 shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">New Blog</span>
                </button>
              )}
            </div>
            <div className="grid grid-cols-12 gap-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <Cards key={i} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default BlogScreen;
