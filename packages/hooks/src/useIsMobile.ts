import useWindowSize from "./useWindowSize";

const useIsMobile = () => {
  const [width] = useWindowSize();
  return width <= 640;
};

export default useIsMobile;
