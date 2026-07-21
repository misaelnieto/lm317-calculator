export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-copyright">
          &copy; {new Date().getFullYear()} Noe Nieto
        </span>
        <nav className="footer-links">
          <a href="https://noenieto.com/">Website</a>
          <a href="https://noenieto.com/blog/">Blog</a>
          <a href="https://noenieto.com/demos">Demos</a>
          <a href="https://github.com/misaelnieto">GitHub</a>
          <a href="https://www.linkedin.com/in/noe-nieto/">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}
