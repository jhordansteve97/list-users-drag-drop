import { useState } from "react";
import { Sidebar, Topbar } from "@molecules";
import type { DashboardProps } from "./Dashboard.interface";

export const Dashboard = ({ children, optionsSidebar, logo, color="normal", to, title }: DashboardProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen bg-gray-100">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-white/10 dark:bg-black/10 bg-opacity-100 z-20 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar isSidebarOpen={isSidebarOpen} options={optionsSidebar} logo={logo} color={color} />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Topbar
          to={to}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          title={title}
          color={color}
        />

        {/* Contenido dinámico */}
        <main className="flex-1 p-6 bg-background dark:bg-darkbackground mt-20">{children}</main>
      </div>
    </div>
  );
};
