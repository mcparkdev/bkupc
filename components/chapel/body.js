const chapelItems = {
  titles: ["예배기원", "사도신경", "찬송 : 14장", "기도", "성경봉독 : 고린도전서 1:10~17", "설교 : 교회와 신방 = 증거", "결단찬송", "주기도문"],
  subtitles: ["인도자", "다함께", "다함께", "가족 중에서", "인도자", "가족 중에서", "다함께", "다함께"],
  bodies: [
    {
      types: ["text", "text", "text"],
      title: ["예배의 선포", "말씀 읽기", "예배기원"],
      content: [
        `다함께 묵도함으로 주일 가정 예배를 하나님께 드리겠습니다.`,
        `우리를 거스르곡 불리하게 하는 법조문으로 쓴 증서를 지우시고 제하여 버리사
        십자가에 못 박으시고 통치자들과 권세들을 무력화하여 드러내어 구경거리로 삼으시고
        십자가로 그들을 이기셨느니라.
        
        골로새서 2:14~15`,
        `하나님 아버지!

        오늘도 우리에게 예배의 자리가 있음에 감사드립니다.
        온 세계와 우리의 현실은 코로나의 질병으로 닫히고 답답한 상황이지만
        하나님의 공급과 보호와 인도를 통해 오늘도 예배를 드릴 수 있음에
        감사와 찬송을 드립니다.
        
        바라기는 예배드리는 우리 모두에게 십자가의 은혜와 십자가의 승리를 허락하셔서
        이런 현실에서도 좌절하고 실마하는 신앙이 아니라 우리 주님을 믿음으로
        어떤 상황에서도 흔들리지 않고 든든한 삶을 살도록 이 예배를 통해 인도하여 주시옵소서.
        예수님의 이름으로 기원드립니다. 아멘.`
      ],
    },
    {
      meta: "성경, 찬송가 표지 안 쪽에 있는 새번역 사도신경으로 온 가족이 함께 읽습니다.",
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
      title: ["새 찬송가 14장", "악보"],
      content: ["SXhVZEPjsJw", "https://t1.daumcdn.net/cfile/tistory/99FA7F365A9388132A"]
    },
    {},
    {
      types: ["text"],
      title: ["고린도전서 1:10~17"],
      content: [
        `'고린도 교회의 분쟁'

        10 형제들아 내가 우리 주 예수 그리스도의 이름으로 너희를 권하노니 모두가 같은 말을 하고 너희 가운데 분쟁이 없이 같은 마음과 같은 뜻으로 온전히 합하라
        11 내 형제들아 글로에의 집 편으로 너희에 대한 말이 내게 들리니 곧 너희 가운데 분쟁이 있다는 것이라
        12 내가 이것을 말하거니와 너희가 각각 이르되 나는 바울에게, 나는 아볼로에게, 나는 게바에게, 나는 그리스도에게 속한 자라 한다는 것이니
        13 그리스도께서 어찌 나뉘었느냐 바울이 너희를 위하여 십자가에 못 박혔으며 바울의 이름으로 너희가 1)침례를 받았느냐
        14 나는 그리스보와 가이오 외에는 너희 중 아무에게도 내가 1)침례를 베풀지 아니한 것을 감사하노니
        15 이는 아무도 나의 이름으로 1)침례를 받았다 말하지 못하게 하려 함이라
        16 내가 또한 스데바나 집 사람에게 1)침례를 베풀었고 그 외에는 다른 누구에게 1)침례를 베풀었는지 알지 못하노라
        17 그리스도께서 나를 보내심은 1)침례를 베풀게 하려 하심이 아니요 오직 복음을 전하게 하려 하심이로되 말의 지혜로 하지 아니함은 그리스도의 십자가가 헛되지 않게 하려 함이라
        `
      ]
    },
    {
      types: ["text"],
      title: ["교회와 신앙 = 증거(복음)"],
      content: [
        `고린도전서 1:10~17

        지난 한 주간도 평안하셨습니까? 오늘도 보건지침에 따라 각 가정에서 예배드리는데, 예배드리는 모든 성도들과 각 가정에 하나님의 복 주심으로 평안하시기를 예수님의 이름으로 축복합니다.
   
        제가 아는 이야기 중에서 이런 이야기가 있습니다. 

        성 프란시스코가 고향에 있을 때, 하루는 자기 집 하인이 우물에서 물을 길어오는 모습을 지켜보고 있었습니다. 그런데 하인은 물을 길을 때마다 한 가지 이상한 행동을 했습니다. 큰 물통을 내려 물을 가득히 담은 후 끌어올릴 때 항상 조그마한 나무토막 하나를 그 물통 안에 던져 넣는 것이었습니다. 이를 신기하게 여긴 프란시스코 성인은 하인에게 그 이유를 물어보았다고 합니다. 하인은 이렇게 대답했습니다. 

        "도련님, 제가 물을 퍼올릴 때 이 나무토막을 물통 안에 넣으면 물이 요동치지 않게 되어 물이 밖으로 흘러넘치는 것을 최대한 막을 수 있어요. 나무토막을 안 넣으면 물이 제 마음대로 출렁거려서 나중에 반 통 밖에 안 될 때가 많거든요."
        하인의 이 설명을 들은 프란시스코 성인은 크게 깨달은 바가 있어서 후에 자기 친구에게 이런 내용의 편지를 썼다고 합니다. 

        "우리는 얼마나 자주 흔들리는 마음의 물통을 가지고 있는가! 두려움으로 흔들리는 마음, 고통으로 심하게 요동하는 마음, 절망으로 부서지는 마음... 이것은 마치 심하게 흔들리고 출렁거리는 물통과 같은 것이지. 그러나 거기에 십자가라는 나무토막을 던져보게나. 그러면 곧 마음의 물통이 안정될 걸세.“

        요즘 우리의 삶은 심하게 흔들리는 것 같습니다. 아니 작년부터 우리를 힘들게 하는 코로나의 질병은 너무나도 우리의 현실을 아프게 하고, 힘들게 하고, 불안하게 합니다.

        이런 현실에서 도대체, 우리 인생에 뭐가 있으면 좀 평안해지고, 잔잔해질 수 있을까요? 
        우리가 뭘 어떻게 해야 우리 마음이 요동치지 않고 잔잔해질 수 있겠습니까? 

        흔히 사람들은 이런 현실에서 풍족한 물질이 있거나 돈이 많으면 불안해 하지 않고 평온할 수 있다고 생각합니다. 이런 생각이 분명 틀린 것은 아니지만 아니 분명 물질이 풍족하면 이런 현실에서 그렇게 크게 불안하지 않는 것이 사실이지만 하나님께서 우리에게 말씀하는 것은 우리 안에 예수님의 십자가가 있을 때 우리의 삶을 잔잔해지고, 우리의 마음을 비로소 안정을 찾을 수 있다는 것입니다.

        우리가 가지고 싶은 것을 다 가진다고 해도, 내가 하고 싶은 대로 다 하고 산다고 해도 우리의 인생이 평온해지거나 우리의 마음이 잔잔해지지 않습니다. 왜냐하면 돈이 없어서 불안한 것이라면 돈이 많으면 불안해 하지 않아야 하는데 돈이 많은 사람들도 불안하고 걱정하고 근심하며 살기 때문입니다.

        물론 물질이 많고 내가 하고 싶은 것을 다 누리고 산다면, 처음에는 새로울 수 있을 것입니다. 요즘처럼 코로나의 현실에서 우리가 가진 것이 많아서 우리가 누리고 싶은 것을 다 누리고 산다면, 처음에는 신기하고 너무나도 편안할 수 있을 것입니다.

        그러나 성도 여러분! 
        편안함과 평온함은 다르고 조용하다는 것과 고요하다는 것은 분명 다릅니다. 

        성경이 우리에게 약속하고, 우리 주님께서 보여주신 것은 모든 것이 갖춰져 있기 때문에 누리는 편안함이 아니라 부족한 삶임에도 상황에 휘둘리지 않는 평온함이었고, 시끄러운 소리가 들리지 않는 조용한 삶이 아니라, 시장 한복판에서도 누리는 영혼의 고요한 삶이었습니다. 

        그런데 간혹 우리는 세상을 살다 보면, 진리를 알고 있지만 세상 사람들의 말에 현혹될 때가 있고, 세상의 논리에 넘어가고 사탄의 꾀임에 빠져서 하나님의 뜻이 아님에도 자기를 고집하고, 주님 가신 십자가의 길이 아님에도 번영과 영광의 환상에 빠져 이득이 되고, 결과만 좋으면 그것이 답이라고 주장합니다. 그러나 분명한 것은, 우리의 계획이 다 이루어져도 그 안에 주님의 십자가가 없다면, 아무런 소용이 없고 흔들리는 물통처럼 그렇게 흔들리며 살 것입니다. 

        성도 여러분,
        내 소망이 이루어지고, 내가 부자가 되고, 내가 높은 자리에 올라가도 주님의 십자가 그 안에 없다면 그것이 무슨 소용이 있겠습니까? 그것이 내 아버지께서 기뻐하시며 정말 잘했다고 칭찬하실 수 있는 사건이 되고, 의미가 되겠습니까? 

        아니면, 또 다시 아버지 하나님께서 한숨 지시며 눈물 흘리시는 아버지 하나님의 슬픔이 되겠습니까? 
        나는 좋아서 ‘내가 이겼다’고, ‘으시될 수 있고, 어깨에 힘 줄 수 있다’고 속으로 뻐길 수는 있겠지만, 정말 그것이 내 안에 평안을, 내 안의 기쁨을, 내 안의 소망을 줄 수 있겠습니까?

        물론, 그런 상황이 벌어지면 속은 시원할 것입니다. 
        내가 뭔가 된 것 같고, 내가 큰일을 한 것 같고, 위대해진 것 같습니다. 

        그러나 그 안에 우리 예수님의 십자가가 없다면, 
        예수님의 뜻이 없다면, 
        하나님께서 기뻐하시는 일이 아니라면
        그것이 무슨 소용이 있겠습니까? 

        십자가가 없는 성공, 십자가가 없는 성취, 십자가가 없는 이득은 오히려, 우리로 하여금 하나님으로부터 더 멀어지게 하는 독이 될 뿐입니다. 
        차라리 실패가, 십자가 없는 성공보다는 실패를 통해 십자가를 찾을 수 있다면, 
        아픔을 통해 십자가를 바라볼 수 있고, 
        고통을 통해 예수님께 부르짖을 수밖에 없는 현실이라면,
        그것이 오히려 은혜가 되고, 하나님의 사랑이 되는 것입니다. 

        이런 일은 꼭 우리 인생에만 해당되는 일은 아닙니다. 그것은 우리의 사업, 일터, 가정과 교회에도 마찬가지입니다. 

        물론 우리가 계획하고 추구하는 일은 반드시 성공해야 하고 성과가 있어야 합니다. 그렇기에 우리는 철저히 준비하고 그것을 이루기 위해 애쓰고 수고해야 합니다. 
        그런데, 그 일이 무너졌다면? 
        우리의 계획과 우리의 생각들이 무너졌다면 어떻게 해야 합니까? 

        아니 그런 일을 모른다고 해도, 만일 우리의 일터와 가정과 교회가 평온하지 않다면, 우리의 일터와 가정이 흔들리고, 우리의 사업과 교회가 위태위태하다면 어떻게 해야 합니까? 
        그런 상황에서 제일 필요한 것이 무엇이겠습니까? 
        그런 교회에 무엇이 있어야 평온해지고, 잔잔해지며, 따뜻해질 수 있겠습니까?

        그것은 바로 십자가가 있어야 합니다. 
        주님의 은혜가 있어야 합니다. 
        주님의 십자가가 있어야 평온해질 수 있고, 
        주님이 십자가만이 교회를 교회 되게 만들고 
        교회의 생명을 회복할 수 있습니다. 

        그러니 우리가 우리 인생에서, 또 우리 사업과 일터, 그리고 가정과 교회에서 고민해야 할 것은 내 인생에는 십자가의 흔적이 있는지, 지금 내 삶에는 우리 예수님의 십자가가 있는지, 우리 일터와 사업, 가정과 교회에는 예수의 십자가 증거가 있고, 십자가의 흔적이 있는지, 어떻게 하면 이 십자가의 능력과 십자가의 은혜를 회복할 수 있을까 고민하며 십자가의 증거를 찾고 확인하고 회복하는 것입니다.

        우리 교회는 아침마다 카톡을 통해 말씀을 나눕니다. 제가 아침에 성경 1장씩 묵상하고 짧은 기도문장으로 말씀의 은혜를 나누는데 가끔 제가 이런 기도문을 카톡으로 보내드릴 때가 있습니다. 

        “제가 해야 하고, 또 제가 할 수 있는 일들은 주님의 말씀을 따라 순종함으로 행하게 하시고, 제가 할 수 없는 일 그리고 어쩌지 못하는 일들을 당했을 때는 그 모든 것이 하나님의 뜻임을 고백하며 그 모든 것이 하나님의 계획 속에서 다 잘 될 것을 믿게 하옵소서”라는 기도문입니다.

        이 기도문은 제가 새벽마다 기도하기 전에 꼭 되풀이하는 내용입니다. 왜냐하면 어렵고 힘든 시간 속에서 제가 어디로 가야 할지, 또 무엇을 해야 할지 모르지만 오늘 제가 살아야 할 삶은 분명하다고 고백하기 때문입니다. 

        성도 여러분!
        우리가 어떤 처지, 어떤 상황에 있어도 우리가 살아야 할 삶은 다르지 않습니다. 

        우리의 내일은 어떻게 될지, 우리의 앞일이 어떻게 될지 모르지만, 아는 것은 오늘을 어떻게 살아야 하는지는 분명히 압니다. 

        우리가 믿음의 성도로서, 상황이 좋든 나쁘든 믿음으로 열심히 살아야 하고, 
        어떤 처지에 있건 주님의 십자가 붙잡고 살아야 하며, 
        우리의 인생이 금 그릇에 담겼든, 혹은 나무 그릇에 담겼든 그 그릇 안에는 반드시 십자가가 있어야 한다는 고백하기 때문입니다. 
        상황이 좋으면 열심히 살고, 그렇지 않으면 대충 사는 것이 아니라, 

        언제든지 항상, 늘 그렇게 기도하며 주님 찬송하며 주님 바라보며 살아야 합니다. 

        우리의 신앙과 우리의 교회가 다 똑같습니다.

        상황이 좋으면 영적인 부흥을 위해 애쓰고, 상황이 나쁘면 영적인 부흥은 다음 기회로 미루고 모든 것을 손 놓고 있는 것이 아니라, 

        상황이 좋든 나쁘든 교회와 우리의 신앙은 항상 기도해야 하고, 자원이 풍부하든 그렇지 않든 교회와 우리의 신앙은 영적인 부흥을 위해 집중해야 합니다. 

        그런데 만일, 우리의 신앙과 교회가 이것을 잃어버리면 
        우리는 불안해지고 우리의 삶은 분란에 휩싸이고, 사소한 것에 시끄러워지며, 
        주님 주시는 십자가의 능력을 잃어버린 채 사단의 악한 영에 이리 치이고 저리 치이면서 성도의 모습을 잃어버리게 됩니다. 이것은 교회도 마찬가지이고 우리의 사업도, 우리의 일터도 마찬가지입니다.

        오늘 말씀을 보면, 십자가의 증거를 잃어버린 사람들의 모습이 극명하게 나타납니다. 오늘 본문은 고린도 전서를 이해하기 위해 아주 중요한 내용을 담고 있습니다.

        오늘 본문은, 사도 바울이 고린도 전서라는 편지를 쓰게 된 동기와 이유를 이야기합니다. 즉 고린도 전서라는 성경이 오늘날까지 전해지게 된 이유가 무엇인지 말씀하고 있는 구절인데, 그 이유는 바로 고린도 교회에 분쟁이 있었기 때문입니다. 

        11절에 보면, 사도 바울은 글로에라는 사람을 통해서 교회와 성도들의 분쟁 소식을 듣게 되었고, 이 분쟁에 대해 어떻게든 하나님의 뜻을 가르치고, 예수님을 따라 산다는 것이 어떤 의미가 있는지를 알려주기 위해 편지를 쓰다는 것을 알 수 있습니다. 

        물론 이 소식이 글로에가 직접 전한 것은 아니었을 것입니다. 아마도 글로에라는 여자 성도가 조금은 부유한 집안의 여주인이었을 것이고, 고린도와 지금 이 편지를 쓰고 있는 장소였던 에베소를 사업상으로 자주 왕래했던 사람으로, 아마도 글로에가 하인이나 노예를 통해 바울에게 고린도 교회의 분쟁 상황을 전했을 것입니다. 

        아무튼, 고린도 교회는 분쟁에 휩싸였습니다. 이유는 고린도 교회의 성도들끼리 나는 누구 편이니, 너는 누구 편이니 하면서 교회 내에 파당을 만들어 서로를 시기하며 서로를 지적하며 누가 옳고 그르다 하며 서로를 정죄했기 때문입니다. 

        12절을 보면 그 당파가 모두 4개였음을 알게 됩니다. 
        성경을 보면, 바울파, 아볼로파, 게바파, 그리스도파로 나뉘어 자기의 입장을 주장했는데 이들이 무엇 때문에 서로 싸웠는지는 자세히 알 수는 없습니다. 다만 성경을 통해 추정해 보면, 자신들의 영적인 독특함과 우월성을 내세우기 위함이었다는 것이고, 이런 우월성을 내세움으로 고린도 지역에 있던 교회의 지배력을 장악하기 위함이었을 것으로 생각이 됩니다. 

        이렇게 생각하는 이유는 다른 파당은 모두 제자들의 이름을 붙여 자기들을 주장했지만, 유독 그리스도파라는 당파가 있었기 때문입니다. 왜냐하면, 그 당시 모든 그리스도인들은 예수파에 해당되는 사람이었습니다. 예수님께서 십자가 처형을 당할 당시에, 유대교는 바리새파, 사두개파, 열심당이나 에세네파와 같은 파당으로 예수님을 따르는 무리를 예수파로 불렀기 때문에 예수파 혹은 그리스도파는 모든 기독교인에게 해당되는 명칭이었습니다. 

        그런데 고린도 교회에서 나는 그리스도파라고 주장해야 하는 상황이 벌어졌다는 것을 보면 아마도 자신의 영적인 우월성을 강조해서, 이렇게 스스로를 불렀을 것이고 그래서 바울은 이런 파당의 이름을 생겨난 순서를 따라 쓴 것이 아닌가 생각됩니다. 

        아무튼, 고린도 교회는 자신들의 주장과 자신들의 영적인 우월성을 강조하기 위해 파당을 만들었습니다. 이유는 교회의 지배권 혹은 교회의 주도권을 잡기 위해서 였습니다.

        당시 고린도 교회는 거대한 집회시설을 가진 교회 건물이 아니었습니다. 당시 교회는 소수의 가정 교회의 형태였고, 고린도에는 다수의 이런 가정교회가 존재했으며 오늘 본문에 나오는 스데바나의 집 정도 만이 다수의 성도들을 수용할 수 있는 규모 있는 집이었을 것입니다. 그러니 여러 곳에 흩어져 있는 작은 규모의 가정 교회를 관장하고 치리해야 할 필요가 있었을 것이고, 어떤 가정 교회가 어떤 가정 교회에 권위 아래 있어야 하고 가르침과 지도를 받아야 할지에 대한 의견이 분분했을 것입니다. 

        그러다 보니 자기들의 입장에 맞는 사람들끼리 모였을 것이고, 모임이 생겼으니 자기들의 목소리를 냈을 것이고, 그 목소리와 주장이 관철되기 위해서는 권위와 권력이 필요했기에 자기들의 주장과 목소리는 바울의 권위와 같다는 식의 논리를 펴기 시작했을 것입니다. 현실이 이러다보니 바울파에 속하지 못한 사람들이 소외감을 느꼈을 것이고, 그러다 보니 고린도 교회들을 세운 사람은 바울이지만, 고린도 교회를 실질적으로 양육한 사람은 아볼로였기에, 아볼로의 이름으로 모이고, 그러다 보니 그들보다 더 큰 사도인 베드로의 이름을 따서 우리는 게바파로 불리는 상황이 벌어지게 된 것입니다. 

        그리고 고린도전서를 읽다보면 이들의 분파와 분쟁에 있어서 더 안타까운 것이 있는데, 그것은 이들의 신앙적인 분쟁은 겉으로는 영적인 우월성을 담보로 교회의 지배권을 차지하기 위한 분쟁으로 보이지만, 더 안타까운 것은 사회, 경제적 우월성을 교회 내에서도 그 힘을 즉 돈의 힘과 사회 신분의 힘을 내세우며 자기들의 우월성과 권력을 장악하려고 했다는 것입니다. 

        사도 바울은 이런 분쟁이 교회를 해롭게 하는 아주 심각한 위기라고 느꼈습니다. 그래서 그는 오늘 말씀처럼 편지를 쓰면서, 교회의 일치성, 교회의 모습, 교회의 본질은 오직 예수 그리스도에게만 있다고 선포하는 것입니다. 그러면서 사도 바울이 주장하는 것은, 교회는 사람에게 있지 않음을, 교회는 예수님에게만 속해 있음을, 교회는 자기의 주장과 자기 논리가 아니라, 사람들의 주장과 사람들의 논리가 아니라, 오직 복음의 논리 위에 있는 것이고, 복음은 오직 우리 주 예수 그리스도라고, 그래서 교회가 교회 되기 위해서는 바울의 주장도, 아볼로의 가르침도, 게바의 우월성도, 이것을 뒤엎기 위한 그리스도 이름의 도용이 필요한 것이 아니라, 오직 예수 그리스도의 증거를 가져야 한다는 것입니다. 즉 교회가 교회되기 위해서는 어떤 말과 논리가 있다는 것이 아니라, 예수의 증거에 있고, 십자가의 증거, 성령의 증거가 있어야 한다는 것입니다. 

        성도 여러분! 이런 바울의 가르침은 코로나의 현실을 사는 우리에게 아주 적절한 가르침입니다.

        오늘 우리가 우리의 인생을 돌아보십시오. 
        우리의 인생에 문제가 있을 때, 그것이 왜 그렇게 되었는지 설명할 수 없는 문제가 있는지 생각해 보십시오. 
        우리의 실수와 잘못에 대해서 우리가 설명하는 대로 결과가 판가름 난다면, 그럴듯한 말과 논리로 설명하지 못할 것이 있는지 생각해 보십시오.

        우리가 심각한 죄와 잘못으로 재판장에 섰다고 가정해 보십시오.
        이제 최후 진술을 하게 되는데, 그 법정에서는 내가 진술하고 고백하는 최후 진술을 따라서 내 형량이 결정된다고 한다면 우리는 우리의 죄와 잘못에 대해 그럴듯하게 말을 만들 능력이 있을 것이고, 정말 그럴 수밖에 없었음을 호소할 수 있는 논리가 있을 것입니다.

        이런 것은 우리의 가정이나, 우리의 사업과 일터와 우리가 함께 신앙 생활하는 교회에서도 마찬가지입니다. 

        이런 상황이 처할 수밖에 없는 이유와 이런 갈등이 있을 수밖에 없었음을 그럴듯하게 설명할 수 있을 것이고, 화려한 논리와 언변으로 우리는 우리의 입장을 변호할 수 있을 것입니다. 그러나 오늘 말씀을 통해 우리가 깨달아야 하는 것은 이런 것이 중요한 것이 아니라는 것입니다 

        아무리 화려한 언변과 논리가 있다 할지라도 이런 상황을 극복하고 치유하고 코로나의 현실에서 흔들리지 않는 삶을 사는 비결은 말이 아니라 기도가 필요하고 힘이 아니라 십자가의 증거가 있어야 하는 것입니다. 

        세상은 그런 말이 중요할 수 있습니다. 그럴 수밖에 없었음을 주장합니다. 그러나 우리의 신앙과 교회는 바울파니, 아볼로파니, 게바파니 하면서 자기들의 논리와 주장이 필요한 것이 아니라, 우리에게는 말보다는 기도가 필요하고 자기 주장보다는 십자가의 흔적이 필요하다는 것입니다.

        성도 여러분!
        코로나로 인해서 벌어진 이 현실에서, 우리가 이 현실을 견디고 극복하고 혹은 이 현실에서 벌어진 처참한 문제들에 대해서 휘둘리지 않을 수있는 힘이 무엇이라고 생각하십니까? 

        혹은 우리가 이런 현실에서 왜 그렇게 불안하고 걱정하고 조급해하는 이유가 무엇입니까?
         
        돈이 없어서? 물질이 없어서? 혹은 사람이 없어서?

        저는 아니라고 고백합니다. 우리가 이렇게 흔들리고 조급해 지는 것은 우리에게 다른 어떤 것이 없어서가 아니라, 복음의 증거가 없기 때문이라고 저는 고백합니다. 
        십자가의 증거가 없고, 예수님의 흔적이 없기 때문이고, 
        우리에게 영적인 갈급함이 없기 때문이고 그렇기에 우리에게 필요한 것은 치밀한 논리도 아니고, 감정에 호소하는 구질구질한 읍소도 아니라, 우리 예수님의 증거가 필요하다고 저는 고백합니다. 

        그러니 이렇게 어려운 현실에서 왜 이런 일이 벌어졌는지 어떻게 하면 이런 일들을 피할 수 있을지 염려하지 마시고 예수님의 복음과 예수님의 증거가 무엇인지 확인하시기 바랍니다.

        그리고 이런 현실에서, 우리가 복음의 증거를 회복하고 예수님의 증거를 갖게 된다면 어떤 일이 일어날지 상상해보시기 바랍니다.

        사도 바울이 말한 것처럼 말의 지혜가 아니라 그리스도의 십자가를 우리가 회복한다면 어떤 일이 벌어질지 상상해보십시오. 

        우리가 영적인 힘을 회복하고 영적인 부흥을 갈망하며, 예수님의 흔정과 증거로 우리의 삶이 세워진다면 우리의 삶은, 그리고 우리의 교회는 세상이 감당치 못할 위대함이 될 것이고, 세상 풍파를 거침없이 헤쳐나갈 것이며, 어떤 시련이라 하더라도 우리 신앙 앞에서 산산조각 날것입니다.

        지금 많은 분들이 걱정하고 근심합니다. 그러나 걱정하고 근심하지 마십시오. 
        우리의 신앙은 다 잘 될 것입니다. 
        예수님의 흔적과 그 증거로 좋은 일들만 있게 될 것입니다. 

        어떤 수리공이 있었습니다. 

        그는 숙련된 수리공보다 손이 느렸고, 일을 제 때 마치지 못해서 공장이나 공장장에게 많은 핀잔을 받아야 했습니다. 그래서 진급도 못하고 후배들보다 봉급도 쳐지는 상황들이 벌어졌습니다. 그러던 어느 날, 일의 진척이 너무 늦자 작업반장은 이제부터는 매일, 그에게 잔무를 처리하고 자신이 맡은 기계 수리를 다 마치기 전에는 퇴근하지 말라는 작업지시를 받았습니다. 그래서 거의 매일 잔무를 처리해야 했고, 기계 수리를 하느라 진땀을 뺐습니다. 그러던 어느 날, 자신의 손이 너무 느리고, 기계 나사를 푸는 일이 너무 오래 걸려서 한가지 묘안을 짜냈습니다. 

        그것은 마이너스 나사에 가운데 세로줄을 하나 더 넣어 십자 나사를 만들고, 그에 맞는 드라이버를 만든 것입니다. 그리고 그는 그것을 특허 출원하게 되었고, 일약 억만장자의 자리에 오르게 되었습니다. 그리고 그는 그 돈으로 전기제품 사업을 시작해서 전 세계적으로 유명한 가전제품 회사를 세우게 되었습니다. 

        바로 이 사람이 누구인지 아십니까? 필립스라는 사람입니다. 
         
        때로는 우리가 더디 가는 것 같고, 다른 사람이나 교회보다 한 참 뒤쳐진 것 같지만, 그 거리는 순간에 따라잡을 수도 있고, 일순간 아무 것도 아닌 것이 될 수도 있습니다. 

        필립스라는 사람이 다른 사람보다 능력도 없었고 작업 수완도 별볼일 없었지만 그 아픔으로 기회로 삼았듯이, 우리도 지금의 상황을 교훈 삼아 하나님께서 원하시는 그 일을 하겠다고 십자가의 흔적을 따라 살아가고 일하고 교회를 만들어 가겠다고 소망하기를 원합니다. 그러니 중요한 것은 우리가 십자가의 증거를 갖는 것이 중요합니다. 

        우리 삶이, 그리고 우리 교회가 십자가의 능력을 회복하기를 원합니다.

        우리의 삶이 어떤 상황에서도 흔들리지 않고 불안해지지 않는 비결은 십자가의 증거에 있습니다. 그러니 이렇게 어렵고 답답한 현실에서 다른 어떤 것을 준비하고 생산하려고 애쓰기 보다는 복음의 증거를 찾고, 십자가의 증거를 회복함으로 더욱 든든해지는 저와 여러분이 되기를 예수님의 이름으로 간절히 소망합니다.
      `]
    },
    {
      types: ["youtube", "img"],
      title: ["새 찬송가 91장", "악보"],
      content: ["G0Lj_gDVw0E", "https://t1.daumcdn.net/cfile/blog/99E40F445BCC509F2E"]
    },
    {
      meta: "성경, 찬송가 표지 안 쪽에 있는 새번역 주기도문으로 온 가족이 함께 읽습니다.",
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

const Item = ({title, subtitle, children, index}) => {
  return (
    <div id={`chapel-${index}`} className="item shadow-lg w-full max-w-7xl p-8 md:p-16 text-base bg-white mb-8 md:mb-16">
      <div className="title text-3xl font-bold mb-2 md:text-5xl">
        {title}
      </div>
      <div className="subtitle text-xl mb-4">
        {subtitle}
      </div>
      <div className="divider h-2 w-16 bg-blue-800 mb-6"/>
      <div className="content divide-y">
        {children}
      </div>
    </div>
  )
}

const Items = ({chapelItems}) => {
  console.log(chapelItems)
  const {titles, subtitles, bodies} = chapelItems
  return (
    <>
      {titles?.map((title, index) => {
        const subtitle = subtitles[index]
        const body = bodies[index]
        const {meta, types, content} = body
        const itemProps = {title, subtitle, index}
        return (
        <Item key={`chapel-item-${index}`} {...itemProps}>
          {meta && 
            <div className="meta text-lg mb-4">
              {meta}
            </div>
          }
          {body?.title?.map((bodyTitle, bodyIndex)=>{
            const bodyContent = content[bodyIndex]
            const bodyType = types[bodyIndex]
            return (
              <div key={`chapel-item-${index}-${bodyIndex}`} className="section">
                <div className="title text-xl text-blue-800 font-bold my-4">
                  {bodyTitle}
                </div>
                {bodyType === "text" &&
                  <div className="content mb-6 whitespace-pre-line">
                    {bodyContent}
                  </div>
                }
                {bodyType === "youtube" &&                  
                  <div className="content w-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${bodyContent}`}
                      title={bodyTitle}
                      className="w-full h-96 md:h-youtube"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                }
                {bodyType === "img" && 
                  <div className="content">
                    <img className="object-fill w-full" src={bodyContent} />
                  </div>
                }
              </div>
            )
          })}
        </Item>
      )})}
    </>
  )
}

const Body = () => {
  return (
    <div className="body flex flex-1 flex-col justify-start md:p-16 items-center bg-indigo-50 overflow-y-auto">
      <div className="md:hidden banner p-8 w-full">
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
      <Items chapelItems={chapelItems} />
    </div>
  )
}

export default Body
