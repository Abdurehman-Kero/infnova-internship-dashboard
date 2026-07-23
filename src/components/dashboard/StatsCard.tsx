interface StatsCardProps {
  title: string;

  value: number;

  description?: string;
}

function StatsCard({ title, value, description }: StatsCardProps) {
  return (
    <div
      className="
      rounded-xl
      bg-white
      p-6
      shadow-sm
      border
      "
    >
      <h3
        className="
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
        text-3xl
        font-bold
        text-slate-900
        "
      >
        {value}
      </p>

      {description && (
        <p
          className="
            mt-2
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
