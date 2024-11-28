import PostContainer from "./PostContainer";

export default function PostSection() {
  return (
    <div className="w-full px-[150px] h-screen py-5">
      {/* <div className="w-fit"> */}
        <h2 className="font-thunder font-extrabold text-white text-[120px]">POST</h2>
        <PostContainer />
      {/* </div> */}
    </div>
  );
}
