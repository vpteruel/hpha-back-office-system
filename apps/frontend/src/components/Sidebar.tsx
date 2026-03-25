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
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({
  className = "",
  isOpen = false,
  onClose,
}: SidebarProps) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (itemId: string, path: string) => {
    if (itemId === "submissions" && currentPath === "/") {
      return true;
    }

    return currentPath === path || currentPath.startsWith(path + "/");
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm transition-opacity lg:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
      ></div>
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-64 bg-slate-200 dark:bg-slate-900 font-inter text-[0.875rem] font-medium flex flex-col py-6 transform transition-transform duration-300 lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} ${className}`}
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
            const active = isActive(item.id, item.path);
            const isSubmissions = item.id === "submissions";

            const iconStyle = isSubmissions
              ? { fontVariationSettings: '"FILL" 1' }
              : undefined;

            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={onClose}
                className={
                  active
                    ? "border-l-[3px] border-primary bg-primary/10 text-on-surface px-6 py-3 flex items-center gap-3"
                    : "text-on-surface-variant px-6 py-3 flex items-center gap-3 hover:text-primary transition-all duration-200 group"
                }
              >
                <span
                  className={`material-symbols-outlined ${active ? "text-primary" : "text-on-surface-variant opacity-70 group-hover:opacity-100"}`}
                  style={iconStyle}
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
              onClick={onClose}
              className="text-on-surface-variant px-6 py-2.5 flex items-center gap-3 hover:text-primary transition-colors text-sm"
            >
              <span className="material-symbols-outlined text-lg">
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
