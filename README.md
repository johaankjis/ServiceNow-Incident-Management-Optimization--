# ServiceNow Incident Management Optimization

ServiceNow Incident Management Optimization is a Next.js 15 dashboard that showcases how IT service teams can monitor incidents, SLAs, risks, and root-cause activities in a single workspace. The project ships with polished UI primitives, mock operational data, and responsive layouts to help you prototype or demo ServiceNow-inspired workflows quickly.

## Features

- **Executive dashboard landing page** with metric highlights, trend visualizations, SLA bar charts, and recent ticket summaries built from reusable cards and Recharts visualizations. These experiences live under `app/page.tsx` and compose feature widgets from the `components` directory such as `MetricsOverview`, `IncidentTrends`, `SLACompliance`, and `RecentIncidents`.
- **Incident operations view** that supports search filtering and priority/SLA badges for curated ticket data via the client-side `IncidentList` component rendered at `app/incidents/page.tsx`.
- **Risk register management** powered by rich cards and add-risk affordances inside `components/risk-register.tsx`, exposed through the `/risk-register` route.
- **Root cause analysis templates** that collect investigation metadata, impact summaries, and preventive measures, implemented in `components/rca-templates.tsx` and delivered on the `/rca` page.
- **Persistent navigation chrome** with header actions and active state highlighting using the `DashboardLayout` wrapper.
- **Dark-mode ready theming** configured through `app/layout.tsx`, `app/globals.css`, and the shadcn/ui design tokens in `components.json`.

## Tech Stack

- [Next.js 15](https://nextjs.org/) with the App Router and React 19 server components.
- TypeScript for typed component authoring.
- Tailwind CSS v4 with CSS variables and tw-animate utilities defined in `app/globals.css`.
- shadcn/ui component library primitives stored under `components/ui` and configured via `components.json`.
- Recharts for data visualizations.
- @vercel/analytics for lightweight analytics instrumentation.

## Project Structure

```
├── app/                # App Router pages and global styles
│   ├── layout.tsx      # Root layout, fonts, and metadata
│   ├── page.tsx        # Dashboard landing view
│   ├── incidents/      # Incident listing route
│   ├── risk-register/  # Risk register route
│   └── rca/            # Root cause analysis route
├── components/         # Feature modules and shared UI
│   ├── dashboard-layout.tsx
│   ├── metrics-overview.tsx
│   ├── incident-trends.tsx
│   ├── sla-compliance.tsx
│   ├── incident-list.tsx
│   ├── risk-register.tsx
│   └── rca-templates.tsx
├── components/ui/      # shadcn/ui primitives (button, card, dialog, etc.)
├── hooks/              # Reusable client hooks (mobile detection, toast helpers)
├── lib/                # Shared utilities
├── public/             # Placeholder images and assets
└── styles/             # Additional styling artifacts
```

## Getting Started

1. **Install dependencies**

   ```bash
   pnpm install
   ```

   You can substitute `npm install` or `yarn install` if you prefer a different package manager.

2. **Run the development server**

   ```bash
   pnpm dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000). Edit files inside `app/` or `components/` to see hot-reload updates.

3. **Lint the project**

   ```bash
   pnpm lint
   ```

4. **Create an optimized production build**

   ```bash
   pnpm build
   pnpm start
   ```

   `pnpm build` compiles the Next.js application, and `pnpm start` launches the production server.

## Data & Customization Notes

- All dashboard content is seeded with static arrays inside the feature components (for example, `components/incident-list.tsx`, `components/risk-register.tsx`, and `components/rca-templates.tsx`). Replace these objects with live API integrations or data-fetching logic as needed.
- Theme tokens, color ramps, and CSS variables live in `app/globals.css`. Adjusting these values lets you restyle the entire experience without touching component code.
- UI primitives originate from shadcn/ui and live under `components/ui`. Compose these building blocks when extending the interface with new widgets or dialogs.

## Contributing

1. Create a new feature branch from `main`.
2. Make your changes along with accompanying tests or stories when applicable.
3. Run linting and ensure the app builds locally.
4. Open a pull request describing the motivation, approach, and testing results.

Feel free to adapt the dashboard for demos, workshops, or integrations with ServiceNow APIs.
