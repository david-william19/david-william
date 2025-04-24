

export default function TagLabel({
  data,
  index,
  color
}: {
  data: string;
  index: number;
  color: string;
}) {

  return (
    <span className={`px-3 text-sm py-1.5 rounded-lg ${color} text-white`} key={index}>
      {data}
    </span>
  );
}
