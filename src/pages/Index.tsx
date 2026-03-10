import { motion } from "framer-motion";
import { Plus, Calendar, MapPin, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-travel.jpg";
import dest1 from "@/assets/destination-1.jpg";
import dest2 from "@/assets/destination-2.jpg";
import dest3 from "@/assets/destination-3.jpg";

const trips = [
  { id: 1, title: "云南大理 · 洱海环行", days: "5天4晚", date: "3月15日出发", image: dest1, status: "进行中" },
  { id: 2, title: "北京长城 · 文化之旅", days: "3天2晚", date: "4月2日出发", image: dest2, status: "待出发" },
  { id: 3, title: "九寨沟 · 自然探索", days: "4天3晚", date: "5月10日出发", image: dest3, status: "规划中" },
];

const statusColors: Record<string, string> = {
  "进行中": "bg-primary text-primary-foreground",
  "待出发": "bg-accent text-accent-foreground",
  "规划中": "bg-secondary text-secondary-foreground",
};

const recommendations = [
  { image: dest1, title: "东南亚风情", desc: "热带风光与异域文化的完美邂逅" },
  { image: dest2, title: "万里长城", desc: "感受千年文明的磅礴壮阔" },
  { image: dest3, title: "九寨沟", desc: "人间仙境，绝美的自然调色盘" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-[420px] overflow-hidden">
        <img src={heroImg} alt="旅行风景" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-lg"
            >
              <h1 className="text-4xl font-bold font-display leading-tight">
                探索世界的美好
              </h1>
              <p className="text-lg text-muted-foreground mt-3">
                规划你的下一段旅程，发现未知的精彩
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium text-sm shadow-lg hover:shadow-xl transition-shadow"
              >
                <Plus className="w-4 h-4" />
                创建新行程
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-6 py-10">
        {/* Trips */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-display font-semibold">我的行程</h2>
          <button className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
            查看全部 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {trips.map((trip, i) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-xl bg-card border border-border/50 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full ${statusColors[trip.status]}`}>
                  {trip.status}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold">{trip.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{trip.days}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{trip.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recommendations */}
        <h2 className="text-2xl font-display font-semibold mt-14 mb-6">热门推荐</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {recommendations.map((rec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative h-64 rounded-xl overflow-hidden shadow-md cursor-pointer group"
            >
              <img
                src={rec.image}
                alt={rec.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-lg font-display font-semibold text-card">{rec.title}</h3>
                <p className="text-sm text-card/80 mt-1">{rec.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
