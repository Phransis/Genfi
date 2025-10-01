import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen ">
                <Image
                  src="/image.png"
                  alt="Sample Image"
                  width={600}
                  height={400}
                  className="mx-auto my-8"
                />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">
  Oops! The page you&apos;re looking for doesn&apos;t exist. <Link href="/" className="text-blue-500 hover:underline">Go back home</Link>
      </p>
    </div>
  );
}