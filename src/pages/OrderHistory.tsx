import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Package, Clock, CheckCircle, Truck, ShoppingBag } from "lucide-react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";
import { useOrders } from "@/context/OrderContext";

const statusIcons = {
  pending: Clock,
  confirmed: CheckCircle,
  shipped: Truck,
  delivered: Package,
};

const OrderHistory = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { user, isAuthenticated } = useAuth();
  const { orders } = useOrders();

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-3xl sm:text-4xl font-light text-foreground mb-2">
              {t("orderHistory.title") || "Order History"}
            </h1>
            <p className="font-body text-sm text-muted-foreground mb-8">
              {t("orderHistory.subtitle") || "View your past orders"}
            </p>

            {orders.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-muted-foreground">
                <ShoppingBag className="w-12 h-12" />
                <p className="font-body text-sm">{t("orderHistory.empty") || "No orders yet"}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => {
                  const StatusIcon = statusIcons[order.status] || Package;
                  return (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-muted/50 rounded-sm p-4 sm:p-6"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <div>
                          <p className="font-display text-lg text-foreground">{order.id}</p>
                          <p className="font-body text-xs text-muted-foreground">
                            {new Date(order.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <StatusIcon className="w-4 h-4 text-accent" />
                          <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                            {order.status}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-16 object-cover rounded-sm bg-muted"
                              />
                              <div>
                                <p className="font-body text-sm text-foreground">
                                  {item.name}
                                </p>
                                <p className="font-body text-xs text-muted-foreground">
                                  {item.size} × {item.quantity}
                                </p>
                              </div>
                            </div>
                            <span className="font-body text-sm text-foreground">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-border pt-3 flex justify-between">
                        <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                          {t("orderHistory.total") || "Total"}
                        </span>
                        <span className="font-display text-lg text-foreground">
                          ${order.totalPrice.toFixed(2)}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default OrderHistory;