# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.1] - 2026-10-09

### Changed

- The sign-in link and the Starter and Professional actions open the web application published on Render, `https://team-coworkers-hostera-web.onrender.com/`, next to its demonstration API.

## [0.5.0] - 2026-10-08

### Changed

- Each segment's call-to-action opens its view in the Hostera web application: the independent-hotel path, the Starter plan and the closing action open the account creation view with Starter selected (`/sign-up?plan=starter`), and the small-chain path and the Professional plan open it with Professional selected (`/sign-up?plan=professional`).
- The Sign in link of every page opens the web application's sign-in view (`/sign-in`).
- The README and the US003, US004 and US006 scenarios describe the new destinations.

## [0.4.0] - 2026-10-08

### Added

- English and Spanish sales contact page for hotel groups, reachable from the plans and the closing section.
- Sign-in link to the Hostera web application in the homepage, sales and terms headers, including the mobile menu.
- Monthly cost estimate for the Professional plan, calculated from the number of rooms.
- Canonical, Open Graph, keyword and author metadata on the homepage, sales and terms pages, with the keywords translated to Spanish.

### Changed

- The entry plan is presented as Starter at S/39 per property per month, and Professional at S/8 per room per month; Enterprise remains the sales-led option for large hotel groups.
- The Starter and Professional buttons and the closing action open the Hostera web application.
- The Spanish variant is declared as Latin American Spanish (`es_419`).
- The shared plans stylesheet is renamed from `plan-free.css` to `plans.css`.
- The README and the user stories describe the current plans.

## [0.3.0] - 2026-09-19

### Changed

- Replaced the former publisher identity with Team Coworkers across the landing page, terms, translations, project metadata, user stories, license, and documentation.
- Confirmed the current five-person Team Coworkers roster in the published team section.

## [0.2.1] - 2026-09-16

### Changed

- README now describes this repository as the Hostera landing page, what the site includes, and how to serve it locally.

## [0.2.0] - 2026-09-16

### Added

- English and Spanish Terms and Conditions, with EN/ES switching on that page.

### Changed

- Terms header and language control now match the landing-page header.

### Fixed

- In-page section links work on GitHub Pages without a second click.

## [0.1.0] - 2026-09-16

### Added

- English landing page for Hostera with the hotel-operations proposition, dashboard preview, and problem-and-solution story.
- Primary navigation, footer, Terms and Conditions page, and a mobile menu.
- Independent-hotel, small-chain, and hotel-group pathways with Free, Professional, and Enterprise plans.
- Sales contact step for the Enterprise path, plus closing Start for free and Talk to sales actions.
- Connected-operations benefits, four-step operating flow, product and team sections, and an expandable FAQ.
- In-place English and Spanish copy switching, including return from the terms page.
- Page motion with GSAP: hero dashboard reveal, scroll-driven section lists, and in-page scroll under the sticky header.

### Fixed

- Language switch no longer blanks the page.
- Responsive layout for hero, pathways, plans, media, and the header.
- Dashboard preview keeps full width and clips only at the bottom.
- Team portraits use compact cards on small screens and stay aligned when the photo sits on the right.
- Discover Hostera and Meet the team remain static placeholders without playable clips.
- EN/ES control stays in a fixed slot with designed spacing, and primary nav is centered between the logo and that cluster.
