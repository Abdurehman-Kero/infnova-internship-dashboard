import { useEffect, useState } from "react";

import ApplicantTable from "../../components/applicants/ApplicantTable";

import { applicantService } from "../../services/applicant.service";

import type { Applicant, ApplicantStatus } from "../../types/applicant.types";

function ApplicantsPage() {
  const [applicants, setApplicants] = useState<Applicant[]>([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState<ApplicantStatus | "">("");

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const fetchApplicants = async () => {
    try {
      setLoading(true);

      setError("");

      const response = await applicantService.getApplicants({
        page,

        limit: 10,

        search,

        status: status || undefined,

        sortBy: "applicationDate",

        sortOrder,
      });

      setApplicants(response.data);

      setTotalPages(response.meta.totalPages);
    } catch (error) {
      setError("Failed to load applicants.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, [page, search, status, sortOrder]);

  return (
    <div
      className="
      w-full
      space-y-6
      "
    >
      {/* Header + Search */}

      <div
        className="
        flex
        flex-col
        gap-4
        lg:flex-row
        lg:items-center
        lg:justify-between
        "
      >
        <h1
          className="
          text-2xl
          sm:text-3xl
          font-bold
          text-slate-800
          "
        >
          Applicants
        </h1>

        <input
          value={search}

          onChange={(e) => {
            setPage(1);

            setSearch(e.target.value);
          }}

          placeholder="Search applicants..."

          className="
          w-full
          rounded-lg
          border
          px-4
          py-2
          outline-none
          focus:ring-2
          focus:ring-green-500
          lg:w-80
          "
        />
      </div>

      {/* Filters */}

      <div
        className="
        flex
        flex-col
        gap-3
        sm:flex-row
        sm:items-center
        "
      >
        <select
          value={status}

          onChange={(e) => {
            setPage(1);

            setStatus(e.target.value as ApplicantStatus);
          }}

          className="
          w-full
          rounded-lg
          border
          px-4
          py-2
          sm:w-auto
          "
        >
          <option value="">All Status</option>

          <option value="pending">Pending</option>

          <option value="shortlisted">Shortlisted</option>

          <option value="accepted">Accepted</option>

          <option value="rejected">Rejected</option>
        </select>

        <button
          onClick={() => {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
          }}

          className="
          w-full
          rounded-lg
          bg-slate-800
          px-4
          py-2
          text-white
          sm:w-auto
          "
        >
          Sort Date ({sortOrder})
        </button>
      </div>

      {loading && (
        <div
          className="
            rounded-lg
            bg-white
            p-5
            "
        >
          Loading applicants...
        </div>
      )}

      {error && (
        <div
          className="
            rounded-lg
            bg-red-50
            p-4
            text-red-700
            "
        >
          {error}
        </div>
      )}

      {!loading && <ApplicantTable applicants={applicants} />}

      {/* Pagination */}

      <div
        className="
        flex
        flex-col
        items-center
        justify-center
        gap-3
        sm:flex-row
        "
      >
        <button
          disabled={page === 1}

          onClick={() => setPage(page - 1)}

          className="
          w-full
          rounded-lg
          border
          px-4
          py-2
          disabled:opacity-50
          sm:w-auto
          "
        >
          Previous
        </button>

        <span
          className="
          text-sm
          text-slate-600
          "
        >
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}

          onClick={() => setPage(page + 1)}

          className="
          w-full
          rounded-lg
          border
          px-4
          py-2
          disabled:opacity-50
          sm:w-auto
          "
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ApplicantsPage;
