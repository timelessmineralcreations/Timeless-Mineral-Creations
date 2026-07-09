export default function AdminPage() {
  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "50px 30px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "10px",
        }}
      >
        Timeless Mineral Creations
      </h1>

      <p
        style={{
          opacity: 0.75,
          marginBottom: "40px",
          fontSize: "18px",
        }}
      >
        Admin Dashboard
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        <DashboardCard title="Orders Today" value="0" />
        <DashboardCard title="Pending Orders" value="0" />
        <DashboardCard title="Orders This Month" value="0" />
        <DashboardCard title="Revenue" value="$0" />
      </div>

      <div
        style={{
          marginTop: "40px",
          border: "1px solid rgba(255,255,255,.15)",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead
            style={{
              background: "rgba(255,255,255,.05)",
            }}
          >
            <tr>
              <Header>Order</Header>
              <Header>Customer</Header>
              <Header>Collection</Header>
              <Header>Status</Header>
              <Header>Total</Header>
            </tr>
          </thead>

          <tbody>
            <tr>
              <Cell colSpan={5}>
                No orders yet...
              </Cell>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

function DashboardCard({ title, value }) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,.15)",
        borderRadius: "18px",
        padding: "25px",
        background: "rgba(255,255,255,.05)",
      }}
    >
      <div
        style={{
          opacity: 0.6,
          marginBottom: "12px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "36px",
          fontWeight: 700,
        }}
      >
        {value}
      </div>
    </div>
  );
}

function Header({ children }) {
  return (
    <th
      style={{
        textAlign: "left",
        padding: "18px",
      }}
    >
      {children}
    </th>
  );
}

function Cell({ children, colSpan }) {
  return (
    <td
      colSpan={colSpan}
      style={{
        padding: "30px",
        borderTop: "1px solid rgba(255,255,255,.08)",
      }}
    >
      {children}
    </td>
  );
}