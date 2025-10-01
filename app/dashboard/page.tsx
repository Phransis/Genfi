export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        //border-b draws a border line at the bottom of the navbar
        <div className="min-h-screen flex flex-col">    
            <nav className="w-full py-4 ">
                {/* <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="text-xl font-bold">Genfi</div>
                    <div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:outline-none">
                            Dashboard
                        </button>   
                    </div>
                </div> */}
            </nav>
            {/* Main Content */}
            <main className="flex-1 p-6 ">{children}</main>
            {/* Footer */}  

        </div>
    );
}