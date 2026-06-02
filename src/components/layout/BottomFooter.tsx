export function BottomFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-primary-foreground/50">
            &copy; {currentYear} MG Granites. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-primary-foreground/50">
            <span>
              Designed by{" "}
              <a
                href="https://www.gischennai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Goldmine Infotech and Systems
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
