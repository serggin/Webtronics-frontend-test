This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started Server

First, run the server:

```

yarn server

```

The server for interacting with the API will be running on http:localhost:3004

To get contacts, use a GET request to http:localhost:3004/feedback

To create contact, use a POST request to http:localhost:3004/feedback

```
  {
    "name": string,
    "email": stirng,
    "phone": stirng
  }
```

## Getting Started Fontend

First, run the development server:

```

yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Task issues

### Steps

Border styles for step frame as

```
border: 1px solid;
border-image-source: linear-gradient(152.14deg, rgba(21, 191, 253, 0.7) 9.96%, rgba(156, 55, 253, 0.7) 100%);
border-radius: 8px;
```

don't work in modern browsers. border-radius and gradient seems to be not compatible.
To follow the design at first I utilized SVG-image instead. But this hack does not fit for variable text lengths!
Then I implemented the idea of nested background images. Gradient border looks as desired! And boxes will accept various step texts!
But, sorry, colored braces won't do being fixed images.

### Reviews photos

Images of the students should be prepared thoroughly. I've implemented some positioning and resizing facilities for main (wide) photos
and automatic ones for narrow photos. But a bad photo looks poor at narrow version.

### Redux

The is no sense to use Redux, single useState() was enough.

### phone validation

I didn't implement extra validation as it depends in exact pattern hasn't been provided.
