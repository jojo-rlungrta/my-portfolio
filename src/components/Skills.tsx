import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiJquery,
  SiReact,
  SiNextdotjs,
  SiWordpress,
  SiPhp,
  SiGit,
  SiWebpack,
} from "react-icons/si";

import {
  FaComments, // Communication
  FaUsers,    // Teamwork
  FaSyncAlt,  // Flexibility
  FaSearch,   // Attention to Detail
} from "react-icons/fa";

const TECHNICAL = [
  { name: "HTML", Icon: SiHtml5, color: "#E44D26" },
  { name: "CSS", Icon: SiCss3, color: "#264DE4" },
  { name: "SCSS", Icon: SiSass, color: "#CC6699" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "jQuery", Icon: SiJquery, color: "#0769AD" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Webpack", Icon: SiWebpack, color: "#8DD6F9" },
];

const SOFT = [
  { name: "Communication", Icon: FaComments },
  { name: "Teamwork", Icon: FaUsers },
  { name: "Flexibility", Icon: FaSyncAlt },
  { name: "Attention to Detail", Icon: FaSearch },
];

export default function Skills() {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-semibold tracking-wide">Skills</h2>

      {/* Technical */}
      <ul className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 sm:gap-8 mt-6">
        {TECHNICAL.map(({ name, Icon, color }) => (
          <li key={name} className="flex flex-col items-center text-center">
            <Icon
              className="h-10 w-10 sm:h-12 sm:w-12 mb-1"
              style={{ color }}
              aria-hidden="true"
            />
            <span className="text-xs sm:text-sm text-white">{name}</span>
          </li>
        ))}
      </ul>

      {/* Soft Skills */}
      <ul className="grid grid-cols-4 sm:grid-cols-8xxx lg:grid-cols-12 gap-6 sm:gap-8 mt-6">
        {SOFT.map(({ name, Icon }) => (
          <li key={name} className="flex flex-col items-center text-center">
            <Icon
              className="h-9 w-9 sm:h-11 sm:w-11 mb-1 text-white opacity-90 scale-90"
              style={{ strokeWidth: 0.5 }}
              aria-hidden="true"
            />
            <span className="text-xs sm:text-sm text-white">{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
