const placeholder = "placeholder.jpg";

export interface BottleOption {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface SizeOption {
  id: string;
  name: string;
  multiplier: number;
}

export interface PackagingOption {
  id: string;
  name: string;
  image: string;
  price: number;
}

export const BOTTLE_OPTIONS: BottleOption[] = [
  {
    id: "classic",
    name: "Classic",
    image: placeholder,
    price: 0,
  },
  {
    id: "modern",
    name: "Modern",
    image: placeholder,
    price: 15,
  },
  {
    id: "luxe",
    name: "Luxe",
    image: placeholder,
    price: 35,
  },
];

export const SIZE_OPTIONS: SizeOption[] = [
  {
    id: "30ml",
    name: "30ml",
    multiplier: 0.8,
  },
  {
    id: "50ml",
    name: "50ml",
    multiplier: 1,
  },
  {
    id: "100ml",
    name: "100ml",
    multiplier: 1.6,
  },
];

export const SCENT_OPTIONS = {
  top: [
    "Citrus",
    "Bergamot",
    "Lemon",
    "Green Apple",
    "Pear",
    "Watermelon",
    "Mint",
    "Ginger",
  ],
  heart: [
    "Rose",
    "Jasmine",
    "Lavender",
    "Peony",
    "Orchid",
    "Lily",
    "Violet",
    "Chamomile",
  ],
  base: [
    "Vanilla",
    "Sandalwood",
    "Amber",
    "Musk",
    "Cedarwood",
    "Vetiver",
    "Patchouli",
    "Coconut",
  ],
};

export const PACKAGING_OPTIONS: PackagingOption[] = [
  {
    id: "standard",
    name: "Standard Box",
    image: placeholder,
    price: 0,
  },
  {
    id: "gift",
    name: "Gift Wrapped",
    image: placeholder,
    price: 10,
  },
  {
    id: "premium",
    name: "Premium Gift Set",
    image: placeholder,
    price: 25,
  },
];

export const BASE_PRICE = 99;