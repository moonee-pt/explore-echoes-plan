import { motion } from "framer-motion";
import { BookOpen, Volume2, Camera, Star } from "lucide-react";
import cultureHero from "@/assets/culture-hero.jpg";
import dest1 from "@/assets/destination-1.jpg";
import dest2 from "@/assets/destination-2.jpg";
import dest3 from "@/assets/destination-3.jpg";

const tools = [
  { icon: Camera, label: "拍照识别", desc: "AI识别建筑与文物" },
  { icon: Volume2, label: "语音讲解", desc: "智能语音导览服务" },
  { icon: Star, label: "文化收藏", desc: "收藏精彩文化内容" },
];

const articles = [
  { title: "白族扎染工艺", desc: "千年传承的手工技艺，每一件作品都是独一无二的艺术品。扎染是中国最古老的纺织品染色技艺之一。", category: "非遗文化", image: dest1 },
  { title: "大理三道茶", desc: "一苦二甜三回味，品味白族待客之道。三道茶蕴含着人生的哲理与智慧。", category: "饮食文化", image: dest2 },
  { title: "纳西东巴文化", desc: "世界上唯一活着的象形文字，纳西族的文化瑰宝，承载着千年的历史记忆。", category: "民族文化", image: dest3 },
];

const Culture = () => {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-72 overflow-hidden">
        <img src={cultureHero} alt="文化" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl font-display font-bold">文化解读</h1>
              <p className="text-muted-foreground mt-2">了解旅途中的文化故事与历史传承</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-6 py-10">
        {/* Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 -mt-16 relative z-10 mb-10">
          {tools.map((tool, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-md hover:shadow-lg transition-all text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <tool.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">{tool.label}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{tool.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Articles */}
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-display font-semibold">当地文化</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-xl bg-card border border-border/50 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-primary/90 text-primary-foreground font-medium">
                  {article.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg">{article.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{article.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Culture;
