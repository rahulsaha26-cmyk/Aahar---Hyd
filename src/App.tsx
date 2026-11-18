import { useEffect, useState } from "react";
import brandLogo from "./assets/aahar-brand-logo.jpg";
import proteinBarChocolate from "./assets/protein-bar-chocolate-crunch.png";
import proteinBarCoffee from "./assets/protein-bar-coffee-mocha.png";
import proteinBarKesar from "./assets/protein-bar-kesar-badam.png";
import proteinPowderChocolate from "./assets/protein-powder-chocolate.png";
import proteinPowderCoffee from "./assets/protein-powder-coffee-mocha.png";
import proteinPowderKesar from "./assets/protein-powder-kesar-badam.png";

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

const proteinBars = [
  { flavor: "Chocolate Crunch", src: proteinBarChocolate },
  { flavor: "Coffee Mocha", src: proteinBarCoffee },
  { flavor: "Kesar Badam", src: proteinBarKesar },
];

const proteinPowders = [
  { flavor: "Chocolate", src: proteinPowderChocolate },
  { flavor: "Kesar Badam", src: proteinPowderKesar },
  { flavor: "Coffee Mocha", src: proteinPowderCoffee },
];

type IconName =
  | "arrow"
  | "cart"
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
    cart: (
      <>
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2 2h2l2.6 12.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6L22 7H5" />
      </>
    ),
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

function LogoMark({ className = "size-16 header-brand-logo" }: { className?: string }) {
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

type CartItem = {
  key: string;
  name: string;
  price: number;
  image?: string;
  calories?: string;
  protein?: string;
  preparationNote?: string;
  quantity: number;
  details: string;
  isPlan?: boolean;
};

const getAdjustedCalories = (
  calories: string,
  portion: "Regular" | "Large",
  extraProtein: boolean,
) => {
  const baseCalories = Number.parseInt(calories, 10);
  const portionCalories = portion === "Large" ? Math.round(baseCalories * 1.25) : baseCalories;
  return `${portionCalories + (extraProtein ? 100 : 0)} kcal`;
};

const getAdjustedProtein = (
  protein: string,
  portion: "Regular" | "Large",
  extraProtein: boolean,
) => {
  const baseProtein = Number.parseInt(protein, 10);
  const portionProtein = portion === "Large" ? Math.round(baseProtein * 1.25) : baseProtein;
  return `${portionProtein + (extraProtein ? 25 : 0)}g`;
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
    name: "Whole-day monthly",
    price: "₹5,499",
    benefit: "66 meals · about ₹83 each",
    note: "Breakfast, lunch & dinner",
  },
];

type SurveyAnswer = {
  routine: string;
  concern: string;
  requirements: string[];
  dietary: string;
  dietaryOther: string;
};

const surveySteps = [
  {
    key: "routine" as const,
    label: "Your routine",
    title: "Who are we planning meals for?",
    options: ["Individual schedule", "Corporate workday", "Mixed routine"],
  },
  {
    key: "concern" as const,
    label: "Your concern",
    title: "What does your current food routine feel like?",
    options: [
      "I often skip meals or under-eat",
      "I overconsume fried or sugary food",
      "I need a more balanced routine",
      "I train and need more protein",
    ],
  },
  {
    key: "requirements" as const,
    label: "Nutrition priorities",
    title: "Which nutrients or outcomes should we prioritise?",
    options: [
      "Protein",
      "Vitamin B foods",
      "Iron-rich foods",
      "Omega-6 sources",
      "Calcium + Vitamin D",
      "Steady energy",
      "Lighter portions",
    ],
  },
  {
    key: "dietary" as const,
    label: "Dietary needs",
    title: "Anything we should avoid or account for?",
    options: ["No restrictions", "Vegetarian", "Avoid dairy", "Avoid nuts", "Other"],
  },
];

