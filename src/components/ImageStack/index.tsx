import Image from "next/image";

export type ImageStackProps = {
  url: string;
  alt: string;
  id: string | number;
};

export function ImageStack(props: { images: ImageStackProps[] }) {
  return (
    <div className="relative h-[150px] w-full -right-5">
      {props.images.map((data, index) => {
        return (
          <div className={`aspect-[4/3] overflow-hidden absolute top-0 right-${index !== 0 ? index as number * 5 : 0} z-${(index as number) * 10}`} key={data.id}>
            <Image
              style={{
                right: (data.id as number) * 10,
              }}
              alt={data.alt}
              src={data.url}
              width={200}
              height={200}
            />
          </div>
        );
      })}
    </div>
  );
}
