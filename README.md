
# <img src = "https://media4.giphy.com/media/AuZXGzk5qKRpG54Ewl/giphy.gif?cid=ecf05e47jgpe7u14fp4yhajmqlmiy1jlf4xw5npgof5lr2qo&rid=giphy.gif&ct=s" width="45"> Watcho
[![Netlify Status](https://api.netlify.com/api/v1/badges/f3dd54aa-fd47-4ed5-bdaa-e6248062c6ad/deploy-status)](https://app.netlify.com/sites/watcho-app/deploys)

>Welcome to the 🎬 ``` Watcho ``` app! Watcho allows user to browse and search for their favorite movies or being based on any particular genre like horror, action, mystry, crime, family, fantasy, romance, music, and much More. Explore our app and you would fall in love 😍 for sure.

Author : [Sayan Maity](sayancr777@gmail.com)

<p align="center">
  <img src="https://github.com/Sayan-Maity/Watcho/blob/main/assets/banner.png" alt="banner">
</p>

## img src="https://media2.giphy.com/media/FCxH5v877DYFPQLHO5/giphy_s.gif?cid=ecf05e47bcjvlhxblslm4sxtx9oc24m8xamunywqsm7zh34b&rid=giphy_s.gif&ct=s" height="40"/> Built with
<img src="https://img.shields.io/badge/react%20-%23333.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>  <img src="https://img.shields.io/badge/next.js%20-%23323330.svg?&style=for-the-badge&logo=next.js&logoColor=white"/>  <img src="https://img.shields.io/badge/tailwindcss%20-%2306B6D4.svg?&style=for-the-badge&logo=tailwindcss&logoColor=white"/> <img src="https://img.shields.io/badge/themoviedatabase%20-%2301B4E4.svg?&style=for-the-badge&logo=themoviedatabase&logoColor=white"/> <img src="https://img.shields.io/badge/netlify%20-%2300C7B7.svg?&style=for-the-badge&logo=netlify&logoColor=white"/> <img src="https://img.shields.io/badge/vercel%20-%23333.svg?&style=for-the-badge&logo=vercel&logoColor=white"/> <img src="https://img.shields.io/badge/cloudflare%20-%23F38020.svg?&style=for-the-badge&logo=cloudflare&logoColor=white"/> 
- **Frontend**: ReactJS, NextJS, TailwindCSS
- **API**: TMDB API
- **Version Control**: Git
- **Hosting**: Netlify, Github Pages, Vercel, CloudFlare

## Features
- Browse movies by genre
- Search for specific movies
- View movie details, including plot summary, cast, and ratings

## Table of contents

## Screenshots
<table>
    <tr>
        <td colspan="2">
            <img src="https://github.com/Sayan-Maity/Watcho/blob/main/assets/preview.jpg"></img>
            <br />
            <h3 align="center">Home Page</h3>
        </td>
    </tr>
    <tr>
        <td width="50%">
            <img src="https://github.com/Sayan-Maity/Watcho/blob/main/assets/preview7.jpg"></img>
            <br />
            <p align="center">Trending & Popular Section</p>
        </td>
        <td width="50%">
            <img src="https://github.com/Sayan-Maity/Watcho/blob/main/assets/preview6.jpg"></img>
            <br />
            <p align="center">Now Playing and Upcoming Section</p>
        </td>
    </tr>
    <tr>
        <td width="50%">
            <img src="https://github.com/Sayan-Maity/Watcho/blob/main/assets/preview2.jpg"></img>
            <br />
            <p align="center">Movies Genre</p>
        </td>
        <td width="50%">
            <img src="https://github.com/Sayan-Maity/Watcho/blob/main/assets/preview3.jpg"></img>
            <br />
            <p align="center">TV Series Genre</p>
        </td>
    </tr>
    <tr>
        <td width="50%">
            <img src="https://github.com/Sayan-Maity/Watcho/blob/main/assets/preview4.jpg"></img>
            <br />
            <p align="center">Search Results</p></td>
        <td width="50%">
            <img src="https://github.com/Sayan-Maity/Watcho/blob/main/assets/preview8.jpg"></img>
            <br />
            <p align="center">Music Search Genre</p></td>
    </tr>
    <tr>
        <td colspan="2">
            <img src="https://github.com/Sayan-Maity/Watcho/blob/main/assets/preview5.jpeg"></img>
            <br />
            <h3 align="center">Movie Detail</h3>
        </td>
    </tr>
</table>








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
