import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button, Switch } from "@atoms";
import type { TopbarProps } from "./Topbar.interface";
import { Link } from "react-router";
import { headerTopbarStyle } from "./Topbar.style";
import { useThemeContext } from "@/Hooks";

export const Topbar = ({
  onToggleSidebar,
  title,
  color = "primary",
  to,
}: TopbarProps) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const { dark, setDark } = useThemeContext();

  useEffect(() => {
    if (dark)
      document.body.classList.add("dark"); // si existe el modo oscuro agregarlo
    else document.body.classList.remove("dark"); // si no esta eliminarlo si es que existe la clase en body
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const darkMode = (e: boolean) => {
    setDark(e);
    localStorage.setItem("dark", JSON.stringify(e));
    if (e) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  };

  return (
    <header className={headerTopbarStyle({ color, scrolled })}>
      <Button variant="text" color="normal" onClick={onToggleSidebar}>
        <GiHamburgerMenu size={25} />
      </Button>
      <Link className="text-lg font-semibold" to={to}>
        {title}
      </Link>
      <Switch
        variant="both"
        labelLeft="Claro"
        labelRight="Oscuro"
        checked={dark}
        color="secondary"
        onChange={(e) => darkMode(e)}
      />
    </header>
  );
};
