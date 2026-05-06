import { IconChevronRight } from "@tabler/icons-react";
import { profile } from "../../data/profile";

export default function CertificationsList() {
  const sortedCerts = [...profile.certifications].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {sortedCerts.map((certificate) => (
        <li
          key={certificate.id}
          className="p-4 border border-gray-300 rounded-lg flex flex-col gap-2 hover:shadow-md transition"
        >
          {/* Title + icon row */}
          <div className="flex justify-between items-start gap-2">
            <h4 className="font-medium">{certificate.type}</h4>

            <a
              href={certificate.url}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-blue-600 transition"
            >
              <IconChevronRight stroke={2} size={20} />
            </a>
          </div>

          {/* Issuer */}
          <p className="text-gray-600 text-sm">{certificate.issuer}</p>

          {/* Meta */}
          <div className="flex gap-2 text-sm text-gray-400">
            <span>{certificate.level}</span>
            <span>•</span>
            <span>{certificate.date}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
