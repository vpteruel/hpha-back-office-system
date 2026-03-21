export function DashboardContent() {
  return (
    <div>
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="font-manrope text-3xl font-extrabold text-on-surface tracking-tight mb-2">
            Submission Analytics
          </h2>
          <p className="text-on-surface-variant font-body">
            Overview of form performance and administrative queue.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="bg-surface-container-high px-4 py-2 rounded-xl text-sm font-semibold text-on-surface-variant flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-sm">
              calendar_today
            </span>
            Last 30 Days
          </button>
          <button className="editorial-gradient text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-md">
            <span className="material-symbols-outlined text-sm">download</span>
            Export Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
            <span className="material-symbols-outlined text-8xl">
              bar_chart
            </span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 block">
              Total Submissions
            </span>
            <h3 className="font-manrope text-5xl font-extrabold text-primary tracking-tighter">
              12,482
            </h3>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm">
            <span className="text-emerald-600 font-bold flex items-center">
              +12.5%
            </span>
            <span className="text-on-surface-variant">vs previous month</span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-lowest rounded-xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 block">
                Pending Approvals
              </span>
              <h3 className="font-manrope text-3xl font-extrabold text-on-surface">
                42
              </h3>
            </div>
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
              <span className="material-symbols-outlined">pending_actions</span>
            </div>
          </div>
          <div className="mt-6">
            <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
              <div className="bg-amber-500 h-full w-[65%]"></div>
            </div>
            <p className="text-[11px] text-on-surface-variant mt-2 font-medium">
              12 submissions requiring immediate attention
            </p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-lowest rounded-xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 block">
                Active Forms
              </span>
              <h3 className="font-manrope text-3xl font-extrabold text-on-surface">
                18
              </h3>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <span className="material-symbols-outlined">grid_view</span>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-primary-container text-on-primary-container text-[10px] font-bold rounded uppercase">
              8 Internal
            </span>
            <span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded uppercase">
              10 Public
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 xl:col-span-8">
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
            <div className="px-6 py-5 flex justify-between items-center bg-surface-container-low">
              <h4 className="font-manrope text-lg font-bold text-on-surface">
                Recent Activity
              </h4>
              <button className="text-primary text-xs font-bold hover:underline">
                View All Submissions
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-low">
                  <tr>
                    <th className="px-6 py-3 text-[0.6875rem] font-bold uppercase tracking-wider text-on-surface-variant">
                      Submission Name
                    </th>
                    <th className="px-6 py-3 text-[0.6875rem] font-bold uppercase tracking-wider text-on-surface-variant">
                      Submitter
                    </th>
                    <th className="px-6 py-3 text-[0.6875rem] font-bold uppercase tracking-wider text-on-surface-variant">
                      Date
                    </th>
                    <th className="px-6 py-3 text-[0.6875rem] font-bold uppercase tracking-wider text-on-surface-variant">
                      Status
                    </th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  <tr className="hover:bg-surface-bright transition-colors group">
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-on-surface">
                        Emergency OR Access Booking
                      </p>
                      <p className="text-[11px] text-on-surface-variant">
                        Form ID: #4402
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">
                      Dr. Sarah Jenkins
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">
                      Oct 24, 14:22
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-lg text-[10px] font-bold bg-amber-100 text-amber-700 uppercase">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-on-surface-variant hover:text-primary">
                        <span className="material-symbols-outlined text-lg">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-bright transition-colors group">
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-on-surface">
                        Travel Expense Reimbursement
                      </p>
                      <p className="text-[11px] text-on-surface-variant">
                        Form ID: #4398
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">
                      Marcus Thorne
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">
                      Oct 24, 12:05
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-lg text-[10px] font-bold bg-primary-container text-on-primary-container uppercase">
                        Reviewed
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-on-surface-variant hover:text-primary">
                        <span className="material-symbols-outlined text-lg">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-bright transition-colors group">
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-on-surface">
                        IT Equipment Request
                      </p>
                      <p className="text-[11px] text-on-surface-variant">
                        Form ID: #4391
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">
                      Elena Rodriguez
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">
                      Oct 24, 09:44
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-lg text-[10px] font-bold bg-emerald-100 text-emerald-700 uppercase">
                        Approved
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-on-surface-variant hover:text-primary">
                        <span className="material-symbols-outlined text-lg">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-bright transition-colors group">
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-on-surface">
                        New Employee Onboarding
                      </p>
                      <p className="text-[11px] text-on-surface-variant">
                        Form ID: #4385
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">
                      HR Department
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">
                      Oct 23, 17:15
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-lg text-[10px] font-bold bg-amber-100 text-amber-700 uppercase">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-on-surface-variant hover:text-primary">
                        <span className="material-symbols-outlined text-lg">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-4 space-y-6">
          <div className="bg-surface-container-highest rounded-xl p-6">
            <h4 className="font-manrope text-lg font-bold text-on-surface mb-6">
              Frequently Used Forms
            </h4>
            <div className="space-y-4">
              <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-4 group cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <span className="material-symbols-outlined">
                    receipt_long
                  </span>
                </div>
                <div className="grow">
                  <p className="text-sm font-bold text-on-surface">
                    Expense Claim
                  </p>
                  <p className="text-[11px] text-on-surface-variant">
                    248 submissions this week
                  </p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-4 group cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
                <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <span className="material-symbols-outlined">
                    work_history
                  </span>
                </div>
                <div className="grow">
                  <p className="text-sm font-bold text-on-surface">
                    PTO Request
                  </p>
                  <p className="text-[11px] text-on-surface-variant">
                    112 submissions this week
                  </p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-4 group cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <span className="material-symbols-outlined">
                    verified_user
                  </span>
                </div>
                <div className="grow">
                  <p className="text-sm font-bold text-on-surface">
                    Client Intake
                  </p>
                  <p className="text-[11px] text-on-surface-variant">
                    42 submissions this week
                  </p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </div>
            </div>
          </div>

          <div className="editorial-gradient rounded-xl p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h5 className="font-manrope text-lg font-bold mb-2">
                System Health
              </h5>
              <p className="text-xs text-blue-100 leading-relaxed mb-4">
                All services are currently operational. Database synchronization
                completed 4 minutes ago.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Global Status: Normal
                </span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 opacity-10">
              <span className="material-symbols-outlined text-8xl">
                cloud_done
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
