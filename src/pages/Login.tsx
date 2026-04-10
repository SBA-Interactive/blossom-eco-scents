import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { login } = useAuth();
  
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    try {
      await login(form.email, form.password);
      navigate("/");
    } catch (err) {
      setError(t("auth.loginError"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="max-w-md mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("auth.login")}</p>
            <h1 className="font-display text-3xl sm:text-4xl font-light text-foreground mb-2">{t("auth.loginTitle")}</h1>
            <p className="font-body text-sm text-muted-foreground">{t("auth.loginSubtitle")}</p>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 font-body text-sm rounded-sm">
                {error}
              </div>
            )}
            
            <div>
              <Input
                type="email"
                placeholder={t("auth.email")}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            
            <div>
              <Input
                type="password"
                placeholder={t("auth.password")}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isLoading ? "..." : t("auth.login")}
            </Button>
          </motion.form>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-6 text-center">
            <p className="font-body text-sm text-muted-foreground">
              {t("auth.noAccount")}{" "}
              <Link to="/register" className="text-primary hover:underline">
                {t("auth.signup")}
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;