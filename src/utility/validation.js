import * as Yup from "yup";

export const mobileSchema = Yup.object({
  mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number")
    .required("Mobile number is required"),
});

export const otpSchema = Yup.object({
  otp: Yup.string()
    .matches(/^\d{6}$/, "OTP must be 6 digits")
    .required("OTP is required"),
});
