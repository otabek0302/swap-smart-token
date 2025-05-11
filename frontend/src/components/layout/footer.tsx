import Link from 'next/link';

export function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="py-4 flex justify-between items-center border-t-[0.5px] border-gray-200">
          <div className="flex-1 flex flex-col items-start justify-start gap-4">
            <Link href="mailto:otabekjon0302@gmail.com">otabekjon0302@gmail.com</Link>
          </div>
          <div className="flex-1 flex items-center justify-end gap-4">
            <Link href="https://github.com/otabek0302">Amonov Otabek</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
