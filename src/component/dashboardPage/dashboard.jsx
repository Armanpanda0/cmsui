import Navbars from "../static/navbar";

const Dashboard = () => {
  // Static dummy data for demonstration
  const stats = [
    { title: "Total Contract Employees", value: 45, color: "#4CAF50" },
    { title: "Active Contracts", value: 32, color: "#2196F3" },
    { title: "Pending Approvals", value: 8, color: "#FF9800" },
    { title: "Expired Contracts", value: 5, color: "#F44336" },
  ];

  const recentEmployees = [
    { name: "John Doe", position: "Software Engineer", status: "Active" },
    { name: "Jane Smith", position: "Designer", status: "Pending" },
    { name: "Bob Johnson", position: "Manager", status: "Active" },
    { name: "Alice Brown", position: "Developer", status: "Expired" },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Navbars />
      <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ color: "#333", marginBottom: "30px" }}>Contract Employee Dashboard</h1>

        {/* Stats Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}>
              <h2 style={{ color: stat.color, fontSize: "2em", margin: "0" }}>{stat.value}</h2>
              <p style={{ color: "#666", margin: "10px 0 0 0" }}>{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Recent Employees Table */}
        <div style={{ backgroundColor: "#fff", borderRadius: "8px", padding: "20px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
          <h2 style={{ color: "#333", marginBottom: "20px" }}>Recent Contract Employees</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f8f9fa" }}>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "1px solid #dee2e6" }}>Name</th>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "1px solid #dee2e6" }}>Position</th>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "1px solid #dee2e6" }}>Status</th>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "1px solid #dee2e6" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentEmployees.map((employee, index) => (
                <tr key={index}>
                  <td style={{ padding: "12px", borderBottom: "1px solid #dee2e6" }}>{employee.name}</td>
                  <td style={{ padding: "12px", borderBottom: "1px solid #dee2e6" }}>{employee.position}</td>
                  <td style={{ padding: "12px", borderBottom: "1px solid #dee2e6" }}>
                    <span style={{
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "0.8em",
                      backgroundColor: employee.status === "Active" ? "#4CAF50" : employee.status === "Pending" ? "#FF9800" : "#F44336",
                      color: "#fff"
                    }}>
                      {employee.status}
                    </span>
                  </td>
                  <td style={{ padding: "12px", borderBottom: "1px solid #dee2e6" }}>
                    <button style={{
                      backgroundColor: "#2196F3",
                      color: "#fff",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginRight: "5px"
                    }}>View</button>
                    <button style={{
                      backgroundColor: "#FF9800",
                      color: "#fff",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <h2 style={{ color: "#333", marginBottom: "20px" }}>Quick Actions</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <button style={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              borderRadius: "6px",
              fontSize: "1em",
              cursor: "pointer",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
            }}>Add New Employee</button>
            <button style={{
              backgroundColor: "#2196F3",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              borderRadius: "6px",
              fontSize: "1em",
              cursor: "pointer",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
            }}>Generate Report</button>
            <button style={{
              backgroundColor: "#9C27B0",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              borderRadius: "6px",
              fontSize: "1em",
              cursor: "pointer",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
            }}>Manage Contracts</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
