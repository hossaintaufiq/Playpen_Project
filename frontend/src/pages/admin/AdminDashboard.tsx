import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, UserPlus, TrendingUp, Calendar, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const { count: sc } = await supabase.from('students').select('*', { count: 'exact', head: true });
      const { count: tc } = await supabase.from('teachers').select('*', { count: 'exact', head: true });
      setStudentCount(sc || 0);
      setTeacherCount(tc || 0);
    };
    fetchCounts();
  }, []);

  const stats = [
    { icon: Users, label: 'Total Students', value: studentCount.toLocaleString(), color: 'bg-blue-500' },
    { icon: GraduationCap, label: 'Teachers', value: teacherCount.toLocaleString(), color: 'bg-emerald-500' },
  ];

  return (
    <>
      <h1 className="font-serif text-3xl font-bold text-foreground mb-2">Dashboard</h1>
      <p className="text-muted-foreground mb-8">Welcome back! Here's what's happening.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-md border border-border"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <h3 className="font-serif text-xl font-bold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-auto py-4 flex-col gap-2" onClick={() => navigate('/admin/students')}>
              <UserPlus className="w-6 h-6" />
              Manage Students
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2" onClick={() => navigate('/admin/teachers')}>
              <GraduationCap className="w-6 h-6" />
              Manage Teachers
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Calendar className="w-6 h-6" />
              Schedule Event
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <FileText className="w-6 h-6" />
              Generate Report
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
