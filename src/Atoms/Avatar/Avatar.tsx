import type { AvatarImgProps, AvatarProps } from "./Avatar.interface";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { avatarVariantStyle, imgAvatar, imgAvatars } from "./Avatar.style";

interface NotificationIconProps {
  count?: number;
}

const NotificationIcon = ({ count = 0 }: NotificationIconProps) => {
  return (
    <div className="relative inline-flex">
      {/* icono principal */}
      <span
        className={clsx(
          "relative flex h-5 w-5 items-center justify-center text-white text-xs font-bold z-10"
          // "after:content-['+'] after:absolute after:-left-[3px] after:bottom-0",
        )}
      >
        {count <= 9 ? count : "+9"}
      </span>

      {/* efecto ping detrás */}
      <span className="absolute top-0 right-0 inline-flex h-full w-full rounded-full bg-pink-400 opacity-75 animate-ping"></span>

      {/* circulo fijo encima */}
      <span className="absolute top-[1px] right-[0px] inline-flex h-5 w-5 rounded-full bg-pink-600"></span>

      {/* número del badge */}
    </div>
  );
};

export const Avatar = ({
  variant = "normal",
  color = "normal",
  img,
  tooltip,
  activate,
  count,
  onClick,
}: AvatarProps) => {
  const [arrAvatars, setArrAvatars] = useState<AvatarImgProps[] | []>([]);

  useEffect(() => {
    if (Array.isArray(img)) {
      setArrAvatars(img.length > 5 ? img.slice(0, 5) : img);
    }
  }, [img]);
  return (
    <div className="overflow-x-scroll rounded-lg  lg:overflow-visible">
      {arrAvatars.length > 1 && (
        <div
          className={avatarVariantStyle(variant)}
        >
          {arrAvatars.map((item) => (
            <div key={item.tooltip} className="relative">
              <img
                alt={item.tooltip}
                src={item.img}
                className={imgAvatars(item.color)}
              />
              {item.activate && (
                <span className="bottom-0 absolute right-0 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full" />
              )}
            </div>
          ))}
          {img.length > 5 && (
            <div className="relative">
              <div className={clsx(
                "relative h-12 w-12 rounded-full border-2 border-white dark:border-gray-500 hover:z-10 focus:z-10",
                "flex justify-center items-center bg-background dark:bg-darkbackground text-2xl")}>
                +{img.length-5}
              </div>
            </div>
          )}
        </div>
      )}
      {!Array.isArray(img) && (
        <div className="flex items-center -space-x-4">
          <button className="relative" onClick={onClick}>
            <img
              alt={tooltip ?? "avatar"}
              src={img}
              className={imgAvatar(color)}
            />
            {activate && (
              <span className="bottom-0 right-0 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
            )}

            {count && (
              <span className="-top-2 right-0 absolute  w-3.5 h-3.5 text-pink-600">
                <NotificationIcon count={count} />
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};