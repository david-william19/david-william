import PostContainer from "./PostContainer";

export default function PostSection() {
  return (
    <div className="w-full px-[150px]">
      <div className="w-fit">
      <section className="mb-3">
        <h2 className="font-thunder font-extrabold text-white">POST</h2>
        <p className="font-thunder text-white font-light">
          here all my post that i wrote, check it if you interest!
        </p>
      </section>
      <PostContainer />
      </div>
    </div>
  );
}
