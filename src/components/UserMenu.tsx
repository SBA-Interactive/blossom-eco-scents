import { Link } from "react-router-dom";
import { User, Heart, ShoppingBag, LogOut, Globe, Moon, Sun, Clock } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { useWishlist } from "@/context/WishlistContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const UserMenu = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { t, language, setLanguage } = useLanguage();
  const { wishlist } = useWishlist();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isAuthenticated) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 px-3 py-2 rounded-sm border border-border hover:bg-muted transition-colors">
            <User className="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem asChild>
            <Link
              to="/login"
              className="cursor-pointer flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              {t("auth.loginSignUp")}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-3 py-2 rounded-sm border border-border hover:bg-muted transition-colors">
          <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
          <span className="hidden sm:block font-body text-xs tracking-wider text-foreground max-w-[100px] truncate">
            {user?.name || user?.email}
          </span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link to="/profile" className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            {t("auth.profile")}
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link to="/products?wishlist=true" className="cursor-pointer">
            <Heart className="mr-2 h-4 w-4" />
            {t("auth.wishlist")}
            {wishlist.length > 0 && (
              <span className="ml-auto text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link to="/history" className="cursor-pointer">
            <Clock className="mr-2 h-4 w-4" />
            {t("auth.orderHistory")}
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600 focus:text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          {t("auth.logout")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;