export default function Button({ children, styles = "", linkTo = "#" }) {
  return (
    <a
      className={`${styles} text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5`}
      href={linkTo}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}