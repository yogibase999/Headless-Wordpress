const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header style={{padding: "20px", background: "#f5f5f5"}}>
        <h2>My Website</h2>
      </header>
      <main>{children}</main>
      <footer style={{padding: "20px", background: "#f5f5f5"}}>
        <p>© 2026 My Website</p>
      </footer>
    </>
  );
};

export default Layout;
