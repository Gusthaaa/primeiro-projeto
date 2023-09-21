This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## If you want to use this repo
You need to do this to proceed to the next step because GitHub Pages doesn't support the Image tag from Next.js 13, so i needed to host the image on-line and put the URL in the src.
download or fork this repo. First remove the 'src' content from the tag's Image in the page's files.
To use images when running locally, place them in the "public" folder and reference them within your folders.
You cand read more about the Image tag in: https://nextjs.org/docs/app/api-reference/components/image. Then set the next.config.js file like this:

```
/** @type {import('next').NextConfig} */

const nextConfig = {}

module.exports = nextConfig
```



## Running localy

You can run the application in VS Code or a terminal and it will be available at http://localhost:3000.

```
npm install
cd primeiro-projeto
npm run dev
```


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!




