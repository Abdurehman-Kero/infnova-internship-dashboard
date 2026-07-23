import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { applicantService } from "../../services/applicant.service";

import type { Applicant, ApplicantStatus } from "../../types/applicant.types";

function ApplicantDetailsPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [applicant, setApplicant] = useState<Applicant | null>(null);

  const [loading, setLoading] = useState(true);

  const [updating, setUpdating] = useState(false);

  const [error, setError] = useState("");

  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<ApplicantStatus>("pending");

  const fetchApplicant = async () => {
    try {
      setLoading(true);

      setError("");

      if (!id) {
        throw new Error("Applicant ID missing");
      }

      const data = await applicantService.getApplicantById(id);

      setApplicant(data);

      setStatus(data.status as ApplicantStatus);
    } catch (error) {
      setError("Failed to load applicant details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicant();
  }, [id]);

  const handleStatusUpdate = async () => {
    try {
      if (!id) return;

      setUpdating(true);

      setMessage("");

      setError("");

      await applicantService.updateStatus(id, status);

      setMessage("Applicant status updated successfully.");

      setApplicant((previous) => {
        if (!previous) return previous;

        return {
          ...previous,

          status,
        };
      });
    } catch (error) {
      setError("Failed to update applicant status.");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div
        className="
        rounded-xl
        bg-white
        p-5
        shadow
        sm:p-6
        "
      >
        Loading applicant details...
      </div>
    );
  }

  if (error && !applicant) {
    return (
      <div
        className="
        rounded-xl
        bg-red-50
        p-5
        text-red-700
        "
      >
        {error}
      </div>
    );
  }

  return (
    <div
      className="
      space-y-5
      sm:space-y-6
      "
    >
      {/* Header */}

      <div
        className="
        flex
        flex-col
        gap-4

        sm:flex-row
        sm:items-center
        sm:justify-between
        "
      >
        <h1
          className="
          text-2xl
          font-bold
          text-slate-800

          sm:text-3xl
          "
        >
          Applicant Details
        </h1>

        <button
          onClick={() => navigate("/applicants")}

          className="
          w-full
          rounded-lg
          border
          px-4
          py-2
          transition
          hover:bg-slate-100

          sm:w-auto
          "
        >
          Back
        </button>
      </div>

      {message && (
        <div
          className="
            rounded-lg
            bg-green-50
            p-4
            text-sm
            text-green-700
            "
        >
          {message}
        </div>
      )}

      {error && (
        <div
          className="
            rounded-lg
            bg-red-50
            p-4
            text-sm
            text-red-700
            "
        >
          {error}
        </div>
      )}

      {/* Applicant Information */}

      <div
        className="
        rounded-xl
        bg-white
        p-5
        shadow

        sm:p-6
        "
      >
        <div
          className="
          grid
          gap-5

          sm:grid-cols-2
          "
        >
          {[
            ["Full Name", applicant?.fullName],

            ["Email", applicant?.email],

            ["Country", applicant?.country],

            ["Track", applicant?.track],

            ["Experience Level", applicant?.experienceLevel ?? "Not provided"],

            [
              "Application Date",
              applicant?.applicationDate
                ? new Date(applicant.applicationDate).toLocaleDateString()
                : "N/A",
            ],
          ].map(([label, value]) => (
            <div
              key={label}
              className="
                min-w-0
                "
            >
              <p
                className="
                  text-sm
                  text-slate-500
                  "
              >
                {label}
              </p>

              <p
                className="
                  break-words
                  font-semibold
                  text-slate-800
                  "
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Status Update */}

      <div
        className="
        rounded-xl
        bg-white
        p-5
        shadow

        sm:p-6
        "
      >
        <h2
          className="
          mb-4
          text-lg
          font-bold
          text-slate-800

          sm:text-xl
          "
        >
          Update Status
        </h2>

        <div
          className="
          flex
          flex-col
          gap-3

          sm:flex-row
          "
        >
          <select
            value={status}

            onChange={(e) => setStatus(e.target.value as ApplicantStatus)}

            className="
            w-full
            rounded-lg
            border
            px-4
            py-2

            sm:w-auto
            "
          >
            <option value="pending">Pending</option>

            <option value="shortlisted">Shortlisted</option>

            <option value="accepted">Accepted</option>

            <option value="rejected">Rejected</option>
          </select>

          <button
            onClick={handleStatusUpdate}

            disabled={updating}

            className="
            w-full
            rounded-lg
            bg-green-600
            px-5
            py-2
            text-white
            transition
            hover:bg-green-700
            disabled:opacity-50

            sm:w-auto
            "
          >
            {updating ? "Updating..." : "Update Status"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApplicantDetailsPage;
