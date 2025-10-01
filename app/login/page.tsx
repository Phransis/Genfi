import Image from "next/image";
import LoginImage from "@/public/image.png";
import MetamaskButton from "../components/buttons/MetamaskButton";
import WallectConnectButton from "../components/buttons/WalletConnectButton";
export default function LoginPage() {
  return (
    //Divide the screen into two halves, left half for image and right half for login form
    //Don't show the image on small screens
    //Center the login form vertically and horizontally
    //Don't forget to remove min-h-screen
    <div className="min-h-screen p-8 flex items-center justify-center mx-4">
      <div className="w-1/2 hidden md:flex items-center justify-center">
        <Image
          src={LoginImage}
          alt="Login Illustration"
          className="max-w-full h-auto"
          priority
        />
      </div>

      <div className="w-full md:w-1/2 p-8">
        <div className="mb-8">
          <h2 className="mb-4">
            THE NEW GENERATION COMMUNITY
          </h2>
          <p className="mb-8">
            Let's connect and share content together to earn rewards everyday
          </p>
        </div>

        <div className="mb-8">
          <div className="mb-4 ">Sign in to Genfi</div>
          <MetamaskButton />
          <WallectConnectButton />
          </div>
      </div>
    </div>
  );
}
