export default function Footer() {
    return (
      <footer className="w-full py-4 border-t mt-8">
        <div className="container mx-auto text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Genfi. All rights reserved.
        </div>
      </footer>
    );
}