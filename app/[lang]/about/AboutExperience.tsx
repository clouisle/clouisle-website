"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { AboutPageTranslations, Locale } from "../../i18n/types";
import { assetUrl } from "../../seo";

type AboutExperienceProps = {
  lang: Locale;
  t: AboutPageTranslations;
};

type LoaderPhase = "loading" | "exit" | "done";

function CompanyEmblem() {
  const emblemRef = useRef<HTMLImageElement>(null);
  const spinAnimationRef = useRef<Animation | null>(null);
  const returnAnimationRef = useRef<Animation | null>(null);

  useEffect(() => {
    return () => {
      spinAnimationRef.current?.cancel();
      returnAnimationRef.current?.cancel();
    };
  }, []);

  function currentAngle(element: HTMLImageElement) {
    const transform = window.getComputedStyle(element).transform;
    if (!transform || transform === "none") return 0;
    const values = transform.match(/matrix(?:3d)?\(([^)]+)\)/)?.[1].split(",").map(Number);
    if (!values || values.length < 2 || Number.isNaN(values[0]) || Number.isNaN(values[1])) return 0;
    return Math.atan2(values[1], values[0]) * (180 / Math.PI);
  }

  function handlePointerEnter() {
    const element = emblemRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const angle = currentAngle(element);
    returnAnimationRef.current?.cancel();
    returnAnimationRef.current = null;
    element.style.transform = `rotate(${angle}deg)`;
    spinAnimationRef.current?.cancel();
    spinAnimationRef.current = element.animate(
      [
        { transform: `rotate(${angle}deg)` },
        { transform: `rotate(${angle + 360}deg)` },
      ],
      { duration: 1400, easing: "linear", iterations: Infinity },
    );
  }

  function handlePointerLeave() {
    const element = emblemRef.current;
    if (!element) return;

    const angle = currentAngle(element);
    spinAnimationRef.current?.cancel();
    spinAnimationRef.current = null;
    element.style.transform = `rotate(${angle}deg)`;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || Math.abs(angle) < 0.5) {
      element.style.transform = "";
      return;
    }

    const returnAnimation = element.animate(
      [
        { transform: `rotate(${angle}deg)` },
        { transform: "rotate(0deg)" },
      ],
      {
        duration: Math.max(320, Math.min(760, Math.abs(angle) * 2.2)),
        easing: "cubic-bezier(.16,1,.3,1)",
        fill: "forwards",
      },
    );
    returnAnimationRef.current = returnAnimation;
    returnAnimation.onfinish = () => {
      returnAnimation.cancel();
      returnAnimationRef.current = null;
      element.style.transform = "";
    };
  }

  return (
    <span
      className="about-company-emblem-interactive"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <Image
        ref={emblemRef}
        className="about-company-emblem-svg"
        src={assetUrl("clouisle-mark.svg")}
        alt=""
        aria-hidden="true"
        width={100}
        unoptimized
      />
    </span>
  );
}

