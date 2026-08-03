import React, { useState } from 'react';
import { MOCK_BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';
import { Search, Calendar, Clock, Eye, MessageSquare, User, ArrowRight, X, Send } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const Blog: React.FC = () => {
  const { addToast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentText, setCommentText] = useState('');
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);

  const categories = ['All', 'SEO Tips', 'PPC', 'Content Strategy', 'Social Media'];

  const filteredPosts = MOCK_BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeArticle || !commentAuthor || !commentText) return;

    setIsSubmittingComment(true);
    try {
      const res = await fetch(`/api/blog/${activeArticle.id}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: commentAuthor, content: commentText })
      });
      const data = await res.json();
      if (res.ok) {
        activeArticle.comments.push(data.comment);
        addToast('Comment published!', 'success');
        setCommentText('');
        setCommentAuthor('');
      } else {
        throw new Error(data.error || 'Failed to post comment');
      }
    } catch (err: any) {
      addToast(err.message || 'Error posting comment', 'error');
    } finally {
      setIsSubmittingComment(false);
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="text-center space-y-4 pt-4 max-w-3xl mx-auto">
        <span className="text-[10px] font-black tracking-widest text-[#0055FF] uppercase block">
          01. KNOWLEDGE BASE
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-[#111111] dark:text-white uppercase tracking-tighter italic">
          GROWTH RESOURCES & INSIGHTS
        </h1>
        <p className="text-slate-700 dark:text-slate-300 text-xs font-medium uppercase tracking-wider">
          Actionable blueprints, generative search studies, and ad creative breakdowns written by our senior strategists.
        </p>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-3.5 h-3.5 text-[#111111] dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="SEARCH ARTICLES..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-[10px] font-bold uppercase tracking-wider bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 text-[#111111] dark:text-white focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-widest border transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] border-[#111111]'
                    : 'bg-white dark:bg-[#1a1a1a] text-[#111111] dark:text-slate-200 border-[#111111] dark:border-slate-800 hover:bg-[#0055FF] hover:text-white hover:border-[#0055FF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="cursor-pointer bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 hover:border-[#0055FF] transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden border-b-2 border-[#111111] dark:border-slate-800">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 text-[9px] font-black uppercase tracking-widest text-white bg-[#111111] px-2 py-0.5 border border-white">
                    {post.category}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#0055FF]" />
                      {post.publishDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#0055FF]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-black text-base text-[#111111] dark:text-white uppercase tracking-tight group-hover:text-[#0055FF] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-xs font-medium line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between border-t border-[#111111]/10 dark:border-slate-800 pt-3 mt-2">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-5 h-5 border border-[#111111] object-cover"
                  />
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#111111] dark:text-slate-300">{post.author.name}</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#0055FF] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>READ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/90 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] max-w-3xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 text-white bg-[#111111] hover:bg-[#0055FF] transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner */}
            <div className="space-y-3 pt-2">
              <span className="text-[9px] font-black uppercase tracking-widest text-white bg-[#0055FF] px-2.5 py-1 inline-block">
                {activeArticle.category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter italic text-[#111111] dark:text-white leading-tight">
                {activeArticle.title}
              </h2>

              <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-slate-500 border-y-2 border-[#111111] dark:border-slate-800 py-3">
                <div className="flex items-center gap-3">
                  <img src={activeArticle.author.avatar} alt={activeArticle.author.name} className="w-7 h-7 border border-[#111111]" />
                  <div>
                    <span className="font-black text-[#111111] dark:text-white block">{activeArticle.author.name}</span>
                    <span className="text-[9px] text-slate-500">{activeArticle.author.role}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span>{activeArticle.publishDate}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>
            </div>

            {/* Article Image */}
            <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-64 sm:h-80 object-cover border-2 border-[#111111]" />

            {/* Body */}
            <div
              className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 text-xs font-medium leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: activeArticle.content }}
            />

            {/* Comments Section */}
            <div className="pt-6 border-t-2 border-[#111111] dark:border-slate-800 space-y-6">
              <h3 className="font-black text-base uppercase tracking-tight text-[#111111] dark:text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#0055FF]" />
                <span>COMMENTS ({activeArticle.comments.length})</span>
              </h3>

              {/* Comments List */}
              <div className="space-y-3">
                {activeArticle.comments.map((cm) => (
                  <div key={cm.id} className="bg-slate-100 dark:bg-slate-900 p-4 border-2 border-[#111111] dark:border-slate-800 text-xs space-y-1">
                    <div className="flex justify-between items-center font-black uppercase text-[#111111] dark:text-white">
                      <span>{cm.author}</span>
                      <span className="text-[9px] text-slate-500">{cm.date}</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{cm.content}</p>
                  </div>
                ))}
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleAddComment} className="space-y-3 bg-slate-100 dark:bg-slate-900 p-4 border-2 border-[#111111] dark:border-slate-800">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#111111] dark:text-white">LEAVE A COMMENT</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="YOUR NAME"
                    value={commentAuthor}
                    onChange={(e) => setCommentAuthor(e.target.value)}
                    className="p-2 text-xs font-bold uppercase tracking-wider bg-white dark:bg-[#1a1a1a] border border-[#111111] dark:border-slate-800 text-[#111111] dark:text-white focus:outline-none"
                  />
                </div>
                <textarea
                  rows={2}
                  required
                  placeholder="SHARE YOUR PERSPECTIVE OR ASK A QUESTION..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full p-2 text-xs font-bold uppercase tracking-wider bg-white dark:bg-[#1a1a1a] border border-[#111111] dark:border-slate-800 text-[#111111] dark:text-white focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isSubmittingComment}
                  className="px-4 py-2 bg-[#111111] dark:bg-white text-white dark:text-[#111111] font-black text-[10px] uppercase tracking-widest hover:bg-[#0055FF] dark:hover:bg-[#0055FF] dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>POST COMMENT</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
