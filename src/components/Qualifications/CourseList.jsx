import { profile } from "../../data/profile";

export default function CourseList() {
  return (
    <>
      <h3 className="py-2 text-gray-500 font-medium">COMPLETED COURSES</h3>
      <ul className="flex gap-1.5 flex-wrap">
        {profile.education.courses.map((course) => (
          <li
            className="border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm"
            key={course}
          >
            {course}
          </li>
        ))}
      </ul>
    </>
  );
}
