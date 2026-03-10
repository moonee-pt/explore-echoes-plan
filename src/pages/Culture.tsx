import { motion } from "framer-motion";
import { BookOpen, Volume2, Camera, Star } from "lucide-react";
import cultureHero from "@/assets/culture-hero.jpg";
import dest1 from "@/assets/destination-1.jpg";
import dest2 from "@/assets/destination-2.jpg";

const articles = [
  { title: "白族扎染工艺", desc: "千年传承的手工技艺，每一件作品都是独一无二的艺术品", category: "非遗文化", image: dest1 },
  { title: "大理三道茶", desc: "一苦二甜三回味，品味白族待客之道", category: "饮食文化", image: dest2 },
];

const Culture = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-52 overflow-hidden">
        <img src={cultureHero} alt="文化" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute bottom-5 left-5">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-display font-bold"
          >
            文化解读
          </motion.h1>
          <p className="text-xs text-muted-foreground mt-0.5">了解旅途中的文化故事</p>
        </div>
      </div>

      {/* Quick Tools */}
      <div className="px-5 mt-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Camera, label: "拍照识别", desc: "识别建筑文物" },
            { icon: Volume2, label: "语音讲解", desc: "智能语音导览" },
            { icon: Star, label: "文化收藏", desc: "收藏精彩内容" },
          ].map((tool, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-1.5 p-4 rounded-xl bg-card border border-border/50 shadow-sm"
            >
              <tool.icon className="w-5 h-5 text-primary" />
              <span className="text-xs font-medium">{tool.label}</span>
              <span className="text-[10px] text-muted-foreground">{tool.desc}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Current Location Culture */}
      <div className="px-5 mt-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-4 h-4 text-primary" />
          <h2 className="text-lg font-display font-semibold">当地文化</h2>
        </div>
        <div className="space-y-4">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex gap-3 rounded-xl bg-card p-3 border border-border/50 shadow-sm cursor-pointer active:scale-[0.98] transition-transform"
            >
              <img src={article.image} alt={article.title} className="w-24 h-24 rounded-lg object-cover flex-shrink-0" />
              <div className="flex-1 flex flex-col justify-between py-0.5">
                <div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{article.category}</span>
                  <h3 className="font-medium text-sm mt-1.5">{article.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{article.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Culture;
