import React, { useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "../features/uislice";

const ToastContainer = () => {
  const toastRef = useRef(null);
  const dispatch = useDispatch();
  const { toast } = useSelector((state) => state.ui);

  useEffect(() => {
    if (toast.visible && toastRef.current) {
      toastRef.current.clear();
      toastRef.current.show({
        severity: toast.severity,
        summary: toast.summary,
        detail: toast.detail,
        life: 5000,
        closable: true,
      });

      dispatch(hideToast());
    }
  }, [toast, dispatch]);

  return <Toast ref={toastRef} />;
};

export default ToastContainer;
