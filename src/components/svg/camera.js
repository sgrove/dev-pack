/** @jsx jsx */
import { jsx } from 'theme-ui';

function Camera({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 640"
      width={width}
      height={height}
      fill="#2b2c34"
      aria-labelledby="cameraTitle"
      role="img"
      sx={{
        ':hover': {
          fill: 'primary',
        },
      }}
    >
      <title id="cameraTitle">A Camera SVG Created by Econceptive</title>
      <path d="M441.879 139.192h-10.784l-37.559-50.638a8.17 8.17 0 00-6.538-3.299H272.436a8.168 8.168 0 00-6.538 3.299l-37.559 50.638h-64.723a8.097 8.097 0 00.528-2.862c0-4.491-3.647-8.148-8.138-8.148h-66.09c-4.491 0-8.138 3.657-8.138 8.148 0 1.008.192 1.97.528 2.862H70.121c-17.866 0-32.404 14.548-32.404 32.414v204.839c0 17.866 14.538 32.414 32.404 32.414h137.847c16.643 11.286 36.709 17.886 58.286 17.886s41.642-6.6 58.283-17.886h117.341c17.866 0 32.404-14.548 32.404-32.414V171.606c.001-17.866-14.537-32.414-32.403-32.414zM276.53 101.551h106.374l27.92 37.641H248.609l27.921-37.641zm41.246 292.153c-.41.244-.798.519-1.158.829-14.27 10.022-31.641 15.915-50.363 15.915-18.881 0-36.389-5.988-50.727-16.163a7.969 7.969 0 00-.54-.391c-22.142-15.965-36.584-41.972-36.584-71.288 0-48.432 39.41-87.842 87.852-87.842 48.432 0 87.842 39.41 87.842 87.842-.001 29.201-14.331 55.117-36.322 71.098zm140.23-17.259c0 8.884-7.234 16.118-16.128 16.118h-98.562c16.803-18.501 27.056-43.054 27.056-69.956 0-57.415-46.703-104.138-104.118-104.138-57.415 0-104.128 46.723-104.128 104.138 0 26.901 10.255 51.455 27.061 69.956H70.121c-8.893 0-16.128-7.234-16.128-16.118V205.749h404.013v170.696zm0-186.992H53.994v-17.847c0-8.884 7.234-16.118 16.128-16.118H441.88c8.893 0 16.128 7.234 16.128 16.118v17.847z"></path>
      <path d="M351.841 110.137h-30.993c-4.491 0-8.138 3.657-8.138 8.148s3.647 8.148 8.138 8.148h30.993c4.491 0 8.138-3.657 8.138-8.148s-3.646-8.148-8.138-8.148zM266.255 254.678c-37.452 0-67.918 30.486-67.918 67.928 0 37.442 30.466 67.928 67.918 67.928s67.918-30.486 67.918-67.928c0-37.441-30.466-67.928-67.918-67.928zm0 119.561c-28.479 0-51.642-23.153-51.642-51.632s23.163-51.632 51.642-51.632c28.479 0 51.642 23.153 51.642 51.632s-23.163 51.632-51.642 51.632z"></path>
    </svg>
  );
}

export default Camera;