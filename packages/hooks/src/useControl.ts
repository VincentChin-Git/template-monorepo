import { useState } from "react";

interface IControl {
  loading: boolean;
  isBlock: boolean;
  isConfirm: boolean;
}

// Use for controlling page loading & data fetching
function useControl(additionalState?: IControl) {
  const [control, setControl] = useState<IControl>({
    loading: true, // initial loading
    isBlock: false, // calling api
    isConfirm: false, // confirmation before submit
    ...additionalState, // more custom state
  });
  return { control, setControl };
}

export default useControl;
