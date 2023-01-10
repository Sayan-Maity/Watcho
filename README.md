# Watcho
>Welcome to the ``` Watcho ```! This app allows you to browse and search for your favorite movies based on genre.

## Features
Browse movies by genre
Search for specific movies
View movie details, including plot summary, cast, and ratings
Getting Started
## Table of contents

## Screenshots
<img src="https://github.com/Sayan-Maity/Watcho/blob/main/assets/preview.jpg"></img>
<img src="https://github.com/Sayan-Maity/Watcho/blob/main/assets/preview2.jpg"></img>
<img src="https://github.com/Sayan-Maity/Watcho/blob/main/assets/preview3.jpg"></img>
<img src="https://github.com/Sayan-Maity/Watcho/blob/main/assets/preview4.jpg"></img>
<img src="https://github.com/Sayan-Maity/Watcho/blob/main/assets/preview5.jpeg"></img>
<img src="https://github.com/Sayan-Maity/Watcho/blob/main/assets/preview6.jpg"></img>
<img src="https://github.com/Sayan-Maity/Watcho/blob/main/assets/preview7.jpg"></img>

### Summary

An entertainment web app built with Next.js and TailwindCSS that allows users to search for movies and tv shows.

### Links



## Details

### Project purpose and goal

The main purpose of this project is to take advantages of the capabilities of Next.js and have a functional web app up and running quickly. Secondly, I want to become familiar with the framework itself and its convenient features.

### Web stack and explanation

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [useSWR](https://swr.vercel.app/)


### Future improvements

- [ ] Add a bookmark page to store the user's favorite movies and tv shows
- [ ] Add the video playing feature when the user hover over the card and play the video
- [ ] Add authentication so that the user can sign up and log in to save their favorite movies and tv shows permanently
- [ ] Adjust the size of the card item in the last row so that the image won't be stretched out

### Useful resources

- [Solution for Cannot read Property 'slice' of Undefined](https://bobbyhadz.com/blog/javascript-cannot-read-property-slice-of-undefined)
- [How to get all available pages in the same request?](https://www.themoviedb.org/talk/55aa2a76c3a3682d63002fb1?language=en)

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

1. Create an API KEY for the [TMDB API](https://www.themoviedb.org/documentation/api)
2. Create an `.env.local` file in the root directory of the project
3. Add 2 environment variables to the `.env.local` file:
```env
// .env.local

TMDB_ENDPOINT="https://api.themoviedb.org/3"
TMDB_API_KEY="YOUR_TMDB_API_KEY"
```

### Installing

Clone the repository and run the development server:
```bash
npm install
npm run dev
# or
yarn install
yarn dev
```
