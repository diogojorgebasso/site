import React, { useEffect, useState, useContext } from "react";
import semverSatisfies from "semver/functions/satisfies";
import { firebase } from "./firebase";

const FlagsContext = React.createContext({});
const remoteConfig = firebase.remoteConfig();

// For development only
remoteConfig.settings = {
  minimumFetchIntervalMillis: 3600000,
};

export function useFlags() {
  return useContext(FlagsContext);
}

const FlagsProvider = ({ defaults, children }) => {
  const [flags, setFlags] = useState(defaults);

  useEffect(() => {
    remoteConfig.defaultConfig = defaults;

    remoteConfig
      .fetchAndActivate()
      .then((activated) => {
        if (!activated) console.log("not activated");
        return remoteConfig.getAll();
      })
      .then((remoteFlags) => {
        const newFlags = {
          ...flags,
        };

        for (const [key, config] of Object.entries(remoteFlags)) {
          const appVer = process.env.REACT_APP_VERSION;
          newFlags[key] = semverSatisfies(appVer, config.asString());
        }

        setFlags(newFlags);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <FlagsContext.Provider value={flags}>{children}</FlagsContext.Provider>
  );
};

export default FlagsProvider;
