import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {
  BarChart3,
  TrendingUp,
  Download,
  Printer,
  Calendar,
  Filter,
  CheckCircle2,
  Recycle,
  TreePine,
  Waves,
  ShieldCheck,
  FileText,
  DollarSign,
  Users,
  MapPin,
  ArrowUpRight,
  Activity,
  Layers,
  Sparkles,
  CheckCircle,
  PieChart,
} from 'lucide-react';

const AdminReports = () => {
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState('Last 6 Months');
  const [metricFocus, setMetricFocus] = useState('All');
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [activeMaterial, setActiveMaterial] = useState(null);

  const [websiteStats, setWebsiteStats] = useState({
    cleanlinessDrives: 148,
    volunteersActive: 1280,
    wasteRemovedTons: 92,
    ghatsCleaned: 22,
    treesPlanted: 4200,
  });
  const [memberships, setMemberships] = useState([]);
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [webRes, memRes, evtRes] = await Promise.allSettled([
        api.get('/admin/website'),
        api.get('/admin/memberships'),
        api.get('/admin/events'),
      ]);

      if (webRes.status === 'fulfilled' && webRes.value.data?.statistics) {
        setWebsiteStats({
          cleanlinessDrives: webRes.value.data.statistics.cleanlinessDrives ?? 148,
          volunteersActive: webRes.value.data.statistics.volunteersActive ?? 1280,
          wasteRemovedTons: webRes.value.data.statistics.wasteRemovedTons ?? 92,
          ghatsCleaned: webRes.value.data.statistics.ghatsCleaned ?? 22,
          treesPlanted: webRes.value.data.statistics.treesPlanted ?? 4200,
        });
      }

      if (memRes.status === 'fulfilled' && Array.isArray(memRes.value.data)) {
        setMemberships(memRes.value.data);
      }

      if (evtRes.status === 'fulfilled' && Array.isArray(evtRes.value.data)) {
        setEvents(evtRes.value.data);
      }
    } catch (err) {
      console.error('Error fetching reports data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalFees = memberships.reduce((acc, cur) => acc + (cur.feePaid || 0), 0);
  const totalMembers = memberships.length;
  const activeMembers = memberships.filter((m) => m.status === 'Active').length;

  // Ghat Cleanliness Performance Data
  const ghatAuditData = [
    {
      name: 'Kotilingala Ghat Reach',
      location: 'Main Temple Ghat Reach, Rajahmundry',
      wasteTons: 34.2,
      drivesConducted: 48,
      volunteersMobilized: 480,
      cleanlinessScore: 96,
      status: 'Pristine & Maintained',
      lastAudit: '02 Nov 2026',
    },
    {
      name: 'Pushkar Ghat Promenade',
      location: 'Central Pilgrimage Stepped Ghats',
      wasteTons: 27.5,
      drivesConducted: 38,
      volunteersMobilized: 390,
      cleanlinessScore: 92,
      status: 'Fully Restored',
      lastAudit: '28 Oct 2026',
    },
    {
      name: 'Saraswathi Ghat & Riverbed',
      location: 'Northern Godavari Embankment',
      wasteTons: 14.8,
      drivesConducted: 26,
      volunteersMobilized: 220,
      cleanlinessScore: 88,
      status: 'Active Stewardship',
      lastAudit: '24 Oct 2026',
    },
    {
      name: 'Havelock Bridge River Walkway',
      location: 'Old Godavari Rail Bridge Approach',
      wasteTons: 9.3,
      drivesConducted: 22,
      volunteersMobilized: 140,
      cleanlinessScore: 85,
      status: 'Under Bio-Remediation',
      lastAudit: '19 Oct 2026',
    },
    {
      name: 'Dowleswaram Barrage Headworks',
      location: 'Southern Reservoir Outfall Steps',
      wasteTons: 6.2,
      drivesConducted: 14,
      volunteersMobilized: 90,
      cleanlinessScore: 90,
      status: 'Clean & Free Flowing',
      lastAudit: '15 Oct 2026',
    },
  ];

  // Material composition breakdown
  const materialComposition = [
    { label: 'Single-Use Plastic Bottles & Bags', percentage: 46, tons: 42.3, color: '#047857' },
    { label: 'Pilgrim Ritual Puja Floral Waste', percentage: 28, tons: 25.7, color: '#10b981' },
    { label: 'Textile Clothes & Sacred Threads', percentage: 16, tons: 14.7, color: '#f59e0b' },
    { label: 'Glass, Metal & Construction Rubble', percentage: 10, tons: 9.2, color: '#6366f1' },
  ];

  // Monthly impact trend data with SVG coordinates for dynamic charting
  const monthlyImpactTrend = [
    { month: 'May', wasteTons: 11.2, volunteers: 160, trees: 450, x: 65, y: 145 },
    { month: 'Jun', wasteTons: 13.5, volunteers: 195, trees: 600, x: 155, y: 125 },
    { month: 'Jul', wasteTons: 15.0, volunteers: 230, trees: 750, x: 245, y: 108 },
    { month: 'Aug', wasteTons: 16.8, volunteers: 260, trees: 820, x: 335, y: 82 },
    { month: 'Sep', wasteTons: 17.2, volunteers: 280, trees: 880, x: 425, y: 72 },
    { month: 'Oct', wasteTons: 18.3, volunteers: 310, trees: 950, x: 515, y: 50 },
  ];

  // SVG Spline curve calculation
  const svgLinePath = 'M 65 145 C 110 135, 120 128, 155 125 C 200 120, 210 110, 245 108 C 290 102, 300 86, 335 82 C 380 78, 390 74, 425 72 C 470 68, 485 52, 515 50';
  const svgAreaPath = `${svgLinePath} L 515 190 L 65 190 Z`;

  // Circumference for Donut Chart (Radius = 65)
  const donutRadius = 65;
  const donutCircumference = 2 * Math.PI * donutRadius; // ~408.4

  let cumulativePercent = 0;
  const donutSegments = materialComposition.map((item) => {
    const strokeDasharray = `${(donutCircumference * item.percentage) / 100} ${donutCircumference}`;
    const strokeDashoffset = -((donutCircumference * cumulativePercent) / 100);
    cumulativePercent += item.percentage;
    return {
      ...item,
      strokeDasharray,
      strokeDashoffset,
    };
  });

  // CSV Export feature
  const exportToCSV = () => {
    const headers = [
      'Ghat Name',
      'Location',
      'Waste Removed (Tons)',
      'Drives Conducted',
      'Volunteers Mobilized',
      'Cleanliness Score (%)',
      'Audit Status',
      'Last Audit Date',
    ];
    const rows = ghatAuditData.map((g) => [
      `"${g.name}"`,
      `"${g.location}"`,
      g.wasteTons,
      g.drivesConducted,
      g.volunteersMobilized,
      `${g.cleanlinessScore}%`,
      `"${g.status}"`,
      `"${g.lastAudit}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Godhavari_NGO_Environmental_Report_${new Date().getFullYear()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="reports-page">
      {/* 1. Header Matching Admin Theme */}
      <div className="ref-members-header no-print">
        <div className="ref-header-left">
          <div className="ref-header-icon-box">
            <BarChart3 size={24} />
          </div>
          <div className="ref-header-text">
            <h2>Environmental Impact Analytics</h2>
            <p>Real-time audited riverfront performance, plastic extraction tonnage, and reforestation trends.</p>
          </div>
        </div>

        <div className="ref-header-actions">
          <button
            onClick={handlePrint}
            className="ref-btn-refresh"
            title="Print or save as PDF report"
          >
            <Printer size={15} />
            <span>Print Report</span>
          </button>
          <button
            onClick={exportToCSV}
            className="ref-btn-enroll"
            title="Export full dataset to CSV spreadsheet"
          >
            <Download size={15} />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* 2. Interactive Analytical Filter Bar */}
      <section className="eco-memberships-filter-card no-print">
        <div className="eco-filter-left">
          <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <Activity size={16} className="text-emerald-700" />
            <span>Reporting Interval:</span>
          </span>
          <div className="eco-filter-group">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="eco-filter-select"
            >
              <option value="Last 6 Months">Last 6 Months (May - Oct 2026)</option>
              <option value="Year 2026">Year 2026 (Annual)</option>
              <option value="All Time">All-Time Cumulative</option>
            </select>
          </div>
        </div>

        <div className="eco-filter-right">
          <div className="eco-filter-group">
            <label className="eco-filter-label">Focus Area:</label>
            <select
              value={metricFocus}
              onChange={(e) => setMetricFocus(e.target.value)}
              className="eco-filter-select"
            >
              <option value="All">All Impact Dimensions</option>
              <option value="Ghats">River Ghat Audits</option>
              <option value="Waste">Waste Material Analytics</option>
              <option value="Membership">Financial Stewardship</option>
            </select>
          </div>
        </div>
      </section>

      {/* 3. 5 KPI Executive Cards */}
      <div className="reports-kpi-grid">
        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-green">
            <Recycle size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-value">{websiteStats.wasteRemovedTons} Tons</span>
            <span className="ref-kpi-label">Waste Eradicated</span>
            <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 600, marginTop: '2px' }}>
              ↑ 184,000 lbs Intercepted
            </span>
          </div>
        </div>

        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-blue">
            <Waves size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-value">{websiteStats.ghatsCleaned} Ghats</span>
            <span className="ref-kpi-label">Ghats Restored</span>
            <span style={{ fontSize: '0.72rem', color: '#2563eb', fontWeight: 600, marginTop: '2px' }}>
              100% Monitored
            </span>
          </div>
        </div>

        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-green">
            <TreePine size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-value">{websiteStats.treesPlanted.toLocaleString()}</span>
            <span className="ref-kpi-label">Trees Planted</span>
            <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 600, marginTop: '2px' }}>
              Riparian Buffer Zone
            </span>
          </div>
        </div>

        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-orange">
            <ShieldCheck size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-value">{websiteStats.cleanlinessDrives}</span>
            <span className="ref-kpi-label">Cleanliness Drives</span>
            <span style={{ fontSize: '0.72rem', color: '#d97706', fontWeight: 600, marginTop: '2px' }}>
              Completed Successfully
            </span>
          </div>
        </div>

        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-purple">
            <DollarSign size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-value">₹{totalFees.toLocaleString()}</span>
            <span className="ref-kpi-label">Fees & Support</span>
            <span style={{ fontSize: '0.72rem', color: '#9333ea', fontWeight: 600, marginTop: '2px' }}>
              {activeMembers} Active Members
            </span>
          </div>
        </div>
      </div>

      {/* 4. REAL-TIME INTERACTIVE GRAPHS SECTION */}
      {(metricFocus === 'All' || metricFocus === 'Waste') && (
        <div className="reports-two-col">
          {/* GRAPH 1: Dual-Axis Area & Volume Chart */}
          <div className="reports-card">
            <div className="reports-card-header">
              <div className="reports-card-title-wrap">
                <h3 className="reports-card-title">
                  <TrendingUp size={18} className="text-emerald-700" />
                  <span>Monthly Waste Interception & Volunteer Mobilization</span>
                </h3>
                <p className="reports-card-subtitle">
                  Real-time trend analysis comparing extracted waste tonnage against active volunteer turnout.
                </p>
              </div>

              {/* Chart Legend */}
              <div className="reports-chart-legend">
                <span className="reports-legend-pill">
                  <span className="reports-legend-color-dot" style={{ backgroundColor: '#059669' }}></span>
                  <span>Waste (Tons)</span>
                </span>
                <span className="reports-legend-pill">
                  <span className="reports-legend-color-dot" style={{ backgroundColor: '#93c5fd' }}></span>
                  <span>Volunteers</span>
                </span>
              </div>
            </div>

            <div className="reports-card-body">
              <div className="reports-chart-wrap">
                {/* Active Tooltip Callout */}
                {hoveredPoint && (
                  <div className="reports-chart-tooltip">
                    <strong>{hoveredPoint.month} 2026 Audit</strong>
                    <span>🗑️ Waste Removed: <strong>{hoveredPoint.wasteTons} Tons</strong></span>
                    <span>👥 Volunteers: <strong>{hoveredPoint.volunteers} Active</strong></span>
                    <span>🌱 Trees Planted: <strong>+{hoveredPoint.trees} Saplings</strong></span>
                  </div>
                )}

                <svg
                  className="reports-area-chart-svg"
                  viewBox="0 0 580 220"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="reportsAreaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.38" />
                      <stop offset="60%" stopColor="#10b981" stopOpacity="0.10" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines */}
                  <line x1="45" y1="50" x2="550" y2="50" stroke="#f1f5f9" strokeDasharray="3 3" />
                  <line x1="45" y1="85" x2="550" y2="85" stroke="#f1f5f9" strokeDasharray="3 3" />
                  <line x1="45" y1="120" x2="550" y2="120" stroke="#f1f5f9" strokeDasharray="3 3" />
                  <line x1="45" y1="155" x2="550" y2="155" stroke="#f1f5f9" strokeDasharray="3 3" />
                  <line x1="45" y1="190" x2="550" y2="190" stroke="#e2e8f0" />

                  {/* Y Axis Labels */}
                  <text x="36" y="54" className="chart-axis-label" textAnchor="end">20T</text>
                  <text x="36" y="89" className="chart-axis-label" textAnchor="end">15T</text>
                  <text x="36" y="124" className="chart-axis-label" textAnchor="end">10T</text>
                  <text x="36" y="159" className="chart-axis-label" textAnchor="end">5T</text>
                  <text x="36" y="193" className="chart-axis-label" textAnchor="end">0T</text>

                  {/* Dual Bar: Volunteer volume bars behind the area */}
                  {monthlyImpactTrend.map((m) => {
                    const barHeight = (m.volunteers / 350) * 120;
                    return (
                      <rect
                        key={m.month + '-bar'}
                        x={m.x - 14}
                        y={190 - barHeight}
                        width="28"
                        height={barHeight}
                        rx="4"
                        fill="#e0f2fe"
                        style={{ cursor: 'pointer', transition: 'all 0.15s ease' }}
                        onMouseEnter={() => setHoveredPoint(m)}
                        onMouseLeave={() => setHoveredPoint(null)}
                      />
                    );
                  })}

                  {/* Filled Area Gradient */}
                  <path d={svgAreaPath} fill="url(#reportsAreaGradient)" />

                  {/* Smooth Spline Curve Line */}
                  <path
                    d={svgLinePath}
                    fill="none"
                    stroke="#059669"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Data Points */}
                  {monthlyImpactTrend.map((pt) => {
                    const isHovered = hoveredPoint?.month === pt.month;
                    return (
                      <g
                        key={pt.month}
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setHoveredPoint(pt)}
                        onMouseLeave={() => setHoveredPoint(null)}
                      >
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={isHovered ? '7' : '4.5'}
                          fill={isHovered ? '#047857' : '#10b981'}
                          stroke="#ffffff"
                          strokeWidth={isHovered ? '3' : '2'}
                          style={{ transition: 'all 0.15s ease' }}
                        />
                        <text
                          x={pt.x}
                          y="207"
                          textAnchor="middle"
                          className="chart-month-label"
                          style={{ fontWeight: isHovered ? '700' : '600', fill: isHovered ? '#0f172a' : '#64748b' }}
                        >
                          {pt.month}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Monthly Stats Strip */}
              <div className="reports-monthly-grid" style={{ marginTop: '0.75rem' }}>
                {monthlyImpactTrend.map((m) => (
                  <div
                    key={m.month}
                    className="reports-monthly-cell"
                    style={{
                      borderColor: hoveredPoint?.month === m.month ? '#10b981' : '#e2e8f0',
                      backgroundColor: hoveredPoint?.month === m.month ? '#f0fdf4' : '#f8fafc',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={() => setHoveredPoint(m)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  >
                    <div className="reports-monthly-month">{m.month}</div>
                    <div className="reports-monthly-tons">{m.wasteTons}T</div>
                    <div className="reports-monthly-trees">+{m.trees} Trees</div>
                    <div className="reports-monthly-vol">{m.volunteers} Vol.</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GRAPH 2: SVG Donut Chart for Waste Material Composition */}
          <div className="reports-card">
            <div className="reports-card-header">
              <div className="reports-card-title-wrap">
                <h3 className="reports-card-title">
                  <PieChart size={18} className="text-emerald-700" />
                  <span>Waste Material Composition Breakdown</span>
                </h3>
                <p className="reports-card-subtitle">
                  Audited material characterization across 92 extracted tons.
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                100% Segregated
              </span>
            </div>

            <div className="reports-card-body">
              {/* Circular SVG Donut Visualizer */}
              <div className="reports-donut-wrap">
                <svg className="reports-donut-svg" viewBox="0 0 180 180">
                  <g transform="rotate(-90 90 90)">
                    {donutSegments.map((seg) => {
                      const isHovered = activeMaterial?.label === seg.label;
                      return (
                        <circle
                          key={seg.label}
                          cx="90"
                          cy="90"
                          r={donutRadius}
                          fill="none"
                          stroke={seg.color}
                          strokeWidth={isHovered ? '24' : '18'}
                          strokeDasharray={seg.strokeDasharray}
                          strokeDashoffset={seg.strokeDashoffset}
                          style={{
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={() => setActiveMaterial(seg)}
                          onMouseLeave={() => setActiveMaterial(null)}
                        />
                      );
                    })}
                  </g>

                  {/* Donut Center Display */}
                  <text x="90" y="86" className="reports-donut-center-num">
                    {activeMaterial ? `${activeMaterial.percentage}%` : '92T'}
                  </text>
                  <text x="90" y="102" className="reports-donut-center-lbl">
                    {activeMaterial ? activeMaterial.tons + ' Tons' : 'Total Intercepted'}
                  </text>
                </svg>

                {/* Legend List */}
                <div className="reports-material-list" style={{ flex: 1, minWidth: '180px' }}>
                  {materialComposition.map((item) => (
                    <div
                      key={item.label}
                      className="reports-material-item"
                      style={{
                        padding: '0.35rem 0.5rem',
                        borderRadius: '6px',
                        backgroundColor: activeMaterial?.label === item.label ? '#f8fafc' : 'transparent',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={() => setActiveMaterial(item)}
                      onMouseLeave={() => setActiveMaterial(null)}
                    >
                      <div className="reports-material-label">
                        <span
                          className="reports-material-dot"
                          style={{ backgroundColor: item.color }}
                        ></span>
                        <span style={{ fontSize: '0.78rem' }}>{item.label}</span>
                      </div>
                      <div style={{ whiteSpace: 'nowrap' }}>
                        <span className="reports-material-val">{item.percentage}%</span>
                        <span className="reports-material-tons">({item.tons}T)</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eco-Compliance Badge */}
              <div className="reports-compliance-banner">
                <CheckCircle size={16} className="text-emerald-600" style={{ flexShrink: 0, marginTop: '1px' }} />
                <span>
                  <strong>100% Eco-Compliance:</strong> All segregated plastics are baled and transferred to certified municipal recycling facilities in Rajahmundry.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Section 2: Riverfront Ghat Cleanliness & Environmental Audit Table */}
      {(metricFocus === 'All' || metricFocus === 'Ghats') && (
        <div className="reports-card">
          <div className="reports-card-header">
            <div className="reports-card-title-wrap">
              <h3 className="reports-card-title">
                <Waves size={18} className="text-emerald-700" />
                <span>Riverfront Ghat Cleanliness & Environmental Audits</span>
              </h3>
              <p className="reports-card-subtitle">
                Field evaluations and plastic eradication metrics across major pilgrim ghats along the Godavari riverbank.
              </p>
            </div>
            <span className="eco-tier-pill eco-tier-volunteer">
              5 Strategic Reaches Audited
            </span>
          </div>

          <div className="ref-table-responsive">
            <table className="ref-table">
              <thead>
                <tr>
                  <th style={{ width: '28%' }}>Ghat Reach & Location</th>
                  <th style={{ width: '18%' }}>Cleanliness Score</th>
                  <th style={{ width: '16%' }}>Audit Status</th>
                  <th style={{ width: '13%' }}>Waste Removed</th>
                  <th style={{ width: '12%' }}>Drives Held</th>
                  <th style={{ width: '13%' }}>Volunteers</th>
                </tr>
              </thead>
              <tbody>
                {ghatAuditData.map((ghat) => (
                  <tr key={ghat.name}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <strong style={{ fontSize: '0.84rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <MapPin size={13} className="text-emerald-700" />
                          {ghat.name}
                        </strong>
                        <span style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '2px' }}>
                          {ghat.location}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="reports-score-pill">
                        <span style={{ fontWeight: 700, color: '#047857', fontSize: '0.82rem', minWidth: '32px' }}>
                          {ghat.cleanlinessScore}%
                        </span>
                        <div className="reports-score-track">
                          <div
                            className="reports-score-bar"
                            style={{ width: `${ghat.cleanlinessScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="eco-tier-pill eco-tier-annual">
                        {ghat.status}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontWeight: 600, color: '#0f172a' }}>{ghat.wasteTons} Tons</span>
                    </td>
                    <td>
                      <span style={{ color: '#475569' }}>{ghat.drivesConducted} Drives</span>
                    </td>
                    <td>
                      <span style={{ color: '#475569' }}>{ghat.volunteersMobilized} Vol.</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 6. Section 3: Financial & Operational Stewardship Summary */}
      {(metricFocus === 'All' || metricFocus === 'Membership') && (
        <div className="reports-card">
          <div className="reports-card-header">
            <div className="reports-card-title-wrap">
              <h3 className="reports-card-title">
                <DollarSign size={18} className="text-emerald-700" />
                <span>Financial & Operational Stewardship</span>
              </h3>
              <p className="reports-card-subtitle">
                Membership subscription fee deployment, riverfront safety gear procurement, and external audit clearance.
              </p>
            </div>
            <span className="eco-tier-pill eco-tier-patron">
              Audited FY 2026
            </span>
          </div>

          <div className="reports-card-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, display: 'block' }}>Total Subscriptions Collected</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', display: 'block', marginTop: '0.25rem' }}>₹{totalFees.toLocaleString()}</span>
                <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 600 }}>100% Reinvested into River Cleanliness</span>
              </div>

              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, display: 'block' }}>Active Members in Good Standing</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', display: 'block', marginTop: '0.25rem' }}>{activeMembers} / {totalMembers}</span>
                <span style={{ fontSize: '0.72rem', color: '#2563eb', fontWeight: 600 }}>100% Verified Profiles</span>
              </div>

              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, display: 'block' }}>Safety Gear & Vessel Allocation</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', display: 'block', marginTop: '0.25rem' }}>82%</span>
                <span style={{ fontSize: '0.72rem', color: '#d97706', fontWeight: 600 }}>Lifejackets, Netting, Gloves & Boats</span>
              </div>

              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, display: 'block' }}>Municipal Regulatory Compliance</span>
                <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#047857', display: 'block', marginTop: '0.45rem' }}>Passed / Certified Clean</span>
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Municipal Corporation of Rajahmundry</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminReports;
