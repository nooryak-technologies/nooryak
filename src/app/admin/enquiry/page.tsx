'use client';

import { useEffect, useState } from 'react';
import { AppShell } from '@/components/admin/layout/AppShell';
import { Card } from '@/components/admin/ui/card';
import { Input } from '@/components/admin/ui/input';
import { Badge } from '@/components/admin/ui/badge';
import { Search, Trash2, Zap, Mail, Building, Briefcase, Phone } from 'lucide-react';
import { toast } from 'sonner';

interface Enquiry {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
  status: 'New' | 'Read' | 'Contacted';
  createdAt: string;
}

export default function EnquiriesListPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchEnquiries = async () => {
    try {
      const res = await fetch('/api/admin/enquiries');
      const data = await res.json();
      setEnquiries(data.enquiries || []);
    } catch {
      toast.error('Failed to load enquiries');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enquiry?')) return;

    try {
      const res = await fetch(`/api/admin/enquiries?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Enquiry deleted');
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
      const res = await fetch('/api/admin/enquiries', {
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
    e.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.phone?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AppShell title="Enquiries Management" breadcrumb="Enquiries / List">
      <div className="flex items-center justify-between mb-6 text-white">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2 text-white">
            <Zap className="text-[#fff]" size={20} />
            Enquiries Submissions
          </h2>
          <p className="text-xs text-[#888] mt-1">View and manage all contact form submissions from your website.</p>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-10">
        <div className="relative flex-1 max-w-[400px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888]" size={14} />
          <Input
            placeholder="Search enquiries by name, email, or company..."
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
                <th className="px-6 py-4 text-[11px] font-bold text-[#888] uppercase tracking-wider">Project Details</th>
                <th className="px-6 py-4 text-[11px] font-bold text-[#888] uppercase tracking-wider">Message</th>
                <th className="px-6 py-4 text-[11px] font-bold text-[#888] uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-[11px] font-bold text-[#888] uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a2a2a]">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-[#888]">Loading enquiries...</td>
                </tr>
              ) : filteredEnquiries.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-[#888]">No enquiries found.</td>
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
                      {enquiry.company && (
                        <div className="flex items-center gap-1.5 text-[12px] text-[#aaa]">
                          <Building size={12} />
                          {enquiry.company}
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 text-[11px] text-[#888] mt-1">
                        <Briefcase size={12} />
                        {enquiry.service || 'N/A'}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-[12px] text-[#ccc] max-w-[300px] line-clamp-2" title={enquiry.message}>
                        {enquiry.message}
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
                          onClick={() => handleDelete(enquiry._id)}
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
    </AppShell>
  );
}
