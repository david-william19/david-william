export const tagPostColorGenerator = (skill: string) => {
  switch (skill) {
    case "javascript":
      return "bg-yellow-500/40";
    case "react":
      return "bg-blue-500/40";
    case "frontend":
      return "bg-cyan-500/40";
    case "webdev":
      return "bg-orange-500/40";
    case "typescript":
      return "bg-blue-300/40";
    case "nextjs":
      return "bg-black";
    case "prisma":
      return "bg-gray-800/40";
    case "tailwindcss":
      return "bg-blue-600/40";
    case "flutter":
      return "bg-blue-400/40";
    case "reactnative":
      return "bg-blue-500/40";
    default:
      return "bg-gray-500/40";
  }
};
