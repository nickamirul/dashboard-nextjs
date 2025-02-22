"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Sidebars from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-graybackground">
        <Sidebars sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="mx-auto max-w-screen-2xl p-2 md:p-4 2xl:p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
