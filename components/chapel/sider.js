const titles = ["예배기원", "사도신경", "찬송 : 14장", "기도", "성경봉독 : 고린도전서 1:10~17", "설교 : 교회와 신방 = 증거", "결단찬송 : 91장", "주기도문"]
const subtitles = ["인도자", "다함께", "다함께", "가족 중에서", "인도자", "가족 중에서", "다함께", "다함께"]
const Sider = (props) => {
  return (
    <div className={`sider absolute inset-0 md:relative ${!props.showSider && 'hidden'} md:flex md:w-sider h-screen bg-blue-50 flex-col`}>
      <div className="banner p-16 w-full">
        <div className="header flex items-center justify-between font-medium mb-8">
          <span className="text-sm">
            주일예배
          </span>
          <span className="text-sm">
            오전 11:00
          </span>
        </div>
        <div className="title">
          <span className="main text-4xl font-bold flex items-center justify-start mb-4">
            <span className="text-blue-600">가정</span>예배순서
          </span>
          <span className="text-base">
            인도: 가정의 어른
          </span>
        </div>
      </div>
      <div className="bg-white flex-1 w-full p-8 divide-y">
        {titles?.map((title, index)=>{
          const subtitle = subtitles[index]
          return (
            <a
              key={`chapel-sider-item-${index}-${title}`}
              className="item text-base flex justify-between items-center p-8 hover:bg-blue-100 transition cursor-pointer"
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
      </div>
    </div>
  )
}

export default Sider
