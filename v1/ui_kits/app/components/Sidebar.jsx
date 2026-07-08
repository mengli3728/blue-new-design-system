const sidebarStyles = {
  wrapper: {
    width: 220,
    background: 'var(--bg-surface)',
    borderRight: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  logoArea: {
    padding: '20px 16px 16px',
    borderBottom: '1px solid var(--border-color)',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  logoImg: {
    height: 28,
    width: 'auto',
    display: 'block',
  },
  navSection: {
    padding: '12px 8px',
    flex: 1,
    overflowY: 'auto',
  },
  sectionLabel: {
    fontSize: 11,
    color: 'var(--text-label)',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    padding: '4px 10px 8px',
  },
  navItem: (active) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '9px 10px',
    fontSize: 13,
    color: active ? '#fff' : 'var(--text-body)',
    background: active ? 'var(--color-primary)' : 'transparent',
    borderRadius: 8,
    cursor: 'pointer',
    marginBottom: 2,
    transition: 'all 0.15s ease',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    fontFamily: 'var(--font-family)',
  }),
  treeItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '6px 10px 6px 28px',
    fontSize: 13,
    color: 'var(--text-body)',
    cursor: 'pointer',
    borderRadius: 'var(--radius-base)',
    marginBottom: 1,
    transition: 'background 0.15s ease',
  },
  favorites: {
    padding: '12px 8px',
    borderTop: '1px solid var(--border-color)',
  },
  favoriteItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '6px 10px',
    fontSize: 12,
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    borderRadius: 'var(--radius-base)',
  },
};

function Sidebar({ activeSection, onNavigate }) {
  const [expanded, setExpanded] = React.useState(true);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '⌂' },
    { id: 'stations', label: 'Stations', icon: '⚡' },
    { id: 'devices', label: 'Devices', icon: '⚙' },
    { id: 'orders', label: 'Work Orders', icon: '☰' },
    { id: 'reports', label: 'Reports', icon: '≡' },
  ];

  const treeItems = ['North District', 'East Campus', 'South Hub', 'West Plant'];
  const favorites = ['North District', 'Reports Q2'];

  return React.createElement('div', { style: sidebarStyles.wrapper },
    /* Logo */
    React.createElement('div', { style: sidebarStyles.logoArea },
      React.createElement('div', { style: sidebarStyles.logo },
        React.createElement('img', { src: '../../logo-default.png', alt: 'JoinBright-Blue', style: sidebarStyles.logoImg })
      )
    ),
    /* Navigation */
    React.createElement('div', { style: sidebarStyles.navSection },
      React.createElement('div', { style: sidebarStyles.sectionLabel }, 'Main Menu'),
      navItems.map(item =>
        React.createElement('button', {
          key: item.id,
          style: sidebarStyles.navItem(activeSection === item.id),
          onClick: () => onNavigate(item.id),
          onMouseEnter: (e) => {
            if (activeSection !== item.id) e.target.style.background = 'var(--color-primary-bg)';
          },
          onMouseLeave: (e) => {
            if (activeSection !== item.id) e.target.style.background = 'transparent';
          },
        },
          React.createElement('span', null, item.icon),
          item.label
        )
      ),
      /* Tree section */
      React.createElement('div', { style: { marginTop: 20 } },
        React.createElement('div', { style: sidebarStyles.sectionLabel }, 'Stations'),
        React.createElement('div', {
          style: { ...sidebarStyles.treeItem, cursor: 'pointer', fontWeight: 500, color: 'var(--text-heading)' },
          onClick: () => setExpanded(!expanded),
        }, expanded ? '▼' : '▶', 'All Stations (' + treeItems.length + ')'),
        expanded && treeItems.map(name =>
          React.createElement('div', {
            key: name,
            style: sidebarStyles.treeItem,
            onMouseEnter: (e) => e.target.style.background = 'var(--color-primary-bg)',
            onMouseLeave: (e) => e.target.style.background = 'transparent',
          }, '○', name)
        ),
      )
    ),
    /* Favorites */
    React.createElement('div', { style: sidebarStyles.favorites },
      React.createElement('div', { style: { ...sidebarStyles.sectionLabel, padding: '4px 10px' } }, 'Favorites'),
      favorites.map(name =>
        React.createElement('div', {
          key: name,
          style: sidebarStyles.favoriteItem,
          onMouseEnter: (e) => e.target.style.background = 'var(--color-primary-bg)',
          onMouseLeave: (e) => e.target.style.background = 'transparent',
        }, '★', name)
      ),
    ),
  );
}

window.Sidebar = Sidebar;