export default function App() {
  const [view, setView] = useState<
    "home" | "survey" | "recommendations" | "cart" | "checkout" | "done"
  >("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);
  const [menuType, setMenuType] = useState<"veg" | "nonveg">("veg");
  const [selectedDish, setSelectedDish] = useState<SelectedDish | null>(null);
  const [selectedDishOrigin, setSelectedDishOrigin] = useState<
    "home" | "recommendations" | "cart"
  >("home");
  const [portion, setPortion] = useState<"Regular" | "Large">("Regular");
  const [extraProtein, setExtraProtein] = useState(false);
  const [preparationNote, setPreparationNote] = useState("");
  const [editingCartItemKey, setEditingCartItemKey] = useState<string | null>(null);
  const [pendingCartItem, setPendingCartItem] = useState<CartItem | null>(null);
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("aahar-cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [lastOrder, setLastOrder] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("aahar-last-order");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [customer, setCustomer] = useState({ name: "", phone: "", address: "" });
  const [checkoutError, setCheckoutError] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [toast, setToast] = useState("");
  const [surveyStep, setSurveyStep] = useState(0);
  const [surveyAnswers, setSurveyAnswers] = useState<SurveyAnswer>({
    routine: "",
    concern: "",
    requirements: [],
    dietary: "",
    dietaryOther: "",
  });
  const [recommendedMeals, setRecommendedMeals] = useState<
    (SelectedDish & { slot: string; reason: string; focus: string[] })[]
  >([]);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("aahar-theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("aahar-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("aahar-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("aahar-last-order", JSON.stringify(lastOrder));
  }, [lastOrder]);

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
      if (event.key === "Escape") closeDishDetails();
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selectedDish]);

  useEffect(() => {
    if (!pendingCartItem) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPendingCartItem(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [pendingCartItem]);

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  };

  const closeDishDetails = () => {
    setSelectedDish(null);
    setEditingCartItemKey(null);
    setPreparationNote("");
    if (selectedDishOrigin === "recommendations") {
      setView("recommendations");
    } else if (selectedDishOrigin === "cart") {
      setView("cart");
    }
  };

  const scrollTo = (id: string) => {
    setView("home");
    setMenuOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const activeCategories = menuType === "veg" ? menuCategories : nonVegMenuCategories;
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const hasPlan = cart.some((item) => item.isPlan);
  const deliveryFee = cart.length && !hasPlan && cartSubtotal < 299 ? 30 : 0;
  const cartTotal = cartSubtotal + deliveryFee;
  const selectedDishCalories = selectedDish
    ? getAdjustedCalories(selectedDish.calories, portion, extraProtein)
    : "";
  const selectedDishProtein = selectedDish
    ? getAdjustedProtein(selectedDish.protein, portion, extraProtein)
    : "";

  const addMealToCart = (
    dish: SelectedDish,
    selectedPortion: "Regular" | "Large" = "Regular",
    includeExtraProtein = false,
    preparationNote = "",
  ) => {
    const basePrice = Number(dish.price.replace(/[^\d]/g, ""));
    const price =
      basePrice + (selectedPortion === "Large" ? 30 : 0) + (includeExtraProtein ? 30 : 0);
    const details = [selectedPortion, includeExtraProtein ? "Extra protein" : ""]
      .filter(Boolean)
      .join(" · ");
    const key = `${dish.name}-${details}${preparationNote ? `-${preparationNote}` : ""}`;
    setCart((items) => {
      const existing = items.find((item) => item.key === key);
      if (existing) {
        return items.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [
        ...items,
        {
          key,
          name: dish.name,
          price,
          image: dish.image,
          calories: getAdjustedCalories(dish.calories, selectedPortion, includeExtraProtein),
          protein: getAdjustedProtein(dish.protein, selectedPortion, includeExtraProtein),
          preparationNote: preparationNote || undefined,
          quantity: 1,
          details,
        },
      ];
    });
    notify(`${dish.name} added to your cart`);
  };

  const addDishToCart = () => {
    if (!selectedDish) return;
    const note = preparationNote.trim();
    if (editingCartItemKey) {
      const basePrice = Number(selectedDish.price.replace(/[^\d]/g, ""));
      const price = basePrice + (portion === "Large" ? 30 : 0) + (extraProtein ? 30 : 0);
      const details = [portion, extraProtein ? "Extra protein" : ""].filter(Boolean).join(" · ");
      const key = `${selectedDish.name}-${details}${note ? `-${note}` : ""}`;
      setCart((items) => {
        const editedItem = items.find((item) => item.key === editingCartItemKey);
        if (!editedItem) return items;
        const updatedItem: CartItem = {
          ...editedItem,
          key,
          price,
          image: selectedDish.image,
          calories: getAdjustedCalories(selectedDish.calories, portion, extraProtein),
          protein: getAdjustedProtein(selectedDish.protein, portion, extraProtein),
          preparationNote: note || undefined,
          details,
        };
        const remainingItems = items.filter((item) => item.key !== editingCartItemKey);
        const duplicate = remainingItems.find((item) => item.key === key);
        if (duplicate) {
          return remainingItems.map((item) =>
            item.key === key ? { ...item, quantity: item.quantity + editedItem.quantity } : item,
          );
        }
        return [...remainingItems, updatedItem];
      });
      notify(`${selectedDish.name} updated in your cart`);
      setView("cart");
    } else {
      addMealToCart(selectedDish, portion, extraProtein, note);
    }
    setSelectedDish(null);
    setEditingCartItemKey(null);
    setPortion("Regular");
    setExtraProtein(false);
    setPreparationNote("");
    if (selectedDishOrigin === "recommendations") {
      setView("recommendations");
    } else if (selectedDishOrigin === "cart") {
      setView("cart");
    }
  };

  const openCartMeal = (item: CartItem, editExisting: boolean) => {
    const category = [...menuCategories, ...nonVegMenuCategories].find((menuCategory) =>
      menuCategory.items.some((dish) => dish.name === item.name),
    );
    const dish = category?.items.find((menuItem) => menuItem.name === item.name);
    if (!category || !dish) {
      notify("This meal can’t be customized from the cart.");
      return;
    }

    setPendingCartItem(null);
    setEditingCartItemKey(editExisting ? item.key : null);
    setSelectedDishOrigin("cart");
    setSelectedDish({ ...dish, alt: dish.name, category: category.title });
    setPortion(item.details.split(" · ").includes("Large") ? "Large" : "Regular");
    setExtraProtein(item.details.split(" · ").includes("Extra protein"));
    setPreparationNote(item.preparationNote ?? "");
  };

  const repeatLastOrder = () => {
    setCart((items) => {
      const nextItems = [...items];
      lastOrder.forEach((lastItem) => {
        const existing = nextItems.find((item) => item.key === lastItem.key);
        if (existing) {
          const index = nextItems.indexOf(existing);
          nextItems[index] = { ...existing, quantity: existing.quantity + lastItem.quantity };
        } else {
          nextItems.push({ ...lastItem });
        }
      });
      return nextItems;
    });
    setView("cart");
    notify("Your last order was added to the cart");
  };

  const addPlanToCart = (plan: (typeof plans)[number]) => {
    const price = Number(plan.price.replace(/[^\d]/g, ""));
    setCart((items) => [
      ...items.filter((item) => !item.isPlan),
      {
        key: `plan-${plan.name}`,
        name: plan.name,
        price,
        image: images.hero,
        quantity: 1,
        details: plan.note,
        isPlan: true,
      },
    ]);
    setView("cart");
    notify(`${plan.name} added to your cart`);
  };

  const updateQuantity = (key: string, delta: number) => {
    setCart((items) =>
      items
        .map((item) => (item.key === key ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  const submitOrder = () => {
    if (!customer.name.trim() || customer.phone.trim().length < 8 || !customer.address.trim()) {
      setCheckoutError("Please enter your name, a valid phone number, and delivery address.");
      return;
    }
    setCheckoutError("");
    setOrderNumber(`AH${Math.floor(1000 + Math.random() * 9000)}`);
    setLastOrder(cart);
    setCart([]);
    setView("done");
  };

  const startSurvey = () => {
    setSurveyStep(0);
    setSurveyAnswers({
      routine: "",
      concern: "",
      requirements: [],
      dietary: "",
      dietaryOther: "",
    });
    setView("survey");
  };

  const finishSurvey = () => {
    const ironFocused = surveyAnswers.requirements.includes("Iron-rich foods");
    const vitaminBFocused = surveyAnswers.requirements.includes("Vitamin B foods");
    const omega6Focused = surveyAnswers.requirements.includes("Omega-6 sources");
    const calciumFocused = surveyAnswers.requirements.includes("Calcium + Vitamin D");
    const proteinFocused =
      surveyAnswers.requirements.includes("Protein") ||
      surveyAnswers.concern === "I train and need more protein";
    const lighter = surveyAnswers.requirements.includes("Lighter portions");
    const categories =
      surveyAnswers.dietary === "No restrictions" && proteinFocused
        ? nonVegMenuCategories
        : menuCategories;
    const lunchCategory = proteinFocused ? categories[1] : categories[0];
    const snackCategory = categories[2];
    const dinnerCategory = lighter ? categories[2] : categories[0];
    const lunchItem = ironFocused
      ? menuCategories[0].items[2]
      : proteinFocused
        ? lunchCategory.items[2]
        : lunchCategory.items[0];
    const snackItem = vitaminBFocused
      ? menuCategories[2].items[3]
      : omega6Focused
        ? menuCategories[2].items[1]
        : snackCategory.items[0];
    const dinnerItem = calciumFocused ? menuCategories[1].items[2] : dinnerCategory.items[1];
    const meals = [
      {
        ...lunchItem,
        alt: lunchItem.name,
        category: ironFocused ? menuCategories[0].title : lunchCategory.title,
        slot: "Lunch",
        focus: [
          ...(ironFocused ? ["Iron-rich foods"] : []),
          ...(proteinFocused ? ["Protein"] : []),
          ...(surveyAnswers.requirements.includes("Steady energy") ? ["Steady energy"] : []),
        ],
        reason: ironFocused
          ? "A lentil-and-greens inspired midday meal"
          : proteinFocused
            ? "A protein-forward midday meal"
            : "A balanced everyday thali",
      },
      {
        ...snackItem,
        alt: snackItem.name,
        category: menuCategories[2].title,
        slot: "Snack",
        focus: [
          ...(vitaminBFocused ? ["Vitamin B foods"] : []),
          ...(omega6Focused ? ["Omega-6 sources"] : []),
        ],
        reason: vitaminBFocused
          ? "A nourishing bite selected for your Vitamin B foods focus"
          : omega6Focused
            ? "Selected to align with your Omega-6 sources preference"
            : "A lighter pick to bridge your work or class day",
      },
      {
        ...dinnerItem,
        alt: dinnerItem.name,
        category: calciumFocused ? menuCategories[1].title : dinnerCategory.title,
        slot: "Dinner",
        focus: [
          ...(calciumFocused ? ["Calcium + Vitamin D"] : []),
          ...(lighter ? ["Lighter portions"] : []),
        ],
        reason: calciumFocused
          ? "Selected to align with your Calcium + Vitamin D preference"
          : lighter
            ? "A lighter evening option"
            : "A satisfying end-of-day meal",
      },
    ];
    setRecommendedMeals(meals);
    setView("recommendations");
    window.setTimeout(() => {
      document.getElementById("recommendation-list")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  return (
    <div className="min-h-screen bg-[#dce7eb] text-[#101313] transition-colors duration-300 dark:bg-[#0d292c] dark:text-[#eef7f4]">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#dce7eb]/90 backdrop-blur-xl dark:border-[#9cc3bc]/15 dark:bg-[#0d292c]/90">
        <nav className="page-shell flex h-[76px] items-center justify-between">
          <button
            onClick={() => setView("home")}
            className="flex items-center gap-2.5"
            aria-label="AAHAR home"
          >
            <LogoMark />
            <span className="text-lg font-bold tracking-[0.08em]">AAHAR</span>
          </button>

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
            <button onClick={startSurvey} className="nav-link">
              Find my meals
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
              onClick={() => setView("cart")}
              className="icon-button relative"
              aria-label={`Open cart${cart.length ? `, ${cart.length} item${cart.length === 1 ? "" : "s"}` : ""}`}
            >
              <Icon name="cart" className="size-4.5" />
              {cart.length > 0 && (
                <span
                  key={cartItemCount}
                  className="cart-count-pop absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#a85f4f] text-[10px] font-bold text-white"
                >
                  {cartItemCount}
                </span>
              )}
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
            <div className="mobile-menu-enter rounded-[24px] bg-white p-3 shadow-[0_18px_50px_rgba(34,52,58,.12)] dark:bg-[#17383b]">
              {[
                ["Meals", "meals"],
                ["How it works", "how-it-works"],
                ["Plans", "plans"],
                ["Find my meals", "survey"],
                ["Plant protein", "protein"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => (id === "survey" ? startSurvey() : scrollTo(id))}
                  className="block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold hover:bg-[#eef3f4] dark:hover:bg-white/5"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className={view === "home" ? "" : "hidden"}>
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
            <button
              onClick={startSurvey}
              className="mt-7 text-sm font-semibold text-[#688456] underline decoration-[#688456]/30 underline-offset-4 hover:decoration-[#688456]"
            >
              Not sure what to choose? Take the 30-second meal finder →
            </button>
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

        <section id="meals" className="page-shell py-12 sm:py-16">
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
                          onClick={() => {
                            setSelectedDishOrigin("home");
                            setEditingCartItemKey(null);
                            setPortion("Regular");
                            setExtraProtein(false);
                            setPreparationNote("");
                            setSelectedDish({
                              ...item,
                              image: item.image,
                              alt: item.name,
                              category: category.title,
                            });
                          }}
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

        <section id="how-it-works" className="page-shell py-12 sm:py-16">
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

        <section id="plans" className="page-shell py-12 sm:py-16">
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
                    onClick={() => addPlanToCart(plan)}
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

        <section id="protein" className="page-shell py-12 sm:py-16">
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
                  ["Chocolate Crunch", "A rich cocoa bite"],
                  ["Coffee Mocha", "For coffee lovers"],
                  ["Kesar Badam", "Saffron and almond"],
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
            <div className="grid min-h-[480px] grid-cols-3 grid-rows-4 gap-2.5 bg-[#cbd5c4] p-3 sm:gap-3 sm:p-4 lg:min-h-full">
              {[...proteinBars, ...proteinPowders].map(({ flavor, src }, index) => {
                const isBar = index < proteinBars.length;
                const isFeatured = index === 0 || index === proteinBars.length;

                return (
                  <figure
                    key={`${isBar ? "bar" : "powder"}-${flavor}`}
                    className={`group relative min-h-0 min-w-0 overflow-hidden rounded-[20px] ${
                      isFeatured ? "col-span-2 row-span-2" : ""
                    } ${isBar ? "bg-[#ddc2a3]" : "bg-[#b99a79]"}`}
                  >
                    <img
                      src={src}
                      alt={`AAHAR ${flavor} ${isBar ? "ragi protein bar" : "protein powder"}`}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    {isFeatured && (
                      <figcaption className="absolute left-2 top-2 rounded-full bg-[#e8eddf]/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.12em] text-[#44543f] sm:left-3 sm:top-3">
                        {isBar ? "Ragi protein bars" : "Protein powders"}
                      </figcaption>
                    )}
                  </figure>
                );
              })}
            </div>
          </div>
        </section>

        <section id="cta" className="page-shell py-12 sm:py-16">
          <div
            data-reveal
            className="rounded-[34px] bg-[#163b3d] px-6 py-14 text-center text-white dark:bg-[#153639] sm:px-10 sm:py-20"
          >
            <LogoMark className="mx-auto size-32" />
            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-4xl font-semibold tracking-[-.055em] sm:text-5xl">
              Your everyday meal, sorted.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/60 sm:text-base">
              Flexible meal plans for individuals, teams and campuses in Hyderabad.
            </p>
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white/75">
                <Icon name="leaf" className="size-4 text-[#a9c792]" />
                Freshly prepared daily
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white/75">
                <Icon name="check" className="size-4 text-[#a9c792]" />
                Clear nutrition details
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white/75">
                <Icon name="clock" className="size-4 text-[#a9c792]" />
                Flexible meal plans
              </span>
            </div>
            <button
              onClick={() => scrollTo("plans")}
              className="primary-button mx-auto mt-8 bg-white text-black hover:bg-[#edf1f2]"
            >
              View meal plans <Icon name="arrow" className="size-4" />
            </button>
          </div>
        </section>
      </main>

      {view === "survey" && (
        <main className="page-shell py-12 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <p className="section-label">Personal meal finder</p>
            <h1 className="section-title">Let’s build your workday meal plan.</h1>
            <p className="mt-4 text-sm leading-6 text-[#66757a] dark:text-[#a8bfba]">
              Tell us about your routine, nutrition concerns, and dietary requirements. We’ll
              suggest lunch, a snack, and dinner for a typical Hyderabad work or college day.
            </p>

            <div className="mt-8 flex items-center gap-2" aria-label="Survey progress">
              {surveySteps.map((step, index) => (
                <div key={step.key} className="flex flex-1 items-center gap-2">
                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full text-xs font-bold ${
                      index <= surveyStep
                        ? "bg-[#688456] text-white"
                        : "bg-white/60 text-[#66757a] dark:bg-[#17383b] dark:text-[#a8bfba]"
                    }`}
                  >
                    {index + 1}
                  </span>
                  {index < surveySteps.length - 1 && (
                    <span className="h-px flex-1 bg-black/10 dark:bg-white/10" />
                  )}
                </div>
              ))}
            </div>

            <div
              key={surveyStep}
              className="survey-step-enter mt-6 rounded-[30px] bg-white/60 p-6 dark:bg-[#123235] sm:p-10"
            >
              <p className="section-label">{surveySteps[surveyStep].label}</p>
              <h2 className="text-3xl font-semibold tracking-[-.04em]">
                {surveySteps[surveyStep].title}
              </h2>
              {surveySteps[surveyStep].key === "requirements" && (
                <p className="mt-3 text-sm text-[#66757a] dark:text-[#a8bfba]">
                  Select all that you want your demo plan to focus on. These are nutrition
                  priorities, not a medical deficiency diagnosis.
                </p>
              )}
              <div className="mt-7 grid gap-3">
                {surveySteps[surveyStep].options.map((option) => {
                  const key = surveySteps[surveyStep].key;
                  const answer = surveyAnswers[key];
                  const selected = Array.isArray(answer)
                    ? answer.includes(option)
                    : answer === option;
                  return (
                    <button
                      key={option}
                      onClick={() =>
                        key === "requirements"
                          ? setSurveyAnswers({
                              ...surveyAnswers,
                              requirements: selected
                                ? surveyAnswers.requirements.filter((item) => item !== option)
                                : [...surveyAnswers.requirements, option],
                            })
                          : setSurveyAnswers({ ...surveyAnswers, [key]: option })
                      }
                      aria-pressed={selected}
                      className={`flex items-center justify-between rounded-[18px] border p-4 text-left text-sm font-semibold transition-colors ${
                        selected
                          ? "border-[#688456] bg-[#dfe9d4] text-[#45583c] dark:bg-[#294b41] dark:text-[#c6ddbb]"
                          : "border-black/5 bg-[#eef3f4] dark:border-white/10 dark:bg-[#1a3d40]"
                      }`}
                    >
                      {option}
                      {selected && <Icon name="check" className="size-4" />}
                    </button>
                  );
                })}
              </div>
              {surveySteps[surveyStep].key === "dietary" && surveyAnswers.dietary === "Other" && (
                <div className="mt-5">
                  <label htmlFor="dietary-other">What should we avoid?</label>
                  <textarea
                    id="dietary-other"
                    rows={3}
                    value={surveyAnswers.dietaryOther}
                    onChange={(event) =>
                      setSurveyAnswers({ ...surveyAnswers, dietaryOther: event.target.value })
                    }
                    placeholder="Tell us which ingredients or foods to avoid"
                  />
                  <p className="mt-2 text-xs leading-5 text-[#66757a] dark:text-[#a8bfba]">
                    We’ll include this as a preparation note with your selected meals.
                  </p>
                </div>
              )}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {surveyStep > 0 && (
                  <button
                    onClick={() => setSurveyStep((step) => step - 1)}
                    className="secondary-button justify-center px-5 py-3"
                  >
                    Back
                  </button>
                )}
                <button
                  disabled={
                    Array.isArray(surveyAnswers[surveySteps[surveyStep].key])
                      ? surveyAnswers[surveySteps[surveyStep].key].length === 0
                      : !surveyAnswers[surveySteps[surveyStep].key] ||
                        (surveySteps[surveyStep].key === "dietary" &&
                          surveyAnswers.dietary === "Other" &&
                          !surveyAnswers.dietaryOther.trim())
                  }
                  onClick={() =>
                    surveyStep === surveySteps.length - 1
                      ? finishSurvey()
                      : setSurveyStep((step) => step + 1)
                  }
                  className="primary-button flex-1 justify-center disabled:cursor-not-allowed disabled:opacity-45"
                >
                  {surveyStep === surveySteps.length - 1 ? "Show my meals" : "Next"}
                  <Icon name="arrow" className="size-4" />
                </button>
              </div>
            </div>
            <button
              onClick={() => setView("home")}
              className="mx-auto mt-5 block text-sm font-semibold text-[#688456]"
            >
              Skip for now
            </button>
          </div>
        </main>
      )}

      {view === "recommendations" && (
        <main className="page-shell py-12 sm:py-20">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="section-label">Your AAHAR picks</p>
              <h1 className="section-title">Your workday meal plan.</h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-[#66757a] dark:text-[#a8bfba]">
                Designed for a {surveyAnswers.routine.toLowerCase()} with a focus on{" "}
                <span className="font-semibold text-[#688456]">
                  {surveyAnswers.requirements.join(", ").toLowerCase()}
                </span>
                . Tap a meal to review portions and add it to your cart.
              </p>
            </div>
            <button onClick={startSurvey} className="secondary-button justify-center px-4 py-3">
              Retake survey
            </button>
          </div>
          <div className="mt-6 rounded-[22px] border border-[#688456]/20 bg-[#dfe9d4]/70 p-4 text-sm text-[#45583c] dark:bg-[#294b41] dark:text-[#c6ddbb]">
            <p className="font-semibold">Your plan focus</p>
            <p className="mt-1">
              {surveyAnswers.concern} ·{" "}
              {surveyAnswers.dietary === "Other"
                ? `Avoid: ${surveyAnswers.dietaryOther.trim()}`
                : surveyAnswers.dietary}
            </p>
            <p className="mt-2 text-xs leading-5 opacity-80">
              This is a demo meal-planning guide based on your self-reported preferences, not a
              medical diagnosis or treatment for a deficiency. Consult a qualified professional for
              medical nutrition advice. Survey-focus labels show which selections informed each
              pick; they do not confirm nutrient levels.
            </p>
          </div>
          <div id="recommendation-list" className="mt-8 grid scroll-mt-24 gap-4 md:grid-cols-3">
            {recommendedMeals.map((meal, index) => (
              <article
                key={meal.name}
                className="recommendation-card flex flex-col overflow-hidden rounded-[26px] bg-white/60 dark:bg-[#153639]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <img
                  src={meal.image}
                  alt={meal.alt}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-base font-bold uppercase tracking-[.14em] text-[#688456]">
                    {meal.slot}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[.12em] text-[#688456]">
                    {meal.category}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold tracking-[-.03em]">{meal.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#66757a] dark:text-[#b2c9c5]">
                    {meal.reason}
                  </p>
                  {meal.focus.length > 0 && (
                    <div className="mt-3 rounded-[16px] bg-[#dfe9d4]/70 px-3 py-2.5 text-xs text-[#45583c] dark:bg-[#294b41] dark:text-[#c6ddbb]">
                      <p className="font-semibold">Survey focus</p>
                      <p className="mt-1">{meal.focus.join(" · ")}</p>
                    </div>
                  )}
                  <div className="mt-4 flex gap-2 text-xs font-semibold text-[#66757a] dark:text-[#b2c9c5]">
                    <span className="rounded-full bg-[#eef3f4] px-3 py-1.5 dark:bg-white/8">
                      {meal.calories}
                    </span>
                    <span className="rounded-full bg-[#dfe9d4] px-3 py-1.5 text-[#45583c] dark:bg-[#294b41] dark:text-[#c6ddbb]">
                      {meal.protein} protein
                    </span>
                  </div>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <span className="text-lg font-bold text-[#688456] dark:text-[#a9c792]">
                      {meal.price}
                    </span>
                    <button
                      onClick={() => {
                        setSelectedDishOrigin("recommendations");
                        setEditingCartItemKey(null);
                        setSelectedDish(meal);
                        setPortion("Regular");
                        setExtraProtein(false);
                        setPreparationNote(
                          surveyAnswers.dietary === "Other"
                            ? surveyAnswers.dietaryOther.trim()
                            : "",
                        );
                      }}
                      className="primary-button px-4 py-2.5"
                    >
                      Add meal <Icon name="arrow" className="size-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button
            onClick={() => setView("home")}
            className="secondary-button mx-auto mt-8 px-5 py-3"
          >
            Browse full menu
          </button>
        </main>
      )}

      {view === "cart" && (
        <main className="page-shell py-12 sm:py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="section-label">Your order</p>
              <h1 className="section-title">Build your meal box.</h1>
            </div>
            <div className="flex flex-wrap justify-end gap-2">
              {cart.length > 0 && lastOrder.length > 0 && (
                <button onClick={repeatLastOrder} className="secondary-button px-4 py-3">
                  Repeat last order
                </button>
              )}
              <button onClick={() => setView("home")} className="secondary-button px-4 py-3">
                Continue browsing
              </button>
            </div>
          </div>

          {cart.length === 0 ? (
            <div className="mt-8 rounded-[30px] bg-white/60 p-8 text-center dark:bg-[#123235] sm:p-14">
              <p className="text-xl font-semibold">Your cart is waiting for something good.</p>
              <p className="mt-2 text-sm text-[#66757a] dark:text-[#a8bfba]">
                Add a meal or choose a plan to get started.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                {lastOrder.length > 0 && (
                  <button onClick={repeatLastOrder} className="primary-button justify-center">
                    Repeat last order <Icon name="arrow" className="size-4" />
                  </button>
                )}
                <button onClick={() => scrollTo("meals")} className="secondary-button justify-center px-5 py-3">
                  Browse meals
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
              <div className="rounded-[30px] bg-white/60 p-4 dark:bg-[#123235] sm:p-6">
                <div className="grid max-h-[70vh] gap-3 overflow-y-auto overscroll-contain pr-2">
                  {cart.map((item) => (
                    <div
                      key={item.key}
                      className="cart-item-enter flex items-center gap-3 rounded-[20px] bg-[#eef3f4] p-3 dark:bg-[#1a3d40]"
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt=""
                          className="size-16 shrink-0 rounded-[15px] object-cover"
                        />
                      ) : (
                        <div className="grid size-16 shrink-0 place-items-center rounded-[15px] bg-[#dfe9d4] text-[#45583c]">
                          <Icon name="box" className="size-6" />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-xs text-[#66757a] dark:text-[#a8bfba]">{item.details}</p>
                        {item.preparationNote && (
                          <p className="mt-1 break-words text-xs leading-5 text-[#45583c] dark:text-[#c6ddbb]">
                            <span className="font-semibold">Kitchen note:</span>{" "}
                            {item.preparationNote}
                          </p>
                        )}
                        {item.calories && (
                          <p className="mt-1 text-xs text-[#66757a] dark:text-[#a8bfba]">
                            {item.calories}
                            {item.protein ? ` · ${item.protein} protein` : ""} · estimated
                          </p>
                        )}
                        <p className="mt-1 text-sm font-bold text-[#688456] dark:text-[#a9c792]">
                          ₹{item.price.toLocaleString("en-IN")}
                        </p>
                        {!item.isPlan && (
                          <button
                            onClick={() => openCartMeal(item, true)}
                            className="mt-1 text-xs font-semibold text-[#688456] underline underline-offset-2 dark:text-[#a9c792]"
                          >
                            Customize meal
                          </button>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.key, -1)}
                          className="icon-button size-9"
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          −
                        </button>
                        <span
                          key={item.quantity}
                          className="quantity-pop w-5 text-center text-sm font-semibold"
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            item.isPlan
                              ? updateQuantity(item.key, 1)
                              : setPendingCartItem(item)
                          }
                          className="icon-button size-9"
                          aria-label={
                            item.isPlan ? `Increase ${item.name} quantity` : `Add another ${item.name}`
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="h-fit rounded-[26px] bg-[#163b3d] p-6 text-white">
                <p className="text-lg font-semibold">Order summary</p>
                <div className="mt-6 grid gap-3 text-sm">
                  <div className="flex justify-between gap-4 text-white/70">
                    <span>Subtotal</span>
                    <span>₹{cartSubtotal.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between gap-4 text-white/70">
                    <span>Delivery</span>
                    <span>{deliveryFee ? `₹${deliveryFee}` : "Free"}</span>
                  </div>
                  <div className="flex justify-between gap-4 border-t border-white/15 pt-4 text-lg font-semibold">
                    <span>Total</span>
                    <span>₹{cartTotal.toLocaleString("en-IN")}</span>
                  </div>
                </div>
                <button
                  onClick={() => setView("checkout")}
                  className="mt-7 flex w-full items-center justify-center rounded-full bg-white px-4 py-3.5 text-sm font-semibold text-[#163b3d] hover:bg-[#edf1f2]"
                >
                  Continue to checkout <Icon name="arrow" className="ml-2 size-4" />
                </button>
                <p className="mt-3 text-center text-xs text-white/55">
                  Free delivery on orders of ₹299 or more.
                </p>
              </aside>
            </div>
          )}
        </main>
      )}

      {view === "checkout" && (
        <main className="page-shell py-12 sm:py-20">
          <div className="max-w-2xl">
            <p className="section-label">Checkout</p>
            <h1 className="section-title">Where should we deliver?</h1>
            <p className="mt-4 text-sm leading-6 text-[#66757a] dark:text-[#a8bfba]">
              We’ll use these details for this order only. Payment opens at launch.
            </p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_.7fr]">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                submitOrder();
              }}
              className="rounded-[30px] bg-white/60 p-6 dark:bg-[#123235] sm:p-8"
            >
              <label htmlFor="customer-name">Name</label>
              <input
                id="customer-name"
                value={customer.name}
                onChange={(event) => setCustomer({ ...customer, name: event.target.value })}
                placeholder="Your full name"
              />
              <label htmlFor="customer-phone">Phone number</label>
              <input
                id="customer-phone"
                inputMode="tel"
                value={customer.phone}
                onChange={(event) => setCustomer({ ...customer, phone: event.target.value })}
                placeholder="10-digit phone number"
              />
              <label htmlFor="customer-address">Delivery address</label>
              <textarea
                id="customer-address"
                rows={4}
                value={customer.address}
                onChange={(event) => setCustomer({ ...customer, address: event.target.value })}
                placeholder="Home, office or campus address in Hyderabad"
              />
              {checkoutError && (
                <p role="alert" className="mt-4 text-sm font-semibold text-[#a85f4f]">
                  {checkoutError}
                </p>
              )}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setView("cart")}
                  className="secondary-button justify-center px-5 py-3"
                >
                  Back to cart
                </button>
                <button type="submit" className="primary-button justify-center px-5 py-3">
                  Place order <Icon name="arrow" className="size-4" />
                </button>
              </div>
            </form>
            <div className="h-fit rounded-[26px] bg-[#163b3d] p-6 text-white">
              <p className="font-semibold">You’re ordering</p>
              <div className="mt-4 grid gap-3 text-sm text-white/75">
                {cart.map((item) => (
                  <div key={item.key} className="flex justify-between gap-4">
                    <div>
                      <span>
                        {item.quantity} × {item.name}
                      </span>
                      {item.preparationNote && (
                        <p className="mt-1 text-xs text-white/65">
                          Kitchen note: {item.preparationNote}
                        </p>
                      )}
                    </div>
                    <span>₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex justify-between border-t border-white/15 pt-4 font-semibold">
                <span>Total</span>
                <span>₹{cartTotal.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
        </main>
      )}

      {view === "done" && (
        <main className="page-shell py-20 sm:py-28">
          <div className="success-enter mx-auto max-w-xl rounded-[34px] bg-white/60 p-8 text-center dark:bg-[#123235] sm:p-14">
            <div className="mx-auto grid size-16 place-items-center rounded-full bg-[#dfe9d4] text-[#45583c] dark:bg-[#294b41] dark:text-[#c6ddbb]">
              <Icon name="check" className="size-7" />
            </div>
            <p className="section-label mt-6">Order received</p>
            <h1 className="section-title mx-auto">Your everyday meal is sorted.</h1>
            <p className="mt-5 text-sm leading-6 text-[#66757a] dark:text-[#a8bfba]">
              Thanks, {customer.name || "there"}. We’ve saved your request and will contact you at{" "}
              {customer.phone || "your phone number"} with the next steps.
            </p>
            <p className="mt-5 rounded-full bg-[#eef3f4] px-4 py-3 text-sm font-semibold dark:bg-[#1a3d40]">
              Order number: {orderNumber}
            </p>
            <button onClick={() => setView("home")} className="primary-button mt-7">
              Back to AAHAR <Icon name="arrow" className="size-4" />
            </button>
          </div>
        </main>
      )}

      <footer className="page-shell flex flex-col gap-5 border-t border-black/10 py-8 text-sm text-[#5b6a6f] dark:border-[#9cc3bc]/15 dark:text-[#b2c9c5] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 font-bold text-[#111] dark:text-white">
          <LogoMark className="size-16" />
          AAHAR
        </div>
        <p>Healthy daily dabbas, made in Hyderabad.</p>
        <p>© 2026 AAHAR Nutrition</p>
      </footer>

      {selectedDish && (
        <div
          className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[#07191a]/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dish-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDishDetails();
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
                    onClick={closeDishDetails}
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
                    <p className="text-xs text-[#66757a] dark:text-[#a8bfba]">Estimated calories</p>
                    <p className="mt-1 font-semibold">{selectedDishCalories}</p>
                  </div>
                  <div className="rounded-[18px] bg-[#dfe9d4] p-4 text-[#45583c] dark:bg-[#294b41] dark:text-[#c6ddbb]">
                    <p className="text-xs opacity-70">Protein</p>
                    <p className="mt-1 font-semibold">{selectedDishProtein}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-[#66757a] dark:text-[#a8bfba]">
                  Standardized portions, transparent nutrition and fresh daily preparation.
                </p>
                <div className="mt-6 grid gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[.12em] text-[#688456]">
                    Customize your meal
                  </p>
                  <p className="text-xs leading-5 text-[#66757a] dark:text-[#a8bfba]">
                    Nutrition estimates include +25% for a large portion and +100 kcal / +25g
                    protein for extra protein.
                  </p>
                  <div className="flex gap-2">
                    {(["Regular", "Large"] as const).map((size) => (
                      <button
                        key={size}
                        onClick={() => setPortion(size)}
                        aria-pressed={portion === size}
                        className={`dish-option flex-1 rounded-full px-3 py-2 text-sm font-semibold ${
                          portion === size
                            ? "bg-[#688456] text-white"
                            : "bg-black/5 dark:bg-white/10"
                        }`}
                      >
                        {size}
                        {size === "Large" && " +₹30"}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setExtraProtein((enabled) => !enabled)}
                    aria-pressed={extraProtein}
                    className={`dish-option rounded-full px-3 py-2 text-left text-sm font-semibold ${
                      extraProtein
                        ? "bg-[#dfe9d4] text-[#45583c] dark:bg-[#294b41] dark:text-[#c6ddbb]"
                        : "bg-black/5 dark:bg-white/10"
                    }`}
                  >
                    {extraProtein ? "✓ " : ""}Extra protein +₹30
                  </button>
                  <label htmlFor="meal-preparation-note">Specific changes / foods to avoid</label>
                  <textarea
                    id="meal-preparation-note"
                    rows={2}
                    value={preparationNote}
                    onChange={(event) => setPreparationNote(event.target.value)}
                    placeholder="e.g. avoid onion, less spice, sauce on the side"
                    className="text-sm"
                  />
                </div>
                <button
                  onClick={addDishToCart}
                  className="primary-button add-to-cart-button mt-auto justify-center py-3.5 sm:mt-8"
                >
                  {editingCartItemKey ? "Save changes" : "Add to cart"}{" "}
                  <Icon name="arrow" className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {pendingCartItem && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-[#07191a]/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="add-another-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setPendingCartItem(null);
          }}
        >
          <div className="modal-enter w-full max-w-md rounded-[30px] bg-[#edf3f2] p-6 text-[#101313] shadow-[0_30px_100px_rgba(0,0,0,.35)] dark:bg-[#153639] dark:text-[#eef7f4] sm:p-8">
            <p className="section-label">Add to your meal box</p>
            <h2
              id="add-another-title"
              className="text-2xl font-semibold tracking-[-.04em]"
            >
              Add another {pendingCartItem.name}?
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#66757a] dark:text-[#a8bfba]">
              Repeat this meal as-is, or customize a new portion and preparation note.
            </p>
            <p className="mt-4 rounded-[16px] bg-white/70 px-4 py-3 text-xs text-[#66757a] dark:bg-white/8 dark:text-[#a8bfba]">
              Current selection: {pendingCartItem.details}
              {pendingCartItem.preparationNote
                ? ` · ${pendingCartItem.preparationNote}`
                : ""}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                onClick={() => {
                  updateQuantity(pendingCartItem.key, 1);
                  setPendingCartItem(null);
                  notify(`${pendingCartItem.name} added to your cart`);
                }}
                className="secondary-button justify-center px-4 py-3"
              >
                Repeat last
              </button>
              <button
                onClick={() => openCartMeal(pendingCartItem, false)}
                className="primary-button justify-center px-4 py-3"
              >
                Customize new
              </button>
            </div>
            <button
              onClick={() => setPendingCartItem(null)}
              className="mt-4 w-full py-2 text-sm font-semibold text-[#66757a] dark:text-[#a8bfba]"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {toast && (
        <div
          role="status"
          key={toast}
          className="toast-enter fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-full bg-[#163b3d] px-5 py-3 text-center text-sm font-semibold text-white shadow-xl"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
