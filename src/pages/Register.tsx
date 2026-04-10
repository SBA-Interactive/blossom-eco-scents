import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Register = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { register } = useAuth();
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    if (field.startsWith("address.")) {
      const addressField = field.replace("address.", "");
      setForm({ ...form, address: { ...form.address, [addressField]: value } });
    } else {
      setForm({ ...form, [field]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    if (form.password.length < 6) {
      setError(t("auth.passwordMin"));
      return;
    }
    
    setIsLoading(true);
    
    try {
      await register({
        email: form.email,
        password: form.password,
        name: form.name,
        address: form.address,
      });
      navigate("/");
    } catch (err) {
      setError(t("auth.registerError"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="max-w-lg mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("auth.signup")}</p>
            <h1 className="font-display text-3xl sm:text-4xl font-light text-foreground mb-2">{t("auth.registerTitle")}</h1>
            <p className="font-body text-sm text-muted-foreground">{t("auth.registerSubtitle")}</p>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 font-body text-sm rounded-sm">
                {error}
              </div>
            )}
            
            <div>
              <Input
                type="text"
                placeholder={t("auth.name")}
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder={t("auth.email")}
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Input
                  type="password"
                  placeholder={t("auth.password")}
                  value={form.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  required
                  className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder={t("auth.password") + " *"}
                  value={form.confirmPassword}
                  onChange={(e) => handleChange("confirmPassword", e.target.value)}
                  required
                  className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
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
                    value={form.address.street}
                    onChange={(e) => handleChange("address.street", e.target.value)}
                    className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder={t("auth.city")}
                    value={form.address.city}
                    onChange={(e) => handleChange("address.city", e.target.value)}
                    className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder={t("auth.state")}
                    value={form.address.state}
                    onChange={(e) => handleChange("address.state", e.target.value)}
                    className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder={t("auth.postalCode")}
                    value={form.address.postalCode}
                    onChange={(e) => handleChange("address.postalCode", e.target.value)}
                    className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder={t("auth.country")}
                    value={form.address.country}
                    onChange={(e) => handleChange("address.country", e.target.value)}
                    className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isLoading ? "..." : t("auth.signup")}
            </Button>
          </motion.form>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-6 text-center">
            <p className="font-body text-sm text-muted-foreground">
              {t("auth.haveAccount")}{" "}
              <Link to="/login" className="text-primary hover:underline">
                {t("auth.login")}
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;