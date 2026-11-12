import { useState } from "react";
import MobileStep from "./MobileStep";
import OtpStep from "./OtpStep";
import LoginVideo from "../../assets/TreeGrowing.mp4";
import Logo1 from "../../assets/hry-logo.png";
import Logo3 from "../../assets/harsac-logo.png";

export default function Login() {
  const [step, setStep] = useState(1);
  const [otpData, setOtpData] = useState(null);

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={LoginVideo} type="video/mp4" />
      </video>

      {/* Black Transparent Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="flex justify-between items-center px-4 md:px-8 py-4">

          <img
            src={Logo1}
            alt="Logo"
            className="h-14 md:h-20 w-auto object-contain"
          />

          <h1 className="text-white text-sm md:text-5xl text-center font-bold tracking-wide leading-snug">
              हरियाणा किसान वृक्ष प्रोत्साहन योजना    {/* Haryana Kisan Virkh Protsahan Yojana */}
          </h1>

          <img
            src={Logo3}
            alt="Logo"
            className="h-14 md:h-20 w-auto rounded-lg object-contain"
          />
          
        </div>
      </div>

      {/* Main Login Card */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-2 md:px-4 py-24">


        <div className="grid md:grid-cols-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden w-full max-w-5xl shadow-2xl">

          {/* Left Side */}
          <div className="flex items-center justify-center p-6 md:p-10">

            {step === 1 ? (
              <MobileStep
                onSuccess={(data) => {
                  setOtpData(data);
                  setStep(2);
                }}
              />
            ) : (
              <OtpStep
                mobile={otpData.mobile}
                txn={otpData.txn}
                onBack={() => setStep(1)}
              />
            )}

          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center justify-center p-6">

            <video
              className="w-full max-w-md rounded-2xl shadow-2xl border border-white/20"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={LoginVideo} type="video/mp4" />
            </video>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="py-4 px-4">

          <h1 className="text-white text-center text-sm md:text-base tracking-wide">
            Copyright © 2025 Developed by HARSAC. All rights reserved.
          </h1>

        </div>
      </div>

    </div>
  );
}