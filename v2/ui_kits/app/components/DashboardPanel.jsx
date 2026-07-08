const panelStyles = {
  wrapper: {
    padding: 24,
    overflowY: 'auto',
    flex: 1,
    background: 'var(--bg-page)',
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: 'var(--text-heading)',
    margin: '0 0 4px',
  },
  subtitle: {
    fontSize: 14,
    color: 'var(--text-secondary)',
    margin: 0,
  },
  kpiGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: 16,
    marginBottom: 24,
  },
  kpiCard: {
    background: 'var(--bg-surface)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-base)',
    padding: '20px 16px',
  },
  kpiLabel: {
    fontSize: 12,
    color: 'var(--text-label)',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },
  kpiValue: {
    fontSize: 28,
    fontWeight: 500,
    color: 'var(--text-heading)',
    lineHeight: 1.2,
    fontVariantNumeric: 'tabular-nums',
  },
  kpiTrend: {
    fontSize: 12,
    marginTop: 4,
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16,
  },
  summaryCard: {
    background: 'var(--bg-surface)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-base)',
    padding: 20,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: 'var(--text-heading)',
    margin: '0 0 12px',
  },
  alertRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: '1px solid var(--border-color)',
    fontSize: 13,
  },
};

function DashboardPanel() {
  const kpis = [
    { label: 'Active Stations', value: '12', trend: '+2 this month', trendColor: 'var(--color-success)' },
    { label: 'Devices Online', value: '47', trend: '99.2% uptime', trendColor: 'var(--color-success)' },
    { label: 'Work Orders', value: '3', trend: '2 pending', trendColor: 'var(--color-warning)' },
    { label: 'Total Output', value: '12,345', trend: 'MWh this period', trendColor: 'var(--text-label)' },
  ];

  const alerts = [
    { label: 'North District — Voltage variance', status: 'Warning', statusColor: 'var(--color-warning)' },
    { label: 'East Campus — Firmware update', status: 'Pending', statusColor: 'var(--color-warning)' },
    { label: 'South Hub — Connection lost', status: 'Critical', statusColor: 'var(--color-danger)' },
  ];

  return React.createElement('div', { style: panelStyles.wrapper },
    /* Header */
    React.createElement('div', { style: panelStyles.header },
      React.createElement('h1', { style: panelStyles.title }, 'Dashboard'),
      React.createElement('p', { style: panelStyles.subtitle }, 'Real-time monitoring overview · 2026-06-04'),
    ),
    /* KPI Grid */
    React.createElement('div', { style: panelStyles.kpiGrid },
      kpis.map(kpi =>
        React.createElement('div', { key: kpi.label, style: panelStyles.kpiCard },
          React.createElement('div', { style: panelStyles.kpiLabel }, kpi.label),
          React.createElement('div', { style: panelStyles.kpiValue }, kpi.value),
          React.createElement('div', { style: { ...panelStyles.kpiTrend, color: kpi.trendColor } }, kpi.trend),
        )
      ),
    ),
    /* Summary + Alerts */
    React.createElement('div', { style: panelStyles.summaryGrid },
      React.createElement('div', { style: panelStyles.summaryCard },
        React.createElement('h3', { style: panelStyles.summaryTitle }, 'Recent Alerts'),
        alerts.map((alert, i) =>
          React.createElement('div', { key: i, style: panelStyles.alertRow },
            React.createElement('span', null, alert.label),
            React.createElement('span', { style: { fontSize: 12, fontWeight: 500, color: alert.statusColor } }, alert.status),
          )
        ),
      ),
      React.createElement('div', { style: panelStyles.summaryCard },
        React.createElement('h3', { style: panelStyles.summaryTitle }, 'Quick Actions'),
        ['Create Station', 'Generate Report', 'Firmware Update'].map(action =>
          React.createElement('div', { key: action, style: { ...panelStyles.alertRow, cursor: 'pointer', color: 'var(--color-primary)' },
            onMouseEnter: (e) => e.target.style.background = 'var(--color-primary-bg)',
            onMouseLeave: (e) => e.target.style.background = 'transparent',
          }, action)
        ),
      ),
    ),
  );
}

window.DashboardPanel = DashboardPanel;
