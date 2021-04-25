const Body = () => {
  return (
    <div className="flex flex-1 flex-col justify-start md:p-16 align-center bg-blue-50">
      <div className="banner p-8 w-full">
        <div className="header flex align-center justify-between font-medium mb-8">
          <span className="text-sm">
            주일예배
          </span>
          <span className="text-sm">
            오전 11:00
          </span>
        </div>
        <div className="title">
          <span className="main text-4xl font-bold flex align-center justify-start mb-4">
            <span className="text-blue-600">가정</span>예배순서
          </span>
          <span className="text-base">
            인도: 가정의 어른
          </span>
        </div>
      </div>
      <div className="item shadow-lg w-full max-w-8xl p-8 md:p-16 text-base bg-white">
        <div className="title text-3xl font-bold mb-2 md:text-6xl">
          예배기원
        </div>
        <div className="subtitle text-xl mb-4">
          인도자
        </div>
        <div className="divider h-2 w-16 bg-blue-800 mb-6"/>
        <div className="content divide-y">
          <div className="section">
            <div className="title text-xl text-blue-800 font-bold my-4">
              예배의 선포
            </div>
            <div className="content mb-6">
              다함께 묵도함으로 주일 가정 예배를 하나님께 드리겠습니다.
            </div>
          </div>
          <div className="section">
            <div className="title text-xl text-blue-800 font-bold my-4">
              말씀 읽기
            </div>
            <div className="content mb-6">
              우리를 거스르곡 불리하게 하는 법조문으로 쓴 증서를 지우시고 제하여 버리사
              십자가에 못 박으시고 통치자들과 권세들을 무력화하여 드러내어 구경거리로 삼으시고
              십자가로 그들을 이기셨느니라
              <br/><br/>
              골로새서 2:14~15  
            </div>
          </div>
          <div className="section">
            <div className="title text-xl text-blue-800 font-bold my-4">
              예배기원
            </div>
            <div className="content mb-6">
              하나님 아버지!
              <br/><br/>
              오늘도 우리에게 예배의 자리가 있음에 감사드립니다. 온 세계와 우리의 현실은 코로나의 질병으로 닫히고 답답한 상황이지만 하나님의 공급과 보호와 인도를 통해 오늘도 예배를 드릴 수 있음에 감사와 찬송을 드립니다.
              <br/><br/>
              바라기는 예배드리는 우리 모두에게 십자가의 은혜와 십자가으 승리를 허락하셔서 이런 현실에서도 좌절하고 실마하는 신앙이 아니라 우리 주님을 믿음으로 어떤 상황에서도 흔들리지 않고 든든한 삶을 살도록 이 예배를 통해 인도하여 주시옵소서. 예수님의 이름으로 기원드립니다. 아멘.
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Body
