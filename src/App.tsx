import { useEffect, useState } from "react";
import brandLogo from "./assets/aahar-brand-logo.png";
import proteinCoffee from "./assets/protein-coffee.jpg";
import proteinMockup from "./assets/aahar-protein-mockup.svg";
import proteinStrawberry from "./assets/protein-strawberry.jpg";

const images = {
  hero: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
  chicken:
    "https://images.unsplash.com/photo-1547592180-85f173990554?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  dal: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  paneer:
    "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
};

const dishPhoto = (id: string) =>
  `https://images.unsplash.com/photo-${id}?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=700`;

type IconName =
  | "arrow"
  | "check"
  | "clock"
  | "leaf"
  | "menu"
  | "close"
  | "heart"
  | "box"
  | "sun"
  | "moon";

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    leaf: (
      <>
        <path d="M20 4C12 4 5 8 5 15c0 3 2 5 5 5 7 0 10-8 10-16Z" />
        <path d="M4 21c3-6 7-9 12-12" />
      </>
    ),
    menu: (
      <>
        <path d="M4 8h16" />
        <path d="M4 16h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    ),
    box: (
      <>
        <path d="m21 8-9 5-9-5 9-5 9 5Z" />
        <path d="m3 8 9 5v9" />
        <path d="m21 8-9 5" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    moon: <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />,
  };

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function LogoMark({ className = "size-14" }: { className?: string }) {
  return (
    <img
      src={brandLogo}
      className={`brand-logo logo-mark ${className}`}
      alt="AAHAR — Freshness Meets Nutrition"
    />
  );
}

const menuCategories = [
  {
    title: "Daily Indian meals",
    range: "₹99–139",
    image:
      "https://images.unsplash.com/photo-1680993032090-1ef7ea9b51e5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    alt: "Indian thali with rice, dal and vegetable dishes",
    items: [
      {
        name: "Tomato Pappu Rice Combo",
        price: "₹99",
        calories: "480 kcal",
        protein: "15g",
        image: dishPhoto("1516714435131-44d6b64dc6a2"),
      },
      {
        name: "Khatti Dal Thali",
        price: "₹109",
        calories: "520 kcal",
        protein: "18g",
        image: dishPhoto("1559561724-732dbca7be1e"),
      },
      {
        name: "Gongura Dal Roti Meal",
        price: "₹119",
        calories: "500 kcal",
        protein: "17g",
        image: dishPhoto("1589778655375-3e622a9fc91c"),
      },
      {
        name: "Bagara Baingan Meal",
        price: "₹129",
        calories: "560 kcal",
        protein: "16g",
        image: dishPhoto("1596797038530-2c107229654b"),
      },
      {
        name: "Mirchi ka Salan Veg Meal",
        price: "₹139",
        calories: "590 kcal",
        protein: "16g",
        image: dishPhoto("1743674453123-93356ade2891"),
      },
    ],
  },
  {
    title: "High-protein meals",
    range: "₹149–199",
    image:
      "https://images.unsplash.com/photo-1708782340358-8d5ef6dbb3c1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    alt: "Healthy Indian chickpea protein bowl",
    items: [
      {
        name: "Hyderabadi Chana Bowl",
        price: "₹149",
        calories: "510 kcal",
        protein: "24g",
        image: dishPhoto("1708782340358-8d5ef6dbb3c1"),
      },
      {
        name: "Dum Rajma Rice Bowl",
        price: "₹149",
        calories: "530 kcal",
        protein: "22g",
        image: dishPhoto("1668236534990-73c4ed23043c"),
      },
      {
        name: "Veg Haleem Millet Bowl",
        price: "₹169",
        calories: "540 kcal",
        protein: "28g",
        image: dishPhoto("1630409349197-b733a524b24e"),
      },
      {
        name: "Soya Keema Bagara Bowl",
        price: "₹179",
        calories: "560 kcal",
        protein: "32g",
        image: dishPhoto("1711565129403-c098bb10695b"),
      },
      {
        name: "Tofu Tikka Bowl",
        price: "₹189",
        calories: "520 kcal",
        protein: "30g",
        image: dishPhoto("1546069901-ba9599a7e63c"),
      },
      {
        name: "Millet Veg Dum Biryani",
        price: "₹199",
        calories: "600 kcal",
        protein: "26g",
        image: dishPhoto("1705174299330-939dd03cc864"),
      },
    ],
  },
  {
    title: "Snacks and light meals",
    range: "₹69–129",
    image:
      "https://images.unsplash.com/photo-1788602563638-840d0d1d3ad2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    alt: "Indian chaat topped with yogurt and pomegranate",
    items: [
      {
        name: "Masala Makhana Roast",
        price: "₹69",
        calories: "150 kcal",
        protein: "5g",
        image: dishPhoto("1710421576768-ff985fa63b60"),
      },
      {
        name: "Sprouted Chana Chaat Box",
        price: "₹79",
        calories: "180 kcal",
        protein: "11g",
        image: dishPhoto("1622732777601-e744c3401d44"),
      },
      {
        name: "Baked Mirchi Bajji Bites",
        price: "₹89",
        calories: "210 kcal",
        protein: "8g",
        image: dishPhoto("1765360024320-b2ab819c6f75"),
      },
      {
        name: "Baked Irani Veg Wrap",
        price: "₹99",
        calories: "320 kcal",
        protein: "12g",
        image: dishPhoto("1752095809096-f09d22c466c5"),
      },
      {
        name: "Ragi Dosa Breakfast Box",
        price: "₹129",
        calories: "380 kcal",
        protein: "11g",
        image: dishPhoto("1668236543090-82eba5ee5976"),
      },
    ],
  },
];

const nonVegMenuCategories = [
  {
    title: "Daily non-veg meals",
    range: "₹139–189",
    image:
      "https://images.unsplash.com/photo-1708782344490-9026aaa5eec7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    alt: "Indian chicken curry served with rice",
    items: [
      {
        name: "Andhra Egg Curry Meal",
        price: "₹139",
        calories: "540 kcal",
        protein: "26g",
        image: dishPhoto("1764315197254-94385571df22"),
      },
      {
        name: "Hyderabadi Chicken Curry Rice",
        price: "₹159",
        calories: "610 kcal",
        protein: "35g",
        image: dishPhoto("1691170979035-27e5ec943205"),
      },
      {
        name: "Chicken Khatti Dal Combo",
        price: "₹169",
        calories: "620 kcal",
        protein: "39g",
        image: dishPhoto("1734770931927-6410f9a64832"),
      },
      {
        name: "Fish Pulusu Rice Meal",
        price: "₹179",
        calories: "580 kcal",
        protein: "34g",
        image: dishPhoto("1620894580123-466ad3a0ca06"),
      },
      {
        name: "Deccani Chicken Roti Meal",
        price: "₹189",
        calories: "600 kcal",
        protein: "42g",
        image: dishPhoto("1565557623262-b51c2513a641"),
      },
    ],
  },
  {
    title: "High-protein non-veg",
    range: "₹179–229",
    image:
      "https://images.unsplash.com/photo-1781332149415-f420708ab98f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    alt: "Grilled chicken protein bowl with vegetables",
    items: [
      {
        name: "Egg & Chana Power Bowl",
        price: "₹179",
        calories: "500 kcal",
        protein: "32g",
        image: dishPhoto("1623428187969-5da2dcea5ebf"),
      },
      {
        name: "Grilled Chicken Millet Bowl",
        price: "₹199",
        calories: "530 kcal",
        protein: "45g",
        image: dishPhoto("1668665771757-4d42737d295a"),
      },
      {
        name: "Chicken Keema Bagara Bowl",
        price: "₹199",
        calories: "560 kcal",
        protein: "42g",
        image: dishPhoto("1631515243349-e0cb75fb8d3a"),
      },
      {
        name: "Pepper Chicken Brown Rice",
        price: "₹219",
        calories: "590 kcal",
        protein: "48g",
        image: dishPhoto("1682566509568-ded8649b26bb"),
      },
      {
        name: "Tandoori Chicken Protein Bowl",
        price: "₹229",
        calories: "520 kcal",
        protein: "50g",
        image: dishPhoto("1599487488170-d11ec9c172f0"),
      },
      {
        name: "Fish Tikka Millet Bowl",
        price: "₹229",
        calories: "540 kcal",
        protein: "44g",
        image: dishPhoto("1717250180256-2cedbc62180d"),
      },
    ],
  },
  {
    title: "Non-veg snacks",
    range: "₹89–159",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    alt: "Grilled chicken tikka kebabs",
    items: [
      {
        name: "Boiled Egg Chaat",
        price: "₹89",
        calories: "190 kcal",
        protein: "14g",
        image: dishPhoto("1570639518322-96c1d2f28f86"),
      },
      {
        name: "Egg Keema Ragi Roll",
        price: "₹129",
        calories: "330 kcal",
        protein: "22g",
        image: dishPhoto("1599307767316-776533bb941c"),
      },
      {
        name: "Chicken Tikka Bites",
        price: "₹149",
        calories: "280 kcal",
        protein: "30g",
        image: dishPhoto("1527477396000-e27163b481c2"),
      },
      {
        name: "Baked Chicken Irani Wrap",
        price: "₹159",
        calories: "390 kcal",
        protein: "27g",
        image: dishPhoto("1626700051175-6818013e1d4f"),
      },
      {
        name: "Fish Tikka Snack Box",
        price: "₹159",
        calories: "300 kcal",
        protein: "28g",
        image: dishPhoto("1765265432611-17d3f2da2d5d"),
      },
    ],
  },
];

type SelectedDish = {
  name: string;
  price: string;
  calories: string;
  protein: string;
  image: string;
  alt: string;
  category: string;
};

const plans = [
  { name: "5-meal plan", price: "₹599", benefit: "₹120 per meal", note: "Flexible weekly pack" },
  {
    name: "22-meal monthly",
    price: "₹2,399",
    benefit: "About ₹109 per meal",
    note: "Daily weekday lunch",
    popular: true,
  },
  {
    name: "Lunch + dinner",
    price: "₹4,299",
    benefit: "44 meals · about ₹98 each",
    note: "Two weekday meals daily",
  },
  {
    name: "Student plan",
    price: "₹1,999",
    benefit: "Affordable monthly meals",
    note: "Monthly · valid student ID required",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);
  const [menuType, setMenuType] = useState<"veg" | "nonveg">("veg");
  const [selectedDish, setSelectedDish] = useState<SelectedDish | null>(null);
  const [toast, setToast] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("aahar-theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("aahar-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedDish) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedDish(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selectedDish]);

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const activeCategories = menuType === "veg" ? menuCategories : nonVegMenuCategories;

  return (
    <div className="min-h-screen bg-[#dce7eb] text-[#101313] transition-colors duration-300 dark:bg-[#0d292c] dark:text-[#eef7f4]">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#dce7eb]/90 backdrop-blur-xl dark:border-[#9cc3bc]/15 dark:bg-[#0d292c]/90">
        <nav className="page-shell flex h-[76px] items-center justify-between">
          <a href="#" className="flex items-center gap-2.5" aria-label="AAHAR home">
            <LogoMark />
            <span className="text-lg font-bold tracking-[0.08em]">AAHAR</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <button onClick={() => scrollTo("meals")} className="nav-link">
              Meals
            </button>
            <button onClick={() => scrollTo("how-it-works")} className="nav-link">
              How it works
            </button>
            <button onClick={() => scrollTo("plans")} className="nav-link">
              Plans
            </button>
            <button onClick={() => scrollTo("protein")} className="nav-link">
              Plant protein
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode((dark) => !dark)}
              className="icon-button"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <Icon name={darkMode ? "sun" : "moon"} className="size-4.5" />
            </button>
            <button onClick={() => scrollTo("plans")} className="primary-button hidden md:flex">
              Start your plan <Icon name="arrow" className="size-4" />
            </button>

            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="icon-button md:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
            >
              <Icon name={menuOpen ? "close" : "menu"} className="size-5" />
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="page-shell pb-4 md:hidden">
            <div className="rounded-[24px] bg-white p-3 shadow-[0_18px_50px_rgba(34,52,58,.12)] dark:bg-[#17383b]">
              {[
                ["Meals", "meals"],
                ["How it works", "how-it-works"],
                ["Plans", "plans"],
                ["Plant protein", "protein"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold hover:bg-[#eef3f4] dark:hover:bg-white/5"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="page-shell grid min-h-[calc(100svh-76px)] items-center gap-12 py-12 md:py-16 lg:grid-cols-[.92fr_1.08fr] lg:gap-16 lg:py-20">
          <div className="hero-copy max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold shadow-sm dark:bg-white/8">
              <Icon name="leaf" className="size-4 text-[#688456]" />
              Proper meals, made in Hyderabad
            </div>
            <h1 className="text-balance text-[3.15rem] font-semibold leading-[.98] tracking-[-.065em] sm:text-6xl lg:text-[4.7rem]">
              Healthy food.
              <br />
              <span className="text-[#647378] dark:text-[#9bbab5]">Full Hyderabad flavour.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#536267] dark:text-[#b2c9c5] sm:text-lg">
              Daily dabbas with standardized recipes, clear nutrition and authentic
              flavour—delivered to your home, office or campus.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollTo("plans")}
                className="primary-button justify-center px-6 py-4"
              >
                Explore meal plans <Icon name="arrow" className="size-5" />
              </button>
              <button
                onClick={() => scrollTo("meals")}
                className="secondary-button justify-center px-6 py-4"
              >
                View this week’s meals
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#536267] dark:text-[#b2c9c5]">
              {["Fresh daily", "Accurate nutrition", "Free protein trial"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-white dark:bg-white/10">
                    <Icon name="check" className="size-3 text-[#688456]" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-visual relative mx-auto w-full max-w-[620px]">
            <div className="ambient-shape absolute -left-5 top-16 hidden h-36 w-20 rounded-l-[32px] bg-[#9cad91] sm:block" />
            <div className="ambient-shape ambient-shape-delay absolute -right-5 bottom-20 hidden h-44 w-20 rounded-r-[32px] bg-[#efcb73] sm:block" />
            <div className="hero-frame relative rounded-[34px] border border-white/80 bg-white/45 p-3 shadow-[0_30px_80px_rgba(44,67,75,.14)] backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="relative aspect-[4/4.15] overflow-hidden rounded-[27px] sm:aspect-[4/3.7]">
                <img
                  src={images.hero}
                  alt="Fresh Indian meal bowl"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="light-overlay absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-xs font-semibold backdrop-blur">
                  <Icon name="clock" className="size-4 text-[#688456]" /> 25 min
                </div>
                <button
                  onClick={() => notify("Saved to your favourites")}
                  className="icon-button light-overlay absolute right-4 top-4 bg-white/90"
                  aria-label="Save meal"
                >
                  <Icon name="heart" className="size-4" />
                </button>
                <div className="light-overlay absolute inset-x-3 bottom-3 rounded-[22px] bg-white/92 p-5 backdrop-blur-md sm:inset-x-4 sm:bottom-4">
                  <p className="text-xs font-semibold text-[#688456]">Today’s featured bowl</p>
                  <div className="mt-1 flex items-end justify-between gap-4">
                    <h2 className="text-xl font-semibold tracking-[-.035em] sm:text-2xl">
                      Deccani chicken bowl
                    </h2>
                    <span className="shrink-0 rounded-full bg-[#e9efdf] px-3 py-2 text-xs font-semibold">
                      42g protein
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="meals" className="page-shell py-20 sm:py-24">
          <div data-reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="section-label">The AAHAR menu</p>
              <h2 className="section-title">Hyderabadi flavour for every appetite.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#59676c] dark:text-[#b2c9c5] sm:text-right">
              Clear prices and measured nutrition, with meals from ₹69.
            </p>
          </div>

          <div data-reveal className="mt-9">
            <div
              className="mb-4 inline-flex rounded-full bg-white/55 p-1 dark:bg-[#153639]"
              aria-label="Choose meal preference"
            >
              {[
                { value: "veg" as const, label: "Vegetarian", color: "bg-[#688456]" },
                { value: "nonveg" as const, label: "Non-vegetarian", color: "bg-[#a85f4f]" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setMenuType(option.value);
                    setActiveMenu(0);
                  }}
                  aria-pressed={menuType === option.value}
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition-colors ${
                    menuType === option.value
                      ? "bg-[#163b3d] text-white dark:bg-[#b9d0c7] dark:text-[#102b2d]"
                      : "text-[#5b6a6f] dark:text-[#a8bfba]"
                  }`}
                >
                  <span className={`size-2 rounded-full ${option.color}`} />
                  {option.label}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div
                className="flex gap-2 overflow-x-auto pb-1"
                role="tablist"
                aria-label="Meal categories"
              >
                {activeCategories.map((category, index) => (
                  <button
                    key={category.title}
                    role="tab"
                    aria-selected={activeMenu === index}
                    onClick={() => setActiveMenu(index)}
                    className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-semibold transition-colors ${
                      activeMenu === index
                        ? "bg-[#688456] text-white"
                        : "bg-white/60 text-[#526267] dark:bg-[#17383b] dark:text-[#b2c9c5]"
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setActiveMenu(
                      (current) =>
                        (current - 1 + activeCategories.length) % activeCategories.length,
                    )
                  }
                  className="icon-button"
                  aria-label="Previous menu category"
                >
                  <Icon name="arrow" className="size-4 rotate-180" />
                </button>
                <button
                  onClick={() =>
                    setActiveMenu((current) => (current + 1) % activeCategories.length)
                  }
                  className="icon-button"
                  aria-label="Next menu category"
                >
                  <Icon name="arrow" className="size-4" />
                </button>
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-[30px]">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeMenu * 100}%)` }}
                aria-live="polite"
              >
                {activeCategories.map((category) => (
                  <article
                    key={category.title}
                    className="grid min-w-full gap-3 bg-white/55 p-3 dark:bg-[#123235] lg:grid-cols-[.72fr_1.28fr]"
                  >
                    <div className="relative min-h-72 overflow-hidden rounded-[24px] lg:min-h-full">
                      <img
                        src={category.image}
                        alt={category.alt}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                        <p className="text-xs font-semibold uppercase tracking-[.14em] text-white/70">
                          Menu category
                        </p>
                        <h3 className="mt-2 text-3xl font-semibold tracking-[-.04em]">
                          {category.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/75">{category.range}</p>
                      </div>
                    </div>
                    <div className="grid content-start gap-2 sm:grid-cols-2">
                      {category.items.map((item) => (
                        <button
                          key={item.name}
                          onClick={() =>
                            setSelectedDish({
                              ...item,
                              image: item.image,
                              alt: item.name,
                              category: category.title,
                            })
                          }
                          className="dish-button flex min-h-32 flex-col rounded-[20px] bg-[#eef3f4] p-5 text-left dark:bg-[#1a3d40]"
                          aria-label={`View ${item.name}, ${item.price}`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex min-w-0 items-center gap-3">
                              <img
                                src={item.image}
                                alt=""
                                className="size-12 shrink-0 rounded-[14px] object-cover"
                                loading="lazy"
                              />
                              <h4 className="font-semibold leading-5">{item.name}</h4>
                            </div>
                            <span className="shrink-0 text-sm font-bold text-[#688456] dark:text-[#a9c792]">
                              {item.price}
                            </span>
                          </div>
                          <div className="mt-auto flex gap-2 pt-5 text-[11px] font-semibold text-[#657479] dark:text-[#b2c9c5]">
                            <span className="rounded-full bg-white/70 px-2.5 py-1.5 dark:bg-white/8">
                              {item.calories}
                            </span>
                            <span className="rounded-full bg-[#dfe9d4] px-2.5 py-1.5 text-[#45583c] dark:bg-[#294b41] dark:text-[#c6ddbb]">
                              {item.protein} protein
                            </span>
                          </div>
                          <span className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-[#688456] dark:text-[#a9c792]">
                            View dish <Icon name="arrow" className="size-3.5" />
                          </span>
                        </button>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                ["Large portion", "+₹30", "A little more of everything"],
                ["Extra protein", "+₹30", "Add to any eligible meal"],
                ["Delivery", "₹30", "Free on orders of ₹299 or more"],
              ].map(([title, price, copy]) => (
                <div
                  key={title}
                  className="rounded-[20px] border border-black/5 bg-white/45 p-5 dark:border-white/10 dark:bg-[#153639]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold">{title}</p>
                    <span className="text-sm font-bold text-[#688456] dark:text-[#a9c792]">
                      {price}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#66757a] dark:text-[#a8bfba]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="page-shell py-20 sm:py-24">
          <div
            data-reveal
            className="rounded-[34px] bg-white/60 p-6 dark:bg-[#123235] sm:p-10 lg:p-14"
          >
            <div className="max-w-xl">
              <p className="section-label">Simple by design</p>
              <h2 className="section-title">Good lunch, without the daily decision.</h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Choose your plan",
                  copy: "Pick the number of meals and days that suit your routine.",
                  image: images.chicken,
                  alt: "Colourful healthy meal options",
                },
                {
                  number: "02",
                  title: "We cook it fresh",
                  copy: "Every recipe follows the same measured ingredients and portions.",
                  image: images.hero,
                  alt: "Fresh Indian food prepared in serving bowls",
                },
                {
                  number: "03",
                  title: "Lunch arrives",
                  copy: "Reliable delivery to homes, offices and campuses across Hyderabad.",
                  image: images.paneer,
                  alt: "Fresh lunch bowl ready for delivery",
                },
              ].map(({ number, title, copy, image, alt }, index) => (
                <article
                  key={number}
                  data-reveal
                  style={{ transitionDelay: `${120 + index * 100}ms` }}
                  className="motion-card group overflow-hidden rounded-[24px] bg-[#eef3f4] dark:bg-[#1a3d40]"
                >
                  <div className="relative h-44 overflow-hidden sm:h-48 md:h-40 lg:h-48">
                    <img
                      src={image}
                      alt={alt}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <span className="light-overlay absolute left-4 top-4 grid size-10 place-items-center rounded-full text-xs font-bold text-[#688456] shadow-sm">
                      {number}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold tracking-[-.03em]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#617075] dark:text-[#b2c9c5]">
                      {copy}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className="page-shell py-20 sm:py-24">
          <div data-reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="section-label">Subscription model</p>
              <h2 className="section-title">A plan for every appetite.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#59676c] dark:text-[#b2c9c5] sm:text-right">
              Proposed launch pricing.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, index) => (
              <article
                key={plan.name}
                data-reveal
                style={{ transitionDelay: `${index * 75}ms` }}
                className={`motion-card relative flex min-h-64 flex-col rounded-[26px] border p-6 ${
                  plan.popular
                    ? "border-[#688456] bg-[#688456] text-white"
                    : "border-black/5 bg-white/60 dark:border-[#9cc3bc]/15 dark:bg-[#153639]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">
                    Popular
                  </span>
                )}
                <p
                  className={`text-sm font-semibold ${plan.popular ? "text-white/70" : "text-[#607075] dark:text-[#b2c9c5]"}`}
                >
                  {plan.name}
                </p>
                <p className="mt-4 text-4xl font-semibold tracking-[-.05em]">{plan.price}</p>
                <div className="mt-auto pt-8">
                  <p className="font-semibold">{plan.benefit}</p>
                  <p
                    className={`mt-1 text-xs ${plan.popular ? "text-white/65" : "text-[#718085] dark:text-[#8fa09a]"}`}
                  >
                    {plan.note}
                  </p>
                  <button
                    onClick={() => notify(`${plan.name} selected — ordering opens soon`)}
                    className={`mt-5 flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold ${
                      plan.popular
                        ? "bg-white text-[#31412d]"
                        : "bg-[#163b3d] text-white dark:bg-[#b9d0c7] dark:text-[#102b2d]"
                    }`}
                  >
                    Choose plan
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div
            data-reveal
            className="mt-4 flex flex-col gap-3 rounded-[22px] bg-[#163b3d] px-6 py-5 text-white sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-semibold">Every member gets more value.</p>
              <p className="mt-1 text-sm text-white/65">
                Benefits apply across eligible à la carte meal orders.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="rounded-full bg-white/10 px-4 py-2">10% off meals</span>
              <span className="rounded-full bg-white/10 px-4 py-2">Free delivery</span>
            </div>
          </div>
        </section>

        <section id="protein" className="page-shell py-20 sm:py-24">
          <div
            data-reveal
            className="grid overflow-hidden rounded-[34px] bg-[#a9bb9c] text-[#101313] lg:grid-cols-[1.1fr_.9fr]"
          >
            <div className="p-7 sm:p-12 lg:p-14">
              <p className="section-label text-[#32432c]">Pre-launch · In development</p>
              <h2 className="section-title max-w-xl">Plant protein, introduced the right way.</h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-[#34452f]">
                Monthly customers will receive trial sachets only after our meals have repeat
                customers, our food-safety credibility is established, and the formulation passes
                consumer taste testing.
              </p>
              <div className="mt-7 grid gap-2 sm:grid-cols-3">
                {[
                  ["Chocolate", "Broad appeal"],
                  ["Coffee", "For professionals"],
                  ["Vanilla–Strawberry", "A distinctive option"],
                ].map(([flavour, position]) => (
                  <div key={flavour} className="rounded-[18px] bg-white/45 p-4">
                    <p className="text-sm font-semibold">{flavour}</p>
                    <p className="mt-1 text-xs text-[#44543f]">{position}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-5 text-[#44543f]">
                Formulation direction: pea protein isolate + rice protein, subject to R&amp;D,
                amino-acid testing and sensory trials. Proposed sizes: 30g sample, 500g and 1kg
                pouches. Final protein content will be based on the tested formulation—not the
                serving weight.
              </p>
              <button
                onClick={() => notify("You’re on the protein early-access list")}
                className="primary-button mt-8 bg-[#163b3d] text-white hover:bg-[#1d4d50]"
              >
                Join early access <Icon name="arrow" className="size-4" />
              </button>
            </div>
            <div className="grid min-h-[480px] grid-cols-2 gap-2 bg-[#cbd5c4] p-3 sm:gap-3 sm:p-4 lg:min-h-full">
              <figure className="group relative col-span-2 min-h-64 overflow-hidden rounded-[24px]">
                <img
                  src={proteinMockup}
                  alt="AAHAR plant protein sachets in chocolate, coffee and vanilla strawberry"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.01]"
                />
                <figcaption className="light-overlay absolute bottom-3 left-3 rounded-full px-3.5 py-2 text-xs font-semibold">
                  Pre-launch direction
                </figcaption>
              </figure>
              <figure className="group relative min-h-52 overflow-hidden rounded-[24px]">
                <img
                  src={proteinCoffee}
                  alt="Coffee plant protein shake inspiration"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.01]"
                />
                <figcaption className="light-overlay absolute bottom-3 left-3 rounded-full px-3 py-2 text-xs font-semibold">
                  Coffee
                </figcaption>
              </figure>
              <figure className="group relative min-h-52 overflow-hidden rounded-[24px]">
                <img
                  src={proteinStrawberry}
                  alt="Strawberry vanilla smoothie inspiration"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.01]"
                />
                <figcaption className="light-overlay absolute bottom-3 left-3 rounded-full px-3 py-2 text-xs font-semibold">
                  Vanilla–Strawberry
                </figcaption>
              </figure>
              <p className="col-span-2 px-2 pb-1 text-[11px] leading-5 text-[#44543f]">
                Early AAHAR packaging concept for flavour and format exploration. Final packaging
                and formulation are in development.
              </p>
            </div>
          </div>
        </section>

        <section id="cta" className="page-shell py-20 sm:py-24">
          <div
            data-reveal
            className="rounded-[34px] bg-[#163b3d] px-6 py-14 text-center text-white dark:bg-[#153639] sm:px-10 sm:py-20"
          >
            <LogoMark className="mx-auto size-32" />
            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-4xl font-semibold tracking-[-.055em] sm:text-5xl">
              Your everyday lunch, sorted.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/60 sm:text-base">
              Flexible meal plans for individuals, teams and campuses in Hyderabad.
            </p>
            <button
              onClick={() => scrollTo("plans")}
              className="primary-button mx-auto mt-8 bg-white text-black hover:bg-[#edf1f2]"
            >
              View meal plans <Icon name="arrow" className="size-4" />
            </button>
          </div>
        </section>
      </main>

      <footer className="page-shell flex flex-col gap-5 border-t border-black/10 py-8 text-sm text-[#5b6a6f] dark:border-[#9cc3bc]/15 dark:text-[#b2c9c5] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 font-bold text-[#111] dark:text-white">
          <LogoMark className="size-16" />
          AAHAR
        </div>
        <p>Healthy daily dabbas, made in Hyderabad.</p>
        <p>© 2025 AAHAR Nutrition</p>
      </footer>

      {selectedDish && (
        <div
          className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[#07191a]/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dish-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedDish(null);
          }}
        >
          <div className="modal-enter w-full max-w-2xl overflow-hidden rounded-[30px] bg-[#edf3f2] text-[#101313] shadow-[0_30px_100px_rgba(0,0,0,.35)] dark:bg-[#153639] dark:text-[#eef7f4]">
            <div className="grid sm:grid-cols-[.9fr_1.1fr]">
              <div className="relative min-h-64 sm:min-h-[430px]">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-[#101313]">
                  {selectedDish.category}
                </span>
              </div>
              <div className="flex flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="section-label">Dish details</p>
                    <h2
                      id="dish-title"
                      className="text-3xl font-semibold leading-tight tracking-[-.04em]"
                    >
                      {selectedDish.name}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedDish(null)}
                    className="icon-button shrink-0"
                    aria-label="Close dish details"
                  >
                    <Icon name="close" className="size-4" />
                  </button>
                </div>
                <p className="mt-6 text-4xl font-semibold tracking-[-.05em] text-[#688456] dark:text-[#a9c792]">
                  {selectedDish.price}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-[18px] bg-white/70 p-4 dark:bg-white/8">
                    <p className="text-xs text-[#66757a] dark:text-[#a8bfba]">Calories</p>
                    <p className="mt-1 font-semibold">{selectedDish.calories}</p>
                  </div>
                  <div className="rounded-[18px] bg-[#dfe9d4] p-4 text-[#45583c] dark:bg-[#294b41] dark:text-[#c6ddbb]">
                    <p className="text-xs opacity-70">Protein</p>
                    <p className="mt-1 font-semibold">{selectedDish.protein}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-[#66757a] dark:text-[#a8bfba]">
                  Standardized portions, transparent nutrition and fresh daily preparation.
                </p>
                <button
                  onClick={() => {
                    setSelectedDish(null);
                    notify(`${selectedDish.name} selected — ordering opens soon`);
                  }}
                  className="primary-button mt-auto justify-center py-3.5 sm:mt-8"
                >
                  Choose this dish <Icon name="arrow" className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-full bg-[#163b3d] px-5 py-3 text-center text-sm font-semibold text-white shadow-xl"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
