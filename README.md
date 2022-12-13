# Description

These is the project where we can upload any image and that image will be processed with the sample copyright text.

# Screenshots

- https://i.paste.pics/KDYBP.png
- https://i.paste.pics/KDYCT.png
- https://i.paste.pics/KDYD3.png
- https://i.paste.pics/KDYDF.png

# About

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`] to process the image.
It has a drop area where you can drop any image(should be below 500x500 pixels), then generate button will be appeared. After clicking on generate, image will be processed with sample copyright text.

### Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Concepts

- Created drop zone where you can drop any image and that image will be set in img element.
- After image loading, its dimension will be checked if that is under 500x500 pixels, if not error message will be displayed.
- After image is processed, image will be loaded in preview image component with the copyright text.

# Tools

- NextJS

- Typescript

- ESLint