// Keep the loader on the source logo geometry so the reveal draws its filled arms, not an outline.
const LOADER_MAIN_PATH =
  "m526.9766,91.58878c-0.79782,74.1538 0,148.29031 2.39585,222.40952c1.45428,-0.30643 2.2521,-1.12935 2.39585,-2.47122c25.47264,-25.0359 50.62902,-50.57345 75.46916,-76.60772c1.19792,-37.05837 1.59803,-74.12662 1.19792,-111.20476c10.3812,0 20.7648,0 31.146,0c0.40011,40.37227 0,80.73465 -1.19792,121.08963c-35.95207,39.1416 -72.28987,77.85816 -109.01101,116.14719c-3.17689,36.67039 -3.17689,73.73864 0,111.20476c1.45428,-0.30643 2.2521,-1.12935 2.39585,-2.47122c65.40181,-68.69736 131.28759,-137.06604 197.65732,-205.111c-8.58192,-32.11346 1.40157,-55.59002 29.94808,-70.42968c35.76519,-5.89632 56.52999,9.34367 62.29201,45.71751c-0.48875,20.37271 -9.27432,35.61271 -26.35431,45.71751c-15.09144,4.11458 -30.26433,4.93749 -45.52108,2.47122c-66.76745,68.45518 -133.05333,137.23903 -198.85525,206.34661c-1.30094,0.14827 -2.09876,0.97119 -2.39585,2.47122c57.89084,3.28425 115.39115,3.28425 172.50094,0c23.88659,-39.94228 47.44495,-80.30466 70.67747,-121.08963c11.31079,-10.52244 20.89418,-8.87414 28.75016,4.94243c20.45334,39.322 42.41367,77.62586 65.88577,114.91158c10.66391,0.32126 21.04511,1.96709 31.146,4.94243c31.47423,34.93806 63.81816,69.12241 97.03178,102.5555c4.65273,6.79338 7.44869,14.20703 8.38546,22.24095c0.41688,5.41938 -1.18115,9.95159 -4.79169,13.59169c-78.05907,4.08245 -156.32418,4.90537 -234.79294,2.47122c-36.41926,-37.97766 -73.15717,-75.45861 -110.20893,-112.44037c-41.11751,-2.87155 -82.64472,-3.28425 -124.58401,-1.23561c1.30334,1.77186 2.90137,3.00747 4.79169,3.70683c65.0041,68.28466 130.48977,136.24313 196.4594,203.87539c57.21521,-8.55288 79.17553,15.74906 65.88577,72.9009c-21.51949,24.57872 -45.87806,28.28555 -73.07331,11.12048c-5.33555,-6.3362 -9.72953,-13.33716 -13.17715,-21.00534c-1.2099,-13.30503 -1.2099,-26.4865 0,-39.53947c-64.70462,-69.62159 -130.5904,-137.99275 -197.65732,-205.111c-0.67802,-1.94979 -1.87595,-3.59809 -3.59377,-4.94243c-1.98616,44.90448 -1.58605,89.38638 1.19792,133.44571c37.52135,36.64073 73.85676,74.53437 109.01101,113.67597c1.59803,72.4882 1.59803,144.97888 0,217.46708c-4.91867,9.37085 -12.50392,12.25229 -22.76054,8.64926c-40.4898,-40.52301 -79.62116,-82.12101 -117.39647,-124.79645c0.79782,-63.44849 0,-126.87722 -2.39585,-190.2837c-1.45428,0.30643 -2.2521,1.12935 -2.39585,2.47122c-24.67243,26.6842 -49.82881,53.04467 -75.46916,79.07894c-1.99574,37.09544 -1.59563,74.16369 1.19792,111.20476c29.25328,16.16176 36.84093,40.05101 22.76054,71.66529c-25.71462,28.44371 -52.06893,29.26662 -79.06293,2.47122c-16.63197,-31.91082 -9.84453,-56.62299 20.36469,-74.13651c1.99574,-41.16306 3.19366,-82.34836 3.59377,-123.56084c36.81937,-37.56497 73.15717,-75.45861 109.01101,-113.67597c2.78158,-37.46612 3.18168,-75.35729 1.19792,-113.67597c-1.71782,1.34434 -2.91575,2.99264 -3.59377,4.94243c-66.20203,67.04906 -132.0878,134.59483 -197.65732,202.63978c1.04938,13.09004 1.04938,26.26904 0,39.53947c-10.27818,27.74929 -29.84266,38.86977 -58.69824,33.36143c-35.59509,-18.11896 -43.18273,-44.88965 -22.76054,-80.31455c6.14295,-5.5034 12.93038,-10.03561 20.36469,-13.59169c12.89924,-1.24796 25.67868,-1.24796 38.33354,0c66.03432,-68.52437 132.3178,-136.48284 198.85525,-203.87539c1.30094,-0.14827 2.09876,-0.97119 2.39585,-2.47122c-41.91533,-3.2793 -83.44493,-3.2793 -124.58401,0c-35.38905,37.74042 -71.32674,75.2189 -107.81309,112.44037c-77.4649,1.6483 -154.9322,1.6483 -232.3971,0c-11.29162,-9.8824 -12.48955,-21.00287 -3.59377,-33.36143c35.22134,-36.74452 70.76132,-72.98739 106.61516,-108.73354c66.30505,0.82292 132.58853,0 198.85525,-2.47122c-0.29708,-1.50003 -1.0949,-2.32294 -2.39585,-2.47122c-27.27671,-26.08122 -53.63102,-53.67483 -79.06293,-82.78576c-16.75176,-1.23561 -33.52268,-1.64583 -50.31277,-1.23561c0,-9.88487 0,-19.76973 0,-29.6546c20.77918,-0.41022 41.54398,0 62.29201,1.23561c36.73551,37.89117 73.47342,75.78481 110.20893,113.67597c40.75335,2.05852 81.48273,1.64583 122.18816,-1.23561c-66.65245,-69.98486 -133.73614,-139.58915 -201.25109,-208.81782c-21.66324,7.93013 -41.23012,4.22331 -58.69824,-11.12048c-18.69,-31.38445 -13.4982,-57.33223 15.573,-77.84333c29.87381,-9.24235 51.83414,0.22982 65.88577,28.41899c1.09251,14.09582 1.09251,28.09774 0,42.01069c65.56952,68.04496 131.4553,135.59073 197.65732,202.63978c0.67802,1.94979 1.87595,3.59809 3.59377,4.94243c1.98376,-38.31869 1.58365,-76.20986 -1.19792,-113.67597c-37.38958,-36.50729 -73.72738,-74.40093 -109.01101,-113.67597c-1.19792,-82.3706 -1.59803,-164.74367 -1.19792,-247.12168c19.18354,-0.41022 38.35031,0 57.50031,1.23561c29.31318,28.99232 57.26312,59.05961 83.85462,90.19941z";

