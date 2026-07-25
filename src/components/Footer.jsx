export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">© {year} Ahsan Ahmed Sifat — Personal Introduction Page</div>
    </footer>
  );
}
