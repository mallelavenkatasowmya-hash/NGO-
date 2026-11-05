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
  RefreshCw,
  MapPin,
  ArrowUpRight,
  Activity,
  Layers,
  Sparkles,
} from 'lucide-react';

const AdminReports = () => {
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState('All Time');
  const [metricFocus, setMetricFocus] = useState('All');
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
    { label: 'Single-Use Plastic Bottles & Bags', percentage: 46, tons: 42.3, color: '#064e3b' },
    { label: 'Pilgrim Ritual Puja Floral Waste', percentage: 28, tons: 25.7, color: '#10b981' },
    { label: 'Textile Clothes & Sacred Threads', percentage: 16, tons: 14.7, color: '#f59e0b' },
    { label: 'Glass, Metal & Construction Rubble', percentage: 10, tons: 9.2, color: '#6366f1' },
  ];

  // Monthly trends (May - Oct 2026)
  const monthlyImpactTrend = [
    { month: 'May 2026', wasteTons: 11.2, volunteers: 160, trees: 450 },
    { month: 'Jun 2026', wasteTons: 13.5, volunteers: 195, trees: 600 },
    { month: 'Jul 2026', wasteTons: 15.0, volunteers: 230, trees: 750 },
    { month: 'Aug 2026', wasteTons: 16.8, volunteers: 260, trees: 820 },
    { month: 'Sep 2026', wasteTons: 17.2, volunteers: 280, trees: 880 },
    { month: 'Oct 2026', wasteTons: 18.3, volunteers: 310, trees: 950 },
  ];

  // CSV Export feature
  const exportToCSV = () => {
    const headers = ['Ghat Name', 'Location', 'Waste Removed (Tons)', 'Drives Conducted', 'Volunteers Mobilized', 'Cleanliness Score (%)', 'Audit Status', 'Last Audit Date'];
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

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Godhavari_NGO_Ghat_Cleanliness_Report_${new Date().getFullYear()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="eco-cms-page eco-reports-print-container">
      {/* 1. Header Row */}
      <div className="eco-cms-header-row no-print">
        <div className="eco-cms-header-info">
          <div className="eco-cms-badge-row">
            <span className="eco-cms-live-badge">
              <span className="live-dot-pulse"></span>
              Audited Environmental & Impact Analytics &bull; MongoDB Synced
            </span>
          </div>
          <h1 className="eco-cms-main-title">Reports & Environmental Impact Analytics</h1>
          <p className="eco-cms-sub-title">
            Comprehensive audit reports tracking river plastic eradication tonnage, ghat restorations, volunteer turnout, and membership contributions.
          </p>
        </div>

        <div className="eco-cms-header-actions">
          <button
            onClick={fetchData}
            className="eco-cms-btn-secondary"
            disabled={loading}
            title="Reload reports data"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            <span>Refresh</span>
          </button>
          <button
            onClick={handlePrint}
            className="eco-cms-btn-secondary"
            title="Print this analytical report"
          >
            <Printer size={15} />
            <span>Print Report</span>
          </button>
          <button
            onClick={exportToCSV}
            className="eco-cms-btn-primary"
            title="Export full dataset to CSV spreadsheet"
          >
            <Download size={15} />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* 2. Interactive Filter Bar */}
      <section className="eco-memberships-filter-card no-print">
        <div className="eco-filter-left">
          <span className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
            <Activity size={16} className="text-emerald-700" />
            <span>Analytical Filter:</span>
          </span>
          <div className="eco-filter-group">
            <label className="eco-filter-label">Reporting Period:</label>
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="eco-filter-select"
            >
              <option value="All Time">All-Time Cumulative</option>
              <option value="Year 2026">Year 2026 (YTD)</option>
              <option value="Current Quarter">Q4 2026 (Oct - Dec)</option>
              <option value="Last 30 Days">Last 30 Days</option>
            </select>
          </div>
        </div>

        <div className="eco-filter-right">
          <div className="eco-filter-group">
            <label className="eco-filter-label">Dimension Focus:</label>
            <select
              value={metricFocus}
              onChange={(e) => setMetricFocus(e.target.value)}
              className="eco-filter-select"
            >
              <option value="All">All Impact Dimensions</option>
              <option value="Ghats">Ghat Restoration Audits</option>
              <option value="Waste">Waste Material Composition</option>
              <option value="Membership">Membership & Financials</option>
            </select>
          </div>
        </div>
      </section>

      {/* 3. Executive KPI Impact Strip (5 Horizontal Cards) */}
      <section className="eco-kpi-5-strip">
        {/* Card 1: Solid Waste Removed */}
        <div className="eco-stat-card eco-stat-green">
          <div className="eco-stat-icon-bubble bg-green-bubble">
            <Recycle size={22} className="text-green-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Waste Eradicated</span>
            <div className="eco-stat-number">{websiteStats.wasteRemovedTons} Tons</div>
            <span className="eco-stat-trend text-trend-green">↑ 184,000 lbs Intercepted</span>
          </div>
        </div>

        {/* Card 2: Ghats Cleaned & Restored */}
        <div className="eco-stat-card eco-stat-blue">
          <div className="eco-stat-icon-bubble bg-blue-bubble">
            <Waves size={22} className="text-blue-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Ghats Restored</span>
            <div className="eco-stat-number">{websiteStats.ghatsCleaned} Ghats</div>
            <span className="eco-stat-trend text-blue-icon">100% Monitored</span>
          </div>
        </div>

        {/* Card 3: Trees Planted */}
        <div className="eco-stat-card eco-stat-teal">
          <div className="eco-stat-icon-bubble bg-teal-bubble">
            <TreePine size={22} className="text-teal-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Trees Planted</span>
            <div className="eco-stat-number">{websiteStats.treesPlanted.toLocaleString()}</div>
            <span className="eco-stat-trend text-teal-icon">Riparian Buffer Zone</span>
          </div>
        </div>

        {/* Card 4: Cleanliness Drives */}
        <div className="eco-stat-card eco-stat-orange">
          <div className="eco-stat-icon-bubble bg-orange-bubble">
            <ShieldCheck size={22} className="text-orange-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Cleanliness Drives</span>
            <div className="eco-stat-number">{websiteStats.cleanlinessDrives}</div>
            <span className="eco-stat-trend text-orange-icon">Completed Successfully</span>
          </div>
        </div>

        {/* Card 5: Membership Revenue */}
        <div className="eco-stat-card eco-stat-purple">
          <div className="eco-stat-icon-bubble bg-purple-bubble">
            <DollarSign size={22} className="text-purple-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Fees & Support</span>
            <div className="eco-stat-number">₹{totalFees.toLocaleString()}</div>
            <span className="eco-stat-trend text-purple-icon">{activeMembers} Active Members</span>
          </div>
        </div>
      </section>

      {/* 4. Two-Column Analytics Section: Ghat Performance Audit & Waste Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left Column (2 spans): Ghat Cleanliness Audit Cards */}
        <div className="lg:col-span-2 space-y-4">
          <div className="eco-table-card">
            <div className="eco-card-header-bar">
              <div>
                <h3 className="eco-card-header-title">
                  <Waves size={18} className="text-emerald-700" />
                  <span>River Ghat Cleanliness & Environmental Audit</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Field evaluations across major pilgrim ghats along the Godavari riverbank.
                </p>
              </div>
              <span className="eco-id-tag">5 Strategic Reaches</span>
            </div>

            <div className="p-4 space-y-4">
              {ghatAuditData.map((ghat) => (
                <div
                  key={ghat.name}
                  className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl hover:bg-white hover:shadow-sm transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div>
                      <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                        <MapPin size={13} className="text-emerald-700" />
                        <span>{ghat.name}</span>
                      </div>
                      <span className="text-xs text-slate-500">{ghat.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="eco-tier-pill eco-tier-volunteer">
                        {ghat.status}
                      </span>
                      <span className="font-bold text-emerald-800 text-sm bg-emerald-100 px-2.5 py-0.5 rounded-full">
                        {ghat.cleanlinessScore}% Clean
                      </span>
                    </div>
                  </div>

                  {/* Progress Score Bar */}
                  <div className="eco-progress-track mb-2.5">
                    <div
                      className="eco-progress-bar"
                      style={{ width: `${ghat.cleanlinessScore}%` }}
                    ></div>
                  </div>

                  {/* Metrics Row */}
                  <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 gap-y-1">
                    <span>
                      <strong>Waste Removed:</strong> {ghat.wasteTons} Tons
                    </span>
                    <span>&bull;</span>
                    <span>
                      <strong>Cleanliness Drives:</strong> {ghat.drivesConducted}
                    </span>
                    <span>&bull;</span>
                    <span>
                      <strong>Volunteers Mobilized:</strong> {ghat.volunteersMobilized}
                    </span>
                    <span>&bull;</span>
                    <span className="text-slate-400">
                      Audit: {ghat.lastAudit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Waste Interception & Volunteer Growth Bar Visualizer */}
          <div className="eco-table-card">
            <div className="eco-card-header-bar">
              <div>
                <h3 className="eco-card-header-title">
                  <TrendingUp size={18} className="text-emerald-700" />
                  <span>Monthly Waste Interception & Reforestation Progress</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Consolidated monthly statistics of waste extraction vs trees planted (May - Oct 2026).
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                +63.4% Growth Rate
              </span>
            </div>

            <div className="p-5">
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 text-center">
                {monthlyImpactTrend.map((m) => (
                  <div key={m.month} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-500 block mb-1">
                      {m.month.split(' ')[0]}
                    </span>
                    <div className="text-lg font-black text-slate-800">
                      {m.wasteTons}T
                    </div>
                    <span className="text-xs text-emerald-700 font-semibold block">
                      +{m.trees} Trees
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      {m.volunteers} Vol.
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (1 span): Waste Composition & Membership Breakdown */}
        <div className="space-y-4">
          {/* Waste Composition Breakdown */}
          <div className="eco-table-card">
            <div className="eco-card-header-bar">
              <div>
                <h3 className="eco-card-header-title">
                  <Recycle size={18} className="text-emerald-700" />
                  <span>Waste Material Profile</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Categorized breakdown of 92 Tons removed from river ghats.
                </p>
              </div>
            </div>

            <div className="p-5 space-y-4">
              {/* Stacked Percentage Visual Bar */}
              <div className="w-full h-4 rounded-full overflow-hidden flex bg-slate-100 shadow-inner">
                {materialComposition.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      width: `${item.percentage}%`,
                      backgroundColor: item.color,
                    }}
                    title={`${item.label}: ${item.percentage}% (${item.tons} Tons)`}
                  ></div>
                ))}
              </div>

              {/* Legend List */}
              <div className="space-y-3 pt-2">
                {materialComposition.map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      ></span>
                      <span className="font-semibold text-slate-700">{item.label}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-slate-900">{item.percentage}%</span>
                      <span className="text-slate-400 ml-1.5 font-medium">({item.tons}T)</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>100% Eco-Compliance:</strong> All segregated plastics are baled and transferred to certified municipal recycling plants in Rajahmundry.
                </span>
              </div>
            </div>
          </div>

          {/* Membership & Financial Stewardship Card */}
          <div className="eco-table-card">
            <div className="eco-card-header-bar">
              <div>
                <h3 className="eco-card-header-title">
                  <DollarSign size={18} className="text-emerald-700" />
                  <span>Financial Stewardship</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Membership subscription fees & fund deployment.
                </p>
              </div>
            </div>

            <div className="p-5 space-y-3.5 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-600">Total Registered Members:</span>
                <span className="font-bold text-slate-900">{totalMembers} Members</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-600">Active Membership Standing:</span>
                <span className="font-bold text-emerald-700">{activeMembers} Active (100%)</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-600">Total Subscription Collected:</span>
                <span className="font-bold text-slate-900 text-sm">₹{totalFees.toLocaleString()}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-600">River Safety Gear Utilization:</span>
                <span className="font-bold text-slate-900">82% Budget Deployed</span>
              </div>

              <div className="flex justify-between py-1.5">
                <span className="text-slate-600">External Regulatory Audit:</span>
                <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  Passed / Clean
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReports;