const LOADER_CUTOUT_PATHS = [
  {
    className: "about-loader-logo-face about-loader-logo-face--north",
    d: "m421.55936,24.86592c25.55649,24.71217 50.31277,50.24725 74.27124,76.60772c0.79303,71.26495 -0.00479,142.10732 -2.39585,212.52465c-25.55649,-24.71217 -50.31277,-50.24725 -74.27124,-76.60772c-0.77865,-71.02277 0.02156,-141.86515 2.39585,-212.52465z",
    fill: "#f9f9f9",
  },
  {
    className: "about-loader-logo-face about-loader-logo-face--east",
    d: "m802.49893,415.31819c17.11113,25.36951 33.08424,51.72998 47.91693,79.07894c-31.11486,2.88144 -62.26086,3.29413 -93.43801,1.23561c16.10727,-26.23197 31.28257,-53.00266 45.52108,-80.31455z",
    fill: "#f5f5f3",
  },
  {
    className: "about-loader-logo-face about-loader-logo-face--west",
    d: "m124.47441,528.99416c61.10606,-0.81797 121.80243,0.00494 182.08432,2.47122c-26.35431,25.53508 -51.9108,51.89555 -76.66708,79.07894c-60.30824,0.81797 -120.2044,-0.00494 -179.68848,-2.47122c24.75628,-26.36047 49.51496,-52.71847 74.27124,-79.07894z",
    fill: "#f8f8f8",
  },
  {
    className: "about-loader-logo-face about-loader-logo-face--east-wide",
    d: "m900.72863,528.99416c24.69159,27.11666 50.24809,53.47713 76.66708,79.07894c-60.28189,2.46627 -120.97826,3.28919 -182.08432,2.47122c-25.53493,-26.25421 -51.09142,-52.61468 -76.66708,-79.07894c60.28189,-2.46627 120.97826,-3.28919 182.08432,-2.47122z",
    fill: "#f8f8f8",
  },
  {
    className: "about-loader-logo-face about-loader-logo-face--south",
    d: "m531.76829,726.69151c24.67243,26.6842 49.82881,53.04467 75.46916,79.07894c1.59803,54.36677 1.59803,108.73354 0,163.10031c-26.43816,-26.85718 -52.39476,-54.04057 -77.86501,-81.55016c-0.79303,-53.97138 0.00719,-107.51276 2.39585,-160.6291z",
    fill: "#f8f8f8",
  },
] as const;

