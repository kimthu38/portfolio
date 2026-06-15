import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-500">
          © {year} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
