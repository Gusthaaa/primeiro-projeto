This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## If you want to use this repo

download or fork this repo. First remove the 'src' content from the tag's Image in the page's files. After that you need to set the next.config.js file like this:

```
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.export = NextConfig ```

You need to do this to proceed to the next step because GitHub Pages doesn't support the Image tag from Next.js 13.

## Running localy

You can run the application in VS Code or a terminal and it will be available at http://localhost:3000.
To use images when running locally, place them in the "public" folder and reference them within your folders.
You cand read more about the Image tag in: https://nextjs.org/docs/app/api-reference/components/image

```
npm install
cd primeiro-projeto
npm run dev
```

