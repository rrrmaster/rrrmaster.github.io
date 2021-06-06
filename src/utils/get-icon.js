import { ICONS } from "../constants";

const getIcon = (name) => {
  let icon;

  switch (name) {
    case "unity":
      icon = ICONS.UNITY;
      break;
    case "gatsby":
      icon = ICONS.GATSBY;
      break;
    case "math":
      icon = ICONS.MATH;
      break;
    case "algorithm":
        icon = ICONS.ALGORITHM
        break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
