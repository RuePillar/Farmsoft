import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  LayoutDashboard,
  ShoppingCart,
  ShieldCheck,
  Sprout,
  Wallet,
} from "lucide-react";
import { NavLink } from "react-router-dom";

type MenuItem = {
  name: string;
  icon: LucideIcon;
  path: string;
};

const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Plan",
    icon: ClipboardList,
    path: "/plan",
  },
  {
    name: "Produce",
    icon: Sprout,
    path: "/produce",
  },
  {
    name: "Market",
    icon: ShoppingCart,
    path: "/market",
  },
  {
    name: "Finance",
    icon: Wallet,
    path: "/finance",
  },
  {
    name: "Protect",
    icon: ShieldCheck,
    path: "/protect",
  },
  {
    name: "Resources",
    icon: BookOpen,
    path: "/resources",
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-[#173039] bg-[#041016] text-white md:flex md:flex-col">
      <div className="flex h-[68px] items-center gap-3 border-b border-[#173039] px-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-green-600 text-xl shadow-[0_0_18px_rgba(34,197,94,0.25)]">
          🌱
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-tight">
            Farm<span className="text-green-400">Soft</span>
          </h1>

          <p className="text-xs text-gray-500">Grow More. Earn More.</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-5">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-gradient-to-r from-green-600 to-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.15)]"
                    : "text-gray-400 hover:bg-green-900/30 hover:text-white"
                }`
              }
            >
              <Icon size={19} strokeWidth={1.9} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="m-3 overflow-hidden rounded-xl border border-green-800/60 bg-gradient-to-br from-[#0b3025] to-[#071d17] p-4">
        <div className="mb-4 flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
            <Sprout size={25} />
          </div>

          <div>
            <p className="text-sm font-bold leading-5">
              Grow More.
              <br />
              <span className="text-green-400">Earn More.</span>
            </p>

            <p className="mt-1 text-[10px] leading-4 text-gray-400">
              Plan, grow and profit sustainably.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => console.log("Upgrade plan clicked")}
          className="flex w-full items-center justify-center gap-1 rounded-md bg-green-500 px-3 py-2 text-xs font-bold text-black transition hover:bg-green-400"
        >
          Upgrade Plan
          <ArrowRight size={14} />
        </button>
      </div>
    </aside>
  );
}