import { IconChevronRight } from "@tabler/icons-react";

import { profile } from "../../data/profile";

export default function CertificationsList() {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-1">
        {profile.certifications.sort((a, b) => new Date(a.date) - new Date(b.date)).map((certificate) => (
          <li key={certificate.id} className="flex flex-col flex-wrap py-2 ">
            <h4 className="font-medium">{certificate.type}</h4>
            <p className="text-gray-600 text-sm">{certificate.issuer}</p>
            <div className="flex flex-row gap-2 text-sm text-gray-400">
              <span>{certificate.level}</span>
              <span>•</span>
              <span>{certificate.date}</span>
              <a
                className="float-right"
                href={certificate.url}
                target="_blank"
                rel="noreferrer"
              >
                <IconChevronRight stroke={2} size="20" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
