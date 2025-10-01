export default function MenuItemLink({ displayName, slug }: { displayName: string; slug: string }) {
    return (
      <a
        href={`/dashboard/${slug}`}
        className="block px-4 py-2 rounded hover:bg-gray-200"
      >
        {displayName}
      </a>
    );
}