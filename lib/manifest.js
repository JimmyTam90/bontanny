// Catalog manifest. Product facts below were read from the official bontanny.com homepage on
// 2026-10-14 (status OBSERVED). Prices change often: they are shown as "from" prices with a date note.
export const OBSERVED_ON = 'Oct 14, 2026';
export const CDN = 'https://bontanny.com/cdn/shop/files';

export const PRODUCTS = [
  {
    id: 'bo1500-pro-max',
    key: 'bontanny-7-wavelengths-red-light-therapy-panel-pro-max',
    name: 'Bontanny Pro Max Panel (BO-1500 / BO-2400)',
    title:
      'Bontanny Pro Max Red Light Therapy Panel – 7 -Wavelengths(480/630/660/810/830/850/1060nm Blue Red Near Infrared Light Device), Skin Sleep Recovery Pain Relief（Stand included）（Hand-cranked bracket with 180° rotation capability）',
    image: `${CDN}/BO1500.jpg?v=1778375285&width=800`,
    heroImage: `${CDN}/BO1500.jpg?v=1778375285&width=1200`,
    description: 'Full-body panel sold with a stand and a hand-cranked bracket that rotates 180°.',
    specs: [
      { label: 'Wavelengths', value: '480/630/660/810/830/850/1060nm' },
      { label: 'LEDs', value: '300 dual-chip' },
      { label: 'Models', value: 'BO-1500 (400W), BO-2400 (800W)' },
      { label: 'Price', value: 'From $1,423.00 (list $1,999.00)' },
    ],
    cta: 'View Pro Max Panel',
  },
  {
    id: 'bo2400-full-body',
    key: 'red-light-therapy-panel-bo1500',
    name: 'Bontanny BO-1500 / BO-2400 Full Body Panel',
    title:
      'Bontanny Red Light Therapy Full Body Panel, 480/630/660/810/830/850/1060nm 7 Wavelengths Blue Red Near Infrared Light Device with 300 Dual Chip Clinical Grade LEDs, Remote Control, Timer -（Includes standard bracket）-Cannot be rotated 180°| BO1500 / BO2400',
    image: `${CDN}/63747c06349d510c68bcf5e5b707fb2e.jpg?v=1770114302&width=800`,
    description: 'Full-body panel with remote control and timer. The standard bracket does not rotate 180°.',
    specs: [
      { label: 'Wavelengths', value: '480/630/660/810/830/850/1060nm' },
      { label: 'LEDs', value: '300 dual-chip' },
      { label: 'Models', value: 'BO-1500 (400W), BO-2400 (800W)' },
      { label: 'Price', value: 'From $1,328.00 (list $1,999.00)' },
    ],
    cta: 'View Full Body Panel',
  },
  {
    id: 'bl-pro-full-body',
    key: 'bontanny-pro-full-body-red-light-panel',
    name: 'Bontanny Pro Full Body Panel (BL Series)',
    title:
      'Bontanny Pro Red Light Therapy Device for Skin Health and Pain Relief - Adjustable Stand Inc（Upgraded stand）luded-Hand-cranked bracket with 180° rotation capability',
    image: `${CDN}/de3bfa147c27e84a1dc19da97a85307f.jpg?v=1780973804&width=800`,
    description: 'Panel with an upgraded adjustable stand and a hand-cranked bracket with 180° rotation.',
    specs: [
      { label: 'Models', value: 'BL-1500 (400W), BL-2160 (600W), BL-2400 (800W)' },
      { label: 'Includes', value: 'Adjustable stand' },
      { label: 'Price', value: 'From $1,138.00 (list $1,599.00)' },
    ],
    cta: 'View BL Series Panel',
  },
  {
    id: 'bo600-base',
    key: 'bontanny-bo-600-red-light-therapy-panel',
    name: 'Bontanny BO-600 Panel with Base',
    title:
      'BONTANNY Red Light Therapy with Base, 630/660/810/830/850nm 5 Wavelengths Red Near Infrared Light Device with 120 Dual Chip Clinical Grade LEDs, Remote Control, Timer for Face, Body, Skin',
    image: `${CDN}/d99caa3eae6614f69176ab9c849a0a35.jpg?v=1778292306&width=800`,
    description: 'Mid-size panel with a base, remote control and timer, listed for face, body and skin.',
    specs: [
      { label: 'Wavelengths', value: '630/660/810/830/850nm' },
      { label: 'LEDs', value: '120 dual-chip' },
      { label: 'Price', value: 'From $329.00 (list $398.80)' },
    ],
    cta: 'View BO-600 Panel',
  },
  {
    id: 'bo300-desktop',
    key: 'bontanny-bo-300-red-light-panel',
    name: 'Bontanny BO-300 Desktop Panel',
    title: 'BONTANNY BO-300 Red Light Therapy Panel 630/660/810/830/850nm 5 Wavelengths, 60 Dual Chip LEDs for Skin & Recovery',
    image: `${CDN}/1-7100W_BO300.jpg?v=1777283948&width=800`,
    description: 'Compact desktop panel listed for skin and recovery.',
    specs: [
      { label: 'Wavelengths', value: '630/660/810/830/850nm' },
      { label: 'LEDs', value: '60 dual-chip' },
      { label: 'Price', value: '$179.00 (list $299.99)' },
    ],
    cta: 'View BO-300 Panel',
  },
  {
    id: 'bo60-portable',
    key: 'bontanny-portable-red-light-therapy-bo-60',
    name: 'Bontanny BO-60 Portable Device',
    title: 'Bontanny Red Light Therapy Device - Portable BO-60 with 3 Wavelengths (660/850/1060nm)',
    image: `${CDN}/4-12-BO60-_-1.jpg?v=1777283947&width=800`,
    description: 'The most compact option in the range, listed as a portable device.',
    specs: [
      { label: 'Wavelengths', value: '660/850/1060nm' },
      { label: 'Format', value: 'Portable' },
      { label: 'Price', value: '$139.00 (list $209.00)' },
    ],
    cta: 'View BO-60 Device',
  },
];

export const CHECKLIST = [
  { title: 'Wavelengths', text: 'Listings here range from 3 to 7 wavelengths, for example 660/850/1060nm on the BO-60 and 480 to 1060nm on the larger panels. Match the list to what you want to use it for.' },
  { title: 'Size and format', text: 'Larger panels cover more of the body, desktop panels suit face and targeted areas, the portable BO-60 trades coverage for convenience.' },
  { title: 'Stand and bracket', text: 'Some models include a hand-cranked bracket with 180° rotation, others a standard bracket that does not rotate. Read the title of each listing.' },
  { title: 'Warranty and returns', text: "Bontanny's FAQ mentions a 3-year warranty and free US shipping from a US warehouse. Confirm the current terms on the merchant site before you order." },
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
    q: 'How current are the prices shown?',
    a: `Prices are "from" prices read from bontanny.com on ${OBSERVED_ON}. Sales change often, so check the product page for the current price and options.`,
  },
  {
    q: 'Can red light therapy treat a medical condition?',
    a: 'This site makes no medical claims. Talk to a qualified healthcare professional before using any therapy device, especially if you are pregnant, have a medical condition or take photosensitizing medication.',
  },
];
