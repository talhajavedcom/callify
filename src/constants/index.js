// ============================================================
// CALLIFY — Site-wide constants
// All hardcoded content lives here — pages import from this file
// ============================================================

export const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Guide', href: '/guide' },
  { label: 'Contact', href: '/contact' },
];

// ── Features (used on Homepage + Features page) ──────────────
export const FEATURES = [
  {
    id: 'shopify',
    title: 'Shopify Integration',
    description: 'Our Callify App can integrate easily with any Shopify store',
    icon: 'shopify',
  },
  {
    id: 'woocommerce',
    title: 'Woocommerce Support',
    description: 'Our Callify WordPress plugin supports all woocommerce store',
    icon: 'woocommerce',
  },
  {
    id: 'api',
    title: 'API Integration',
    description: 'Connect your systems with our powerful API to automate process',
    icon: 'api',
  },
  {
    id: 'branded',
    title: 'Branded Calls',
    description: "Use your brand name in the Callify audio, ensuring your audience knows who's calling",
    icon: 'branded',
  },
  {
    id: 'calling',
    title: 'Auto & Manual Calling',
    description: 'Our Callify system provides both automated and manual calling options',
    icon: 'calling',
  },
  {
    id: 'retry',
    title: 'Auto Retry Call',
    description: 'Callify include an auto-retry feature if the customer does not respond to the call.',
    icon: 'retry',
  },
  {
    id: 'analytics',
    title: 'Real-Time Analytics',
    description: 'Our Comprehensive dashboard displays all usage data and customer responses',
    icon: 'analytics',
  },
  {
    id: 'service',
    title: '24/7 Service',
    description: 'Callify operates 24/7, providing round-the-clock verification without downtime',
    icon: 'service',
  },
  {
    id: 'setup',
    title: 'Zero Setup Fee',
    description: 'Callify system provides a user friendly interface, ensuring easy setup with no setup fees',
    icon: 'setup',
  },
];

// ── How It Works steps ────────────────────────────────────────
export const HOW_IT_WORKS_STEPS = [
  {
    step: 'STEP 1',
    title: 'Order Placed',
    description: 'Customer has successfully placed a new order on your Shopify / Woocommerce online store.',
  },
  {
    step: 'STEP 2',
    title: 'Call Sent',
    description: "Automated order confirmation call has been sent to the customer's Mobile number.",
  },
  {
    step: 'STEP 3',
    title: 'Status Updated',
    description: 'Customer answered the call, and the status and tags will be automatically updated based on their input.',
  },
];

// ── Fraud protection feature list ────────────────────────────
export const FRAUD_FEATURES = ['Send Automated Calls in Urdu or English', 'Order status and tags will be automatically updated', 'Efficient Solution Designed to Work All Day & Night', 'Get Premium protection in Affordable pricing', 'Free Integration with Shopify & WordPress store'];

// ── Pricing plans ─────────────────────────────────────────────
export const PRICING_PLANS = [
  {
    id: 'standard',
    name: 'Standard',
    description: 'For individuals and small teams trying out for an unlimited period.',
    price: 3000,
  },
  {
    id: 'business',
    name: 'Business',
    description: 'For individual account executives who want increased productivity.',
    price: 5000,
    popular: true,
  },
  {
    id: 'corporate',
    name: 'Corporate',
    description: 'For medium and large sales organizations with advanced needs.',
    price: 20000,
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    description: 'For brands & enterprise solutions to drive growth and efficiency.',
    price: 30000,
  },
];

export const PRICING_INCLUDES = ['Call Credits: 1000', 'No Expiry', 'Branded Voice', 'Woocommerce Plugin', 'Shopify Integration', 'Free Integration', 'Auto-retry for unanswered calls', '24/7 calling availability', 'Balance is deducted only when calls are answered'];

// ── Trust badges ──────────────────────────────────────────────
export const TRUST_BADGES = ['No Setup Fee', '24/7 Available', 'Cancel Anytime'];

