import type { NextPage } from "next";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Home: NextPage = () => {
  const textRef = useRef(null);
  useEffect(() => {
    //const tl = gsap.timeline({ repeat: -1, repeatDelay: 1});
    // tl.to(textRef.current, {
    //   textShadow: "5px 5px 5px yellow",
    //   duration: 5,
    // });
    // tl.to(textRef.current, {
    //   textShadow: "5px 5px 5px #b0c0f8",
    //   duration: 5,
    //   top:50
    // });
  }, []);
  const CircleIcon: React.FC<{ thumbnail_url: string; width: number }> = ({
    thumbnail_url,
    width,
  }) => {
    return (
      <div
        style={{
          width: width,
          height: width,
          border: "1px solid white",
          backgroundSize: `${width}px ${width}px`,
          backgroundImage: `url(${thumbnail_url}), url('/images/petbottle_cap.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          display: "inline-block",
          borderRadius: "50%",
          margin: 2,
        }}
      ></div>
    );
  };
  const teams = [
    {
      theme: "王座は守り抜く",
      teamName: "早稲田大学/紺碧",
      iconId: 162,
      backgroundColor: "#9a071b",
      result: '春windリーグ優勝'
    },
    {
      theme: "全員一丸",
      teamName: "横浜国立大学みなと",
      iconId: 57,
      backgroundColor: "#034bbd",
      result: '春shineリーグ優勝'
    },
    {
      theme: "悲願の王座へ",
      teamName: "横浜国立大学ときわ",
      iconId: 57,
      backgroundColor: "#034bbd",
      result: '春windリーグ2位'
    },
    {
      theme: "切磋琢磨",
      teamName: "横浜国立大学みらい",
      iconId: 57,
      backgroundColor: "#034bbd",
      result: '春shineリーグ2位'
    },
    {
      theme: "狙うは優勝のみ",
      teamName: "城東シャークス",
      iconId: 232,
      backgroundColor: "#0000bd",
      result: '春windリーグ3位'
    },
    {
      theme: "挑戦",
      teamName: "三田キャップ投げクラブ",
      iconId: 106,
      backgroundColor: "#021664",
      result: '春shineリーグ3位'
    },
    {
      theme: "虎視眈々",
      teamName: "青山学院大学",
      iconId: 239,
      backgroundColor: "#059c8b",
      result: '春windリーグ4位'
    },
    {
      theme: "",
      teamName: "早稲田大/臙脂",
      iconId: 162,
      backgroundColor: "#9a071b",
      result: '春whineリーグ4位'
    },
    {
      theme: "一戦必勝",
      teamName: "一橋大学/短冊",
      iconId: 58,
      backgroundColor: "#b01030",
      result: '春windリーグ5位'
    },
    {
      theme: "",
      teamName: "生田農工大",
      iconId: 61,
      backgroundColor: "#5e065e",
      result: '春shineリーグ5位'
    },
    {
      theme: "有終完美",
      teamName: "目白蓋式野球倶楽部",
      iconId: 73,
      backgroundColor: "#79caff",
      result: '春windリーグ6位'
    },
    {
      theme: "",
      teamName: "Eintracht/上智連合",
      iconId: 202,
      backgroundColor: "#de5737",
      result: '春shineリーグ6位'
    },
    {
      theme: "全員で頂点へ",
      teamName: "東京大学",
      iconId: 155,
      backgroundColor: "#9ad7e3",
      result: '春windリーグ7位'
    },
    {
      theme: "",
      teamName: "専修/千葉連合",
      iconId: 251,
      backgroundColor: "black",
      result: '春shineリーグ7位'
    },
    {
      theme: "新風/育成",
      teamName: "東京世田谷キャッパーズ",
      iconId: 65,
      backgroundColor: "#0f7108",
      result: '春windリーグ8位'
    },
    {
      theme: "",
      teamName: "一橋大学/アルパコラ",
      iconId: 58,
      backgroundColor: "#b01030",
      result: '春shineリーグ8位'
    },
  ];
  return (
    <>
      {teams.map((team) => (
        <div
          style={{
            margin: 4,
            textShadow: "1px 1px 1px black",
            backgroundColor: team.backgroundColor,
            height: 70,
            width: "100vw",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            ref={textRef}
            style={{
              top: -20,
              fontSize: 70,
              width: "100vw",
              color: "white",
              position: "absolute",
              opacity: 0.4,
            }}
          >
            {team.theme}
          </div>
          <div
            style={{
              top: 0,
              right: 20,
              fontSize: 16,
              color: "white",
              position: "absolute",
            }}
          >{team.result}</div>
          <div
            ref={textRef}
            style={{
              bottom: 5,
              right: 10,
              fontSize: 30,
              color: "white",
              position: "absolute",
            }}
          >
            
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid white",
              }}
            >
              <CircleIcon
                thumbnail_url={`https://s3.ap-northeast-1.wasabisys.com/capbaseball/teamIcons/${team.iconId}.jpg`}
                width={40}
              />
              {team.teamName}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
