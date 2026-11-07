(window.ONTO = window.ONTO || []).push(
  {
    id: "ontology",
    term: "온톨로지",
    en: "Ontology",
    category: "철학·기초 개념",
    summary: "존재하는 것과 그 관계를 명시적으로 기술한 모델",
    definition: "온톨로지는 철학에서 존재 자체를 탐구하는 학문을 뜻했고, 정보과학에서는 특정 영역의 개념과 그 관계를 형식적이고 명시적으로 정의한 공유 명세를 가리킨다. 톰 그루버는 이를 '공유된 개념화에 대한 명시적 명세'라고 정의했다. 클래스, 속성, 관계, 공리로 구성되며 사람과 기계가 같은 의미로 데이터를 해석하도록 돕는다. 추론기를 통해 암묵적 지식을 도출하는 기반이 되기도 한다.",
    example: "병원 온톨로지에서 '환자', '진단', '약물' 클래스와 '처방받다' 관계를 정의해 서로 다른 시스템의 기록을 같은 의미로 통합한다.",
    related: ["conceptualization", "knowledge-representation", "owl", "ontology-engineering"]
  },
  {
    id: "epistemology",
    term: "인식론",
    en: "Epistemology",
    category: "철학·기초 개념",
    summary: "지식의 본성과 근거, 한계를 탐구하는 철학",
    definition: "인식론은 지식이 무엇이며 어떻게 얻어지고 무엇이 정당화된 믿음인지를 연구하는 철학의 한 분야다. 이성론과 경험론의 대립, 지식의 조건인 참, 믿음, 정당화 같은 논의가 중심을 이룬다. 인공지능과 지식공학에서는 시스템이 무엇을 안다고 말할 수 있는지, 지식을 어떻게 표현하고 검증할지에 대한 기반이 된다. 열린 세계 가정처럼 불완전한 지식을 다루는 방식도 인식론적 선택과 연결된다.",
    example: "추론기가 기록되지 않은 사실을 거짓이 아니라 알 수 없는 것으로 취급하는 것은 인식론적 입장을 반영한 설계다.",
    related: ["metaphysics", "ontology", "knowledge-representation", "open-world-assumption"]
  },
  {
    id: "metaphysics",
    term: "형이상학",
    en: "Metaphysics",
    category: "철학·기초 개념",
    summary: "존재와 실재의 근본 구조를 다루는 철학",
    definition: "형이상학은 존재, 실재, 시간, 인과, 속성, 개체와 보편자 같은 근본 범주를 탐구하는 철학의 핵심 분야다. 아리스토텔레스의 범주론에서 출발해 존재론이 그 하위 영역으로 발전했다. 정보시스템의 상위 온톨로지는 이러한 형이상학적 구분, 예컨대 연속체와 사건, 속성과 실체의 구분을 공학적으로 채택한다. 따라서 모델링의 근본 가정은 흔히 형이상학적 입장에 기대고 있다.",
    example: "BFO 같은 상위 온톨로지가 지속하는 사물과 일어나는 과정을 구분하는 것은 형이상학적 구분을 모델에 반영한 예다.",
    related: ["ontology", "epistemology", "upper-ontology", "entity"]
  },
  {
    id: "taxonomy",
    term: "분류체계",
    en: "Taxonomy",
    category: "철학·기초 개념",
    summary: "개념을 상하위 계층으로 분류한 체계",
    definition: "분류체계는 대상을 공통 특성에 따라 상위와 하위의 계층 구조로 나눈 것으로, 린네의 생물 분류가 대표적이다. 주로 '~의 한 종류다' 관계 하나만으로 구성되어 온톨로지보다 단순하다. 온톨로지는 여기에 다양한 속성과 관계, 제약, 공리를 더해 표현력을 확장한다. 웹에서는 SKOS 등으로 분류체계를 표현하며 많은 온톨로지의 뼈대가 된다.",
    example: "상품 분류에서 '가전 > 주방가전 > 전기밥솥'처럼 상하위 범주를 나누는 것이 분류체계다.",
    related: ["ontology", "subsumption", "skos", "class"]
  },
  {
    id: "conceptualization",
    term: "개념화",
    en: "Conceptualization",
    category: "철학·기초 개념",
    summary: "영역을 개념과 관계로 추상화하는 과정",
    definition: "개념화는 특정 영역에 존재하는 객체, 개념, 관계를 추상적으로 정리하여 하나의 모델로 파악하는 과정이나 그 결과를 말한다. 제네세레스와 닐슨은 개념화를 영역의 대상과 그 사이의 관계 집합으로 보았고, 그루버는 온톨로지를 이 개념화의 명시적 명세로 정의했다. 같은 영역이라도 관점에 따라 다른 개념화가 가능하며, 이 선택이 모델의 용도를 좌우한다. 온톨로지 개발의 첫 단계는 이 개념화를 합의하는 일이다.",
    example: "같은 대학이라도 행정 시스템은 '학생'을 학적 기준으로, 도서관은 '이용자'로 개념화한다.",
    related: ["ontology", "knowledge-representation", "ontology-engineering", "competency-question"]
  },
  {
    id: "semantics",
    term: "의미론",
    en: "Semantics",
    category: "철학·기초 개념",
    summary: "기호와 표현이 가리키는 의미를 다루는 분야",
    definition: "의미론은 언어와 기호, 형식 표현이 무엇을 의미하는지를 연구하는 분야다. 논리학과 컴퓨터과학에서는 형식 언어의 문장이 어떤 모델에서 참이 되는지를 규정하는 모델 이론적 의미론이 쓰인다. 시맨틱 웹의 RDF와 OWL도 이런 형식적 의미론을 가져서 서로 다른 시스템이 같은 결론을 도출할 수 있다. 구문이 형식의 모양이라면 의미론은 그 형식이 가리키는 바다.",
    example: "OWL에서 어떤 클래스의 하위 클래스로 선언하면 그 클래스의 모든 인스턴스에 대해 포함 관계가 형식적으로 보장된다.",
    related: ["knowledge-representation", "first-order-logic", "semantic-web", "rdfs"]
  },
  {
    id: "knowledge-representation",
    term: "지식 표현",
    en: "Knowledge Representation",
    category: "철학·기초 개념",
    summary: "지식을 기계가 처리 가능한 형식으로 나타내는 일",
    definition: "지식 표현은 세계에 대한 지식을 컴퓨터가 저장하고 추론할 수 있는 형식으로 나타내는 인공지능의 연구 분야다. 논리, 규칙, 의미망, 프레임, 온톨로지 등이 대표적 방식이다. 좋은 표현은 표현력과 추론의 계산 복잡도 사이에서 균형을 잡아야 한다. 기술논리는 이 균형을 고려해 설계된 형식이며 OWL의 이론적 토대가 된다.",
    example: "'모든 의사는 사람이다' 같은 지식을 논리식이나 OWL 공리로 적어 두면 추론기가 새로운 사실을 이끌어 낸다.",
    related: ["ontology", "description-logic", "first-order-logic", "knowledge-graph"]
  },
  {
    id: "upper-ontology",
    term: "상위 온톨로지",
    en: "Upper Ontology",
    category: "철학·기초 개념",
    summary: "여러 영역에 공통되는 최상위 범주의 온톨로지",
    definition: "상위 온톨로지는 개체, 사건, 속성, 시간처럼 특정 도메인에 구애받지 않는 가장 일반적인 개념을 정의한 온톨로지다. BFO, DOLCE, SUMO 등이 대표적이며 서로 다른 도메인 온톨로지가 공통 기반 위에서 정렬되도록 돕는다. 이를 채택하면 일관된 모델링 원칙을 얻고 상호운용성이 높아진다. 다만 철학적 입장이 달라 단일한 합의안은 없다.",
    example: "BFO를 상위 온톨로지로 삼아 여러 생명과학 온톨로지가 '과정'과 '물질적 개체' 같은 최상위 구분을 공유한다.",
    related: ["metaphysics", "ontology-alignment", "reuse-modularization", "entity"]
  },
  {
    id: "entity",
    term: "개체",
    en: "Entity",
    category: "철학·기초 개념",
    summary: "구별 가능한 하나의 존재 또는 데이터 대상",
    definition: "개체는 세계에서 독립적으로 구별되어 식별될 수 있는 대상으로, 사람, 장소, 사물, 사건, 추상적 개념까지 포함한다. 데이터 모델링에서는 엔터티로 불리며 고유 식별자를 가진다. 온톨로지와 지식 그래프에서는 URI로 식별되고 클래스의 인스턴스로 분류되며 속성과 관계로 기술된다. 서로 다른 데이터에서 같은 개체를 찾아 연결하는 것이 개체 연결의 과제다.",
    example: "위키데이터에서 '서울'은 하나의 고유 식별자를 가진 개체이며 인구와 소속 국가 등의 속성을 가진다.",
    related: ["instance", "class", "entity-linking", "knowledge-graph"]
  }
);
