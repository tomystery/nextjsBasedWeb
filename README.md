This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# TO DO
1. what is Geist, Geist_Mono about？
``` javascript
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
```
2. 查看源码下layout 和 page之间的一个关系。
3. 这个项目的特点是说服务可以集成到个人的项目里面？
4. 这个项目使用了preact是为了照顾不同的前端框架？ 
5. 上传的逻辑由sass的provider提供，已封装成package给你用 
6. 这个项目要考虑的就是UX + DX . UX 是用户体验，DX是开发者体验。UX针对的是客户，就是他们怎么集成到他们的网站中， DX是我们自己开发的时候，我们自己的开发体验要好 
7. preact的优势是它的大小，只占了3kb的一个大小， 
8. TRPC, 是一个对typescript非常友好的一个开发的库
9. UI组件库用的是Radix + shadcn
10. uppy -一个讲图片上传的组件库。 因为自己上传会用到s3, 比较麻烦

# learned
1. @nav 这里的parallel route 是指外面路由的，如果@nav下对应相同的路由名有东西那就会显示， 没有的话就走default.tsx, 所以default.tsx一定是需要的
2. @nav/a.tsx is not a route file. Next.js only treats page.tsx inside a folder as a page. 
3. interception can achieve the same router display different content.
