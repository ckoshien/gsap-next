import type { NextPage } from "next";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Home: NextPage = () => {
  const refArray = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const tl = gsap.timeline({ repeat: 1, repeatDelay: 1});
    for(let i=0; i < refArray.current.length; i++){
      tl.to(refArray.current[i], {
        opacity: 1,
        duration: 3,
      });
    }
    
  }, [refArray]);
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
      theme: "絶対防衛",
      teamName: "早稲田大学・紺碧",
      iconId: 162,
      backgroundColor: "#9a071b",
      result: "春windリーグ優勝",
      image: (
        <img
          style={{
            width: 1400,
            objectFit: "cover",
            position: "absolute",
            top: 40,
            left: -630,
            opacity: 0.5,
            //filter: 'hue-rotate(0deg)'
          }}
          src={"/images/makino.png"}
        />
      ),
    },
    {
      theme: "全員一丸",
      teamName: "横浜国立大学みなと",
      iconId: 57,
      backgroundColor: "#034bbd",
      result: "春shineリーグ優勝",
      image: (
        <img
          style={{
            width: 600,
            objectFit: "cover",
            position: "absolute",
            top: 225,
            left: -240,
            opacity: 0.5,
            //filter: 'hue-rotate(0deg)'
          }}
          src={"/images/kikuchi.png"}
        />
      ),
    },
    {
      theme: "悲願成就",
      teamName: "横浜国立大学ときわ",
      iconId: 57,
      backgroundColor: "#034bbd",
      result: "春windリーグ2位",
      image: (
        <img
          style={{
            width: 555,
            objectFit: "cover",
            position: "absolute",
            top: 155,
            left: -180,
            opacity: 0.5,
            //filter: 'hue-rotate(0deg)'
          }}
          src={"/images/IMG_0072.png"}
        />
      ),
    },
    {
      theme: "切磋琢磨",
      teamName: "横浜国立大学みらい",
      iconId: 57,
      backgroundColor: "#034bbd",
      result: "春shineリーグ2位",
      image: (
        <img
          style={{
            width: 800,
            objectFit: "cover",
            position: "absolute",
            top: 35,
            left: -355,
            opacity: 0.5,
            //filter: 'hue-rotate(0deg)'
          }}
          src={"/images/yamabe.png"}
        />
      ),
    },
    {
      theme: "狙うは優勝のみ",
      teamName: "城東シャークス",
      iconId: 232,
      backgroundColor: "#00007b",
      result: "春windリーグ3位",
      image: (
        <img
          style={{
            width: 1000,
            objectFit: "cover",
            position: "absolute",
            top: 115,
            left: -525,
            opacity: 0.5,
            //filter: 'hue-rotate(0deg)'
          }}
          src={"/images/J.png"}
        />
      ),
    },
    {
      theme: "挑戦",
      teamName: "三田キャップ投げクラブ",
      iconId: 106,
      backgroundColor: "#021664",
      result: "春shineリーグ3位",
      image: (
        <img
          style={{
            width: 400,
            objectFit: "cover",
            position: "absolute",
            top: 122,
            left: -173,
            opacity: 0.5,
            //filter: 'hue-rotate(0deg)'
          }}
          src={"/images/kosugi.png"}
        />
      ),
    },
    {
      theme: "虎視眈々",
      teamName: "青山学院大学",
      iconId: 239,
      backgroundColor: "#059c8b",
      result: "春windリーグ4位",
      image: (
        <img
          style={{
            width: 1200,
            objectFit: "cover",
            position: "absolute",
            top: 50,
            left: -573,
            opacity: 0.5,
            //filter: 'hue-rotate(0deg)'
          }}
          src={"/images/onuki.png"}
        />
      ),
    },
    {
      theme: "新進気鋭",
      teamName: "早稲田大・臙脂",
      iconId: 162,
      backgroundColor: "#9a071b",
      result: "春whineリーグ4位",
      image: (
        <img
          style={{
            width: 500,
            objectFit: "cover",
            position: "absolute",
            top: 185,
            left: -95,
            opacity: 0.5,
            //filter: 'hue-rotate(0deg)'
          }}
          src={"/images/hirotare.png"}
        />
      ),
    },
    {
      theme: "一戦必勝",
      teamName: "一橋大学・短冊",
      iconId: 58,
      backgroundColor: "#b01030",
      result: "春windリーグ5位",
      image: (
        <img
          style={{
            width: 1200,
            objectFit: "cover",
            position: "absolute",
            top: 83,
            left: -622,
            opacity: 0.5,
            //filter: 'hue-rotate(0deg)'
          }}
          src={"/images/kugo.png"}
        />
      ),
    },
    {
      theme: "捲土重来",
      teamName: "生田農工大",
      iconId: 61,
      backgroundColor: "#5e065e",
      result: "春shineリーグ5位",
      image: (
        <img
          style={{
            width: 800,
            objectFit: "cover",
            position: "absolute",
            top: 150,
            left: -389,
            opacity: 0.5,
            //filter: 'hue-rotate(0deg)'
          }}
          src={"/images/tagawa.png"}
        />
      ),
    },
    {
      theme: "有終完美",
      teamName: "目白蓋式野球倶楽部",
      iconId: 73,
      backgroundColor: "#79caff",
      result: "春windリーグ6位",
      image: (
        <img
          style={{
            width: 1200,
            objectFit: "cover",
            position: "absolute",
            top: 65,
            left: -600,
            opacity: 0.5,
            //filter: 'hue-rotate(0deg)'
          }}
          src={"/images/akibo.png"}
        />
      ),
    },
    {
      theme: "疾風怒濤",
      teamName: "Eintracht・上智連合",
      iconId: 202,
      backgroundColor: "#de5737",
      result: "春shineリーグ6位",
      image: (
        <img
          style={{
            width: 600,
            objectFit: "cover",
            position: "absolute",
            top: -60,
            left: -190,
            opacity: 0.5,
            //filter: 'hue-rotate(0deg)'
          }}
          src={"/images/E5suLGaVUAEJQ-Q_ccexpress.png"}
        />
      ),
    },
    {
      theme: "全員で頂点へ",
      teamName: "東京大学",
      iconId: 155,
      backgroundColor: "#9ad7e3",
      result: "春windリーグ7位",
      image: (
        <img
          style={{
            width: 450,
            objectFit: "cover",
            position: "absolute",
            top: 190,
            left: -225,
            opacity: 0.5,
            //filter: 'hue-rotate(0deg)'
          }}
          src={"/images/marcey.png"}
        />
      ),
    },
    {
      theme: "打撃革命",
      teamName: "専修大・千葉大連合",
      iconId: 251,
      backgroundColor: "#d60000",
      result: "春shineリーグ7位",
      image: (
        <img
          style={{
            width: 1600,
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: -716,
            opacity: 0.5,
            //filter: 'hue-rotate(0deg)'
          }}
          src={"/images/yumiya.png"}
        />
      ),
    },
    {
      theme: "新風 育成",
      teamName: "東京世田谷キャッパーズ",
      iconId: 65,
      backgroundColor: "#0f7108",
      result: "春windリーグ8位",
      image: (
        <img
          style={{
            width: 700,
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: -410,
            opacity: 0.5,
            //filter: 'hue-rotate(0deg)'
          }}
          src={"/images/is.png"}
        />
      ),
    },
    {
      theme: "臥薪嘗胆",
      teamName: "一橋大学・アルパコラ",
      iconId: 58,
      backgroundColor: "#b01030",
      result: "春shineリーグ8位",
      image: (
        <img
          style={{
            width: 450,
            objectFit: "cover",
            position: "absolute",
            top: 160,
            left: -120,
            opacity: 0.5,
            //filter: 'hue-rotate(0deg)'
          }}
          src={"/images/kobayashi.png"}
        />
      ),
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        height: 685,
      }}
    >
      {teams.map((team, idx) => (
        <div
          ref={(ref) => {
            if (!ref) return;
            refArray.current[idx] = ref;
          }}
          style={{
            opacity:0,
            margin: 1,
            textShadow: "1px 1px 1px black",
            backgroundColor: team.backgroundColor,
            height: 685,
            width: 100,
            minWidth: 100,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {team.image}
          <div
            style={{
              top: 5,
              left: 0,
              fontSize: 64,
              width: 100,
              color: "white",
              position: "absolute",
              opacity: 0.5,
              writingMode: "vertical-lr",
            }}
          >
            {team.theme}
          </div>

          <div
            style={{
              bottom: 10,
              left: 5,
              fontSize: 18,
              color: "white",
              position: "absolute",
              width: 16,
              writingMode: "vertical-lr",
            }}
          >
            {team.result}
          </div>
          <div
            style={{
              bottom: 10,
              right: 5,
              fontSize: 30,
              color: "white",
              position: "absolute",
              writingMode: "vertical-lr",
              height: 376,
            }}
          >
            <div
              style={{
                display: "flex",
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
    </div>
  );
};

export default Home;
