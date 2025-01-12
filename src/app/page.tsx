import Header from "~/components/header";

const MONTH_NAMES = [
  "😎",
  "J",
  "F",
  "M",
  "A",
  "M",
  "J",
  "J",
  "A",
  "S",
  "O",
  "N",
  "D",
];

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-[400px] flex-col gap-4 p-4">
      <Header />
      <div className="grid grid-cols-[repeat(13,1fr)] gap-2 text-xs">
        {MONTH_NAMES.map((month, idx) => (
          <span key={`${month}${idx}`} className="grid place-items-center">
            {month}
          </span>
        ))}
        <div className="grid grid-cols-1 gap-2">
          {Array.from({ length: 31 }).map((_, i) => (
            <span key={`day-${i}`} className="grid place-items-center">
              {i + 1}
            </span>
          ))}
        </div>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={`month-${i}`} className="grid grid-cols-1 gap-1">
            {Array.from({ length: 31 }).map((_, j) => (
              <button
                key={`${i}-${j}`}
                className="aspect-square h-full w-full rounded outline outline-1 outline-border"
                aria-label={`${j + 1}/${i + 1}/2025`}
              />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