const LOADER_DETAIL_PATHS = [
  { id: "svg_6", d: "m608.43537,0.15376c10.3812,0 20.7648,0 31.146,0c0,10.70778 0,21.41804 0,32.12582c-10.3812,0 -20.7648,0 -31.146,0c0,-10.70778 0,-21.41804 0,-32.12582z", fill: "#575759" },
  { id: "svg_8", d: "m610.83122,2.62497c8.78557,0 17.56874,0 26.35431,0c0,9.06195 0,18.12143 0,27.18339c-8.78557,0 -17.56874,0 -26.35431,0c0,-9.06195 0,-18.12143 0,-27.18339z", fill: "#000000" },
  { id: "svg_12", d: "m421.55936,24.86592c-2.37428,70.6595 -3.1745,141.50188 -2.39585,212.52465c-3.18648,-71.26001 -3.18648,-142.9253 0,-214.99587c1.45428,0.30643 2.2521,1.12935 2.39585,2.47122z", fill: "#d9dadb" },
  { id: "svg_14", d: "m608.43537,61.93418c10.3812,0 20.7648,0 31.146,0c0,10.70778 0,21.41804 0,32.12582c-10.3812,0 -20.7648,0 -31.146,0c0,-10.70778 0,-21.41804 0,-32.12582z", fill: "#464646" },
  { id: "svg_16", d: "m610.83122,64.40539c8.78557,0 17.56874,0 26.35431,0c0,9.06195 0,18.12143 0,27.18339c-8.78557,0 -17.56874,0 -26.35431,0c0,-9.06195 0,-18.12143 0,-27.18339z", fill: "#000000" },
  { id: "svg_18", d: "m526.9766,91.58878c1.59803,73.31359 3.19366,146.62471 4.79169,219.9383c-0.14375,1.34187 -0.94157,2.16479 -2.39585,2.47122c-2.39585,-74.11921 -3.19366,-148.25571 -2.39585,-222.40952z", fill: "#9c9c9e" },
  { id: "svg_20", d: "m495.8306,101.47365c2.78877,72.07057 3.18648,144.55877 1.19792,217.46708c-1.71782,-1.34434 -2.91575,-2.99264 -3.59377,-4.94243c2.39105,-70.41732 3.18887,-141.2597 2.39585,-212.52465z", fill: "#9d9d9e" },
  { id: "svg_22", d: "m244.26673,222.56327c17.14707,-0.85257 24.73472,7.384 22.76054,24.71217c-5.33315,10.77698 -13.71862,14.4838 -25.15639,11.12048c-13.16997,-13.13946 -12.37215,-25.08285 2.39585,-35.83264z", fill: "#e9e9e9" },
  { id: "svg_24", d: "m768.95708,222.56327c16.93384,-0.59062 24.51909,7.64842 22.76054,24.71217c-11.18141,16.4756 -22.36043,16.4756 -33.54185,0c-2.21137,-11.07847 1.3824,-19.3175 10.78131,-24.71217z", fill: "#ebeded" },
  { id: "svg_26", d: "m119.68272,380.72115c9.58339,0 19.16677,0 28.75016,0c0,9.88487 0,19.76973 0,29.6546c-9.58339,0 -19.16677,0 -28.75016,0c0,-9.88487 0,-19.76973 0,-29.6546z", fill: "#040303" },
  { id: "svg_28", d: "m59.78656,380.72115c10.3812,0 20.7648,0 31.146,0c0,9.88487 0,19.76973 0,29.6546c-10.3812,0 -20.7648,0 -31.146,0c0,-9.88487 0,-19.76973 0,-29.6546z", fill: "#121212" },
  { id: "svg_30", d: "m495.8306,360.95142c2.78158,37.46612 3.18168,75.35729 1.19792,113.67597c-1.71782,-1.34434 -2.91575,-2.99264 -3.59377,-4.94243c2.38626,-35.80793 3.18408,-72.05327 2.39585,-108.73354z", fill: "#9f9f9f" },
  { id: "svg_34", d: "m529.37244,360.95142c-0.78823,36.68027 0.00958,72.92561 2.39585,108.73354c-0.14375,1.34187 -0.94157,2.16479 -2.39585,2.47122c-3.17689,-37.46612 -3.17689,-74.53437 0,-111.20476z", fill: "#aaa9a9" },
  { id: "svg_36", d: "m308.95458,494.39713c1.30094,0.14827 2.09876,0.97119 2.39585,2.47122c-66.26671,2.47122 -132.5502,3.29413 -198.85525,2.47122c65.48567,-1.6483 130.97373,-3.29413 196.4594,-4.94243z", fill: "#242323" },
  { id: "svg_38", d: "m550.93506,494.39713c56.28801,2.46627 112.99051,3.28919 170.10509,2.47122c-57.10979,3.28425 -114.6101,3.28425 -172.50094,0c0.29708,-1.50003 1.0949,-2.32294 2.39585,-2.47122z", fill: "#202020" },
  { id: "svg_40", d: "m124.47441,528.99416c61.10127,-3.28425 122.59546,-3.28425 184.48017,0c-0.29708,1.50003 -1.0949,2.32294 -2.39585,2.47122c-60.28189,-2.46627 -120.97826,-3.28919 -182.08432,-2.47122z", fill: "#828182" },
  { id: "svg_42", d: "m349.68397,528.99416c41.13908,-3.2793 82.66868,-3.2793 124.58401,0c-0.29708,1.50003 -1.0949,2.32294 -2.39585,2.47122c-40.31011,-2.4638 -81.0395,-3.28672 -122.18816,-2.47122z", fill: "#a1a1a1" },
  { id: "svg_44", d: "m673.12323,528.99416c-40.35084,-0.8155 -80.28002,0.00741 -119.79232,2.47122c-1.89032,-0.69935 -3.48835,-1.93496 -4.79169,-3.70683c41.93929,-2.04864 83.4665,-1.63595 124.58401,1.23561z", fill: "#a8a8a8" },
  { id: "svg_46", d: "m900.72863,528.99416c-61.10606,-0.81797 -121.80243,0.00494 -182.08432,2.47122c-1.30094,-0.14827 -2.09876,-0.97119 -2.39585,-2.47122c61.88471,-3.28425 123.3789,-3.28425 184.48017,0z", fill: "#8a8a89" },
  { id: "svg_52", d: "m495.8306,662.43987c0.78823,-36.68027 -0.00958,-72.92561 -2.39585,-108.73354c0.67802,-1.94979 1.87595,-3.59809 3.59377,-4.94243c1.98376,38.31869 1.58365,76.20986 -1.19792,113.67597z", fill: "#a3a4a4" },
  { id: "svg_54", d: "m531.76829,553.70633c-2.38866,42.40361 -3.18648,85.23721 -2.39585,128.50328c-2.78397,-44.05933 -3.18408,-88.54123 -1.19792,-133.44571c1.71782,1.34434 2.91575,2.99264 3.59377,4.94243z", fill: "#a7a8a9" },
  { id: "svg_56", d: "m50.20318,608.0731c59.48407,2.46627 119.38023,3.28919 179.68848,2.47122c-60.30345,3.28425 -120.99743,3.28425 -182.08432,0c0.29708,-1.50003 1.0949,-2.32294 2.39585,-2.47122z", fill: "#393939" },
  { id: "svg_58", d: "m977.39571,608.0731c1.30094,0.14827 2.09876,0.97119 2.39585,2.47122c-61.88471,3.28425 -123.3789,3.28425 -184.48017,0c61.10606,0.81797 121.80243,-0.00494 182.08432,-2.47122z", fill: "#585959" },
  { id: "svg_62", d: "m241.87088,763.75976c18.36177,-2.06099 26.74723,6.17804 25.15639,24.71217c-11.06162,16.43853 -22.24064,16.43853 -33.54185,0c-1.9598,-9.96148 0.83615,-18.19804 8.38546,-24.71217z", fill: "#edeceb" },
  { id: "svg_64", d: "m768.95708,763.75976c13.76893,-1.56675 21.75428,4.61129 23.95846,18.53413c-6.30826,18.30925 -17.08957,22.01607 -32.34393,11.12048c-6.09024,-12.69958 -3.29668,-22.58445 8.38546,-29.6546z", fill: "#ebeae9" },
  { id: "svg_66", d: "m493.43475,709.39299c0.14375,-1.34187 0.94157,-2.16479 2.39585,-2.47122c2.39585,63.40648 3.19366,126.8352 2.39585,190.2837c-1.59803,-62.60334 -3.19366,-125.20914 -4.79169,-187.81248z", fill: "#a2a3a3" },
  { id: "svg_68", d: "m531.76829,726.69151c-2.38866,53.11633 -3.18887,106.65772 -2.39585,160.6291c-3.18168,-53.96396 -3.18168,-108.33073 0,-163.10031c1.45428,0.30643 2.2521,1.12935 2.39585,2.47122z", fill: "#949596" },
  { id: "svg_70", d: "m392.8092,926.86007c23.03127,-0.62028 30.21881,9.67729 21.56262,30.89021c-19.36323,8.76046 -29.34672,2.58242 -29.94808,-18.53413c2.38866,-4.50503 5.18461,-8.62455 8.38546,-12.35608z", fill: "#f0eff0" },
] as const;

