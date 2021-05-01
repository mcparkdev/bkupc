import {useState} from 'react'
import Body from '../components/chapel/body'
import Sider from '../components/chapel/sider'

const chapelItems = {
  titles: ["예배기원", "사도신경", "찬송 : 15장", "기도", "성경봉독 : 고린도전서 1:18~31", "든는 찬양: 천번을 불러도", "설교 : 교회와 신앙=십자가", "결단찬송: 380장", "주기도문"],
  subtitles: ["인도자", "다함께", "다함께", "가족 중에서", "인도자", "함께 듣기", "가족 중에서", "다함께", "다함께"],
  bodies: [
    {
      types: ["text", "text", "text"],
      title: ["예배의 선포", "말씀 읽기", "예배기원"],
      content: [
        `다함께 묵도함으로 주일 가정 예배를 하나님께 드리겠습니다.`,
        `우리를 구원하시되 우리가 행한 바 의로운 행위로 말미아지 아니하고
        오직 그의 긍휼하심을 따라 중생의 씻음과 성령의 새롭게 하심으로 하셨나니
        우리 구주 예수 그리스도로 말미암아 우리에게 그 성령을 풍성히 부어 주사
        우리로 그의 은혜를 힘입어 의롭다 하심을 얻어 영생의 소망을 따라
        상속자가 되게 하려 하심이라
        
        디도서 3:5~7`,
        `하나님 아버지!

        오늘도 우리에게 예배의 자리를 허락해 주심에 감사드립니다.
        지난 한 주, 이 땅은 코로나의 질병으로 힘든 시간이었으며
        격한 시위로 불안한 시간이었기도 합니다.
        부디 이 땅에 평화를 허락하셔서서 예배의 기쁨이 가득한 나라가 되게 하여 주시고
        우리의 일상의 삶이 평안으로 채워지도록 인도하여 주시옵소서.
        오늘 이 예배를 통해 십자가의 가치와 능력을 알게 하셔서
        어떤 상황에더소 흔들맂 않는 믿음의 성도로 살게 하여 주시옵소서.
        예수님의 이름으로 기원드립니다.

        아멘.
        `
      ],
    },
    {
      meta: "온 가족이 함께 읽습니다.",
      types: ["text"],
      title: ["새번역 사도신경"],
      content: [
        `나는 전능하신 아버지 하나님, 천지의 창조주를 믿습니다.
        나는 그의 유일하신 아들, 우리 주 예수 그리스도를 믿습니다.
        그는 성령으로 잉태되어 동정녀 마리아에게서 나시고,
        본디오 빌라도에게 고난을 받아 십자가에 못 박혀 죽으시고,
        장사된 지 사흘 만에 죽은 자 가운데서 다시 살아나셨으며,
        하늘에 오르시어 전능하신 아버지 하나님 우편에 앉아 계시다가,
        거기로부터 살아있는 자와 죽은 자를 심판하러 오십니다.
        나는 성령을 믿으며,
        거룩한 공교회와 성도의 교제와 죄를 용서 받는 것과 몸의 부활과 영생을 믿습니다.
        
        아멘.`,
      ]
    }, 
    {
      types: ["youtube", "img"],
      title: ["새 찬송가 15장", "악보"],
      content: ["01woUVsdRdo", "https://m1.daumcdn.net/cfile222/image/1643CD544DA628C63A6730"]
    },
    {},
    {
      types: ["text"],
      title: ["고린도전서 1:18~31"],
      content: [
        `'하나님의 능력과 지혜이신 그리스도'

        18   낮과 밤을 주관하게 하시고 빛과 어둠을 나뉘게 하시니 하나님이 보시기에 좋았더라
        19   저녁이 되고 아침이 되니 이는 넷째 날이니라
        20   하나님이 이르시되 물들은 생물을 번성하게 하라 땅 위 하늘의 궁창에는 새가 날으라 하시고
        21   하나님이 큰 바다 짐승들과 물에서 번성하여 움직이는 모든 생물을 그 종류대로, 날개 있는 모든 새를 그 종류대로 창조하시니 하나님이 보시기에 좋았더라
        22   하나님이 그들에게 복을 주시며 이르시되 생육하고 번성하여 여러 바닷물에 충만하라 새들도 땅에 번성하라 하시니라
        23   저녁이 되고 아침이 되니 이는 다섯째 날이니라
        24   하나님이 이르시되 땅은 생물을 그 종류대로 내되 가축과 기는 것과 땅의 짐승을 종류대로 내라 하시니 그대로 되니라
        25   하나님이 땅의 짐승을 그 종류대로, 가축을 그 종류대로, 땅에 기는 모든 것을 그 종류대로 만드시니 하나님이 보시기에 좋았더라
        26   하나님이 이르시되 우리의 형상을 따라 우리의 모양대로 우리가 사람을 만들고 그들로 바다의 물고기와 하늘의 새와 가축과 3)온 땅과 땅에 기는 모든 것을 다스리게 하자 하시고
        27   하나님이 자기 형상 곧 하나님의 형상대로 사람을 창조하시되 남자와 여자를 창조하시고
        28   하나님이 그들에게 복을 주시며 하나님이 그들에게 이르시되 생육하고 번성하여 땅에 충만하라, 땅을 정복하라, 바다의 물고기와 하늘의 새와 땅에 움직이는 모든 생물을 다스리라 하시니라
        29   하나님이 이르시되 내가 온 지면의 씨 맺는 모든 채소와 씨 가진 열매 맺는 모든 나무를 너희에게 주노니 너희의 먹을 거리가 되리라
        30   또 땅의 모든 짐승과 하늘의 모든 새와 생명이 있어 땅에 기는 모든 것에게는 내가 모든 푸른 풀을 먹을 거리로 주노라 하시니 그대로 되니라
        31   하나님이 지으신 그 모든 것을 보시니 보시기에 심히 좋았더라 저녁이 되고 아침이 되니 이는 여섯째 날이니라
      `
      ]
    },
    {
      meta: "영상을 클릭해서 온 가족이 함께 듣습니다.",
      types: ["youtube", "text"],
      title: ["천번을 불러도", "가사"],
      content: ["j5Z9ZCuOmTM",
      `천번을 불러봐도 내눈에 눈물이 
        멈추지 않는 것은십자가의 그 사랑
        나를 살리려 지신 그 십자가 모든 물과 피 
        나의 더러운 죄 씻으셨네 

        나를 향한 그 사랑 생명을 내어주사
        영원한 생명을 내게 주심을 감사해

        천번을 불러도 내눈에는 눈물이 
        멈추지 않는 것은 십자가의 그 사랑
        나를 살리려 하늘 보좌 버리신
        나를 사랑하신 분 그분이 예수요`
      ]
    },
    {
      meta: `일시적으로 지난 달 영상 넣었습니다. 촬영 뒤 바꿀 예정입니다.

      영상을 클릭해서 온 가족이 함께 듣습니다.
      `,
      types: ["youtube"],
      title: ["교회아 신앙=십자가"],
      content: ["ApA-NpCodls"]
    },
    {
      types: ["youtube", "img"],
      title: ["새 찬송가 380장", "악보"],
      content: ["3tISsG-IGv4","https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99FB17415D5E4D9011"]
    },
    {
      meta: "온 가족이 함께 읽는 기도를 드립니다.",
      types: ["text"],
      title: ["새번역 주기도문"],
      content: [
        `하늘에 계신 우리 아버지,
        아버지의 이름을 거룩하게 하시며
        아버지의 나라가 오게 하시며,
        아버지의 뜻이 하늘에서와 같이 
        땅에서도 이루어지게 하소서.
        오늘 우리에게 일용할 양식을 주시고,
        우리가 우리에게 잘못한 사람을 용서하여 준 것같이
        우리 죄를 용서하여 주시고
        우리를 시험에 빠지지 않게 하시고 악에서 구하소서.
        나라와 권능과 영광이 영원히 아버지의 것입니다.
        
        아멘.`,
      ]
    }, 
  ]
}

const Chapel = () => {
  const [showSider, setShowSider] = useState(true)
  const toggleSider = () => {
    setShowSider(prevShowSider => !prevShowSider)
  }
  const siderProps = {showSider, setShowSider, toggleSider, ...chapelItems}

  return (
    <div className="w-screen h-screen flex">
      <Sider {...siderProps} />
      <Body chapelItems={chapelItems} />
      <button 
        className="md:hidden quickbutton fixed bottom-8 right-8 h-24 w-24 bg-blue-600 flex justify-center items-center rounded-full focus:bg-blue-700 focus:outline-none transition"
        onClick={toggleSider}
      >
        {showSider ? 
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        :
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        }
      </button>
    </div>
  )
}

export default Chapel
