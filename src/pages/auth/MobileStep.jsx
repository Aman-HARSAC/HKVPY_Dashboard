import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useFormik } from "formik";
import { mobileSchema } from "../../utility/validation";
import { sendOtp } from "../../api/api";

export default function MobileStep({ onSuccess }) {
  const formik = useFormik({
    initialValues: { mobile: "" },
    validationSchema: mobileSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const payload = {
          Mobileno: values.mobile,
        };

        const res = await sendOtp(payload);

        // ✅ PASS BOTH mobile + txn
        onSuccess({
          mobile: values.mobile,
          txn: res.data.message.result.txn,
        });
      } catch (err) {
        console.error("Send OTP failed", err);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className=" flex flex-col gap-4 bg-white rounded-xl shadow-lg px-6 py-8 w-full max-w-md min-h-[40vh]">
      <h2 className="text-2xl font-semibold">Login</h2>

      <p className="text-gray-500 mb-4">Enter your mobile number to receive a login code</p>

      <InputText name="mobile" placeholder="Enter mobile number" className="w-full" maxLength={10} value={formik.values.mobile} onChange={formik.handleChange} />

      {formik.errors.mobile && <small className="text-red-500 block -mt-2">{formik.errors.mobile}</small>}

      <Button label={formik.isSubmitting ? "Sending OTP..." : "Send OTP"} className="w-full mt-3" type="submit" disabled={formik.isSubmitting} />

      <div className="mt-4 text-xs md:text-sm text-gray-500 bg-gray-100 space-y-2 border border-gray-200/80 p-3 rounded-2xl leading-8">
        <p>
          <span className="bg-white p-2 rounded-lg border border-gray-200/80">📩</span> You’ll receive a 6-digit OTP via SMS
        </p>
        <p>
          <span className="bg-white p-2 rounded-lg border border-gray-200/80">⏱️</span> OTP expires in 10 minutes
        </p>
      </div>
    </form>
  );
}
