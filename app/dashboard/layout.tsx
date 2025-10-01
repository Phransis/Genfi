import MenuItemLink from "../components/menuItemLink/MenuItemLink";
import menuItems from "../data/menuItems.json";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <aside className="w-64  p-4 space-y-4 border-r">
        {/* <h2 className="text-xl font-bold">Left Menu</h2> */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <MenuItemLink
              key={item.slug}
              displayName={item.displayName}
              slug={item.slug}
            />
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 ">{children}</main>

      {/* Right Sidebar */}
      <aside className="w-64  p-4 space-y-4 border-l ">
        <h2 className="text-xl font-bold">Right Menu</h2>
        <nav className="space-y-2">
          <a href="#" className="block px-2 py-1 rounded hover:bg-gray-200">
            Notifications
          </a>
          <a href="#" className="block px-2 py-1 rounded hover:bg-gray-200">
            Messages
          </a>
          <a href="#" className="block px-2 py-1 rounded hover:bg-gray-200">
            Help
          </a>
        </nav>
      </aside>
    </div>
  );
}
