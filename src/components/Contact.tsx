import { EnvelopeIcon } from '@heroicons/react/24/solid';

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
  >
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76
             2.24 5 5 5h14c2.76 0 5-2.24
             5-5v-14c0-2.76-2.24-5-5-5zm-11
             19h-3v-10h3v10zm-1.5-11.28c-.96
             0-1.72-.78-1.72-1.72s.76-1.72
             1.72-1.72c.95 0 1.72.78
             1.72 1.72s-.77 1.72-1.72
             1.72zm13.5 11.28h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87
             0-2.16 1.46-2.16 2.96v5.7h-3v-10h2.88v1.37h.04c.4-.75
             1.38-1.54 2.84-1.54 3.04 0
             3.6 2 3.6 4.59v5.58z" />
  </svg>
);

export default function Contact() {
  return (
    <section className="text-left">
      {/* ボタン：スマホ縦、PC横（左寄せ） */}
      <div className="flex flex-col lg:flex-row lg:justify-start gap-4">
        {/* メールボタン */}
        <a
          href="mailto:j.fukuda@rlungrta.jp"
          className="flex items-center justify-center gap-4 bg-white text-black
                     py-4 px-10 rounded-full text-xl font-bold
                     hover:bg-gray-300 transition-colors duration-200
                     w-full sm:w-1/2 lg:w-1/3"
        >
          <EnvelopeIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          Contact
        </a>

        {/* LinkedIn ボタン */}
        <a
          href="https://www.linkedin.com/in/jonosuke-fukuda-305616372/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4 bg-[#0077B5] text-white
                     py-4 px-10 rounded-full text-xl font-bold
                     hover:bg-[#005582] transition-colors duration-200
                     w-full sm:w-1/2 lg:w-1/3"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
      </div>

      {/* 代替テキスト */}
      <p className="mt-4 text-sm text-gray-100">
        Or email directly: j.fukuda@rlungrta.jp
      </p>
    </section>
  );
}
