import { motion } from "framer-motion";
import { Settings, Heart, Clock, Award, ChevronRight, LogOut, MapPin } from "lucide-react";

const menuItems = [
  { icon: Heart, label: "我的收藏", desc: "收藏的景点和文化内容", count: 12 },
  { icon: Clock, label: "历史足迹", desc: "去过的城市和景点", count: 8 },
  { icon: Award, label: "旅行成就", desc: "解锁的成就徽章", count: 5 },
  { icon: Settings, label: "账号设置", desc: "管理个人信息和偏好" },
];

const recentPlaces = [
  { name: "大理古城", date: "3月10日" },
  { name: "洱海公园", date: "3月9日" },
  { name: "苍山索道", date: "3月8日" },
];

const Profile = () => {
  return (
    <div className="container max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-primary overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center text-3xl font-display text-primary-foreground">
                  旅
                </div>
                <div>
                  <h1 className="text-xl font-display font-bold text-primary-foreground">旅行者</h1>
                  <p className="text-sm text-primary-foreground/70 mt-1">探索了 3 个城市 · 12 个景点</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { label: "行程", value: "3" },
                  { label: "足迹", value: "12" },
                  { label: "收藏", value: "28" },
                ].map((stat, i) => (
                  <div key={i} className="text-center bg-primary-foreground/10 rounded-lg py-3">
                    <p className="text-xl font-bold text-primary-foreground">{stat.value}</p>
                    <p className="text-xs text-primary-foreground/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recent Places */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-xl bg-card border border-border/50 shadow-sm mt-5 p-5"
          >
            <h3 className="font-display font-semibold mb-3">最近去过</h3>
            <div className="space-y-3">
              {recentPlaces.map((place, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="flex-1">{place.name}</span>
                  <span className="text-xs text-muted-foreground">{place.date}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Menu & Content */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl bg-card border border-border/50 shadow-sm overflow-hidden"
          >
            {menuItems.map((item, i) => (
              <button
                key={i}
                className="w-full flex items-center gap-4 px-6 py-5 border-b border-border/30 last:border-0 hover:bg-muted/50 transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {item.count && (
                  <span className="text-sm text-muted-foreground font-medium">{item.count}</span>
                )}
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-border text-sm text-muted-foreground hover:bg-muted/50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            退出登录
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
