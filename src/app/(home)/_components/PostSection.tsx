import PostContainer from "./PostContainer";

export default function PostSection() {
  return (
    <div className="w-full px-[150px]">
      <div className="w-fit">
      <section className="mb-3">
        <h2 className="font-thunder font-extrabold text-white text-[120px]">POST</h2>
      </section>
      <PostContainer />
      </div>
    </div>
  );
}