function LoaderLogo() {
  return (
    <svg className="about-loader-logo-svg" viewBox="0 0 1024 1024" aria-hidden="true" focusable="false">
      <defs>
        <mask id="about-loader-logo-cutouts" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} x="0" y="0" width="1024" height="1024">
          <rect width="1024" height="1024" fill="black" />
          <path d={LOADER_MAIN_PATH} fill="white" />
          {LOADER_CUTOUT_PATHS.map((cutout) => (
            <path key={cutout.className} d={cutout.d} fill="black" />
          ))}
        </mask>
        <clipPath id="about-loader-ray-north-west" clipPathUnits="userSpaceOnUse">
          <circle className="about-loader-logo-ray-clip about-loader-logo-ray-clip--north-west" cx="250" cy="240" r="390" />
        </clipPath>
        <clipPath id="about-loader-ray-north-east" clipPathUnits="userSpaceOnUse">
          <circle className="about-loader-logo-ray-clip about-loader-logo-ray-clip--north-east" cx="775" cy="240" r="390" />
        </clipPath>
        <clipPath id="about-loader-ray-south-east" clipPathUnits="userSpaceOnUse">
          <circle className="about-loader-logo-ray-clip about-loader-logo-ray-clip--south-east" cx="775" cy="788" r="390" />
        </clipPath>
        <clipPath id="about-loader-ray-south-west" clipPathUnits="userSpaceOnUse">
          <circle className="about-loader-logo-ray-clip about-loader-logo-ray-clip--south-west" cx="250" cy="788" r="390" />
        </clipPath>
      </defs>

      <g className="about-loader-logo-rays">
        <path className="about-loader-logo-ray" mask="url(#about-loader-logo-cutouts)" clipPath="url(#about-loader-ray-north-west)" d={LOADER_MAIN_PATH} />
        <path className="about-loader-logo-ray" mask="url(#about-loader-logo-cutouts)" clipPath="url(#about-loader-ray-north-east)" d={LOADER_MAIN_PATH} />
        <path className="about-loader-logo-ray" mask="url(#about-loader-logo-cutouts)" clipPath="url(#about-loader-ray-south-east)" d={LOADER_MAIN_PATH} />
        <path className="about-loader-logo-ray" mask="url(#about-loader-logo-cutouts)" clipPath="url(#about-loader-ray-south-west)" d={LOADER_MAIN_PATH} />
      </g>

      <g className="about-loader-logo-finish">
        <path className="about-loader-logo-main" mask="url(#about-loader-logo-cutouts)" d={LOADER_MAIN_PATH} fill="#050505" />
        {LOADER_DETAIL_PATHS.map((detail) => (
          <path key={detail.id} className="about-loader-logo-detail" d={detail.d} fill={detail.fill} />
        ))}
      </g>
    </svg>
  );
}

