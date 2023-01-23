# Website

The official website for Lin Brain Lab.

## How To

### How to Setup

This repository supports dev container. If you have Docker installed, you can open it in VS Code and it will automatically setup the environment for you.

Or you can manually setup the environment:

- Install Node.js and Pnpm
- Run `pnpm install` to install dependencies

### How to Run

- Run `pnpm dev` to start the development server
- Run `pnpm build` to build the website, the static files will be in `build` directory
- Run `pnpm test` to run the E2E tests

### How to Deploy

The GitHub Actions will automatically deploy the website to GitHub Pages when you push to `main` branch.

## Structure

- `src` - Source code
    - `routes` - Pages, e.g. `src/routes/members/+page.md` will be `/members`
    - `lib/components` - Components

Pages are written in a mix of Markdown and Svelte.

## Tech Stack

- Svelte - JS-HTML Framework
- Tailwind CSS - CSS Framework
- DaisyUI - UI Components
- Playwright - E2E Testing
