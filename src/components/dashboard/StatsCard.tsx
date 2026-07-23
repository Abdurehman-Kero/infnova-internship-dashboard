interface StatsCardProps {
  title: string;
  value: number;
  description?: string;
}

function StatsCard({ title, value, description }: StatsCardProps) {
  return (
    <div
      className="
      min-w-0
      rounded-xl
      border
      border-slate-200
      bg-white
      p-4
      shadow-sm
      transition
      hover:shadow-md

      sm:p-6
      "
    >
      <h3
        className="
        truncate
        text-sm
        font-medium
        text-slate-500
        "
      >
        {title}
      </h3>

      <p
        className="
        mt-3
        text-2xl
        font-bold
        text-slate-900

        sm:text-3xl
        "
      >
        {value}
      </p>

      {description && (
        <p
          className="
            mt-2
            break-words
            text-sm
            text-slate-500
            "
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default StatsCard;