export default function AboutExperience({ lang, t }: AboutExperienceProps) {
  const [phase, setPhase] = useState<LoaderPhase>("loading");
  const [valuesOpen, setValuesOpen] = useState(false);
  const [valuesClosing, setValuesClosing] = useState(false);
  const valuesTriggerRef = useRef<HTMLButtonElement>(null);
  const valuesCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (phase === "done" && !valuesOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [phase, valuesOpen]);

  useEffect(() => {
    if (phase !== "loading") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setPhase("exit"), reducedMotion ? 40 : 3060);
    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "exit") return;

    const timer = window.setTimeout(() => setPhase("done"), 720);
    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (!valuesOpen) return;

    const previousActiveElement = document.activeElement as HTMLElement | null;
    valuesCloseRef.current?.focus();
    return () => previousActiveElement?.focus();
  }, [valuesOpen]);

  useEffect(() => {
    if (!valuesClosing) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => {
      setValuesOpen(false);
      setValuesClosing(false);
    }, reducedMotion ? 0 : 420);
    return () => window.clearTimeout(timer);
  }, [valuesClosing]);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (valuesOpen) {
        if (!valuesClosing) setValuesClosing(true);
        return;
      }
      if (phase === "loading") setPhase("exit");
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [phase, valuesClosing, valuesOpen]);

  return (
    <div className="about-page" data-loader-phase={phase}>
      {phase !== "done" && (
        <div className={`about-loader about-loader-${phase}`} role="status" aria-live="polite">
          <button
            className="about-loader-skip"
            type="button"
            onClick={() => setPhase("exit")}
            aria-label={t.loader.skip}
          >
            {t.loader.skip}
          </button>
          <span className="about-loader-status">{t.loader.loadingLabel}</span>
          <div className="about-loader-center">
            <LoaderLogo />
          </div>
        </div>
      )}

      <section
        className="about-corporate"
        aria-labelledby="about-corporate-title"
      >
        <div className="about-corporate-inner">
          <header className="about-corporate-header">
            <Link className="about-corporate-logo-link" href={`/${lang}`} aria-label={t.corporate.logoLabel}>
              <span className="about-company-emblem about-corporate-emblem">
                <CompanyEmblem />
              </span>
            </Link>
          </header>

          <div className="about-corporate-main">
            <h1 id="about-corporate-title">
              {t.corporate.heading.before}
              {t.corporate.heading.linkOneHref ? (
                <a href={t.corporate.heading.linkOneHref} target="_blank" rel="noopener noreferrer">
                  {t.corporate.heading.linkOne}
                </a>
              ) : (
                t.corporate.heading.linkOne
              )}
              {t.corporate.heading.between}
              {t.corporate.heading.linkTwoHref ? (
                <a href={t.corporate.heading.linkTwoHref} target="_blank" rel="noopener noreferrer">
                  {t.corporate.heading.linkTwo}
                </a>
              ) : (
                t.corporate.heading.linkTwo
              )}
              {t.corporate.heading.after}
            </h1>

            <ul className="about-corporate-actions">
              {t.corporate.actions.map((action) => (
                <li key={action.label}>
                  <a className="about-corporate-action" href={action.href} target="_blank" rel="noopener noreferrer">
                    {action.label}
                  </a>
                </li>
              ))}
            </ul>

            <nav className="about-corporate-links">
              <button
                ref={valuesTriggerRef}
                className="about-corporate-link-text"
                type="button"
                onClick={() => {
                  setValuesClosing(false);
                  setValuesOpen(true);
                }}
              >
                {t.corporate.values}
              </button>
              <a href="mailto:yunhai@yhnotes.com">{t.corporate.newsletter}</a>
              <a href="https://github.com/clouisle" target="_blank" rel="noopener noreferrer">{t.corporate.social}</a>
            </nav>
          </div>
        </div>
      </section>

      {valuesOpen && (
        <div
          className={`about-values-overlay${valuesClosing ? " about-values-overlay-closing" : ""}`}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget && !valuesClosing) setValuesClosing(true);
          }}
        >
          <div
            className="about-values-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-values-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <h2 id="about-values-title">
              {t.corporate.valuesContent.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
          </div>
          <button
            ref={valuesCloseRef}
            className="about-values-close"
            type="button"
            onClick={() => {
              if (!valuesClosing) setValuesClosing(true);
            }}
            aria-label={t.corporate.close}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      )}
    </div>
  );
}
