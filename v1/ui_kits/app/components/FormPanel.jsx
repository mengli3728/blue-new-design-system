const formStyles = {
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
    margin: '0 0 24px',
  },
  card: {
    background: 'var(--bg-surface)',
    border: '1px solid var(--border-color)',
    borderRadius: 4,
    padding: 24,
    maxWidth: 560,
  },
  fieldGroup: {
    marginBottom: 20,
  },
  label: {
    display: 'block',
    fontSize: 14,
    color: 'var(--text-body)',
    marginBottom: 0,
    lineHeight: 1.4,
  },
  labelHint: {
    fontSize: 12,
    color: 'var(--text-label)',
    marginBottom: 0,
  },
  input: {
    width: '100%',
    minWidth: 136,
    maxWidth: 300,
    height: 36,
    padding: '0 12px',
    fontSize: 14,
    fontFamily: 'var(--font-family)',
    color: 'var(--text-body)',
    background: 'var(--bg-input)',
    border: '1px solid var(--border-color)',
    borderRadius: 6,
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
  },
  select: {
    width: '100%',
    maxWidth: 300,
    height: 36,
    padding: '0 12px',
    fontSize: 14,
    fontFamily: 'var(--font-family)',
    color: 'var(--text-body)',
    background: 'var(--bg-input)',
    border: '1px solid var(--border-color)',
    borderRadius: 6,
    outline: 'none',
    boxSizing: 'border-box',
  },
  row: {
    display: 'flex',
    gap: 20,
    flexWrap: 'wrap',
  },
  btnRow: {
    display: 'flex',
    gap: 10,
    marginTop: 24,
  },
  spinner: {
    width: 20,
    height: 20,
    border: '2px solid rgba(255,255,255,0.3)',
    borderTopColor: '#fff',
    borderRadius: '50%',
    animation: 'spin 0.6s linear infinite',
    display: 'inline-block',
  },
};

function FormPanel() {
  const [name, setName] = React.useState('');
  const [type, setType] = React.useState('solar');
  const [capacity, setCapacity] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setName(''); setCapacity(''); setLocation('');
    }, 800);
  }

  return React.createElement('div', { style: formStyles.wrapper },
    React.createElement('h2', { style: formStyles.title }, 'Create New Station'),
    React.createElement('p', { style: formStyles.subtitle }, 'Configure a new energy monitoring station'),

    React.createElement('div', { style: formStyles.card },
      React.createElement('form', { onSubmit: handleSubmit },
        React.createElement('div', { style: formStyles.fieldGroup },
          React.createElement('label', { style: formStyles.label, htmlFor: 'station-name' }, 'Station Name'),
          React.createElement('label', { style: formStyles.labelHint, htmlFor: 'station-name' }, 'Unique identifier for this station'),
          React.createElement('br'),
          React.createElement('input', {
            id: 'station-name',
            style: { ...formStyles.input, borderColor: !name && submitted ? 'var(--color-danger)' : undefined },
            placeholder: 'e.g. North District Station',
            value: name,
            onChange: e => setName(e.target.value),
            onFocus: e => e.target.style.borderColor = 'var(--color-primary)',
            onBlur: e => { if (!e.target.value) e.target.style.borderColor = 'var(--border-color)'; },
          }),
          !name && submitted && React.createElement('div', { style: { fontSize: 12, color: 'var(--text-danger)', fontWeight: 500, marginTop: 4 } }, 'Station name is required'),
        ),
        React.createElement('div', { style: formStyles.row },
          React.createElement('div', { style: { ...formStyles.fieldGroup, flex: 1 } },
            React.createElement('label', { style: formStyles.label, htmlFor: 'station-type' }, 'Type'),
            React.createElement('br'),
            React.createElement('select', {
              id: 'station-type',
              style: formStyles.select,
              value: type,
              onChange: e => setType(e.target.value),
            },
              React.createElement('option', { value: 'solar' }, 'Solar Array'),
              React.createElement('option', { value: 'wind' }, 'Wind Turbine'),
              React.createElement('option', { value: 'hydro' }, 'Hydroelectric'),
              React.createElement('option', { value: 'battery' }, 'Battery Storage'),
            ),
          ),
          React.createElement('div', { style: { ...formStyles.fieldGroup, flex: 1 } },
            React.createElement('label', { style: formStyles.label, htmlFor: 'capacity' }, 'Capacity (kW)'),
            React.createElement('br'),
            React.createElement('input', {
              id: 'capacity',
              style: formStyles.input,
              placeholder: 'e.g. 2500',
              value: capacity,
              onChange: e => setCapacity(e.target.value.replace(/[^0-9]/g, '')),
              onFocus: e => e.target.style.borderColor = 'var(--color-primary)',
              onBlur: e => { if (!e.target.value) e.target.style.borderColor = 'var(--border-color)'; },
            }),
          ),
        ),
        React.createElement('div', { style: formStyles.fieldGroup },
          React.createElement('label', { style: formStyles.label, htmlFor: 'location' }, 'Location'),
          React.createElement('br'),
          React.createElement('input', {
            id: 'location',
            style: formStyles.input,
            placeholder: 'e.g. 123 Industrial Park Rd',
            value: location,
            onChange: e => setLocation(e.target.value),
            onFocus: e => e.target.style.borderColor = 'var(--color-primary)',
            onBlur: e => { if (!e.target.value) e.target.style.borderColor = 'var(--border-color)'; },
          }),
        ),
        React.createElement('div', { style: formStyles.btnRow },
          React.createElement('button', {
            type: 'submit',
            disabled: submitting,
            style: {
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: '0 18px', height: 36, fontSize: 14, fontFamily: 'var(--font-family)',
              borderRadius: 6, border: 'none',
              background: 'var(--color-primary)', color: '#fff', cursor: 'pointer',
              opacity: submitting ? 0.7 : 1, transition: 'all 0.2s ease',
            },
            onMouseEnter: (e) => { if (!submitting) e.target.style.background = 'var(--color-primary-hover)'; },
            onMouseLeave: (e) => { if (!submitting) e.target.style.background = 'var(--color-primary)'; },
          },
            submitting && React.createElement('div', { style: formStyles.spinner }),
            submitting ? 'Creating...' : 'Create Station'
          ),
          React.createElement('button', {
            type: 'button',
            style: {
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: '0 18px', height: 36, fontSize: 14, fontFamily: 'var(--font-family)',
              borderRadius: 6, border: '1px solid var(--color-primary)',
              background: 'var(--bg-surface)', color: 'var(--text-heading)', cursor: 'pointer',
              transition: 'all 0.15s ease',
            },
            onMouseEnter: (e) => e.target.style.background = 'var(--color-primary-light)',
            onMouseLeave: (e) => e.target.style.background = 'var(--bg-surface)',
          }, 'Cancel'),
        ),
        submitted && React.createElement('div', {
          style: { marginTop: 12, padding: '8px 12px', background: 'rgba(0,214,165,0.1)', color: 'var(--color-success)', borderRadius: 'var(--radius-base)', fontSize: 13, fontWeight: 500 },
        }, '✓ Station created successfully'),
      ),
    ),
  );
}

window.FormPanel = FormPanel;
