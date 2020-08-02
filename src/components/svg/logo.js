/** @jsx jsx */
import { jsx } from 'theme-ui';
import styles from './logo-styles.module.css';

function Logo({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 90.06 84"
      width={width}
      height={height}
      fill="#2b2c34"
      aria-labelledby="logoTitle"
      role="img"
    >
      <title id="logoTitle">Dev Pack logo - a backpack</title>
      <path
        className={styles.path}
        stroke="#2b2c34"
        strokeWidth=".5"
        d="M53.93 84c-2.65 0-5.3.08-8 0a9.42 9.42 0 01-5.57-1.75 5.82 5.82 0 00-2.89-.88c-3.63-.57-6.87-2.16-10.1-3.74a10 10 0 01-4.2-3.49 3.21 3.21 0 00-2.7-1.53c-2.42-.25-4.81-.5-7.2-1a23.66 23.66 0 01-10.3-4.67 7.9 7.9 0 01-2.86-5.55 26.52 26.52 0 01.23-6.6C1.4 48.1 2.72 41.45 2.97 34.67c.06-1.69.07-3.39.07-5.08a33.77 33.77 0 01.89-7.43 9.53 9.53 0 015.9-6.72c1.95-.84 4.06-.09 6 .67 1.5.59 3 1.16 4.57 1.61.7.2 1.11.14 1.39-.57a4.89 4.89 0 014.62-3.21c3.58-.17 5.89-1.67 6.48-5.42a9.6 9.6 0 011.15-2.62A10.11 10.11 0 0145.31.2a15.47 15.47 0 015.85 1.85 3.34 3.34 0 002.14.35c2.27-.12 4.55-.32 6.82-.42a20.13 20.13 0 016.14.5 4.62 4.62 0 013.7 3.91 16.22 16.22 0 01.45 2.82c0 1.28.6 1.49 1.65 1.34a6.55 6.55 0 015.29 1.68c2.21 1.82 4.44 3.66 6.81 5.27 3.71 2.51 5.06 6.21 5.37 10.37.46 6.16.47 12.35.53 18.53a6.6 6.6 0 01-2 5.2 2.9 2.9 0 00-.76 2.62 192.88 192.88 0 01-.07 19.83 14 14 0 01-1.13 5.15 3.21 3.21 0 01-1.76 1.8 24.6 24.6 0 01-7.29 1.67c-7.68.88-15.4 1.14-23.12 1.33zM29.22 14.79a1.48 1.48 0 00.84.89c1.73 1 3.73 2 4.64 3.64 1.31 2.4 2.89 2.74 5.31 2.28a50.1 50.1 0 015.5-.2c3-.22 6-.6 9-.81 6.39-.46 12.78-.83 19.16-1.31a63.47 63.47 0 018.16.06 4.28 4.28 0 011.27.3.65.65 0 01.34.49.57.57 0 01-.54.58 2.3 2.3 0 01-.87 0 19.08 19.08 0 00-4.39-.34c-3.11-.22-6.15.57-9.26.41-4-.21-7.89.56-11.86.63-2.18 0-4.38.47-6.58.62-3.37.24-6.73.59-10.11.78-3.13.18-3.09-.52-2.78 3.12a74 74 0 01-.48 17c-.24 1.67-.38 3.36-.47 5-.09 1.84.38 2.52 2.07 3.22a7 7 0 002.31.69c2.5.12 5 .1 7.51.15.83 0 1.22-.35 1.18-1.19a10.28 10.28 0 010-1.11c.08-2.33.32-2.61 2.63-3a14.72 14.72 0 011.76-.11 1.31 1.31 0 011.51 1.47c0 .37.05.73.07 1.1.14 3.39.14 3.39 3.54 3.39h.88c4 .14 7.93-.41 11.9-.5 2.76-.06 2.8 0 2.59-2.75a1.34 1.34 0 01.85-1.58c2.37-1 4.22.2 4.38 2.78a2.16 2.16 0 010 .44c-.11 1.1.51 1.34 1.46 1.43a14.5 14.5 0 004.76-.75c1.89-.45 2.62-1.75 3-3.4a7.7 7.7 0 00.19-2c0-4.79-.2-9.57-.18-14.35a38.23 38.23 0 00-1.14-7.84 7.4 7.4 0 00-2.83-4.34q-3.87-3.12-7.77-6.2a10.68 10.68 0 00-1.62-1.13 7.24 7.24 0 00-4.11-.44c-1.21.1-.84 1.39-1.27 2.1a4.22 4.22 0 01-4.21 1.74c-1.59-.26-1.65-1.51-1.73-2.68-.06-1-.51-1.23-1.4-1.22-3.39 0-6.76.36-10.12.69-1.22.13-2 .56-2.12 2-.26 2.3-1 2.63-3.28 2.34-1.53-.18-2-1.32-2.19-2.4s-.85-1.38-1.84-1.3c-2.86.25-5.73.44-8.58.72a17.83 17.83 0 00-5.08.89zm-6.75 5.89a9.28 9.28 0 00-.51 3.32c.06 6.4.13 12.8 0 19.2-.1 6 .63 12 .94 18.08.14 2.86.46 5.72.55 8.59a6.61 6.61 0 003.43 5.77A35 35 0 0037.25 80a3.57 3.57 0 002.2.13V76.2c-.09-3.17.57-6.29.47-9.47-.13-4.12-.15-8.24-.14-12.36 0-.91-.38-1.26-1.18-1.56-3.52-1.33-4.17-2.43-3.69-6.18.51-3.94 1-7.87 1.28-11.84a47.54 47.54 0 00-.41-9.24c-.08-.6-.06-1.37-.87-1.64-2-.64-3.56.27-3.69 2.32-.2 3.38-.27 6.77-.39 10.15L30.35 50c0 .35 0 .81-.46.83s-.55-.42-.56-.79v-2.2q.42-11.26.85-22.51c.06-1.74-.15-2-1.73-2-1.13 0-1.15 0-1.16 2v.66c.4 3.69-.14 7.36-.15 11 0 .8.17 1.76-.71 2.46a2.41 2.41 0 01-.5-2.32c.5-4.19.21-8.38.28-12.58a2.84 2.84 0 00-1.83-3.1c-.58-.24-1.04-.82-1.91-.77zm63.76 43.41v-9.73c0-.81-.17-1.58-1.23-1.3a22.22 22.22 0 01-4.6.45c-.46 0-.92.12-1 .69-.14 1.88-1.72 2-3 2.39a1.61 1.61 0 01-2.26-1.46c-.08-1.67-1-1.59-2.2-1.67a53.28 53.28 0 00-7.26.4c-2.64.17-5.3.1-8 0-.93 0-1.55.11-1.79 1.13a2 2 0 01-2.42 1.61 11.8 11.8 0 00-1.33 0c-1.75 0-1.82 0-1.92-1.78 0-1.07-.47-1.39-1.47-1.4-1.92 0-3.83-.06-5.74-.23-1.17-.1-1.41.44-1.38 1.4.05 2.13.06 4.26.14 6.39.14 3.24.23 6.48.08 9.71a38.49 38.49 0 000 8.38c.33 1.89.9 2.58 2.72 3a41.69 41.69 0 009 .69c6.63 0 13.22-.78 19.84-1a67.76 67.76 0 009-1.1c3.3-.59 4.11-1.94 4.52-5a97.67 97.67 0 00.3-11.57zm-65.39-26c.06-3.76.17-7.52 0-11.27 0-.73.11-1.57-.59-2a10.68 10.68 0 00-5-2.25 3.29 3.29 0 00-2.78 1 6.93 6.93 0 00-1.84 3.7A103.35 103.35 0 008.11 42.7c-.14 2.49-.44 5-.65 7.47-.18 2.13-.35 4.26-.49 6.39a7.29 7.29 0 004.41 7.66c3 1.42 6.2 1.77 9.38 2.31.85.15 1-.46 1-1.1 0-2.13.14-4.28-.05-6.4a209.61 209.61 0 01-.87-20.96zM1.14 58.86a9.48 9.48 0 005.88 9.33 38.88 38.88 0 0012.76 3.28c2 .19 2.14 0 1.92-2-.11-1-.62-1.33-1.48-1.61-2.73-.9-5.61-1.15-8.36-2-4.21-1.34-6.55-4.57-6.16-9 .28-3.3.86-6.59.93-9.89.13-6.3 1.38-12.43 2.3-18.62A12.14 12.14 0 0110.47 24c1.71-2.88 3.76-3.3 6.76-2.06.88.37 1.74.79 2.62 1.17a.62.62 0 00.91-.28c.67-1.36.14-3.53-1.16-4a49 49 0 00-6.86-2.43 3.41 3.41 0 00-2.37.16 8.84 8.84 0 00-5.1 5.76 25.29 25.29 0 00-1.05 7c.2 7.48-1 14.82-2.12 22.17-.33 2.4-.63 4.88-.96 7.37zm68.08-48.74a9.74 9.74 0 00-.66-3.8 2.78 2.78 0 00-1.84-2.05 20.88 20.88 0 00-7-.89c-2.41.24-4.82.6-7.25.61a19.46 19.46 0 00-4.36.64c-1.44.35-1.87.86-2 2.28-.14 1.91-.21 3.82-.28 5.73a4 4 0 00.39 2.15 1.62 1.62 0 001.84.88c.84-.1 1-.68 1.11-1.4a14 14 0 00-.1-3.27c-.31-2.72.45-3.77 3.07-4 2.94-.23 5.88-.4 8.82-.53 2.57-.12 3.51.75 3.84 3.39.14 1.1.31 2.19.42 3.29a1.28 1.28 0 001.45 1.29 2.05 2.05 0 002.39-2c.1-.67.1-1.34.16-2.32zm-36.41 2.39c4.42.4 4.42.4 5.68-3.38.07-.21.12-.43.19-.63 1.25-3.62 2.12-4.33 5.85-4.37 1.7 0 3-1 4.57-1.39a14.7 14.7 0 00-5.55-1.45c-2.73 0-5.38.71-7.09 2.89a21.1 21.1 0 00-3.65 8.33zm-.09 10.33a3.27 3.27 0 00.44 0c.56 0 1.3.17 1.61-.42s-.24-1.24-.7-1.68a27.16 27.16 0 00-6-4.47c-1.9-1-4.29-.43-5.05 1.12-.3.62-.48 1.24.21 1.77 2.84 2.1 5.84 3.71 9.49 3.68zm12-14.54h.07V6.1c0-.39-.17-.78-.6-.78-1 0-2.05-.28-2.82.74a12.06 12.06 0 00-2.13 5c-.09.43-.1 1 .48 1.05a8.17 8.17 0 004.53-.5c.94-.51.29-1.76.46-2.66a3.62 3.62 0 00-.01-.65zm6 47c.66.33 1.24.09 1.82.1a1.14 1.14 0 001.27-1.2 27.19 27.19 0 000-5.26 1 1 0 00-.52-.89 2 2 0 00-2.52 1.61c-.1 1.87-.05 3.76-.05 5.61zm10.22-44.78c-2.08-2.6-3.33-3.38-6.6-1.86 1.67 2.39 3.95 2.62 6.6 1.86zM75.72 52h.14v2.19c0 .49 0 1.16.69 1.12s1.27-.34 1.31-1a18 18 0 00-.09-4.58c-.13-.6-.61-.76-1.18-.74s-.86.45-.87 1 0 1.37 0 2.01zM54.96 10.91c-1.16-.9-2-1.58-2.89-2.22a1.07 1.07 0 00-1.41.17 1.66 1.66 0 00-.38 1.83.82.82 0 001 .69 15.94 15.94 0 003.68-.47zM60.58 8l2.68 2.36c.37-2.05-.29-2.65-2.68-2.36z"
      ></path>
      <path
        className={styles.path}
        stroke="#2b2c34"
        strokeWidth=".5"
        d="M83.86 66.9a23.84 23.84 0 01-.73 6.1 5.14 5.14 0 01-3.39 3.78A20.65 20.65 0 0174 78.25c-3.34.4-6.61 1.24-10.07.89-3.13-.33-6.31 0-9.47-.39a37.56 37.56 0 01-6-1.21 4 4 0 01-3.18-3.51 21.36 21.36 0 01-.25-4.38c.15-2.34.08-4.7.09-7.06 0-2 .35-2.28 2.3-1.9a23.63 23.63 0 013.39.93c3.05 1.08 6.23 1 9.39 1A109.24 109.24 0 0079.26 61c3.75-.66 3.92-.54 4.42 3.22.12.91.12 1.78.18 2.68zm-20.71 11a27.87 27.87 0 007.2-.2 48.52 48.52 0 008.83-1.87 3.73 3.73 0 002.59-2.53 29.24 29.24 0 00.46-9.87c-.09-1.26-.55-1.58-1.77-1.33-3.54.72-7.15.85-10.7 1.41a63.71 63.71 0 01-16 .16 17.52 17.52 0 01-5.29-1.39c-1.35-.58-2.13-.29-2.1.85.1 3.44-.39 6.89.16 10.34a3.22 3.22 0 002.62 2.87c.57.15 1.14.3 1.72.41a71.27 71.27 0 0012.28 1.11z"
      ></path>
      <path
        className={styles.path}
        stroke="#2b2c34"
        strokeWidth=".5"
        d="M65.92 65.2c3.12-.06 3.12-.06 3.16 3 0 2.34 0 2.4-2.37 2.65a15.77 15.77 0 01-4.8-.07 1.68 1.68 0 01-1.53-1.56c-.49-3-.32-3.34 2.69-3.82.94-.12 1.9-.13 2.85-.2zm-1.24 4.47h1.75c1.21-.13 1.36-.42 1.38-1.74s-.67-1.23-1.58-1.18a11.47 11.47 0 00-3.23.42 1.07 1.07 0 00-.84 1.1 1.09 1.09 0 00.78 1.18 5 5 0 001.74.22z"
      ></path>
    </svg>
  );
}

export default Logo;
