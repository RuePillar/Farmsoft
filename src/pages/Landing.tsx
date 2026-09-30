import {
  ArrowRight,
  BarChart3,
  Bell,
  ChevronRight,
  CircleDollarSign,
  Leaf,
  Menu,
  Package,
  Play,
  ShieldCheck,
  ShoppingCart,
  Sprout,
  Users,
  Wallet,
} from "lucide-react";

import { useState, type ElementType } from "react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Sprout,
    title: "Plan Your Farm",
    description:
      "Plan crops, activities, resources, and farming goals from one simple platform.",
  },
  {
    icon: Package,
    title: "Track Production",
    description:
      "Keep track of your crops, harvests, inventory, and farm performance.",
  },
  {
    icon: ShoppingCart,
    title: "Access Markets",
    description:
      "Discover buyers and market opportunities for your agricultural produce.",
  },
  {
    icon: Wallet,
    title: "Get Finance",
    description:
      "Explore financing opportunities designed to support your farming activities.",
  },
  {
    icon: ShieldCheck,
    title: "Stay Protected",
    description:
      "Access tools and information that help you manage farming risks.",
  },
  {
    icon: Users,
    title: "Join the Network",
    description:
      "Connect with farmers, buyers, financial providers, and agricultural partners.",
  },
];

const marketOffers = [
  {
    buyer: "AgriTrade",
    crop: "Maize",
    quantity: "500 kg",
    price: "N$6,350",
    change: "+8.2%",
  },
  {
    buyer: "Green Foods",
    crop: "Sorghum",
    quantity: "350 kg",
    price: "N$5,900",
    change: "+5.4%",
  },
  {
    buyer: "NamFarm",
    crop: "Soybean",
    quantity: "420 kg",
    price: "N$7,100",
    change: "+6.7%",
  },
];