// ── FAQ ───────────────────────────────────────────────────────
export const FAQ_CATEGORIES = [
  {
    category: 'General Questions',
    items: [
      {
        q: 'What is Callify used for?',
        a: 'Callify is used to automate order confirmation calls to customers in Urdu or English for Shopify and WooCommerce stores in Pakistan, helping reduce bogus orders and RTO.',
      },
      {
        q: 'How quickly can I send calls using Callify?',
        a: 'Calls are sent automatically within seconds of an order being placed on your store — no manual action required.',
      },
      {
        q: 'Do I need technical skills to use Callify?',
        a: 'No technical skills are needed. Callify is designed with a user-friendly interface that makes setup and operation simple for everyone.',
      },
    ],
  },
  {
    category: 'Campaign & Usage',
    items: [
      {
        q: 'Can I record my own voice message?',
        a: 'Yes, with our Branded Calls feature you can use your own brand voice so customers know exactly who is calling them.',
      },
      {
        q: 'Can I schedule calls in advance?',
        a: 'Yes, Callify supports scheduling calls in advance so you can reach customers at the most convenient times.',
      },
      {
        q: 'Can I target specific users?',
        a: 'Yes, you can filter and target specific customer segments based on order details, location, and other criteria.',
      },
      {
        q: 'What are common use cases of Callify?',
        a: 'Order verification for COD orders, reducing bogus orders, confirming delivery addresses, and customer follow-up calls are the most common use cases.',
      },
    ],
  },
  {
    category: 'Safety & Compliance',
    items: [
      {
        q: 'Is it safe to use Callify for business communication?',
        a: 'Yes, Callify is fully compliant with local regulations and uses secure infrastructure to protect your business communications.',
      },
      {
        q: 'How do you protect user data?',
        a: 'All data is encrypted in transit and at rest. We follow strict data handling policies and never share your customer data with third parties.',
      },
      {
        q: 'Can users opt out from calls?',
        a: 'Yes, customers can opt out at any time by responding to the call prompt, and their number will be added to your do-not-call list.',
      },
    ],
  },
  {
    category: 'Features & Support',
    items: [
      {
        q: 'Does Callify provide call reports?',
        a: 'Yes, our Real-Time Analytics dashboard displays all usage data, call statuses, and customer responses in detail.',
      },
      {
        q: 'What if I need help while using Callify?',
        a: 'You can reach our support team via WhatsApp at 0335-8936571, or by emailing support@callify.pk. We offer 24/7 live chat as well.',
      },
    ],
  },
];

// ── Contact info ──────────────────────────────────────────────
export const CONTACT_INFO = {
  whatsapp: '0335-8936571',
  email: 'support@callify.pk',
  address: 'First Floor, Building#91-B, Commercial Tulip Block Sector C Bahria Town, Lahore, Pakistan',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.2!2d74.3587!3d31.4697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzExLjAiTiA3NMKwMjEnMzEuMyJF!5e0!3m2!1sen!2spk!4v1',
};

// ── Footer columns ────────────────────────────────────────────
export const FOOTER_COL_1 = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact Us', href: '/contact' },
];

export const FOOTER_COL_2 = [
  { label: 'Documentation', href: '#' },
  { label: 'Support Center', href: '#' },
  { label: 'Community', href: '#' },
];

// ── Terms sections ────────────────────────────────────────────
export const TERMS_SECTIONS = [
  { id: 'our-services', label: 'Our Services' },
  { id: 'property-rights', label: 'Property rights' },
  { id: 'prohibited-activities', label: 'Prohibited activities' },
  { id: 'services-management', label: 'Services management' },
  { id: 'contact-information', label: 'Contact Information' },
];

// ── Privacy sections ──────────────────────────────────────────
export const PRIVACY_SECTIONS = [
  { id: 'who-we-are', label: 'Who we are' },
  { id: 'comments', label: 'Comments' },
  { id: 'media', label: 'Media' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'embedded-content', label: 'Embedded content from other websites' },
  { id: 'who-we-share', label: 'Who we share your data with' },
  { id: 'how-long', label: 'How long we retain your data' },
  { id: 'your-rights', label: 'What rights you have over your data' },
  { id: 'where-sent', label: 'Where your data is sent' },
];
