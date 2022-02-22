export default function SvgGenerator({ name }) {
  switch (name) {
    case 'login': {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" /></svg>
      );
    }

    case 'password': {
      return (
        <svg id="Layer_1" version="1.1" viewBox="0 0 128 128" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g>
            <path d="M64,1C47.5,1,34,14.5,34,31v26H15v70h99V57H94V31C94,14.5,80.5,1,64,1z M42,31c0-12.1,9.9-22,22-22s22,9.9,22,22v26H42V31z    M106,65v54H23V65H106z" />
            <rect height="22" width="8" x="60" y="81" />
          </g>
        </svg>
      );
    }

    default:
      return null;
  }
}
