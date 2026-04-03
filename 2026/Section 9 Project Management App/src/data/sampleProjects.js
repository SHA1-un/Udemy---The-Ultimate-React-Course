export const projects = [
  {
    id: crypto.randomUUID(),
    isDraft: false,
    title: "Brand Identity Refresh",
    description:
      "Updating the corporate visual identity, including logo variations, color palette, and typography guidelines.",
    dueDate: "2026-05-15",
    tasks: [
      { id: crypto.randomUUID(), title: "Audit current brand assets" },
      { id: crypto.randomUUID(), title: "Design three logo concepts" },
      { id: crypto.randomUUID(), title: "Finalize style guide documentation" },
    ],
  },
  {
    id: crypto.randomUUID(),
    isDraft: false,
    title: "E-commerce Platform Migration",
    description:
      "Moving the existing product catalog and customer data from the legacy system to the new headless Shopify architecture.",
    dueDate: "2026-06-01",
    tasks: [
      { id: crypto.randomUUID(), title: "Export legacy SQL database" },
      { id: crypto.randomUUID(), title: "Map data fields to new schema" },
      {
        id: crypto.randomUUID(),
        title: "Perform staging environment test run",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    isDraft: false,
    title: "Quarterly SEO Audit",
    description:
      "Analyzing search engine performance, fixing crawl errors, and optimizing high-value landing pages.",
    dueDate: "2026-04-20",
    tasks: [
      { id: crypto.randomUUID(), title: "Run Screaming Frog crawl" },
      {
        id: crypto.randomUUID(),
        title: "Update meta descriptions for top 20 pages",
      },
      {
        id: crypto.randomUUID(),
        title: "Analyze backlink profile for toxic entries",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    isDraft: false,
    title: "Internal Employee Handbook",
    description:
      "Drafting and designing a digital handbook covering remote work policies, benefits, and company culture.",
    dueDate: "2026-07-10",
    tasks: [
      {
        id: crypto.randomUUID(),
        title: "Interview department heads for policy updates",
      },
      { id: crypto.randomUUID(), title: "Draft 'Code of Conduct' section" },
      { id: crypto.randomUUID(), title: "Review with legal counsel" },
    ],
  },
  {
    id: crypto.randomUUID(),
    isDraft: false,
    title: "Mobile App Beta Launch",
    description:
      "Coordinating the TestFlight release for the version 2.0 mobile application with the external tester group.",
    dueDate: "2026-04-30",
    tasks: [
      {
        id: crypto.randomUUID(),
        title: "Fix critical UI bugs in checkout flow",
      },
      { id: crypto.randomUUID(), title: "Upload build to App Store Connect" },
      {
        id: crypto.randomUUID(),
        title: "Send out invitation emails to beta users",
      },
    ],
  },
];
