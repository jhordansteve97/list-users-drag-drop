import clsx from "clsx";
import { ItemMenu } from "@atoms";
import type { SidebarProps } from "./Sidebar.interface";

export const Sidebar = ({ isSidebarOpen, logo, options, color }: SidebarProps) => {
  return (
    <aside
      className={clsx(
        "fixed inset-y-0 left-0 z-30 w-64 shadow-lg transition-transform duration-300 overflow-y-auto",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        color === "normal" && "bg-background dark:bg-darkbackground text-foreground dark:text-darkforeground",
        color === "primary" && "bg-primary dark:bg-darkprimary text-textprimary dark:text-darktextprimary",
        color === "secondary" && "bg-secondary dark:bg-darksecondary text-textsecondary dark:text-darktextsecondary",
      )}
    >
      {logo && (
        <div className="flex items-center justify-center h-20 border-b border-gray-300">
          <img src={logo} className="h-16" alt="Logo" />
        </div>
      )}

      <div className="mt-10">
        {options.map((item) => (
          <ItemMenu
            key={item.label}
            label={item.label}
            icon={item?.icon}
            options={item.options}
            color={color}
          />
        ))}
      </div>
    </aside>
  );
};
