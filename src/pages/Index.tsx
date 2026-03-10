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

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-64 overflow-hidden">
        <img src={heroImg} alt="旅行风景" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-6 left-5 right-5">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold font-display text-foreground"
          >
            探索世界的美好
          </motion.h1>
          <p className="text-sm text-muted-foreground mt-1">规划你的下一段旅程</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-5 -mt-2 relative z-10">
        <motion.button
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground py-3 font-medium text-sm shadow-lg"
        >
          <Plus className="w-4 h-4" />
          创建新行程
        </motion.button>
      </div>

      {/* Trips */}
      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-display font-semibold">我的行程</h2>
          <button className="text-xs text-muted-foreground flex items-center gap-0.5">
            查看全部 <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="space-y-3">
          {trips.map((trip, i) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-3 rounded-lg bg-card p-3 shadow-sm border border-border/50 cursor-pointer active:scale-[0.98] transition-transform"
            >
              <img src={trip.image} alt={trip.title} className="w-20 h-20 rounded-md object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-sm truncate">{trip.title}</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full flex-shrink-0 ${statusColors[trip.status]}`}>
                    {trip.status}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{trip.days}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{trip.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="px-5 mt-8 mb-4">
        <h2 className="text-lg font-display font-semibold mb-4">热门推荐</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
          {[dest1, dest2, dest3].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="relative flex-shrink-0 w-36 h-48 rounded-xl overflow-hidden shadow-md cursor-pointer"
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-xs font-medium text-card">
                  {["东南亚风情", "万里长城", "九寨沟"][i]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
