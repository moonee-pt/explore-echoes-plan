import { motion } from "framer-motion";
import { Settings, Heart, Clock, Award, ChevronRight, LogOut } from "lucide-react";

const menuItems = [
  { icon: Heart, label: "我的收藏", count: 12 },
  { icon: Clock, label: "历史足迹", count: 8 },
  { icon: Award, label: "旅行成就", count: 5 },
  { icon: Settings, label: "设置" },
];

const Profile = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-primary px-5 pt-12 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center text-2xl font-display text-primary-foreground">
            旅
          </div>
          <div>
            <h1 className="text-lg font-display font-bold text-primary-foreground">旅行者</h1>
            <p className="text-xs text-primary-foreground/70 mt-0.5">探索了 3 个城市 · 12 个景点</p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {[
            { label: "行程", value: "3" },
            { label: "足迹", value: "12" },
            { label: "收藏", value: "28" },
          ].map((stat, i) => (
            <div key={i} className="text-center bg-primary-foreground/10 rounded-lg py-2.5">
              <p className="text-lg font-bold text-primary-foreground">{stat.value}</p>
              <p className="text-[10px] text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div className="px-5 -mt-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl bg-card shadow-lg border border-border/50 overflow-hidden"
        >
          {menuItems.map((item, i) => (
            <button
              key={i}
              className="w-full flex items-center gap-3 px-4 py-3.5 border-b border-border/30 last:border-0 active:bg-muted transition-colors"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm flex-1 text-left">{item.label}</span>
              {item.count && (
                <span className="text-xs text-muted-foreground">{item.count}</span>
              )}
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          ))}
        </motion.div>
      </div>

      {/* Logout */}
      <div className="px-5 mt-6">
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-border text-sm text-muted-foreground active:bg-muted transition-colors">
          <LogOut className="w-4 h-4" />
          退出登录
        </button>
      </div>
    </div>
  );
};

export default Profile;
