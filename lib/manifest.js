// Single catalog manifest. Merchant facts below come from the project's seed inputs and are
// NOT independently verified (no prices, images or availability are claimed).
export const EVIDENCE = 'SEED_INPUT_NOT_VERIFIED';

export const COLLECTIONS = [
  {
    id: 'col-red-light-therapy',
    key: 'red-light-therapy',
    name: 'Red Light Therapy Devices',
    description:
      'The full Bontanny red light therapy range in one place, from high-power lights to full-body setups. A good starting point if you are still comparing formats.',
    specs: [
      { label: 'Browse', value: 'High-power therapy lights and more' },
      { label: 'Check per model', value: 'Wavelengths (e.g. 660nm and 850nm), output, warranty' },
    ],
    cta: 'Shop Red Light Therapy',
  },
  {
    id: 'col-therapy-panels',
    key: 'therapy-panels',
    name: 'Therapy Panels',
    description:
      'Panel-style devices for covering a larger area of the body, including full-body panel setups for recovery and skin-care routines.',
    specs: [
      { label: 'Format', value: 'Full-body and large-area panels' },
      { label: 'Check per model', value: 'Panel size, wavelengths, power draw' },
    ],
    cta: 'Shop Therapy Panels',
  },
  {
    id: 'col-therapy-belts',
    key: 'therapy-belts',
    name: 'Therapy Belts',
    description:
      'Wearable belts and wraps designed to sit against a specific area, a practical option for targeted sessions at home.',
    specs: [
      { label: 'Format', value: 'Wearable wraps and belts' },
      { label: 'Check per model', value: 'Fit and sizing, wavelengths, session timer' },
    ],
    cta: 'Shop Therapy Belts',
  },
  {
    id: 'col-portable-devices',
    key: 'portable-devices',
    name: 'Portable Devices',
    description:
      'Compact devices for skincare, recovery and use on the go, easy to store and to bring along when you travel.',
    specs: [
      { label: 'Format', value: 'Compact and handheld devices' },
      { label: 'Check per model', value: 'Battery or power source, wavelengths, size' },
    ],
    cta: 'Shop Portable Devices',
  },
];

export const CHECKLIST = [
  { title: 'Wavelengths', text: 'Red light devices commonly list red and near-infrared wavelengths such as 660nm and 850nm. Confirm the exact figures on the product page.' },
  { title: 'Coverage and format', text: 'Panels cover more area, belts target a specific spot, portable devices trade coverage for convenience.' },
  { title: 'Power and session time', text: 'Compare stated output and recommended session length rather than relying on headline claims.' },
  { title: 'Warranty and returns', text: "Read the merchant's current warranty, shipping and return terms before you order." },
];

export const FAQ = [
  {
    q: 'Is PrimeGearLab the Bontanny store?',
    a: 'No. PrimeGearLab is an independent affiliate publisher. Purchases are made on bontanny.com, which handles pricing, shipping, warranty and returns.',
  },
  {
    q: 'Do the links cost me extra?',
    a: 'No. We may earn a commission when you buy through eligible links, at no additional cost to you.',
  },
  {
    q: 'Where do I see current prices and availability?',
    a: 'On the Bontanny website. We do not list prices here because they change and we have not verified them.',
  },
  {
    q: 'Can red light therapy treat a medical condition?',
    a: 'This site makes no medical claims. Talk to a qualified healthcare professional before using any therapy device, especially if you are pregnant, have a medical condition or take photosensitizing medication.',
  },
];
