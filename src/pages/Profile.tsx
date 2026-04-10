import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";
import { updateUser, User } from "@/lib/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { user, logout } = useAuth();
  
  const [form, setForm] = useState<Partial<User>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (user) {
      setForm(user);
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleChange = (field: string, value: string) => {
    if (field.startsWith("address.")) {
      const addressField = field.replace("address.", "");
      setForm({
        ...form,
        address: { ...form.address!, [addressField]: value },
      });
    } else {
      setForm({ ...form, [field]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSaved(false);
    
    try {
      if (form) {
        updateUser(form);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) {
    return null;
  }

  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h1 className="font-display text-3xl sm:text-4xl font-light text-foreground mb-2">{t("auth.profileTitle")}</h1>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} onSubmit={handleSubmit} className="space-y-6">
            {saved && (
              <div className="p-3 bg-green-50 border border-green-200 text-green-600 font-body text-sm rounded-sm">
                {t("auth.saved")}
              </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">{t("auth.name")}</label>
                <Input
                  type="text"
                  value={form.name || ""}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="px-4 py-3 bg-card border border-border text-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">{t("auth.email")}</label>
                <Input
                  type="email"
                  value={form.email || ""}
                  disabled
                  className="px-4 py-3 bg-card border border-border text-muted-foreground font-body text-sm rounded-sm opacity-60"
                />
              </div>
            </div>

            <div className="pt-4">
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">{t("auth.shippingAddress")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <Input
                    type="text"
                    placeholder={t("auth.street")}
                    value={form.address?.street || ""}
                    onChange={(e) => handleChange("address.street", e.target.value)}
                    className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder={t("auth.city")}
                    value={form.address?.city || ""}
                    onChange={(e) => handleChange("address.city", e.target.value)}
                    className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder={t("auth.state")}
                    value={form.address?.state || ""}
                    onChange={(e) => handleChange("address.state", e.target.value)}
                    className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder={t("auth.postalCode")}
                    value={form.address?.postalCode || ""}
                    onChange={(e) => handleChange("address.postalCode", e.target.value)}
                    className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder={t("auth.country")}
                    value={form.address?.country || ""}
                    onChange={(e) => handleChange("address.country", e.target.value)}
                    className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 py-3.5 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isLoading ? "..." : t("auth.updateProfile")}
              </Button>
              <Button
                type="button"
                onClick={handleLogout}
                className="flex-1 py-3.5 bg-secondary text-secondary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
              >
                {t("auth.logout")}
              </Button>
            </div>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;