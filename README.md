# Frontend Mentor - Clock app solution

This is a solution to the [Clock app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- View the current time and location information based on their IP address
- View additional information about the date and time in the expanded state
- Be shown the correct greeting and background image based on the time of day they're visiting the site
- Generate random programming quotes by clicking the refresh icon near the quote

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vue](https://vuejs.org/) - JS library
- [UnoCSS](https://uno.antfu.me/) - For styles

### What I learned

#### Suspense Component

I was unfamiliar and a little frustraited by the suspence component in vuejs. I really commited reading the docs and figured out how to properly implement it. Async data wont function properly if its not used.

```html
<Suspense>
	<template #default>
		<Clock />
	</template>
	<template #fallback> App... </template>
</Suspense>
```

#### Better commits

I really wanted to get more consistent and structured with my git commits. I found this convention. An unexpected side effect is the convention itself encourages more frequent commits

Defining a Commit Message Convention
type(scope): subject
body (optional)
footer (optional)

This article really helped me out.
[art of writing a good commit message](https://dev.to/wordssaysalot/art-of-writing-a-good-commit-message-56o7)

## Author

- Website - [Christopher Powe](https://www.christopherpowedesigns.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