export default function Landing() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-[#061016] text-white">
      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#061016]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-xl shadow-lg shadow-green-500/20">
              🌱
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight">
                Farm<span className="text-green-400">Soft</span>
              </h1>

              <p className="hidden text-[10px] text-gray-500 sm:block">
                Grow More. Earn More.
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm text-white transition hover:text-green-400"
            >
              Home
            </a>

            <a
              href="#features"
              className="text-sm text-gray-400 transition hover:text-green-400"
            >
              Features
            </a>

            <a
              href="#why-farmsoft"
              className="text-sm text-gray-400 transition hover:text-green-400"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm text-gray-400 transition hover:text-green-400"
            >
              Contact
            </a>
          </nav>

          {/* Desktop buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/dashboard"
              className="rounded-lg px-4 py-2 text-sm text-gray-300 transition hover:text-white"
            >
              Login
            </Link>

            <Link
              to="/dashboard"
              className="rounded-lg bg-green-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-green-400"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-lg p-2 text-gray-300 hover:bg-white/5 md:hidden"
            aria-label="Toggle navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenu && (
          <div className="border-t border-white/5 bg-[#07151a] px-6 py-5 md:hidden">
            <nav className="flex flex-col gap-4">
              <a
                href="#home"
                onClick={() => setMobileMenu(false)}
                className="text-sm text-gray-300 hover:text-green-400"
              >
                Home
              </a>

              <a
                href="#features"
                onClick={() => setMobileMenu(false)}
                className="text-sm text-gray-300 hover:text-green-400"
              >
                Features
              </a>

              <a
                href="#why-farmsoft"
                onClick={() => setMobileMenu(false)}
                className="text-sm text-gray-300 hover:text-green-400"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenu(false)}
                className="text-sm text-gray-300 hover:text-green-400"
              >
                Contact
              </a>

              <div className="flex gap-3 border-t border-white/5 pt-4">
                <Link
                  to="/dashboard"
                  className="flex-1 rounded-lg border border-white/10 px-4 py-2.5 text-center text-sm text-gray-300"
                >
                  Login
                </Link>

                <Link
                  to="/dashboard"
                  className="flex-1 rounded-lg bg-green-500 px-4 py-2.5 text-center text-sm font-semibold text-black"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <main id="home">
        <section className="relative overflow-hidden pt-32 lg:pt-40">
          {/* Background glow */}
          <div className="absolute left-1/2 top-20 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[120px]" />

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 lg:grid-cols-2 lg:px-8 lg:pb-32">
            {/* Hero text */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
                <Leaf size={15} />
                Smart Agriculture Platform
              </div>

              <h2 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Smart farming.
                <span className="block text-green-400">
                  Better tomorrows.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                FarmSoft brings farm planning, production tracking, market
                access, finance, and agricultural resources together in one
                simple platform.
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/dashboard"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 font-semibold text-black transition hover:bg-green-400"
                >
                  Get Started
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#features"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-white transition hover:border-green-500/40 hover:bg-white/5"
                >
                  <Play size={16} />
                  Explore Features
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  Farm Management
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  Market Access
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  Financial Support
                </div>
              </div>
            </div>

            {/* Dashboard preview */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-green-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a191e] shadow-2xl shadow-black/40">
                {/* Preview header */}
                <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-sm">
                      🌱
                    </div>

                    <span className="font-semibold">FarmSoft</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-xs text-gray-500">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-[90px_1fr]">
                  {/* Mini sidebar */}
                  <div className="border-r border-white/5 bg-[#07151a] p-3">
                    <div className="space-y-3">
                      <div className="rounded-lg bg-green-500 p-2">
                        <BarChart3
                          size={15}
                          className="mx-auto text-black"
                        />
                      </div>

                      <div className="rounded-lg p-2">
                        <Sprout
                          size={15}
                          className="mx-auto text-gray-600"
                        />
                      </div>

                      <div className="rounded-lg p-2">
                        <ShoppingCart
                          size={15}
                          className="mx-auto text-gray-600"
                        />
                      </div>

                      <div className="rounded-lg p-2">
                        <Wallet
                          size={15}
                          className="mx-auto text-gray-600"
                        />
                      </div>

                      <div className="rounded-lg p-2">
                        <ShieldCheck
                          size={15}
                          className="mx-auto text-gray-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mini dashboard */}
                  <div className="p-5">
                    <div className="mb-5">
                      <p className="text-xs text-gray-500">Good morning</p>
                      <h3 className="mt-1 text-lg font-semibold">
                        Welcome back, Farmer
                      </h3>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <MiniStat
                        title="Revenue"
                        value="N$45,200"
                        icon={CircleDollarSign}
                      />

                      <MiniStat
                        title="Produce"
                        value="2,450 kg"
                        icon={Package}
                      />

                      <MiniStat
                        title="Market Value"
                        value="N$68,500"
                        icon={BarChart3}
                      />

                      <MiniStat
                        title="Offers"
                        value="8"
                        icon={ShoppingCart}
                      />
                    </div>

                    {/* Market offers */}
                    <div className="mt-5 rounded-xl border border-white/5 bg-[#07151a]">
                      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                        <span className="text-sm font-semibold">
                          Market Offers
                        </span>

                        <ChevronRight
                          size={15}
                          className="text-gray-500"
                        />
                      </div>

                      <div className="divide-y divide-white/5">
                        {marketOffers.map((offer) => (
                          <div
                            key={offer.buyer}
                            className="flex items-center justify-between px-4 py-3"
                          >
                            <div>
                              <p className="text-xs font-medium">
                                {offer.buyer}
                              </p>
                              <p className="mt-1 text-[10px] text-gray-500">
                                {offer.crop} · {offer.quantity}
                              </p>
                            </div>

                            <div className="text-right">
                              <p className="text-xs font-semibold">
                                {offer.price}
                              </p>

                              <p className="mt-1 text-[10px] text-green-400">
                                {offer.change}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Notification */}
                    <div className="mt-4 flex items-center gap-3 rounded-xl border border-green-500/10 bg-green-500/5 p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10">
                        <Bell size={15} className="text-green-400" />
                      </div>

                      <div>
                        <p className="text-xs font-medium">
                          New market opportunity
                        </p>

                        <p className="mt-1 text-[10px] text-gray-500">
                          A buyer is looking for maize.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section
          id="features"
          className="border-y border-white/5 bg-[#07151a] py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                Everything you need
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                One platform for your entire farm
              </h2>

              <p className="mt-4 text-gray-400">
                From planning your next crop to finding buyers, FarmSoft gives
                farmers the tools they need to manage and grow their farms.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-white/5 bg-[#0a191e] p-6 transition duration-300 hover:-translate-y-1 hover:border-green-500/20 hover:bg-[#0c1e23]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400 transition group-hover:bg-green-500 group-hover:text-black">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {feature.description}
                    </p>

                    <div className="mt-5 flex items-center gap-1 text-sm font-medium text-green-400">
                      Learn more
                      <ArrowRight
                        size={15}
                        className="transition group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= WHY FARMSOFT ================= */}
        <section id="why-farmsoft" className="py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
            {/* Left */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                Why FarmSoft?
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Turn better information into better farming decisions.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-gray-400">
                Farming involves planning, production, markets, finances, and
                risk. FarmSoft brings these activities together so farmers can
                make informed decisions from one place.
              </p>

              <div className="mt-8 space-y-5">
                <Benefit
                  title="Plan with confidence"
                  description="Organise your crops, activities, and farming goals."
                />

                <Benefit
                  title="Find better opportunities"
                  description="Discover buyers and market opportunities for your produce."
                />

                <Benefit
                  title="Manage your finances"
                  description="Explore financing options and monitor your farm's financial activity."
                />

                <Benefit
                  title="Stay connected"
                  description="Build connections across the agricultural ecosystem."
                />
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-green-500/10 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-[#0a191e] p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Farm Overview</p>
                    <h3 className="mt-1 text-xl font-semibold">
                      Your Farm
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
                    <Sprout size={20} className="text-green-400" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/5 bg-[#07151a] p-4">
                    <p className="text-xs text-gray-500">Crop Production</p>

                    <p className="mt-2 text-2xl font-bold">2,450 kg</p>

                    <p className="mt-2 text-xs text-green-400">
                      +12.5% this season
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-[#07151a] p-4">
                    <p className="text-xs text-gray-500">Market Value</p>

                    <p className="mt-2 text-2xl font-bold">N$68.5K</p>

                    <p className="mt-2 text-xs text-green-400">
                      +8.2% this month
                    </p>
                  </div>
                </div>

                {/* Simple chart */}
                <div className="mt-4 rounded-2xl border border-white/5 bg-[#07151a] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">
                        Revenue Growth
                      </p>

                      <p className="mt-1 text-lg font-semibold">
                        N$45,200
                      </p>
                    </div>

                    <BarChart3
                      size={18}
                      className="text-green-400"
                    />
                  </div>

                  <div className="mt-6 flex h-28 items-end gap-2">
                    {[35, 48, 42, 62, 58, 75, 88, 72, 96, 85, 100, 92].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-green-500/30 transition hover:bg-green-400"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Activity */}
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-green-500/10 bg-green-500/5 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
                    <Bell size={18} className="text-green-400" />
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      New buyer opportunity
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      A buyer is interested in your maize.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-green-500/10 bg-gradient-to-br from-green-500/10 to-[#0a191e] px-6 py-16 text-center sm:px-12">
            <div className="mx-auto max-w-2xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500 text-2xl">
                🌱
              </div>

              <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
                Ready to grow your farm?
              </h2>

              <p className="mt-4 text-gray-400">
                Start managing your farming activities, discovering market
                opportunities, and exploring financial resources with FarmSoft.
              </p>

              <div className="mt-8">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-7 py-3.5 font-semibold text-black transition hover:bg-green-400"
                >
                  Enter FarmSoft
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer
        id="contact"
        className="border-t border-white/5 bg-[#07151a]"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500">
              🌱
            </div>

            <div>
              <p className="font-semibold">
                Farm<span className="text-green-400">Soft</span>
              </p>

              <p className="text-xs text-gray-500">
                Grow More. Earn More.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            © 2026 FarmSoft. Smart farming for a better tomorrow.
          </p>

          <Link
            to="/dashboard"
            className="flex items-center gap-1 text-sm text-green-400 hover:text-green-300"
          >
            Open Dashboard
            <ChevronRight size={15} />
          </Link>
        </div>
      </footer>
    </div>
  );
}

/* ================= MINI STAT ================= */

function MiniStat({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: ElementType;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-[#07151a] p-3">
      <div className="flex items-center justify-between">
        <p className="text-[10px] text-gray-500">{title}</p>

        <Icon size={13} className="text-green-400" />
      </div>

      <p className="mt-2 text-sm font-semibold">{value}</p>
    </div>
  );
}

/* ================= BENEFIT ================= */

function Benefit({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10">
        <div className="h-2 w-2 rounded-full bg-green-400" />
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>

        <p className="mt-1 text-sm leading-6 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}