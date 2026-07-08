const tableStyles = {
  wrapper: {
    padding: 24,
    background: 'var(--bg-page)',
    flex: 1,
    overflowY: 'auto',
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    color: 'var(--text-heading)',
    margin: '0 0 4px',
  },
  subtitle: {
    fontSize: 13,
    color: 'var(--text-secondary)',
    margin: '0 0 20px',
  },
  tableWrap: {
    width: '100%',
    overflowX: 'auto',
    borderRadius: 0,
    background: 'var(--bg-surface)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: 'var(--font-family)',
  },
  th: {
    fontSize: 13,
    fontWeight: 500,
    color: 'var(--text-body)',
    textAlign: 'left',
    padding: '10px 20px',
    borderBottom: '1px solid var(--border-color)',
    background: 'var(--bg-page)',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    userSelect: 'none',
  },
  td: {
    fontSize: 13,
    color: 'var(--text-body)',
    padding: '10px 20px',
    borderBottom: '1px solid var(--border-color)',
  },
  badge: (color) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding: '2px 8px',
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 500,
    background: color + '1E',
    color: color,
  }),
  statusDot: (color) => ({
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: color,
    display: 'inline-block',
  }),
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 8,
    padding: '16px 0',
    fontSize: 13,
    color: 'var(--text-secondary)',
  },
  pageBtn: (active) => ({
    minWidth: 32,
    height: 32,
    border: '1px solid ' + (active ? 'var(--color-primary)' : 'var(--border-color)'),
    borderRadius: 8,
    background: active ? 'var(--color-primary)' : 'var(--bg-surface)',
    color: active ? '#fff' : 'var(--text-body)',
    cursor: 'pointer',
    fontSize: 13,
    fontFamily: 'var(--font-family)',
  }),
};

const DATA = [
  { id: 'DEV-001', name: 'Wind Turbine A-12', station: 'North District', status: 'Active', output: '1,240 kW', uptime: '99.8%' },
  { id: 'DEV-002', name: 'Solar Array B-7', station: 'East Campus', status: 'Active', output: '890 kW', uptime: '98.2%' },
  { id: 'DEV-003', name: 'Battery Bank C-3', station: 'North District', status: 'Warning', output: '450 kW', uptime: '95.1%' },
  { id: 'DEV-004', name: 'Grid Converter D-9', station: 'South Hub', status: 'Offline', output: '0 kW', uptime: '87.3%' },
  { id: 'DEV-005', name: 'Hydro Turbine E-2', station: 'West Plant', status: 'Active', output: '2,100 kW', uptime: '99.9%' },
];

function DataTable() {
  const [sortCol, setSortCol] = React.useState(null);
  const [sortDir, setSortDir] = React.useState('asc');
  const [page, setPage] = React.useState(1);

  const sorted = React.useMemo(() => {
    if (!sortCol) return DATA;
    const copy = [...DATA];
    copy.sort((a, b) => {
      const va = a[sortCol], vb = b[sortCol];
      return sortDir === 'asc' ? va.localeCompare(vb) : vb.localeCompare(va);
    });
    return copy;
  }, [sortCol, sortDir]);

  const cols = [
    { key: 'id', label: 'Device ID' },
    { key: 'name', label: 'Device Name' },
    { key: 'station', label: 'Station' },
    { key: 'status', label: 'Status' },
    { key: 'output', label: 'Output' },
    { key: 'uptime', label: 'Uptime' },
  ];

  function handleSort(key) {
    if (sortCol === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortCol(key); setSortDir('asc'); }
  }

  const statusColor = { 'Active': 'var(--color-success)', 'Warning': 'var(--color-warning)', 'Offline': 'var(--color-danger)' };

  return React.createElement('div', { style: tableStyles.wrapper },
    React.createElement('h2', { style: tableStyles.title }, 'Device Monitor'),
    React.createElement('p', { style: tableStyles.subtitle }, '47 devices across 4 stations · showing 5 of 47'),

    React.createElement('div', { style: tableStyles.tableWrap },
      React.createElement('table', { style: tableStyles.table },
        React.createElement('thead', null,
          React.createElement('tr', null,
            cols.map(col =>
              React.createElement('th', {
                key: col.key,
                style: tableStyles.th,
                onClick: () => handleSort(col.key),
              }, col.label, sortCol === col.key ? (sortDir === 'asc' ? ' ▲' : ' ▼') : '')
            )
          )
        ),
        React.createElement('tbody', null,
          sorted.map((row, i) =>
            React.createElement('tr', {
              key: row.id,
              style: { transition: 'background 0.15s ease' },
              onMouseEnter: (e) => e.target.style.background = 'var(--color-primary-bg)',
              onMouseLeave: (e) => e.target.style.background = 'transparent',
            },
              cols.map(col =>
                React.createElement('td', { key: col.key, style: tableStyles.td },
                  col.key === 'status'
                    ? React.createElement('span', { style: tableStyles.badge(statusColor[row.status]) },
                        React.createElement('span', { style: tableStyles.statusDot(statusColor[row.status]) }),
                        row.status
                      )
                    : row[col.key]
                )
              )
            )
          )
        )
      )
    ),

    /* Pagination */
    React.createElement('div', { style: tableStyles.pagination },
      React.createElement('span', null, 'Showing 5 rows · Total 47'),
      React.createElement('button', { style: tableStyles.pageBtn(false), onClick: () => setPage(Math.max(1, page-1)), disabled: page === 1 }, '‹'),
      React.createElement('button', { style: tableStyles.pageBtn(true) }, '1'),
      React.createElement('button', { style: tableStyles.pageBtn(false) }, '2'),
      React.createElement('button', { style: tableStyles.pageBtn(false) }, '3'),
      React.createElement('button', { style: tableStyles.pageBtn(false), onClick: () => setPage(page+1) }, '›'),
    ),
  );
}

window.DataTable = DataTable;
