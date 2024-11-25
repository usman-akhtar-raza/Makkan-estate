const Dashboard = () => {
    return (
      <div className="flex-1 p-6">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-sm font-medium">For Sale</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-sm font-medium">For Rent</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-sm font-medium">Hot</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>
        <div className="mt-6 bg-white p-6 shadow rounded">
          <h3 className="text-lg font-semibold mb-4">View In-Depth Insights</h3>
          <p>No data available.</p>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  