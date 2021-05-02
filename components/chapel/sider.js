const Sider = (props) => {
  const {titles, subtitles} = props
  return (
    <div
      // className={`sider absolute w-screen
      // transform md:transform-none translate-x-0 md:relative
      // ${!props.showSider && '-translate-x-full'}
      // md:flex md:w-sider h-screen transition-transform bg-blue-50 flex-col overflow-y-auto`}
      className={`sider absolute w-screen
      transform md:transform-none translate-x-0 md:relative
      ${!props.showSider && '-translate-x-full'}
      md:flex md:w-sider h-screen transition-transform bg-blue-50 flex-col overflow-y-auto`}
    >
      <div className="banner p-16 w-full">
        <div className="header flex items-center justify-between font-medium mb-8">
          <span className="text-sm">
            주일예배
          </span>
          <span className="text-sm">
            5월 2일 오전 11:00
          </span>
        </div>
        <div className="title relative">
          <span className="main text-4xl font-bold flex items-center justify-start mb-4">
            <span className="text-blue-600">가정</span>예배순서
          </span>
          <span className="text-base">
            인도: 가정의 어른
          </span>
        </div>
      </div>
      <div className="main-content bg-white flex-1 w-full p-8 divide-y">
        <div className="instructions p-8">
          <div className="title font-bold text-blue-800 text-lg">
            예배 안내
          </div>
          <div className="content text-base whitespace-pre-line">
            {`아래 순서를 클릭하여 예배 내용을 확인하세요.
              모바일: 우측하단에 있는 버튼을 활용하세요.
            `}
          </div>
        </div>
        {titles?.map((title, index)=>{
          const subtitle = subtitles[index]
          return (
            <a
              key={`chapel-sider-item-${index}-${title}`}
              className="item text-base flex justify-between items-center p-8 focus:bg-blue-100 md:hover:bg-blue-100 transition cursor-pointer"
              href={`#chapel-${index}`}
              onClick={props.toggleSider}
            >
              <div className="font-bold">
                {title}
              </div>
              <div className="">
                {subtitle}
              </div>
            </a>
          )
        })}
        <div className="footer flex flex-col w-full justify-center items-center text-base ">
          <img src="/bkupc_logo_small.png" alt="logo" className="w-24 mt-12 mb-4 select-none"/>
          보고타한인연합장로교회
        </div>
      </div>
    </div>
  )
}

export default Sider
