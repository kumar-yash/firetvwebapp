import configDev from "./configDev";
import configProd from "./configProd";

const getConfig = () => {
  const buildEnv = process.env.NODE_ENV;
  if (buildEnv === "development") {
    return configDev;
  } else if (buildEnv === "production") {
    return configProd;
  }
};

export default getConfig();
