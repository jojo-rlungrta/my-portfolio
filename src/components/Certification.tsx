import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

export default function Certification() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-2">Certification</h2>
      <a
        href="https://www.ipa.go.jp/en/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline-offset-2 hover:underline"
      >
        Fundamental Information Technology Engineer (Japan, National Certification)
        <ArrowTopRightOnSquareIcon className="inline align-text-bottom w-4 h-4 ml-2" />
      </a>
    </section>
  );
}
