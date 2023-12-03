import Heros from '@/components/heros';
import Portofolio from '@/components/portofolio';

export default function Home() {
  return (
    <div className="w-full">
      {/* heros */}
      <div className="w-full h-[450px] flex justify-center items-end">
        <Heros />
      </div>
      {/* portofolio */}
      <Portofolio />
    </div>
  );
}
