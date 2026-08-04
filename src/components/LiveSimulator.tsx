"use client";

import React, { useState, useEffect } from "react";
import { Camera, Volume2, ShieldAlert, CheckCircle2, Mic, Play, RefreshCw, Radio } from "lucide-react";

export default function LiveSimulator() {
  const [activeCam, setActiveCam] = useState(1);
  const [isAudioChallengeActive, setIsAudioChallengeActive] = useState(false);
  const [activeThreatDetected, setActiveThreatDetected] = useState(true);
  const [logMessages, setLogMessages] = useState([
    { time: "02:14:02 AM", msg: "AI Camera #02 flagged motion at Rear Perimeter Gate." },
    { time: "02:14:05 AM", msg: "Command Center Specialist #408 initiated live stream verification." },
    { time: "02:14:09 AM", msg: "Threat Verified: Unauthorized individual attempting access." },
  ]);

  const cameraFeeds = [
    { id: 1, name: "Perimeter Gate (Zone A)", status: "Alerting", location: "North Fence Line" },
    { id: 2, name: "Loading Dock (Zone B)", status: "Active", location: "Rear Logistics" },
    { id: 3, name: "Main Entrance (Zone C)", status: "Normal", location: "Front Atrium" },
    { id: 4, name: "Parking Garage (Zone D)", status: "Normal", location: "Sub-level 1" },
  ];

  const handleAudioChallengeToggle = () => {
    setIsAudioChallengeActive(true);
    const newTime = new Date().toLocaleTimeString();
    setLogMessages((prev) => [
      { time: newTime, msg: "VOICE INTERVENTION ACTIVATED: Live verbal warning broadcasted on-site speaker." },
      ...prev,
    ]);

    setTimeout(() => {
      setActiveThreatDetected(false);
      const resolveTime = new Date().toLocaleTimeString();
      setLogMessages((prev) => [
        { time: resolveTime, msg: "Subject demoted threat & departed site. Security log updated." },
        ...prev,
      ]);
    }, 3500);
  };

  const handleResetDemo = () => {
    setActiveThreatDetected(true);
    setIsAudioChallengeActive(false);
    setLogMessages([
      { time: "02:14:02 AM", msg: "AI Camera #02 flagged motion at Rear Perimeter Gate." },
      { time: "02:14:05 AM", msg: "Command Center Specialist #408 initiated live stream verification." },
      { time: "02:14:09 AM", msg: "Threat Verified: Unauthorized individual attempting access." },
    ]);
  };

  return (
    <section className="py-16 bg-[#1d2c48]/5 border-y border-[#c4c4c4]/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d2c48]/10 text-[#1d2c48] font-bold text-xs uppercase tracking-wider mb-3">
            <Radio className="w-4 h-4 text-[#1d2c48]" />
            Interactive Command Center Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d2c48] tracking-tight">
            Experience Active Security in Real-Time
          </h2>
          <p className="mt-3 text-base text-[#2a2829]/80 font-normal">
            See how Secure Guard operators combine instant AI detection with live human voice intervention.
          </p>
        </div>

        {/* Console Box */}
        <div className="max-w-5xl mx-auto bg-[#1d2c48] rounded-2xl border border-white/10 shadow-2xl overflow-hidden text-white">
          {/* Header Bar */}
          <div className="bg-[#263659] px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
              <span className="font-bold text-sm tracking-wide text-gray-200">
                LIVE MONITORING NODE #SEC-8902
              </span>
              <span className="px-2.5 py-0.5 rounded bg-green-500/20 text-green-400 font-mono text-xs font-semibold">
                SYSTEM ONLINE
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-gray-300">
              <span>LATENCY: <strong>12ms</strong></span>
              <span>VERIFICATION TIME: <strong className="text-[#fecf31]">3.8s</strong></span>
              <button
                onClick={handleResetDemo}
                className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded text-xs transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Demo
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Camera Viewport (Left / Main) */}
            <div className="lg:col-span-7 bg-black p-4 relative min-h-[340px] flex flex-col justify-between">
              {/* Camera Header Status */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm text-xs font-mono">
                  <Camera className="w-4 h-4 text-[#fecf31]" />
                  <span>CAM-0{activeCam}: {cameraFeeds.find((c) => c.id === activeCam)?.name}</span>
                </div>
                <div className="flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm text-xs">
                  <span className="pulse-indicator-green" />
                  <span className="font-mono text-green-400">REC 1080P HD</span>
                </div>
              </div>

              {/* Simulated Feed Graphics */}
              <div className="my-auto py-8 text-center relative">
                {activeThreatDetected ? (
                  <div className="inline-block relative">
                    <div className="w-64 h-40 border-2 border-red-500 border-dashed rounded-lg flex flex-col items-center justify-center bg-red-500/10 p-4 mx-auto animate-pulse">
                      <ShieldAlert className="w-10 h-10 text-red-500 mb-2" />
                      <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                        UNAUTHORIZED ACCESS DETECTED
                      </span>
                      <span className="text-[11px] text-gray-300 font-mono mt-1">
                        Confidence: 99.4%
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-64 h-40 border border-green-500/50 rounded-lg flex flex-col items-center justify-center bg-green-500/5 p-4 mx-auto">
                    <CheckCircle2 className="w-12 h-12 text-green-400 mb-2" />
                    <span className="bg-green-600 text-white text-xs font-bold px-2.5 py-0.5 rounded">
                      ZONE SECURED & CLEAR
                    </span>
                    <span className="text-[11px] text-gray-300 font-mono mt-1">
                      No active intrusion
                    </span>
                  </div>
                )}
              </div>

              {/* Camera Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-white/10 z-10">
                {cameraFeeds.map((cam) => (
                  <button
                    key={cam.id}
                    onClick={() => setActiveCam(cam.id)}
                    className={`px-2 py-1.5 rounded text-left text-xs transition-all ${
                      activeCam === cam.id
                        ? "bg-[#fecf31] text-[#1d2c48] font-bold shadow"
                        : "bg-white/10 text-gray-300 hover:bg-white/20"
                    }`}
                  >
                    <div className="truncate font-semibold">Cam 0{cam.id}</div>
                    <div className="text-[10px] opacity-80 truncate">{cam.location}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Controls & Console Logs (Right Column) */}
            <div className="lg:col-span-5 bg-[#1d2c48] p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4 flex items-center gap-2">
                  <Mic className="w-4 h-4 text-[#fecf31]" />
                  Active Intervention Controls
                </h3>

                {/* Voice intervention simulator button */}
                <div className="bg-[#263659] p-4 rounded-xl border border-white/10 mb-6">
                  <p className="text-xs text-gray-300 mb-3">
                    Trigger live audio challenge to deter trespassers on-site:
                  </p>
                  <button
                    onClick={handleAudioChallengeToggle}
                    disabled={isAudioChallengeActive}
                    className={`w-full py-3 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      isAudioChallengeActive
                        ? "bg-green-600 text-white cursor-default"
                        : "bg-[#fecf31] hover:bg-[#e8bb1e] text-[#1d2c48] shadow-lg"
                    }`}
                  >
                    <Volume2 className="w-5 h-5" />
                    <span>
                      {isAudioChallengeActive
                        ? "Live Voice Broadcast Active!"
                        : "Issue Live Voice Deterrence"}
                    </span>
                  </button>
                </div>

                {/* Incident Activity Stream */}
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Live Event Log Stream
                </h4>
                <div className="space-y-2 font-mono text-xs max-h-48 overflow-y-auto pr-1">
                  {logMessages.map((log, index) => (
                    <div
                      key={index}
                      className="p-2 rounded bg-white/5 border border-white/5 text-gray-200 flex gap-2"
                    >
                      <span className="text-[#fecf31] shrink-0">{log.time}</span>
                      <span>{log.msg}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Security Note */}
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-gray-300 flex items-center justify-between">
                <span>Dispatch Protocol: <strong>Automated 911 Link</strong></span>
                <span className="text-[#fecf31] font-semibold">24/7 Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
