import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

export default function Certification() {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-semibold tracking-wide">Certification</h2>
      <a
        href="https://www.ipa.go.jp/en/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block hover:underline"
      >
        Fundamental Information Technology Engineer (Japan, National Certification)
        <ArrowTopRightOnSquareIcon className="inline align-text-bottom w-4 h-4 ml-2" />
      </a>
    </section>
  );
}
