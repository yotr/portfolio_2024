import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
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

export default Loader;

