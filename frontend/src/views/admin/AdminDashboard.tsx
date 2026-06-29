"use client";

import { useCallback, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  GraduationCap,
  UserPlus,
  Calendar,
  FileText,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Activity,
  Loader2,
} from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { supabase } from '@/integrations/supabase/client';
import { useRouter } from 'next/navigation';

interface StudentRow {
  grade: string;
  status: string;
  admission_date: string | null;
}

interface TeacherRow {
  department: string;
  status: string;
  joining_date: string | null;
}

const CHART_COLORS = [
  'hsl(350, 70%, 45%)',
  'hsl(43, 90%, 50%)',
  'hsl(221, 83%, 53%)',
  'hsl(160, 84%, 39%)',
  'hsl(262, 83%, 58%)',
  'hsl(24, 95%, 53%)',
  'hsl(199, 89%, 48%)',
  'hsl(330, 81%, 60%)',
];

const gradeChartConfig = {
  count: { label: 'Students', color: 'hsl(221, 83%, 53%)' },
} satisfies ChartConfig;

const departmentChartConfig = {
  count: { label: 'Teachers', color: 'hsl(160, 84%, 39%)' },
} satisfies ChartConfig;

const trendChartConfig = {
  admissions: { label: 'Admissions', color: 'hsl(350, 70%, 45%)' },
} satisfies ChartConfig;

function aggregateCounts(
  items: { grade?: string; department?: string; status?: string }[],
  field: 'grade' | 'department' | 'status',
  limit = 6,
) {
  const map = new Map<string, number>();
  items.forEach((item) => {
    const key = String(item[field] || 'Unknown');
    map.set(key, (map.get(key) || 0) + 1);
  });
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

function aggregateAdmissionsByMonth(dates: (string | null)[]) {
  const map = new Map<string, number>();
  dates.forEach((date) => {
    if (!date) return;
    const key = date.slice(0, 7);
    map.set(key, (map.get(key) || 0) + 1);
  });
  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-6)
    .map(([month, admissions]) => ({
      month: new Date(`${month}-01`).toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
      admissions,
    }));
}

function pct(active: number, total: number) {
  if (total === 0) return 0;
  return Math.round((active / total) * 100);
}

const AdminDashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState<StudentRow[]>([]);
  const [teachers, setTeachers] = useState<TeacherRow[]>([]);

  const fetchDashboardData = useCallback(async () => {
    const [{ data: studentData }, { data: teacherData }] = await Promise.all([
      supabase.from('students').select('grade, status, admission_date'),
      supabase.from('teachers').select('department, status, joining_date'),
    ]);
    setStudents((studentData as StudentRow[]) || []);
    setTeachers((teacherData as TeacherRow[]) || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchDashboardData();

    const channel = supabase
      .channel('admin-dashboard')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'students' }, fetchDashboardData)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'teachers' }, fetchDashboardData)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchDashboardData]);

  const studentCount = students.length;
  const teacherCount = teachers.length;
  const activeStudents = students.filter((s) => s.status === 'active').length;
  const activeTeachers = teachers.filter((t) => t.status === 'active').length;

  const studentsByGrade = useMemo(() => aggregateCounts(students, 'grade', 8), [students]);
  const teachersByDept = useMemo(() => aggregateCounts(teachers, 'department', 6), [teachers]);
  const admissionTrend = useMemo(
    () => aggregateAdmissionsByMonth(students.map((s) => s.admission_date)),
    [students],
  );

  const graduatedStudents = students.filter((s) => s.status === 'graduated').length;

  const progressMetrics = useMemo(
    () => [
      {
        label: 'Active Students',
        value: pct(activeStudents, studentCount),
        detail: `${activeStudents} of ${studentCount}`,
        color: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      },
      {
        label: 'Active Teachers',
        value: pct(activeTeachers, teacherCount),
        detail: `${activeTeachers} of ${teacherCount}`,
        color: 'bg-gradient-to-r from-emerald-500 to-teal-600',
      },
      {
        label: 'Graduated Students',
        value: pct(graduatedStudents, studentCount),
        detail: `${graduatedStudents} graduated`,
        color: 'bg-gradient-to-r from-primary to-rose-700',
      },
    ],
    [activeStudents, activeTeachers, graduatedStudents, studentCount, teacherCount],
  );

  const stats = [
    {
      icon: Users,
      label: 'Total Students',
      value: studentCount.toLocaleString(),
      sub: `${activeStudents} active`,
      gradient: 'from-blue-500 to-indigo-600',
      glow: 'shadow-blue-500/20',
      accent: 'bg-blue-500/10 text-blue-600',
    },
    {
      icon: GraduationCap,
      label: 'Teachers',
      value: teacherCount.toLocaleString(),
      sub: `${activeTeachers} active`,
      gradient: 'from-emerald-500 to-teal-600',
      glow: 'shadow-emerald-500/20',
      accent: 'bg-emerald-500/10 text-emerald-600',
    },
  ];

  const quickActions = [
    {
      icon: UserPlus,
      label: 'Manage Students',
      description: 'Add, edit, or remove student records',
      onClick: () => router.push('/admin/students'),
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      icon: GraduationCap,
      label: 'Manage Teachers',
      description: 'Update faculty and staff information',
      onClick: () => router.push('/admin/teachers'),
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Calendar,
      label: 'Schedule Event',
      description: 'Plan school events and activities',
      onClick: undefined,
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      icon: FileText,
      label: 'Generate Report',
      description: 'Export summaries and analytics',
      onClick: undefined,
      gradient: 'from-rose-500 to-pink-600',
    },
  ];

  if (loading) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 text-muted-foreground">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Welcome banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-sm sm:p-8"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-secondary/15 blur-3xl" />

        <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              Admin Portal
            </div>
            <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Dashboard
            </h1>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
              Welcome back! Here&apos;s what&apos;s happening at Playpen today.
            </p>
          </div>
          <div className="flex w-full items-center gap-3 rounded-xl border border-border/60 bg-background/80 px-4 py-3 backdrop-blur-sm sm:w-auto sm:px-5 sm:py-4">
            <div className="min-w-0 flex-1 text-left sm:text-right">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Total enrolled
              </p>
              <p className="text-xl font-bold text-foreground sm:text-2xl">
                {(studentCount + teacherCount).toLocaleString()}
              </p>
            </div>
            <div className="hidden h-10 w-px bg-border sm:block" />
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl hero-gradient shadow-md sm:h-11 sm:w-11">
              <Users className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-6 ${stat.glow}`}
          >
            <div className={`absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-gradient-to-br opacity-10 transition-opacity group-hover:opacity-20 ${stat.gradient}`} />
            <div className="relative">
              <div className="mb-4 flex items-start justify-between gap-2 sm:mb-5">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg sm:h-12 sm:w-12 ${stat.gradient}`}>
                  <stat.icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${stat.accent}`}>
                  Live
                </span>
              </div>
              <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              <p className="mt-0.5 text-xs text-muted-foreground/80">{stat.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm sm:p-6"
      >
        <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground sm:text-xl">
              <Activity className="h-5 w-5 text-primary" />
              Progress Overview
            </h3>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Live metrics from your student and teacher records
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Real-time
          </span>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {progressMetrics.map((metric) => (
            <div key={metric.label} className="space-y-2.5 rounded-xl border border-border/50 bg-muted/30 p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium text-foreground">{metric.label}</p>
                <span className="text-lg font-bold tabular-nums text-foreground">{metric.value}%</span>
              </div>
              <div className="relative h-2.5 overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.value}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className={`absolute inset-y-0 left-0 rounded-full ${metric.color}`}
                />
              </div>
              <p className="text-xs text-muted-foreground">{metric.detail}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        {/* Students by grade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm sm:p-6"
        >
          <div className="mb-4">
            <h3 className="font-serif text-lg font-bold text-foreground sm:text-xl">Students by Grade</h3>
            <p className="text-xs text-muted-foreground sm:text-sm">Distribution across grade levels</p>
          </div>
          {studentsByGrade.length > 0 ? (
            <ChartContainer config={gradeChartConfig} className="h-[220px] w-full sm:h-[260px]">
              <BarChart data={studentsByGrade} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11 }}
                  interval={0}
                  angle={-35}
                  textAnchor="end"
                  height={56}
                />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11 }} allowDecimals={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="var(--color-count)" radius={[6, 6, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ChartContainer>
          ) : (
            <EmptyChart message="No student data yet" />
          )}
        </motion.div>

        {/* Teachers by department */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm sm:p-6"
        >
          <div className="mb-4">
            <h3 className="font-serif text-lg font-bold text-foreground sm:text-xl">Teachers by Department</h3>
            <p className="text-xs text-muted-foreground sm:text-sm">Faculty spread across departments</p>
          </div>
          {teachersByDept.length > 0 ? (
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <ChartContainer config={departmentChartConfig} className="mx-auto h-[200px] w-full max-w-[220px] sm:h-[220px]">
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={teachersByDept}
                    dataKey="count"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                  >
                    {teachersByDept.map((_, i) => (
                      <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
              <ul className="w-full flex-1 space-y-2 sm:max-h-[220px] sm:overflow-y-auto custom-scrollbar">
                {teachersByDept.map((dept, i) => (
                  <li key={dept.name} className="flex items-center justify-between gap-2 text-sm">
                    <span className="flex min-w-0 items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }}
                      />
                      <span className="truncate text-foreground">{dept.name}</span>
                    </span>
                    <span className="shrink-0 font-semibold tabular-nums text-muted-foreground">{dept.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <EmptyChart message="No teacher data yet" />
          )}
        </motion.div>
      </div>

      {/* Admission trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm sm:p-6"
      >
        <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground sm:text-xl">
              <TrendingUp className="h-5 w-5 text-primary" />
              Admission Trend
            </h3>
            <p className="text-xs text-muted-foreground sm:text-sm">Monthly new student admissions</p>
          </div>
        </div>
        {admissionTrend.length > 0 ? (
          <ChartContainer config={trendChartConfig} className="h-[200px] w-full sm:h-[240px]">
            <LineChart data={admissionTrend} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11 }} allowDecimals={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="admissions"
                stroke="var(--color-admissions)"
                strokeWidth={2.5}
                dot={{ fill: 'var(--color-admissions)', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
        ) : (
          <EmptyChart message="No admission dates recorded yet" />
        )}

        {/* Status breakdown bars */}
        <div className="mt-6 grid grid-cols-1 gap-4 border-t border-border/60 pt-6 sm:grid-cols-2">
          <StatusBreakdown
            title="Student Status"
            items={[
              { label: 'Active', count: activeStudents, total: studentCount, color: 'bg-emerald-500' },
              {
                label: 'Inactive / Other',
                count: studentCount - activeStudents,
                total: studentCount,
                color: 'bg-amber-500',
              },
            ]}
          />
          <StatusBreakdown
            title="Teacher Status"
            items={[
              { label: 'Active', count: activeTeachers, total: teacherCount, color: 'bg-emerald-500' },
              {
                label: 'Inactive / On Leave',
                count: teacherCount - activeTeachers,
                total: teacherCount,
                color: 'bg-amber-500',
              },
            ]}
          />
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm sm:p-6"
      >
        <div className="mb-5 sm:mb-6">
          <h3 className="font-serif text-lg font-bold text-foreground sm:text-xl">Quick Actions</h3>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">Jump to common admin tasks</p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
            >
              <Button
                variant="outline"
                className="group h-auto w-full justify-start gap-3 rounded-xl border-border/60 bg-background/50 p-4 text-left transition-all duration-300 hover:border-primary/30 hover:bg-muted/40 hover:shadow-md sm:gap-4 sm:p-5"
                onClick={action.onClick}
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-md sm:h-12 sm:w-12 ${action.gradient}`}>
                  <action.icon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground sm:text-base">{action.label}</p>
                  <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{action.description}</p>
                </div>
                <ArrowUpRight className="hidden h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:block" />
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

function EmptyChart({ message }: { message: string }) {
  return (
    <div className="flex h-[200px] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/20 text-center">
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}

function StatusBreakdown({
  title,
  items,
}: {
  title: string;
  items: { label: string; count: number; total: number; color: string }[];
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-foreground">{title}</p>
      {items.map((item) => (
        <div key={item.label} className="space-y-1.5">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{item.label}</span>
            <span className="tabular-nums">
              {item.count} / {item.total}
            </span>
          </div>
          <Progress
            value={item.total > 0 ? (item.count / item.total) * 100 : 0}
            className="h-2 bg-muted"
          />
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
