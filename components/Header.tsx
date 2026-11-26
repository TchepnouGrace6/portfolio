const liens = [
  { href: "#accueil", label: "Accueil" },
  { href: "#projets", label: "Projets" },
  { href: "#parcours", label: "Mon parcours" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-bordure bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-3">
        <a href="#accueil" className="text-lg font-bold text-principal-fonce">
          Grâce Pambe
        </a>
        <nav aria-label="Navigation principale">
          <ul className="flex flex-wrap gap-1">
            {liens.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-block rounded-full px-4 py-2 font-medium text-encre hover:bg-indigo-50"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}