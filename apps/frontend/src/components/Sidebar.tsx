import { Link, useRouterState } from "@tanstack/react-router";

const navItems = [
  { id: "forms", label: "Forms", icon: "description", path: "/forms" },
  {
    id: "submissions",
    label: "Submissions",
    icon: "list_alt",
    path: "/submissions",
  },
  {
    id: "settings",
    label: "System Settings",
    icon: "settings",
    path: "/settings",
  },
];

const footerItems = [
  {
    id: "documentation",
    label: "Documentation",
    icon: "menu_book",
    path: "/documentation",
  },
  {
    id: "support",
    label: "Support",
    icon: "contact_support",
    path: "/support",
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className = "" }: SidebarProps) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (path: string) => {
    return currentPath === path || currentPath.startsWith(path + "/");
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-full w-64 z-50 bg-slate-200 font-inter text-sm font-medium flex flex-col py-6 ${className}`}
    >
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl editorial-gradient flex items-center justify-center text-white shadow-sm">
          <span className="material-symbols-outlined">description</span>
        </div>
        <div>
          <h1 className="font-manrope text-lg font-black tracking-tighter text-slate-900">
            Forms Anywhere
          </h1>
          <p className="text-[0.6875rem] text-slate-500 font-semibold tracking-wider uppercase">
            Back-Office System
          </p>
        </div>
      </div>
      <nav className="grow">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.id}
              to={item.path}
              className={
                active
                  ? "border-l-[3px] border-blue-700 bg-slate-300/40 text-blue-800 px-6 py-3 flex items-center gap-3"
                  : "text-slate-600 px-6 py-3 flex items-center gap-3 hover:text-blue-700 hover:bg-slate-200/50 transition-all duration-200 group"
              }
            >
              <span
                className={`material-symbols-outlined ${active ? "" : "opacity-70 group-hover:opacity-100"}`}
                style={
                  item.id === "submissions" && active
                    ? { fontVariationSettings: '"FILL" 1' }
                    : undefined
                }
              >
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto pt-6 border-t border-slate-300/30">
        {footerItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="text-slate-500 px-6 py-2.5 flex items-center gap-3 hover:text-blue-700 transition-colors text-sm"
          >
            <span className="material-symbols-outlined text-lg">
              {item.icon}
            </span>
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
