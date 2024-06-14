import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Image
        src="/loading-circle.svg"
        alt="Loading..."
        width={50}
        height={50}
        className="max-w-full rounded-2xl"
      />
    </div>
  );
};

export default Loading;
