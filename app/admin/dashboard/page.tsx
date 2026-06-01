export default function DashboardPage() {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
                Welcome to the Admin Dashboard
            </h1>
            <p className="text-gray-600">
                From this panel, you can manage all pages and view form submissions.
                Select an option from the left sidebar to get started.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg flex flex-col justify-center items-center">
                    <span className="text-3xl mb-2">📄</span>
                    <h3 className="font-semibold text-blue-900">10 Pages</h3>
                </div>
                <div className="bg-green-50 border border-green-100 p-6 rounded-lg flex flex-col justify-center items-center">
                    <span className="text-3xl mb-2">📥</span>
                    <h3 className="font-semibold text-green-900">Form Submissions</h3>
                </div>
                <div className="bg-purple-50 border border-purple-100 p-6 rounded-lg flex flex-col justify-center items-center">
                    <span className="text-3xl mb-2">⚙️</span>
                    <h3 className="font-semibold text-purple-900">Settings</h3>
                </div>
            </div>
        </div>
    );
}
