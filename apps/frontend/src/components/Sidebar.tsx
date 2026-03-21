import { Link, useRouterState } from "@tanstack/react-router";

interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  isActive?: boolean;
}

const navItems: NavItem[] = [
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
  isCollapsed?: boolean;
}

export function Sidebar({ className = "", isCollapsed = false }: SidebarProps) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (path: string) => {
    return currentPath === path || currentPath.startsWith(path + "/");
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-full w-64 z-50 bg-slate-200 dark:bg-slate-900 font-inter text-[0.875rem] font-medium flex flex-col h-full py-6 ${className}`}
    >
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl editorial-gradient flex items-center justify-center text-white shadow-sm">
          <span className="material-symbols-outlined">description</span>
        </div>
        <div>
          <h1 className="font-manrope text-lg font-black tracking-tighter text-slate-900 dark:text-slate-50">
            Forms Anywhere
          </h1>
          <p className="text-[0.6875rem] text-slate-500 font-semibold tracking-wider uppercase">
            Back-Office System
          </p>
        </div>
      </div>

      <nav className="flex-grow">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`px-6 py-3 flex items-center gap-3 transition-all duration-200 ${
                active
                  ? "border-l-[3px] border-blue-700 bg-slate-300/40 dark:bg-slate-800/40 text-blue-800 dark:text-blue-300"
                  : "text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300"
              }`}
            >
              <span
                className={`material-symbols-outlined ${
                  active ? "" : "opacity-70 group-hover:opacity-100"
                }`}
                style={
                  item.id === "submissions"
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

      <div className="mt-auto pt-6 border-t border-slate-300/30 footer-links">
        {footerItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="text-slate-500 dark:text-slate-400 px-6 py-2.5 flex items-center gap-3 hover:text-blue-700 transition-colors text-sm"
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
