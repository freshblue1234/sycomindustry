"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[800px] text-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Rwanda's Premier AI Innovation Hub
              </h1>
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Transforming businesses across Africa with Sybot, our intelligent conversational AI that understands local contexts, languages, and business needs.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <a
                  href="https://sybotai.it.com/"
                  className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Experience Sybot Demo
                </a>
                <Link
                  href="/contact"
                  className="rounded-sm bg-black/20 px-8 py-4 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="277"
            cy="63"
            r="225"
            fill="url(#paint0_linear_25:217)"
          />
          <circle
            cx="17.9997"
            cy="182"
            r="18"
            fill="url(#paint1_radial_25:217)"
          />
          <circle
            cx="76.9997"
            cy="288"
            r="34"
            fill="url(#paint2_radial_25:217)"
          />
          <circle
            cx="325.486"
            cy="302.87"
            r="180"
            transform="rotate(-37.6852 325.486 302.87)"
            fill="url(#paint3_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="184.521"
            cy="315.521"
            r="132.862"
            transform="rotate(114.874 184.521 315.521)"
            stroke="url(#paint4_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="356"
            cy="290"
            r="179.5"
            transform="rotate(-30 356 290)"
            stroke="url(#paint5_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="191.659"
            cy="302.659"
            r="133.362"
            transform="rotate(133.319 191.659 302.659)"
            fill="url(#paint6_linear_25:217)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:217"
              x1="-54.5003"
              y1="-178"
              x2="222"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"} />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0"
              />
            </linearGradient>
            <radialGradient
              id="paint1_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
            >
              <stop
                offset="0.145833"
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0"
              />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0.08"
              />
            </radialGradient>
            <radialGradient
              id="paint2_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
            >
              <stop
                offset="0.145833"
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0"
              />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0.08"
              />
            </radialGradient>
            <linearGradient
              id="paint3_linear_25:217"
              x1="226.775"
              y1="-66.1548"
              x2="292.157"
              y2="351.421"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0"
              />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0.31"
              />
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:217"
              x1="184.521"
              y1="182.159"
              x2="184.521"
              y2="448.882"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0"
              />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0.15"
              />
            </linearGradient>
            <linearGradient
              id="paint5_linear_25:217"
              x1="356"
              y1="110"
              x2="356"
              y2="470"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0"
              />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0.3"
              />
            </linearGradient>
            <linearGradient
              id="paint6_linear_25:217"
              x1="118.524"
              y1="29.2497"
              x2="166.965"
              y2="338.63"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0"
              />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0.31"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#paint0_linear_25:218)"
          />
          <path
            d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
            stroke="url(#paint1_linear_25:218)"
          />
          <path
            d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
            stroke="url(#paint2_linear_25:218)"
          />
          <path
            d="M-98.1107 72.3303C-70.3401 66.4798 -2.60351 64.9086 46.1783 105.427C107.155 156.076 125.59 162.093 160.333 166.607C195.076 171.12 233.718 183.657 258.889 212.24"
            stroke="url(#paint3_linear_25:218)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:218"
              x1="184.389"
              y1="69.2405"
              x2="184.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0"
              />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0.5"
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_25:218"
              x1="156.389"
              y1="69.2405"
              x2="156.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0"
              />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0.5"
              />
            </linearGradient>
            <linearGradient
              id="paint2_linear_25:218"
              x1="125.389"
              y1="69.2405"
              x2="125.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0"
              />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0.5"
              />
            </linearGradient>
            <linearGradient
              id="paint3_linear_25:218"
              x1="80.3893"
              y1="69.2405"
              x2="80.3893"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0"
              />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#4A6CF7" : "#4A6CF7"}
                stopOpacity="0.5"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;