export default function WallectConnectButton() {
    return (
      <>
        <button className="flex items-center space-x-2 px-6 bg-transparent border rounded-lg hover:bg-blue-700 w-full focus:ring-2  focus:outline-none mb-4">
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>

          {/* Text */}
          <span className="h2">WALLETCONNECT</span>
        </button>
      </>
    );
}