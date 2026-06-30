import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bell, Search, Filter } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';

interface Notice {
  id: string;
  title: string;
  description: string;
  category: string;
  publish_date: string;
}

const categories = ['All', 'Academic', 'Event', 'Holiday', 'Urgent', 'General'];

const categoryStyles: Record<string, string> = {
  Academic: 'bg-blue-100 text-blue-700 border-blue-200',
  Event: 'bg-purple-100 text-purple-700 border-purple-200',
  Holiday: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  Urgent: 'bg-red-100 text-red-700 border-red-200',
  General: 'bg-amber-100 text-amber-700 border-amber-200',
};

const Notice = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from('notices')
        .select('*')
        .order('publish_date', { ascending: false });
      if (data) setNotices(data as Notice[]);
      setLoading(false);
    };
    load();
  }, []);

  const filtered = notices.filter(n => {
    const matchSearch =
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.description.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === 'All' || n.category === category;
    return matchSearch && matchCat;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 hero-gradient overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm mb-6">
              <Bell className="w-4 h-4" />
              Stay Informed
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
              Notices & Announcements
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Important updates, events, and information from Playpen School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search notices..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-10 bg-card"
              />
            </div>
            <div className="flex items-center gap-2 md:w-64">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(c => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Notices list */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20 text-muted-foreground">Loading notices...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <Bell className="w-12 h-12 mx-auto text-muted-foreground/40 mb-4" />
              <p className="text-muted-foreground">No notices found.</p>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-5">
              {filtered.map((notice, i) => (
                <motion.article
                  key={notice.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all p-6 md:p-8 group"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryStyles[notice.category] || categoryStyles.General}`}>
                      {notice.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {format(new Date(notice.publish_date), 'MMMM d, yyyy')}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {notice.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {notice.description}
                  </p>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Notice;
