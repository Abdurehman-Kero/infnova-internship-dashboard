import { useNavigate } from "react-router-dom";

import type { Applicant } from "../../types/applicant.types";

interface ApplicantTableProps {
  applicants: Applicant[];
}

function ApplicantTable({ applicants }: ApplicantTableProps) {
  const navigate = useNavigate();

  if (applicants.length === 0) {
    return (
      <div
        className="
        rounded-xl
        bg-white
        p-8
        text-center
        text-slate-500
        shadow
        "
      >
        No applicants found.
      </div>
    );
  }

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "accepted":
        return "bg-green-100 text-green-700";

      case "rejected":
        return "bg-red-100 text-red-700";

      case "shortlisted":
        return "bg-blue-100 text-blue-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <>
      {/* Desktop Table */}

      <div
        className="
        hidden
        overflow-x-auto
        rounded-xl
        bg-white
        shadow
        md:block
        "
      >
        <table
          className="
          w-full
          text-left
          "
        >
          <thead
            className="
            border-b
            bg-slate-50
            "
          >
            <tr>
              {["Name", "Email", "Track", "Status", "Applied Date"].map(
                (heading) => (
                  <th
                    key={heading}
                    className="
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-slate-600
                    "
                  >
                    {heading}
                  </th>
                ),
              )}
            </tr>
          </thead>

          <tbody>
            {applicants.map((applicant) => (
              <tr
                key={applicant.id}

                onClick={() => {
                  navigate(`/applicants/${applicant.id}`);
                }}

                className="
                  cursor-pointer
                  border-b
                  hover:bg-slate-50
                  transition
                  "
              >
                <td
                  className="
                    px-6
                    py-4
                    font-medium
                    text-slate-800
                    "
                >
                  {applicant.fullName}
                </td>

                <td
                  className="
                    px-6
                    py-4
                    text-slate-600
                    "
                >
                  {applicant.email}
                </td>

                <td
                  className="
                    px-6
                    py-4
                    capitalize
                    text-slate-600
                    "
                >
                  {applicant.track}
                </td>

                <td
                  className="
                    px-6
                    py-4
                    "
                >
                  <span
                    className={`
                      rounded-full
                      px-3
                      py-1
                      text-xs
                      font-medium
                      capitalize
                      ${getStatusStyle(applicant.status)}
                      `}
                  >
                    {applicant.status}
                  </span>
                </td>

                <td
                  className="
                    px-6
                    py-4
                    text-slate-600
                    "
                >
                  {applicant.applicationDate
                    ? new Date(applicant.applicationDate).toLocaleDateString()
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}

      <div
        className="
        space-y-4
        md:hidden
        "
      >
        {applicants.map((applicant) => (
          <div
            key={applicant.id}

            onClick={() => {
              navigate(`/applicants/${applicant.id}`);
            }}

            className="
              cursor-pointer
              rounded-xl
              bg-white
              p-5
              shadow
              transition
              hover:shadow-md
              "
          >
            <div
              className="
                mb-3
                flex
                items-start
                justify-between
                gap-3
                "
            >
              <h3
                className="
                  font-bold
                  text-slate-800
                  "
              >
                {applicant.fullName}
              </h3>

              <span
                className={`
                  rounded-full
                  px-3
                  py-1
                  text-xs
                  font-medium
                  capitalize
                  ${getStatusStyle(applicant.status)}
                  `}
              >
                {applicant.status}
              </span>
            </div>

            <div
              className="
                space-y-2
                text-sm
                text-slate-600
                "
            >
              <p>
                <strong>Email:</strong> {applicant.email}
              </p>

              <p>
                <strong>Track:</strong> {applicant.track}
              </p>

              <p>
                <strong>Applied:</strong>{" "}
                {applicant.applicationDate
                  ? new Date(applicant.applicationDate).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ApplicantTable;
