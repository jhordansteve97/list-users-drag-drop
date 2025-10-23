import { FaUserFriends } from "react-icons/fa";
import type { ItemMenuProps } from "@/Atoms/ItemMenu/itemMenu.interface";

export const optionsSidebar: ItemMenuProps[] = [
  {
    label: "Usuarios",
    icon: <FaUserFriends />,
    options: [
      {
        id: "List",
        to: "/",
        label: "Lista de usuarios",
      },
      {
        id: "RegisterUser",
        to: "/register",
        label: "Registar Usuario",
      },
    ],
  },
];