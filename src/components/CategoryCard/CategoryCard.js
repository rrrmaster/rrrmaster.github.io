import { Link } from "gatsby";
import React from "react";
import { getIcon } from "../../utils";
import Icon from "../Icon";
import style from "./CategoryCard.moudle.scss";

const CategoryCard = ({ color, name }) => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
        <Link to="/">
          <div
            className="w-full h-60 relative"
            style={{ backgroundColor: color }}
          >
            <div className="w-full h-full card absolute bottom-0 left-0" />
            <div class="flex items-center justify-center h-full flex-col">
              <Icon name={"unity"} icon={getIcon(name.toLowerCase())} />
              </div>
          </div>
        </Link>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;
