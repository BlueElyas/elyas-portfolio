import React, { createContext, useContext, useState } from "react";

const AnimationContext = createContext();

const AnimationContextProvider = ({ children }) => {
  const [showTitle, setShowTitle] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  setTimeout(() => {
    setShowTitle(false);
  }, 3400);

  setTimeout(() => {
    setShowLoading(false);
  }, 4400);

  return (
    <AnimationContext.Provider
      value={{ showTitle, showLoading, setShowLoading, setShowTitle }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  return context;
};

export default AnimationContextProvider;
