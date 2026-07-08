const appStyles = {
  shell: {
    display: 'flex',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    background: 'var(--bg-page)',
    fontFamily: 'var(--font-family)',
  },
  topBar: {
    height: 48,
    background: 'var(--bg-surface)',
    borderBottom: '1px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    position: 'fixed',
    top: 0,
    left: 220,
    right: 0,
    zIndex: 100,
  },
  topBarLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  topBarRight: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  breadcrumb: {
    fontSize: 13,
    color: 'var(--text-secondary)',
  },
  breadcrumbCurrent: {
    fontSize: 13,
    color: 'var(--text-heading)',
    fontWeight: 500,
  },
  userBadge: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    background: 'var(--color-primary)',
    color: '#fff',
    display: 'grid',
    placeItems: 'center',
    fontSize: 13,
    fontWeight: 500,
  },
  mainArea: {
    display: 'flex',
    flex: 1,
    marginTop: 48,
    marginLeft: 220,
    overflow: 'hidden',
  },
  contentArea: {
    flex: 1,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
};

function App() {
  const [section, setSection] = React.useState('dashboard');
  const topBarLogoStyles = { height: 28, width: 'auto', display: 'block' };

  const sectionTitle = {
    dashboard: 'Dashboard',
    stations: 'Stations',
    devices: 'Devices',
    orders: 'Work Orders',
    reports: 'Reports',
  };

  function renderContent() {
    switch (section) {
      case 'dashboard': return React.createElement(window.DashboardPanel);
      case 'devices': return React.createElement(window.DataTable);
      case 'stations': return React.createElement(window.FormPanel);
      default: return React.createElement('div', { style: { padding: 40, fontSize: 16, color: 'var(--text-secondary)' } },
        sectionTitle[section] + ' section — content placeholder'
      );
    }
  }

  return React.createElement('div', { style: appStyles.shell },
    /* Sidebar */
    React.createElement(window.Sidebar, { activeSection: section, onNavigate: setSection }),

    /* Top bar */
    React.createElement('div', { style: appStyles.topBar },
      React.createElement('div', { style: appStyles.topBarLeft },
        React.createElement('img', { src: '../../logos/logo-default.png', alt: 'JoinBright-Blue', style: topBarLogoStyles }),
        React.createElement('span', { style: { color: 'var(--border-color)' } }, '/'),
        React.createElement('span', { style: appStyles.breadcrumbCurrent }, sectionTitle[section]),
      ),
      React.createElement('div', { style: appStyles.topBarRight },
        React.createElement('span', { style: { fontSize: 12, color: 'var(--text-label)' } }, '12:47 UTC+8'),
        React.createElement('div', { style: appStyles.userBadge }, 'A'),
      ),
    ),

    /* Main content */
    React.createElement('div', { style: appStyles.mainArea },
      React.createElement('div', { style: appStyles.contentArea },
        renderContent()
      ),
    ),
  );
}

window.App = App;
