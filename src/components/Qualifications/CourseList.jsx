import { profile } from "../../data/profile";

export default function CourseList() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-gray-500 dark:text-gray-100 font-medium text-sm tracking-wider">
        COMPLETED COURSES
      </h3>

      <ul className="flex flex-wrap gap-2">
        {profile.education.courses.map((course) => (
          <li
            key={course}
            className="border border-gray-300 dark:hover:text-black dark:text-white dark:border-[#333333] text-gray-700 px-3 py-1 rounded-full text-sm
                       hover:bg-gray-50 dark:hover:bg-white transition cursor-default"
          >
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
}
