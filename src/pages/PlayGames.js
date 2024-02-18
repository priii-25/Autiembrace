import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slide from "../components/Slide";
import ColoringGameContainer from "../components/ColoringGameContainer";
import ColoringGameForm1 from "../components/ColoringGameForm1";
import ColoringGameForm from "../components/ColoringGameForm";

const PlayGames = () => {
  const navigate = useNavigate();

  const onAutiEmbraceClick = useCallback(() => {
    navigate("/autiembrace");
  }, [navigate]);

  const onHomeButtonClick = useCallback(() => {
    navigate("/autiembrace");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/autiembrace");
  }, [navigate]);

  return (
    <div className="w-full relative bg-lightsteelblue h-[1974px] overflow-hidden">
      <header className="absolute w-[calc(100%_-_1px)] top-[0px] right-[0px] left-[1px] h-[103px] text-center text-6xl text-dimgray font-montserrat">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-mistyrose [filter:blur(46px)] h-[103px]" />
        <Link
          className="cursor-pointer [text-decoration:none] absolute w-[calc(100%_-_1199px)] top-[32px] left-[41px] leading-[27.5px] font-bold text-[inherit] flex items-center justify-center h-[31px]"
          to="/autiembrace"
          onClick={onAutiEmbraceClick}
        >
          AutiEmbrace
        </Link>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute w-[calc(100%_-_1338px)] top-[30px] right-[48px] left-[1290px] h-[33px]"
          onClick={onHomeButtonClick}
        >
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-31xl bg-powderblue-100 h-[33px]" />
          <b
            className="absolute w-full top-[0px] left-[0px] text-xl leading-[27.5px] flex font-montserrat text-dimgray text-center items-center justify-center h-[33px] cursor-pointer"
            onClick={onHomeTextClick}
          >
            Home
          </b>
        </button>
      </header>
      <footer className="absolute w-[calc(100%_-_1px)] right-[1px] bottom-[0px] left-[0px] h-[59px] text-center text-3xl text-black font-montserrat">
        <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-gainsboro h-[59px]" />
        <div className="absolute w-[calc(100%_-_1215px)] bottom-[0px] left-[608px] flex items-center h-[59px]">
          <span className="w-full">
            <span className="whitespace-pre-wrap">{`©  `}</span>
            <span className="text-lg">AutiEmbrace</span>
          </span>
        </div>
      </footer>
      <Slide
        imageDimensions="/slides-box.svg"
        slide1Width="100%"
        slide1Position="absolute"
        slide1Top="133px"
        slide1Right="0px"
        slide1Left="0px"
      />
      <ColoringGameContainer />
      <ColoringGameContainer
        propRight="34.72%"
        propLeft="35.21%"
        propTop="722px"
      />
      <ColoringGameContainer
        propRight="66.67%"
        propLeft="3.26%"
        propTop="722px"
      />
      <ColoringGameContainer
        propRight="3.54%"
        propLeft="66.39%"
        propTop="1121px"
      />
      <ColoringGameForm1 />
      <ColoringGameForm1 propRight="66.67%" propLeft="3.26%" />
      <ColoringGameForm />
      <ColoringGameForm propRight="33.54%" propLeft="36.39%" />
      <ColoringGameForm propRight="65.49%" propLeft="4.44%" />
    </div>
  );
};

export default PlayGames;
