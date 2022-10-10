import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  /*==================== GOOGLE FONTS ====================*/

  :root {

    --maxWidth: 1280px; 
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535; 
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --header-height: 3rem;

    /*========== Colors ==========*/
    /* Change favorite color */
    //--hue-color: 2350;
    --hue-color: #231b1d;
    /*Purple 250 - Green 142 - Blue 230 - Pink 340*/
    /* HSL color mode */
    --first-color: hsl(var(--hue-color), 69%, 61%);
    --first-color-second: hsl(var(--hue-color), 69%, 61%);
    --first-color-alt: hsl(var(--hue-color), 57%, 53%);
    --first-color-lighter: hsl(var(--hue-color), 92%, 85%);
    --first-color-darker: hsl(var(--hue-color), 30%, 27%);

    --title-color: hsl(var(--hue-color), 8%, 15%);
    --text-color: hsl(var(--hue-color), 8%, 45%);
    --text-color-light: hsl(var(--hue-color), 8%, 65%);
    --input-color: hsl(var(--hue-color), 70%, 96%);
    --body-color: hsl(var(--hue-color), 60%, 99%);
    --container-color: #fff;

    /*========== Font and typography ==========*/
    --body-font: 'Poppins', sans-serif;

    /* .5rem = 8px, 1rem = 16px, 1.5rem = 24px ... */
    --big-font-size: 2rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: .938rem;
    --small-font-size: .813rem;
    --smaller-font-size: .65rem;

    /*========== Font weight ==========*/
    --font-smaller: 250;
    --font-small: 400;
    --font-medium: 500;
    --font-semi-bold: 600;


    /*========== z index ==========*/
    --z-tooltip: 10;
    --z-fixed: 100;
    --z-modal: 1000;
  }

  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    padding: 0;
    margin: 0;
  }

    
  html {
    scroll-behavior: smooth;
    height: 100%;
  }


  body {  
    margin: 0;
    padding: 0;
    background-color: var(--hue-color);
    color: #fff;

    h1 {
      font-size: 2rem;
      font-weight: 400;
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 400;
    }

    p {
      font-size: 1rem;
    }
  }
`;
