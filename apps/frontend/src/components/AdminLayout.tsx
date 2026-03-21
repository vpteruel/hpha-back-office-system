import { useState, type ReactNode } from "react";
import { Sidebar } from "./Sidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-surface dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 min-h-screen flex flex-col lg:ml-64">
        <header className="fixed top-0 right-0 left-0 lg:left-auto lg:w-[calc(100%-16rem)] z-40 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl flex justify-between items-center px-4 sm:px-8 h-16">
          <div className="flex items-center gap-3 sm:gap-4 flex-1 max-w-xl">
            <button
              className="lg:hidden p-2 text-slate-500 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-colors"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open navigation"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                search
              </span>
              <input
                className="w-full bg-slate-100 dark:bg-slate-800 dark:text-slate-200 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400"
                placeholder="Search entries..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:block p-2 text-slate-500 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full border-2 border-slate-50"></span>
            </button>
            <button className="hidden sm:block p-2 text-slate-500 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-colors">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <div className="hidden sm:block h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
            <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-200/50 dark:hover:bg-slate-800/50 p-1.5 pr-1 sm:pr-3 rounded-lg transition-colors">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtMBpvcAG2_dLHJJqmY-OlaHOGpUc7Bca7IvPEduAgwrfVEbtuGnW5PZx7KN1KPJE__zY2giMq0ykyS5msgxXDQfcuDAiVT8sP1ZqaP2JeVy1M4CWhHAh8tBGT6skmFxRObHIvZfRcDhMiQ5wvPT535D5zoXgjw-ZUb4Rr6bXAtQv3DuCYHt0vvDRr_Eu3lObDVOvG-5VSxfCul-KPwGrLFTvk2afIB2B4f0uJSzuZBEWcaMRyogkAi91X72MiO6IHmAN02lByftM"
                alt="Administrator Avatar"
                className="w-8 h-8 rounded-lg"
              />
              <span className="hidden sm:inline font-manrope text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                User Profile
              </span>
            </div>
          </div>
        </header>
        <main className="pt-24 px-4 sm:px-8 pb-12 flex-1">{children}</main>
      </div>
    </div>
  );
}
