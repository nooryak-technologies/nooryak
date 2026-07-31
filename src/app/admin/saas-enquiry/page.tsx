'use client';

import { useEffect, useState } from 'react';
import { AppShell } from '@/components/admin/layout/AppShell';
import { Card } from '@/components/admin/ui/card';
import { Input } from '@/components/admin/ui/input';
import { Search, Trash2, ShoppingBag, Mail, Phone, Calendar, Layers, Eye, X } from 'lucide-react';
import { toast } from 'sonner';

interface SaasEnquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  product: string;
  message?: string;
  status: 'New' | 'Read' | 'Contacted';
  createdAt: string;
}

export default function SaasEnquiriesListPage() {
  const [enquiries, setEnquiries] = useState<SaasEnquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEnquiry, setSelectedEnquiry] = useState<SaasEnquiry | null>(null);

  const fetchEnquiries = async () => {
    try {
      const res = await fetch('/api/admin/saas-enquiries');
      const data = await res.json();
      setEnquiries(data.enquiries || []);
    } catch {
      toast.error('Failed to load SaaS enquiries');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this SaaS enquiry?')) return;

    try {
      const res = await fetch(`/api/admin/saas-enquiries?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('SaaS enquiry deleted');
        fetchEnquiries();
      } else {
        toast.error('Failed to delete');
      }
    } catch {
      toast.error('Network error');
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      const res = await fetch('/api/admin/saas-enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        toast.success('Status updated');
        fetchEnquiries();
      }
    } catch {
      toast.error('Failed to update status');
    }
  };

  const filteredEnquiries = enquiries.filter(e => 
    e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AppShell title="SaaS Enquiries Management" breadcrumb="SaaS Enquiries / List">
      <div className="flex items-center justify-between mb-6 text-white">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2 text-white">
            <ShoppingBag className="text-[#ff7a18]" size={20} />
            SaaS Live Demo Submissions
          </h2>
          <p className="text-xs text-[#888] mt-1">View and manage all SaaS product live demo booking requests.</p>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-10">
        <div className="relative flex-1 max-w-[400px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888]" size={14} />
          <Input
            placeholder="Search demo requests by name, email, or product..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#111111] border-[#2a2a2a] pl-9 px-5 h-10 text-[13px] text-white focus:border-[#ff7a18]"
          />
        </div>
      </div>

      <Card className="bg-[#111111] border-[#2a2a2a] overflow-hidden text-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#1a1a1a] border-b border-[#2a2a2a]">
                <th className="px-6 py-4 text-[11px] font-bold text-[#888] uppercase tracking-wider">Contact Info</th>
                <th className="px-6 py-4 text-[11px] font-bold text-[#888] uppercase tracking-wider">Product Requested</th>
                <th className="px-6 py-4 text-[11px] font-bold text-[#888] uppercase tracking-wider">Date Submitted</th>
                <th className="px-6 py-4 text-[11px] font-bold text-[#888] uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-[11px] font-bold text-[#888] uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a2a2a]">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-[#888]">Loading SaaS enquiries...</td>
                </tr>
              ) : filteredEnquiries.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-[#888]">No SaaS demo enquiries found.</td>
                </tr>
              ) : (
                filteredEnquiries.map((enquiry) => (
                  <tr key={enquiry._id} className="hover:bg-[#1a1a1a] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-[13px] text-white">{enquiry.name}</div>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#888] mt-1">
                        <Mail size={12} />
                        {enquiry.email}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#888] mt-1">
                        <Phone size={12} />
                        {enquiry.phone || 'N/A'}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(255,122,24,.12)] text-[#ff7a18] text-[12px] font-semibold">
                        <Layers size={13} />
                        {enquiry.product}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-[12px] text-[#aaa]">
                        <Calendar size={13} />
                        {new Date(enquiry.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={enquiry.status}
                        onChange={(e) => handleStatusChange(enquiry._id, e.target.value)}
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-full border-none cursor-pointer focus:ring-0 ${
                          enquiry.status === 'New' 
                            ? 'bg-[rgba(239,68,68,.12)] text-[#ef4444]' 
                            : enquiry.status === 'Read'
                            ? 'bg-[rgba(59,130,246,.12)] text-[#3b82f6]'
                            : 'bg-[rgba(34,197,94,.12)] text-[#22c55e]'
                        }`}
                      >
                        <option value="New" className="bg-[#111] text-[#ef4444]">New</option>
                        <option value="Read" className="bg-[#111] text-[#3b82f6]">Read</option>
                        <option value="Contacted" className="bg-[#111] text-[#22c55e]">Contacted</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setSelectedEnquiry(enquiry)}
                          title="View Full Details"
                          className="w-8 h-8 rounded-lg border border-[#2a2a2a] text-[#888] hover:border-[#ff7a18] hover:text-[#ff7a18] flex items-center justify-center transition-all bg-[#111111]"
                        >
                          <Eye size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(enquiry._id)}
                          title="Delete Enquiry"
                          className="w-8 h-8 rounded-lg border border-[#2a2a2a] text-[#888] hover:border-[#ff3d00] hover:text-[#ff3d00] flex items-center justify-center transition-all bg-[#111111]"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* VIEW FULL SAAS DEMO ENQUIRY DETAILS MODAL */}
      {selectedEnquiry && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[100005] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#141414] border border-[#2a2a2a] rounded-2xl max-w-[560px] w-full p-6 text-white relative shadow-2xl animate-in fade-in zoom-in duration-200 my-8">
            <button
              onClick={() => setSelectedEnquiry(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#222] text-[#aaa] hover:text-white flex items-center justify-center transition-colors"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#2a2a2a]">
              <div className="w-10 h-10 rounded-xl bg-[rgba(255,122,24,.15)] flex items-center justify-center text-[#ff7a18]">
                <ShoppingBag size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">SaaS Demo Details</h3>
                <p className="text-xs text-[#888]">Submitted on {new Date(selectedEnquiry.createdAt).toLocaleString()}</p>
              </div>
            </div>

            <div className="space-y-4 text-[13px]">
              <div className="grid grid-cols-2 gap-3 bg-[#1a1a1a] p-4 rounded-xl border border-[#2a2a2a]">
                <div>
                  <div className="text-[10px] text-[#888] uppercase font-bold tracking-wider">Full Name</div>
                  <div className="text-white font-medium mt-1 text-[14px]">{selectedEnquiry.name}</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#888] uppercase font-bold tracking-wider">Status</div>
                  <div className="mt-1">
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                      selectedEnquiry.status === 'New' 
                        ? 'bg-[rgba(239,68,68,.15)] text-[#ef4444]' 
                        : selectedEnquiry.status === 'Read'
                        ? 'bg-[rgba(59,130,246,.15)] text-[#3b82f6]'
                        : 'bg-[rgba(34,197,94,.15)] text-[#22c55e]'
                    }`}>
                      {selectedEnquiry.status}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-[#888] uppercase font-bold tracking-wider">Email Address</div>
                  <div className="text-[#ccc] mt-1 break-all">{selectedEnquiry.email}</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#888] uppercase font-bold tracking-wider">Phone Number</div>
                  <div className="text-[#ccc] mt-1">{selectedEnquiry.phone || 'N/A'}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-[10px] text-[#888] uppercase font-bold tracking-wider">Product Selected for Demo</div>
                  <div className="text-[#ff7a18] font-semibold mt-1 text-[14px] flex items-center gap-1.5">
                    <Layers size={14} />
                    {selectedEnquiry.product}
                  </div>
                </div>
              </div>

              {selectedEnquiry.message && (
                <div>
                  <div className="text-[11px] text-[#888] uppercase font-bold tracking-wider mb-2">Additional Notes / Message</div>
                  <div className="bg-[#1a1a1a] p-4 rounded-xl border border-[#2a2a2a] text-[#ddd] text-[13.5px] leading-relaxed whitespace-pre-wrap max-h-[300px] overflow-y-auto admin-scrollbar">
                    {selectedEnquiry.message}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#2a2a2a] flex justify-end">
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="px-5 py-2.5 rounded-xl bg-[#222] hover:bg-[#333] text-white text-xs font-semibold transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
