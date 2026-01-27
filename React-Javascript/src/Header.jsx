export default function Header() {
  return (
    <header className="header">
      <img src="/src/react-log.png" className="nav-logo" alt="react logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-item">Pricing</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
