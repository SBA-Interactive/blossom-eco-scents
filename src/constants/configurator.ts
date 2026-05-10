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
    id: "citrus-bloom",
    name: "Citrus Bloom",
    image: "perfume_citrus_bloom.webp",
    price: 0,
  },
  {
    id: "tropical-sun",
    name: "Tropical Sun",
    image: "perfume_tropical_sun.webp",
    price: 0,
  },
  {
    id: "berry-mist",
    name: "Berry Mist",
    image: "perfume_berry_mist.webp",
    price: 0,
  },
  {
    id: "forest-dew",
    name: "Forest Dew",
    image: "perfume_forest_dew.webp",
    price: 0,
  },
  {
    id: "garden-peel",
    name: "Garden Peel",
    image: "perfume_garden_peel.webp",
    price: 0,
  },
  {
    id: "rose-petal",
    name: "Rose Petal",
    image: "perfume_rose_petal.webp",
    price: 0,
  },
];

export const SIZE_OPTIONS: SizeOption[] = [
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
  {
    id: "150ml",
    name: "150ml",
    multiplier: 2.2,
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
    image: "standard_box.webp",
    price: 0,
  },
  {
    id: "gift",
    name: "Gift Wrapped",
    image: "gift_wrapped_box.webp",
    price: 10,
  },
  {
    id: "premium",
    name: "Luxury Velvet Pouch",
    image: "luxury_velvet_pouch.webp",
    price: 25,
  },
];

export const BASE_PRICE = 99;