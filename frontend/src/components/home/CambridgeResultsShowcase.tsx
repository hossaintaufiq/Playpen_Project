"use client";

import { useState } from "react";
import { Award, BookOpen, CheckCircle2, TrendingUp } from "lucide-react";

interface GradeSlice {
  grade: string;
  percentage: number;
  color: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

interface ExamLevelData {
  id: string;
  title: string;
  cohort: string;
  session: string;
  centerHighlight: {
    stat: string;
    label: string;
  };
  slices: GradeSlice[];
  subjects: string[];
}

const examResultsData: ExamLevelData[] = [
  {
    id: "olevel",
    title: "O LEVEL RESULTS",
    cohort: "Class X Candidates",
    session: "May – June 2026 Examination Session",
    centerHighlight: {
      stat: "67%",
      label: "A* & A",
    },
    slices: [
      {
        grade: "A*",
        percentage: 32,
        color: "#7a0826", // Brand Maroon
        bgColor: "bg-[#7a0826]/10",
        textColor: "text-[#7a0826]",
        borderColor: "border-[#7a0826]/30",
      },
      {
        grade: "A",
        percentage: 35,
        color: "#d97706", // Amber / Gold
        bgColor: "bg-amber-500/10",
        textColor: "text-amber-700",
        borderColor: "border-amber-500/30",
      },
      {
        grade: "B",
        percentage: 19,
        color: "#1d4ed8", // Classic Navy Blue
        bgColor: "bg-blue-600/10",
        textColor: "text-blue-700",
        borderColor: "border-blue-600/30",
      },
      {
        grade: "C",
        percentage: 10,
        color: "#0284c7", // Sky Blue
        bgColor: "bg-sky-500/10",
        textColor: "text-sky-700",
        borderColor: "border-sky-500/30",
      },
      {
        grade: "Others",
        percentage: 4,
        color: "#64748b", // Slate Gray
        bgColor: "bg-slate-500/10",
        textColor: "text-slate-600",
        borderColor: "border-slate-500/30",
      },
    ],
    subjects: [
      "ENGLISH LANGUAGE",
      "BENGALI",
      "MATHEMATICS (SYLLABUS D)",
      "PHYSICS",
      "CHEMISTRY",
      "BIOLOGY",
      "ADDITIONAL MATHEMATICS",
      "ECONOMICS",
      "ACCOUNTING",
      "BUSINESS STUDIES",
      "COMPUTER SCIENCE",
      "ART & DESIGN",
    ],
  },
  {
    id: "aslevel",
    title: "AS LEVEL RESULTS",
    cohort: "Class XI Candidates",
    session: "May – June 2026 Examination Session",
    centerHighlight: {
      stat: "64%",
      label: "a & b",
    },
    slices: [
      {
        grade: "a",
        percentage: 46,
        color: "#7a0826", // Brand Maroon
        bgColor: "bg-[#7a0826]/10",
        textColor: "text-[#7a0826]",
        borderColor: "border-[#7a0826]/30",
      },
      {
        grade: "b",
        percentage: 18,
        color: "#d97706", // Amber / Gold
        bgColor: "bg-amber-500/10",
        textColor: "text-amber-700",
        borderColor: "border-amber-500/30",
      },
      {
        grade: "c",
        percentage: 15,
        color: "#1d4ed8", // Blue
        bgColor: "bg-blue-600/10",
        textColor: "text-blue-700",
        borderColor: "border-blue-600/30",
      },
      {
        grade: "Others",
        percentage: 21,
        color: "#64748b", // Slate Gray
        bgColor: "bg-slate-500/10",
        textColor: "text-slate-600",
        borderColor: "border-slate-500/30",
      },
    ],
    subjects: [
      "ENGLISH LANGUAGE",
      "MATHEMATICS",
      "FURTHER MATHEMATICS",
      "PHYSICS",
      "CHEMISTRY",
      "BIOLOGY",
      "ECONOMICS",
      "ACCOUNTING",
      "BUSINESS",
      "COMPUTER SCIENCE",
      "PSYCHOLOGY",
    ],
  },
  {
    id: "alevel",
    title: "A LEVEL RESULTS",
    cohort: "Class XII Candidates",
    session: "May – June 2026 Examination Session",
    centerHighlight: {
      stat: "42%",
      label: "A* & A",
    },
    slices: [
      {
        grade: "A*",
        percentage: 19,
        color: "#7a0826", // Brand Maroon
        bgColor: "bg-[#7a0826]/10",
        textColor: "text-[#7a0826]",
        borderColor: "border-[#7a0826]/30",
      },
      {
        grade: "A",
        percentage: 23,
        color: "#d97706", // Amber / Gold
        bgColor: "bg-amber-500/10",
        textColor: "text-amber-700",
        borderColor: "border-amber-500/30",
      },
      {
        grade: "B",
        percentage: 19,
        color: "#1d4ed8", // Classic Navy Blue
        bgColor: "bg-blue-600/10",
        textColor: "text-blue-700",
        borderColor: "border-blue-600/30",
      },
      {
        grade: "C",
        percentage: 16,
        color: "#0284c7", // Sky Blue
        bgColor: "bg-sky-500/10",
        textColor: "text-sky-700",
        borderColor: "border-sky-500/30",
      },
      {
        grade: "Others",
        percentage: 23,
        color: "#64748b", // Slate Gray
        bgColor: "bg-slate-500/10",
        textColor: "text-slate-600",
        borderColor: "border-slate-500/30",
      },
    ],
    subjects: [
      "ENGLISH LANGUAGE",
      "MATHEMATICS",
      "FURTHER MATHEMATICS",
      "PHYSICS",
      "CHEMISTRY",
      "BIOLOGY",
      "ECONOMICS",
      "ACCOUNTING",
      "BUSINESS",
      "COMPUTER SCIENCE",
      "PSYCHOLOGY",
    ],
  },
];

/**
 * Clean Donut Chart with precise slice positions and crystal-clear direct labels
 */
function DonutChart({
  slices,
  hoveredGrade,
  onHoverGrade,
  centerHighlight,
}: {
  slices: GradeSlice[];
  hoveredGrade: string | null;
  onHoverGrade: (grade: string | null) => void;
  centerHighlight: { stat: string; label: string };
}) {
  const size = 240;
  const strokeWidth = 44;
  const radius = (size - strokeWidth) / 2; // 98
  const circumference = 2 * Math.PI * radius; // ~615.75
  const center = size / 2; // 120

  let cumulative = 0;

  return (
    <div className="relative flex items-center justify-center shrink-0">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="w-[210px] h-[210px] sm:w-[240px] sm:h-[240px] select-none drop-shadow-sm"
      >
        {/* Background track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#f1f5f9"
          strokeWidth={strokeWidth}
        />

        {/* Ring Segments (Rotated from top 12 o'clock) */}
        <g transform={`rotate(-90 ${center} ${center})`}>
          {slices.map((slice) => {
            const dashLength = (slice.percentage / 100) * circumference;
            const spaceLength = circumference - dashLength;
            const strokeDashoffset = -((cumulative / 100) * circumference);
            cumulative += slice.percentage;

            const isHovered = hoveredGrade === slice.grade;
            const isFaded = hoveredGrade !== null && !isHovered;

            return (
              <circle
                key={slice.grade}
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={slice.color}
                strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                strokeDasharray={`${Number(dashLength.toFixed(2))} ${Number(spaceLength.toFixed(2))}`}
                strokeDashoffset={Number(strokeDashoffset.toFixed(2))}
                strokeLinecap="butt"
                className="cursor-pointer transition-all duration-200 ease-out"
                style={{
                  opacity: isFaded ? 0.35 : 1,
                }}
                onMouseEnter={() => onHoverGrade(slice.grade)}
                onMouseLeave={() => onHoverGrade(null)}
              />
            );
          })}
        </g>

        {/* Direct In-Slice Labels (Positioned in un-rotated coordinates) */}
        {(() => {
          let runningTotal = 0;
          return slices.map((slice) => {
            const midPercent = runningTotal + slice.percentage / 2;
            runningTotal += slice.percentage;

            // 12 o'clock is -90 degrees in standard Cartesian angles
            const angleDeg = (midPercent / 100) * 360 - 90;
            const angleRad = (angleDeg * Math.PI) / 180;
            const labelRadius = radius;

            const x = Number((center + labelRadius * Math.cos(angleRad)).toFixed(2));
            const y = Number((center + labelRadius * Math.sin(angleRad)).toFixed(2));

            const isTiny = slice.percentage < 6;
            const isMedium = slice.percentage >= 6 && slice.percentage < 12;

            return (
              <g key={`label-${slice.grade}`} className="pointer-events-none">
                <text
                  x={x}
                  y={isTiny ? y : Number((y - 5).toFixed(2))}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#ffffff"
                  className="font-black tracking-tight"
                  style={{
                    fontSize: isTiny ? "9.5px" : isMedium ? "11.5px" : "13.5px",
                    filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.5))",
                  }}
                >
                  {slice.grade}
                </text>
                {!isTiny && (
                  <text
                    x={x}
                    y={Number((y + 8).toFixed(2))}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#ffffff"
                    className="font-extrabold"
                    style={{
                      fontSize: isMedium ? "10.5px" : "12px",
                      opacity: 0.98,
                      filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.5))",
                    }}
                  >
                    {slice.percentage}%
                  </text>
                )}
              </g>
            );
          });
        })()}
      </svg>

      {/* Seamless Center Text with direct stat and label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-2 text-center">
        <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-primary leading-none">
          {centerHighlight.stat}
        </span>
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1.5 leading-tight">
          {centerHighlight.label}
        </span>
      </div>
    </div>
  );
}

export function CambridgeResultsShowcase() {
  const [hoveredGrades, setHoveredGrades] = useState<Record<string, string | null>>({});

  const setCardHoveredGrade = (cardId: string, grade: string | null) => {
    setHoveredGrades((prev) => ({ ...prev, [cardId]: grade }));
  };

  return (
    <div className="w-full">
      {/* 3-Column Responsive Grid Showing All Levels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {examResultsData.map((data) => {
          const activeGrade = hoveredGrades[data.id] || null;

          return (
            <div
              key={data.id}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-2 pb-4 mb-3 border-b border-border/50">
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-accent-hover bg-accent-soft px-2.5 py-0.5 rounded-md mb-1.5">
                      {data.cohort}
                    </span>
                    <h3 className="font-extrabold text-xl sm:text-2xl text-primary tracking-tight">
                      {data.title}
                    </h3>
                    <p className="font-serif italic text-xs sm:text-[13px] text-amber-700/90 font-medium mt-0.5">
                      {data.session}
                    </p>
                  </div>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary border border-primary/15">
                    <Award className="h-4 w-4" />
                  </div>
                </div>

                {/* Donut Chart with square center stat */}
                <div className="py-3 sm:py-4 flex justify-center">
                  <DonutChart
                    slices={data.slices}
                    hoveredGrade={activeGrade}
                    onHoverGrade={(grade) => setCardHoveredGrade(data.id, grade)}
                    centerHighlight={data.centerHighlight}
                  />
                </div>

                {/* Interactive Grade Distribution Badges */}
                <div className="mt-4 mb-5 flex flex-wrap items-center justify-center gap-1.5">
                  {data.slices.map((slice) => {
                    const isSelected = activeGrade === slice.grade;
                    return (
                      <button
                        key={slice.grade}
                        type="button"
                        onMouseEnter={() => setCardHoveredGrade(data.id, slice.grade)}
                        onMouseLeave={() => setCardHoveredGrade(data.id, null)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                          isSelected
                            ? `${slice.bgColor} ${slice.textColor} ring-2 ring-primary/25 scale-105`
                            : "bg-surface text-foreground/80 border border-border/70 hover:bg-white"
                        }`}
                      >
                        <span
                          className="h-2 w-2 rounded-full shrink-0"
                          style={{ backgroundColor: slice.color }}
                        />
                        <span>{slice.grade}:</span>
                        <span className={slice.textColor}>{slice.percentage}%</span>
                      </button>
                    );
                  })}
                </div>

                {/* Subjects Offered */}
                <div className="border-t border-border/50 pt-4">
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <BookOpen className="h-3.5 w-3.5 text-primary" />
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-primary">
                      Subjects Offered ({data.subjects.length})
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1 text-left">
                    {data.subjects.map((sub, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-1.5 text-[11px] font-semibold text-foreground/85 leading-tight"
                      >
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-xs bg-primary/70" />
                        <span className="uppercase tracking-tight">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Endorsement */}
              <div className="mt-5 pt-3.5 border-t border-border/50 flex items-center justify-between text-[11px] font-semibold text-muted-foreground">
                <span className="flex items-center gap-1 text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent-gold" />
                  Cambridge Official Center
                </span>
                <span>British Council Partner</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
