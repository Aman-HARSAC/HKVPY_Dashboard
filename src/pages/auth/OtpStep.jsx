import { Button } from "primereact/button";
import { useFormik } from "formik";
import { otpSchema } from "../../utility/validation";
import { useEffect, useState } from "react";
import { verifyOtp, sendOtp } from "../../api/api";
import { useDispatch } from "react-redux";
import { logIn } from "../../features/authslice";

export default function OtpStep({ mobile, txn, onBack }) {
  const dispatch = useDispatch();

  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  const formik = useFormik({
    initialValues: { otp: "" },
    validationSchema: otpSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const payload = {
          Mobileno: mobile,
          OTP: values.otp,
          Txn: txn,
        };

        const res = await verifyOtp(payload);

        if (res.data.message.status === "Successfull") {
          const apiUser = res.data.message.result[0];

          dispatch(
            logIn({
              user: apiUser,
              token: apiUser.loginTxnID,
            }),
          );
        }
      } catch (err) {
        console.error("Verify OTP failed", err);
      } finally {
        setSubmitting(false);
      }
    },
  });

  /* Countdown */
  useEffect(() => {
    if (!isResendDisabled) return;

    if (timer === 0) {
      setIsResendDisabled(false);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, isResendDisabled]);

  const handleResendOtp = async () => {
    try {
      await sendOtp({ Mobileno: mobile });
      setTimer(60);
      setIsResendDisabled(true);
    } catch (err) {
      console.error("Resend OTP failed", err);
    }
  };

  const formatTime = (sec) => `00:${sec < 10 ? `0${sec}` : sec}`;

  return (
    <form
      className=" flex flex-col gap-4 bg-white rounded-xl shadow-lg px-6 py-12 w-full max-w-md min-h-[40vh] relative"
      onSubmit={formik.handleSubmit}
    >
      <i
        onClick={onBack}
        className="pi pi-angle-left text-2xl! text-gray-400 hover:text-gray-800 absolute left-2 top-2 cursor-pointer"
      />

      <h2 className="text-xl font-semibold">Enter your login code</h2>

      <p className="text-gray-500 mb-4 text-sm">
        We've sent a 6-digit code to <span className="font-bold">{mobile}</span>
      </p>

      <input
        type="text"
        name="otp"
        maxLength={6}
        className="tracking-[0.5em] text-center text-2xl border rounded-lg w-full py-3"
        value={formik.values.otp}
        onChange={formik.handleChange}
      />

      {formik.errors.otp && (
        <small className="text-red-500 block -mt-2">{formik.errors.otp}</small>
      )}

      <Button
        label={formik.isSubmitting ? "Verifying..." : "Login"}
        className="w-full mt-3"
        type="submit"
        disabled={formik.isSubmitting}
      />

      {isResendDisabled ? (
        <Button
          label={`Resend OTP: ${formatTime(timer)}`}
          className="w-full mt-3"
          disabled
          severity="secondary"
        />
      ) : (
        <Button
          label="Resend OTP"
          className="w-full mt-3"
          onClick={handleResendOtp}
          type="button"
          outlined
        />
      )}

      <div className="mt-4 text-xs md:text-sm text-gray-500 bg-gray-100 space-y-2 border border-gray-200/80 p-3 rounded-2xl leading-8">
        <p>
          <span className="bg-white p-2 rounded-lg border border-gray-200/80">
            ⏱️
          </span>{" "}
          OTP expires in 10 minutes
        </p>

        <p>
          Wrong Mobile No?{" "}
          <span
            className="cursor-pointer underline text-blue-500"
            onClick={onBack}
          >
            Edit mobile number
          </span>
        </p>
      </div>
    </form>
  );
}
