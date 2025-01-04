# Exotic Celebrations

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Project Structure

```
.gitignore
.next/
app/
    artist-management/
        ArtistList.jsx
        ArtistProfile.jsx
    client/
        ClientList.jsx
        ClientProfile.jsx
    corporate/
        CorporateEvents.jsx
    globals.css
    HomepageComponents/
        HeroSection.jsx
        ServicesSection.jsx
    layout.jsx
    page.jsx
    party-planning/
        PartyList.jsx
        PartyDetails.jsx
    reusableComponents/
        NavbarDemo.jsx
        Footer.jsx
    Services/
        ServiceList.jsx
        ServiceDetails.jsx
    team/
        TeamList.jsx
        TeamMember.jsx
    venue-management/
        VenueList.jsx
        VenueDetails.jsx
components/
    ui/
        Button.jsx
        Card.jsx
jsconfig.json
lib/
    api.js
    utils.js
next.config.mjs
package.json
postcss.config.mjs
public/
    images/
        logo.png
        hero.jpg
README.md
tailwind.config.mjs
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `.next` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`

Starts the application in production mode. The application should be built first using `npm run build`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

This `README.md` file provides a comprehensive overview of your project, including the project structure, available scripts, and resources for learning more about Next.js.