export default function WorkExperience() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-bold">Label Japan Co., Ltd. — Tokyo, Japan</h3>
          <p className="mt-4">Web Project Manager / Front-end Developer (Oct 2024 – Sep 2025)</p>
          <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
            <li>Managed full redesign of a printing company website, improving UI and mobile/tablet usability.</li>
            <li>Developed a contact form to improve contact between company and potential clients using React, Next.js, and PHP.</li>
            <li>Integrated WordPress into the information section for a client’s website, streamlining content updates and improving content organization.</li>
            <li>Coordinated between clients and designers to ensure high-quality delivery.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Atlas21 Co., Ltd. — Tokyo, Japan</h3>
          <p className="mt-4">Web Project Manager (Apr 2023 – Oct 2024)</p>
          <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
            <li>Directed the redesign of a platinum credit card landing page, increasing applications threefold through better design and usability.</li>
            <li>Led a large-scale renewal of a railway company’s website by combining three sites into one for improved accessibility and management.</li>
            <li>Handled scheduling, quality control, and team coordination; project received strong client feedback for quality and delivery.</li>
          </ul>
          <p className="mt-4">Front-end Developer (Apr 2017 – Mar 2023)</p>
          <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
            <li>Developed JavaScript functionality for a CMS-integrated product search system for a Food manufacturer website</li>
            <li>Created reusable site-wide components for a Online shopping service introduction site</li>
            <li>Built a JavaScript-based product search system for a pharmaceutical website.</li>
            <li>Designed an insurance request form with conditional elements for a Insurance website.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
