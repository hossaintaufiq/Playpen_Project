"use client";

import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Student {
  id: string;
  name: string;
  student_id: string;
  grade: string;
  section: string | null;
  date_of_birth: string | null;
  guardian_name: string | null;
  guardian_phone: string | null;
  guardian_email: string | null;
  address: string | null;
  status: string;
  admission_date: string | null;
}

const emptyForm = {
  name: '', student_id: '', grade: '', section: '', date_of_birth: '',
  guardian_name: '', guardian_phone: '', guardian_email: '', address: '', status: 'active',
};

const AdminStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchStudents = async () => {
    const { data, error } = await supabase.from('students').select('*').order('created_at', { ascending: false });
    if (data) setStudents(data as Student[]);
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
  };

  useEffect(() => { fetchStudents(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      name: form.name,
      student_id: form.student_id,
      grade: form.grade,
      section: form.section || null,
      date_of_birth: form.date_of_birth || null,
      guardian_name: form.guardian_name || null,
      guardian_phone: form.guardian_phone || null,
      guardian_email: form.guardian_email || null,
      address: form.address || null,
      status: form.status,
    };

    let error;
    if (editingId) {
      ({ error } = await supabase.from('students').update(payload).eq('id', editingId));
    } else {
      ({ error } = await supabase.from('students').insert(payload));
    }
    setLoading(false);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: editingId ? 'Student Updated' : 'Student Added' });
      setDialogOpen(false);
      setEditingId(null);
      setForm(emptyForm);
      fetchStudents();
    }
  };

  const handleEdit = (student: Student) => {
    setEditingId(student.id);
    setForm({
      name: student.name,
      student_id: student.student_id,
      grade: student.grade,
      section: student.section || '',
      date_of_birth: student.date_of_birth || '',
      guardian_name: student.guardian_name || '',
      guardian_phone: student.guardian_phone || '',
      guardian_email: student.guardian_email || '',
      address: student.address || '',
      status: student.status,
    });
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this student?')) return;
    const { error } = await supabase.from('students').delete().eq('id', id);
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Student Deleted' });
      fetchStudents();
    }
  };

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.student_id.toLowerCase().includes(search.toLowerCase()) ||
    s.grade.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Students</h1>
          <p className="text-muted-foreground">Manage student records</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={(o) => { setDialogOpen(o); if (!o) { setEditingId(null); setForm(emptyForm); } }}>
          <DialogTrigger asChild>
            <Button><Plus className="w-4 h-4 mr-2" /> Add Student</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingId ? 'Edit Student' : 'Add New Student'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <Label>Full Name *</Label>
                <Input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Student ID *</Label>
                <Input required value={form.student_id} onChange={e => setForm({ ...form, student_id: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Grade *</Label>
                <Select value={form.grade} onValueChange={v => setForm({ ...form, grade: v })}>
                  <SelectTrigger><SelectValue placeholder="Select grade" /></SelectTrigger>
                  <SelectContent>
                    {['Playgroup', 'Nursery', 'KG-I', 'KG-II', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'].map(g => (
                      <SelectItem key={g} value={g}>{g}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Section</Label>
                <Input value={form.section} onChange={e => setForm({ ...form, section: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Date of Birth</Label>
                <Input type="date" value={form.date_of_birth} onChange={e => setForm({ ...form, date_of_birth: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={form.status} onValueChange={v => setForm({ ...form, status: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="graduated">Graduated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Guardian Name</Label>
                <Input value={form.guardian_name} onChange={e => setForm({ ...form, guardian_name: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Guardian Phone</Label>
                <Input value={form.guardian_phone} onChange={e => setForm({ ...form, guardian_phone: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Guardian Email</Label>
                <Input type="email" value={form.guardian_email} onChange={e => setForm({ ...form, guardian_email: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Address</Label>
                <Input value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
              </div>
              <div className="col-span-full flex justify-end gap-3 mt-4">
                <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                <Button type="submit" disabled={loading}>{loading ? 'Saving...' : editingId ? 'Update' : 'Add Student'}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-card rounded-xl shadow-md border border-border">
        <div className="p-4 border-b border-border">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search students..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10" />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Student ID</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Section</TableHead>
              <TableHead>Guardian</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow><TableCell colSpan={7} className="text-center py-8 text-muted-foreground">No students found</TableCell></TableRow>
            ) : (
              filtered.map(student => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.student_id}</TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell>{student.section || '—'}</TableCell>
                  <TableCell>{student.guardian_name || '—'}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${student.status === 'active' ? 'bg-emerald-100 text-emerald-700' : student.status === 'graduated' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'}`}>
                      {student.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(student)}><Pencil className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(student.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
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

export default AdminStudents;
