import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/image.png"
        alt="Sample Image"
        width={600}
        height={400}
        className="mx-auto my-8"
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Genfi</h1>
        <p className="text-lg text-gray-700">
          The new generation community platform.
        </p>
      </div>
    </>
  );
}
