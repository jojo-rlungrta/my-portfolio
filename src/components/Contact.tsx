import { EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Contact() {
  return (
    <section className="text-left">
      {/* メールボタン */}
      <a
        href="mailto:j.fukuda@rlungrta.jp"
        className="inline-flex items-center justify-center gap-4 bg-white text-black
                   py-4 px-10 rounded-full text-xl font-bold
                   hover:bg-gray-100 transition-colors duration-200
                   w-full sm:w-3/4 lg:w-1/3"
      >
        <EnvelopeIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
        Contact
      </a>

      {/* 代替テキストとしてメールアドレス併記 */}
      <p className="mt-3 text-sm text-gray-100">
        Or email directly: j.fukuda@rlungrta.jp
      </p>
    </section>
  );
}
