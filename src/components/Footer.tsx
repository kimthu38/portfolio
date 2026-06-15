import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-foreground/25">
          © {year}{" "}
          <span className="text-foreground/40">{personal.name}</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
