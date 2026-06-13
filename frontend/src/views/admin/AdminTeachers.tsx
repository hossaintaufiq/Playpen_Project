"use client";

import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Teacher {
  id: string;
  name: string;
  employee_id: string;
  department: string;
  designation: string;
  qualification: string | null;
  experience_years: number;
  phone: string | null;
  email: string | null;
  joining_date: string | null;
  status: string;
}

const emptyForm = {
  name: '', employee_id: '', department: '', designation: '', qualification: '',
  experience_years: '0', phone: '', email: '', joining_date: '', status: 'active',
};

const departments = ['English', 'Mathematics', 'Science', 'Bangla', 'Social Studies', 'ICT', 'Arts', 'Physical Education', 'Religion', 'Administration'];

const AdminTeachers = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [search, setSearch] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchTeachers = async () => {
    const { data, error } = await supabase.from('teachers').select('*').order('created_at', { ascending: false });
    if (data) setTeachers(data as Teacher[]);
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
  };

  useEffect(() => { fetchTeachers(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      name: form.name,
      employee_id: form.employee_id,
      department: form.department,
      designation: form.designation,
      qualification: form.qualification || null,
      experience_years: parseInt(form.experience_years) || 0,
      phone: form.phone || null,
      email: form.email || null,
      joining_date: form.joining_date || null,
      status: form.status,
    };

    let error;
    if (editingId) {
      ({ error } = await supabase.from('teachers').update(payload).eq('id', editingId));
    } else {
      ({ error } = await supabase.from('teachers').insert(payload));
    }
    setLoading(false);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: editingId ? 'Teacher Updated' : 'Teacher Added' });
      setDialogOpen(false);
      setEditingId(null);
      setForm(emptyForm);
      fetchTeachers();
    }
  };

  const handleEdit = (teacher: Teacher) => {
    setEditingId(teacher.id);
    setForm({
      name: teacher.name,
      employee_id: teacher.employee_id,
      department: teacher.department,
      designation: teacher.designation,
      qualification: teacher.qualification || '',
      experience_years: String(teacher.experience_years),
      phone: teacher.phone || '',
      email: teacher.email || '',
      joining_date: teacher.joining_date || '',
      status: teacher.status,
    });
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this teacher?')) return;
    const { error } = await supabase.from('teachers').delete().eq('id', id);
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Teacher Deleted' });
      fetchTeachers();
    }
  };

  const filtered = teachers.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.employee_id.toLowerCase().includes(search.toLowerCase()) ||
    t.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Teachers</h1>
          <p className="text-muted-foreground">Manage teacher records</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={(o) => { setDialogOpen(o); if (!o) { setEditingId(null); setForm(emptyForm); } }}>
          <DialogTrigger asChild>
            <Button><Plus className="w-4 h-4 mr-2" /> Add Teacher</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingId ? 'Edit Teacher' : 'Add New Teacher'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <Label>Full Name *</Label>
                <Input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Employee ID *</Label>
                <Input required value={form.employee_id} onChange={e => setForm({ ...form, employee_id: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Department *</Label>
                <Select value={form.department} onValueChange={v => setForm({ ...form, department: v })}>
                  <SelectTrigger><SelectValue placeholder="Select department" /></SelectTrigger>
                  <SelectContent>
                    {departments.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Designation *</Label>
                <Input required value={form.designation} onChange={e => setForm({ ...form, designation: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Qualification</Label>
                <Input value={form.qualification} onChange={e => setForm({ ...form, qualification: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Experience (Years)</Label>
                <Input type="number" min="0" value={form.experience_years} onChange={e => setForm({ ...form, experience_years: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Joining Date</Label>
                <Input type="date" value={form.joining_date} onChange={e => setForm({ ...form, joining_date: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={form.status} onValueChange={v => setForm({ ...form, status: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="on_leave">On Leave</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-full flex justify-end gap-3 mt-4">
                <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                <Button type="submit" disabled={loading}>{loading ? 'Saving...' : editingId ? 'Update' : 'Add Teacher'}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-card rounded-xl shadow-md border border-border">
        <div className="p-4 border-b border-border">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search teachers..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10" />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Employee ID</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Designation</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow><TableCell colSpan={7} className="text-center py-8 text-muted-foreground">No teachers found</TableCell></TableRow>
            ) : (
              filtered.map(teacher => (
                <TableRow key={teacher.id}>
                  <TableCell className="font-medium">{teacher.name}</TableCell>
                  <TableCell>{teacher.employee_id}</TableCell>
                  <TableCell>{teacher.department}</TableCell>
                  <TableCell>{teacher.designation}</TableCell>
                  <TableCell>{teacher.experience_years} yrs</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${teacher.status === 'active' ? 'bg-emerald-100 text-emerald-700' : teacher.status === 'on_leave' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                      {teacher.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(teacher)}><Pencil className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(teacher.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default AdminTeachers;
