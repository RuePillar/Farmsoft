import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Handshake,
  Landmark,
  Leaf,
  Menu,
  ShieldCheck,
  ShoppingBag,
  Share2,
  Sprout,
  TrendingUp,
  Users,
  WalletCards,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import Sidebar from "../components/Sidebar";

type FinanceType = "loan" | "token" | "insurance";

type FinanceOption = {
  title: string;
  description: string;
  amount: string;
  icon: LucideIcon;
  type: FinanceType;
  benefits: string[];
  button: string;
  path: string;
};

type FinanceStyle = {
  card: string;
  icon: string;
  amount: string;
  button: string;
};

type MarketOffer = {
  buyer: string;
  produce: string;
  price: string;
};

type NetworkOption = {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
};

const financeOptions: FinanceOption[] = [
  {
    title: "Loans",
    description: "You may qualify for up to",
    amount: "N$ 750,000",
    icon: Landmark,
    type: "loan",
    benefits: ["Affordable interest rates", "Flexible repayment"],
    button: "Check Loan Options",
    path: "/finance",
  },
  {
    title: "Token Finance",
    description: "Eligible production value up to",
    amount: "N$ 1.2M",
    icon: WalletCards,
    type: "token",
    benefits: ["Unlock value from your harvest", "Fast & transparent"],
    button: "Explore Token Finance",
    path: "/finance",
  },
  {
    title: "Insurance",
    description: "You may qualify for",
    amount: "N$ 750,000",
    icon: ShieldCheck,
    type: "insurance",
    benefits: ["Crop & weather insurance", "Protect your investment"],
    button: "Get Insurance Quote",
    path: "/protect",
  },
];

const financeStyles: Record<FinanceType, FinanceStyle> = {
  loan: {
    card: "border-green-900/60 bg-gradient-to-br from-[#062d25] to-[#071c20]",
    icon: "bg-green-500/15 text-green-400",
    amount: "text-green-400",
    button: "bg-gradient-to-r from-green-400 to-green-500 text-[#03120a]",
  },
  token: {
    card: "border-purple-900/60 bg-gradient-to-br from-[#17132d] to-[#0d1023]",
    icon: "bg-purple-500/15 text-purple-400",
    amount: "text-purple-400",
    button: "bg-gradient-to-r from-purple-500 to-violet-500 text-white",
  },
  insurance: {
    card: "border-blue-900/60 bg-gradient-to-br from-[#071e31] to-[#061722]",
    icon: "bg-blue-500/15 text-blue-400",
    amount: "text-blue-400",
    button: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
  },
};

const marketOffers: MarketOffer[] = [
  {
    buyer: "Buyer C",
    produce: "Maize",
    price: "N$ 6,350 / tonne",
  },
  {
    buyer: "AgriTrade Ltd.",
    produce: "Soybean",
    price: "N$ 7,100 / tonne",
  },
  {
    buyer: "Green Foods",
    produce: "Sorghum",
    price: "N$ 5,900 / tonne",
  },
];

const networkOptions: NetworkOption[] = [
  {
    title: "Farmer",
    description: "Manage your farms and grow.",
    icon: Sprout,
    path: "/produce",
  },
  {
    title: "Cooperative",
    description: "Work together for greater impact.",
    icon: Users,
    path: "/resources",
  },
  {
    title: "Financiers",
    description: "Provide funding and grow returns.",
    icon: Landmark,
    path: "/finance",
  },
  {
    title: "Investors",
    description: "Invest in agriculture, impact lives.",
    icon: TrendingUp,
    path: "/finance",
  },
  {
    title: "Insurer",
    description: "Offer protection and build trust.",
    icon: ShieldCheck,
    path: "/protect",
  },
  {
    title: "VAS Provider",
    description: "Deliver digital services.",
    icon: Share2,
    path: "/resources",
  },
  {
    title: "Merchants",
    description: "Reach more customers.",
    icon: ShoppingBag,
    path: "/market",
  },
  {
    title: "Market Offtaker",
    description: "Source reliably, sustainably.",
    icon: Handshake,
    path: "/market",
  },
];

const mobileMenuItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Plan", path: "/plan" },
  { name: "Produce", path: "/produce" },
  { name: "Market", path: "/market" },
  { name: "Finance", path: "/finance" },
  { name: "Protect", path: "/protect" },
  { name: "Resources", path: "/resources" },
];

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (!message) return;

    const timer = window.setTimeout(() => {
      setMessage("");
    }, 2500);

    return () => window.clearTimeout(timer);
  }, [message]);

  const showMessage = (text: string): void => {
    setMessage(text);
  };

  return (
    <div className="min-h-screen bg-[#020b10] text-white">
      <Sidebar />

      {message && (
        <div className="fixed right-4 top-4 z-50 rounded-lg border border-green-500/50 bg-[#0a251d] px-4 py-3 text-sm text-green-300 shadow-xl">
          {message}
        </div>
      )}

      <main className="min-h-screen md:ml-64">
        <header className="flex h-[62px] items-center justify-between border-b border-[#173039] bg-[#041016] px-4 md:hidden">
          <div className="flex items-center gap-2">
            <Leaf
              size={25}
              strokeWidth={2}
              className="fill-green-400 text-green-400"
            />

            <span className="text-lg font-bold tracking-tight">
              Farm<span className="text-green-400">Soft</span>
            </span>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="rounded-md border border-[#25414a] p-2 text-gray-200 transition hover:border-green-500 hover:text-green-400"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </header>

        {mobileMenuOpen && (
          <nav className="border-b border-[#173039] bg-[#041016] p-3 md:hidden">
            {mobileMenuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `mb-1 flex rounded-md px-3 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-green-500 text-black"
                      : "text-gray-300 hover:bg-[#0b2025]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        )}

        <div className="p-3 md:p-5">
          <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_260px]">
            <section className="rounded-xl border border-[#19333b] bg-[#06141a] p-3 md:p-4">
              <div className="mb-3">
                <h1 className="text-xl font-bold tracking-tight">
                  Access the Right Finance
                </h1>

                <p className="mt-1 text-xs text-gray-500">
                  See what you may qualify for today.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {financeOptions.map((option) => {
                  const Icon = option.icon;
                  const style = financeStyles[option.type];

                  return (
                    <article
                      key={option.title}
                      className={`rounded-lg border p-3 md:p-4 ${style.card}`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${style.icon}`}
                        >
                          <Icon size={23} />
                        </div>

                        <div>
                          <h2 className="text-sm font-bold">
                            {option.title}
                          </h2>

                          <p className="mt-0.5 text-[10px] leading-4 text-gray-400">
                            {option.description}
                          </p>

                          <p
                            className={`text-lg font-bold ${style.amount}`}
                          >
                            {option.amount}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        {option.benefits.map((benefit) => (
                          <div
                            key={benefit}
                            className="flex items-center gap-2"
                          >
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-400 text-[9px] font-bold text-black">
                              ✓
                            </span>

                            <span className="text-[10px] text-gray-300">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                      <NavLink
                        to={option.path}
                        onClick={() => showMessage(`${option.button} opened`)}
                        className={`mt-4 flex w-full items-center justify-center gap-1 rounded-md py-2.5 text-[10px] font-bold shadow-lg transition hover:brightness-110 ${style.button}`}
                      >
                        {option.button}
                        <ArrowRight size={13} />
                      </NavLink>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="rounded-xl border border-[#19333b] bg-[#06141a] p-3 md:p-4">
              <div className="mb-3">
                <h2 className="text-lg font-bold">Market Offers</h2>

                <p className="mt-1 text-[10px] text-gray-500">
                  Top offers available for your produce.
                </p>
              </div>

              <div className="space-y-2">
                {marketOffers.map((offer) => (
                  <article
                    key={offer.buyer}
                    className="flex items-center justify-between rounded-lg border border-[#19333b] bg-[#071a20] px-2.5 py-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10">
                        <Sprout size={18} className="text-green-400" />
                      </div>

                      <div>
                        <p className="text-xs font-semibold">{offer.buyer}</p>

                        <p className="text-[10px] text-gray-400">
                          {offer.produce}
                        </p>

                        <p className="text-[10px] font-semibold text-green-400">
                          {offer.price}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        showMessage(
                          `Viewing ${offer.produce} offer from ${offer.buyer}`,
                        )
                      }
                      className="rounded border border-green-700/70 px-2.5 py-1.5 text-[10px] font-semibold text-green-400 transition hover:bg-green-500 hover:text-black"
                    >
                      View
                    </button>
                  </article>
                ))}
              </div>

              <NavLink
                to="/market"
                onClick={() => showMessage("All market offers opened")}
                className="mt-3 flex w-full items-center justify-center gap-1 rounded-md bg-green-500 py-2.5 text-[10px] font-bold text-black transition hover:bg-green-400"
              >
                View All Market Offers
                <ArrowRight size={13} />
              </NavLink>
            </section>
          </div>

          <section className="mt-3 rounded-xl border border-[#19333b] bg-[#06141a] p-3 md:p-4">
            <div className="mb-3">
              <h2 className="text-lg font-bold">Join the FarmSoft Network</h2>

              <p className="mt-1 text-xs text-gray-500">
                Connect, collaborate and grow with the right partners in the
                ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-8">
              {networkOptions.map((network) => {
                const Icon = network.icon;

                return (
                  <article
                    key={network.title}
                    className="group flex min-h-[150px] flex-col items-center rounded-lg border border-[#19333b] bg-[#07171d] px-2 py-3 text-center transition hover:-translate-y-0.5 hover:border-green-700 hover:bg-[#09221e]"
                  >
                    <div className="flex h-10 items-center justify-center text-green-400 transition group-hover:scale-110">
                      <Icon size={27} strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-2 text-[11px] font-semibold">
                      {network.title}
                    </h3>

                    <p className="mt-2 min-h-[34px] text-[9px] leading-3 text-gray-500">
                      {network.description}
                    </p>

                    <NavLink
                      to={network.path}
                      onClick={() =>
                        showMessage(`Joining as a ${network.title}`)
                      }
                      className="mt-auto rounded border border-green-700 px-3 py-1.5 text-[9px] font-medium text-green-400 transition hover:bg-green-500 hover:text-black"
                    >
                      Join Now
                    </NavLink>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}