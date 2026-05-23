import { Routes, Route } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '@/hooks/useAuth';
import { AdminLayout } from '@/components/admin/AdminLayout';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminStudents from '@/pages/admin/AdminStudents';
import AdminTeachers from '@/pages/admin/AdminTeachers';

const Admin = () => {
  // Admin login disabled for now — Portal opens dashboard directly.
  // const { user, loading } = useAuth();
  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-muted/30">
  //       <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
  //     </div>
  //   );
  // }
  // if (!user) {
  //   return <Navigate to="/admin/login" replace />;
  // }

  return (
    <AdminLayout>
      <Routes>
        <Route index element={<AdminDashboard />} />
        <Route path="students" element={<AdminStudents />} />
        <Route path="teachers" element={<AdminTeachers />} />
        <Route path="*" element={<AdminDashboard />} />
      </Routes>
    </AdminLayout>
  );
};

export default Admin;
