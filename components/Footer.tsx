export default function Footer() {
  return (
    <footer className="mt-16 border-t border-bordure bg-surface">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-secondaire">
        <p>© 2026 Grâce De Dieu Pambe Tchepnou</p>
        <nav aria-label="Informations légales">
          <ul className="flex gap-4">
            <li>
              <a href="#mentions-legales" className="underline">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#confidentialite" className="underline">
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}