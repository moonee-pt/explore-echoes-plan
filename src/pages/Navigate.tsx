import { motion } from "framer-motion";
import { Navigation, MapPin, Clock, Route } from "lucide-react";

const Navigate = () => {
  return (
    <div className="min-h-screen">
      {/* Map Placeholder */}
      <div className="relative h-80 bg-secondary flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiNjY2MiIG9wYWNpdHk9IjAuMyIvPjwvZz48L3N2Zz4=')] opacity-60" />
        <div className="text-center z-10">
          <Navigation className="w-12 h-12 text-primary mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">地图加载中...</p>
          <p className="text-xs text-muted-foreground mt-1">接入地图API后启用实时导航</p>
        </div>

        {/* Floating position indicator */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-lg"
        >
          <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
        </motion.div>
      </div>

      {/* Navigation Info */}
      <div className="px-5 -mt-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl bg-card p-4 shadow-lg border border-border/50"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">当前位置</p>
              <p className="text-xs text-muted-foreground">大理古城 · 人民路</p>
            </div>
          </div>
          <div className="border-l-2 border-dashed border-primary/30 ml-4 pl-5 py-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Route className="w-3 h-3" />
              <span>步行约 15 分钟 · 1.2km</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium">下一站</p>
              <p className="text-xs text-muted-foreground">崇圣寺三塔</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Today's Itinerary */}
      <div className="px-5 mt-6">
        <h2 className="text-lg font-display font-semibold mb-4">今日行程</h2>
        <div className="space-y-3">
          {[
            { time: "09:00", place: "大理古城", done: true },
            { time: "11:30", place: "崇圣寺三塔", done: false },
            { time: "14:00", place: "洱海游船", done: false },
            { time: "17:00", place: "双廊古镇", done: false },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`flex items-center gap-3 p-3 rounded-lg border border-border/50 ${
                item.done ? "bg-primary/5" : "bg-card"
              }`}
            >
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.done ? "bg-primary" : "bg-border"}`} />
              <Clock className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground w-12">{item.time}</span>
              <span className={`text-sm ${item.done ? "text-muted-foreground line-through" : "font-medium"}`}>{item.place}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigate;
