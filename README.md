# About

These is the project where we can upload any image and that image will be generated with the sample copyright text.
- It has drop zone where you can drop any image and that image will be set in img element.
- After image loading, its dimension will be checked if that is under 500x500 pixels, if not error message will be displayed.
- After image is processed, image will be loaded in preview image component with the copyright text.

# Concepts

- Event handling(Drag & drop): Used to get the input from the div by applying the drag and drop events

- Image handling: Used to check the size of image and only accept the image that are under specific size

# Installation

First, install all the dependencies and then run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Screenshots
#### Drag & drop image in the drop area
![Drop image](https://user-images.githubusercontent.com/15182066/208850821-59772570-de2e-44d2-867f-507a497de941.jpg)

#### Error message when we uplaod image above 500x500 pixels
![Error message on image size](https://user-images.githubusercontent.com/15182066/208676544-807a4c2c-30c8-4d73-93b9-d16c1377c146.png)

----

#### Generate image button after image uploading image
![Generate image button](https://user-images.githubusercontent.com/15182066/208676575-988a5405-44ea-4615-854c-0748a0092c87.png)

----

#### Generated Image with the copyright text
![Generated image](https://user-images.githubusercontent.com/15182066/208676588-f6a748d3-0177-4f06-a607-664df3a01860.png)



# Tools & Libraries

- NextJS: It is a react framework built as an open-source on top of React library.

- Typescript: It is a strict syntactical superset of JavaScript and adds optional static typing to the language.


# Linting and Formatting

- ESLint: It is a linter that you can integrate into your Visual Studio Code setup in order to ensure code integrity.
