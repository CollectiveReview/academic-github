# Platform for Open Science
[Project Development Overview](https://www.notion.so/code4japan-community/16c5dee106f847d996324e40464325ff?pvs=4)

We are building a OSS software for researchers to collaborate for their reseach projects like programmers do on github for their software developments.
Our goal is to establish a platform such that:
- **Contribution Driven** - evyeryone can edit article, add data or reference. Each modification undergo review, and when accepted it is hornored under your name.
- **Universal citation** - repository can accept any format of data, and every citation is expressed via doi. Citaions are the dependency of the projects. Each citation is a link and points the single source of truth.
- **Collective review** - the validity and impact of a project is measured by how many other projects accept it. We don't need to rely on busy peers, which may biased and taking much time.

## Specification
We are using:

- Frontend - Next, Radix UI, [TailwindCSS](https://tailwindcss.com/), 
- Backend - Realtime database, FireStore, Firebase Authentication
  - We are planning migration to Radis later. Contact me if you have experience in Radis and storing binary and structured data.
- Great Libraries We use - [yjs](https://github.com/yjs/yjs)

## Getting Started
Visit: [gnt.place](https://www.gnt.place/)

When you try this locally,

First, run the development server:

in top directory `npm install`

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

make sure you have installed next in your global environment.
