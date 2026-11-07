(window.ONTO = window.ONTO || []).push(
  {
    id: "ontology-engineering",
    term: "온톨로지 공학",
    en: "Ontology Engineering",
    category: "온톨로지 공학",
    summary: "온톨로지를 체계적으로 설계·구축·운영하는 학문",
    definition: "온톨로지 공학은 온톨로지를 개발하고 유지하는 전 과정에 방법론, 도구, 언어, 모범 사례를 적용하는 분야이다. 요구사항 명세, 개념화, 형식화, 구현, 평가, 유지보수와 같은 생애주기 활동을 포괄한다. 소프트웨어 공학의 원칙을 지식 모델링에 접목했으며, METHONTOLOGY나 NeOn 같은 방법론과 Protégé 같은 편집기, OWL 같은 표현 언어를 활용한다. 목표는 재사용 가능하고 일관성 있으며 응용 요구를 충족하는 온톨로지를 만드는 것이다.",
    example: "병원이 진료 기록 통합을 위해 도메인 전문가 인터뷰로 요구사항을 정하고, 개념 모델을 OWL로 구현한 뒤 추론기로 검증하고 버전별로 배포하는 일련의 작업이 온톨로지 공학이다.",
    related: ["methontology", "competency-question", "ontology-evaluation", "protege"]
  },
  {
    id: "methontology",
    term: "METHONTOLOGY",
    en: "METHONTOLOGY",
    category: "온톨로지 공학",
    summary: "마드리드 공대가 제안한 온톨로지 구축 방법론",
    definition: "METHONTOLOGY는 스페인 마드리드 공과대학(UPM)의 연구진이 제안한 온톨로지 개발 방법론으로, 소프트웨어 공학의 생애주기 개념을 바탕으로 한다. 명세, 지식 획득, 개념화, 통합, 구현, 평가, 문서화 같은 활동을 단계별로 정의하고, 개념화 단계에서는 용어집, 개념 분류 트리, 속성 표 등 중간 표현을 만들도록 한다. 형식 언어로 구현하기 전에 지식 수준에서 모델을 다듬는다는 점이 특징이다.",
    example: "법률 온톨로지를 만들 때 먼저 용어 사전과 개념 분류 트리를 작성해 전문가 검토를 받고, 이후에 OWL로 구현하는 순서로 진행한다.",
    related: ["ontology-engineering", "conceptualization", "competency-question", "ontology-evaluation"]
  },
  {
    id: "competency-question",
    term: "역량 질문",
    en: "Competency Question",
    category: "온톨로지 공학",
    summary: "온톨로지가 답해야 할 질문으로 요구사항을 정의",
    definition: "역량 질문은 온톨로지가 응답할 수 있어야 하는 자연어 질문으로, 온톨로지의 범위와 요구사항을 명세하는 데 쓰인다. Grüninger와 Fox가 제안한 개념이며, 설계 단계에서 어떤 개념과 관계가 필요한지 결정하는 기준이 된다. 구현 후에는 질문을 SPARQL 질의 등으로 옮겨 온톨로지가 실제로 답을 줄 수 있는지 확인하는 평가 수단으로도 활용된다. 단순한 질문에서 복합 질문으로 단계적으로 작성하는 것이 일반적이다.",
    example: "와인 온톨로지에서 \"어떤 포도 품종으로 만든 와인이 육류 요리와 어울리는가?\"를 역량 질문으로 정하면 품종, 와인, 요리, 어울림 관계가 모델에 필요함을 알 수 있다.",
    related: ["ontology-engineering", "sparql", "ontology-evaluation", "methontology"]
  },
  {
    id: "ontology-design-pattern",
    term: "온톨로지 디자인 패턴",
    en: "Ontology Design Pattern",
    category: "온톨로지 공학",
    summary: "반복되는 모델링 문제의 검증된 해법 템플릿",
    definition: "온톨로지 디자인 패턴(ODP)은 온톨로지 모델링에서 반복되는 문제에 대해 검증된 해결책을 재사용 가능한 형태로 정리한 것이다. 소프트웨어의 디자인 패턴과 유사하며, 논리적 패턴, 내용 패턴, 구조적 패턴 등으로 분류된다. 대표적으로 참여자와 사건의 관계를 표현하는 참여 패턴, n항 관계를 다루는 패턴이 있다. 패턴을 쓰면 모델 품질과 상호운용성이 높아지고 설계 시간이 줄어든다.",
    example: "사람이 회사에서 특정 기간 동안 직책을 맡았다는 사실을 표현하려고 n항 관계 패턴을 적용해 고용이라는 중간 개체를 만들고 기간과 직책을 연결한다.",
    related: ["reuse-modularization", "ontology-engineering", "owl", "class"]
  },
  {
    id: "ontology-evaluation",
    term: "온톨로지 평가",
    en: "Ontology Evaluation",
    category: "온톨로지 공학",
    summary: "온톨로지의 품질과 적합성을 검증하는 활동",
    definition: "온톨로지 평가는 구축된 온톨로지가 올바르고 목적에 적합한지 판단하는 과정이다. 구문과 논리 일관성을 검사하는 검증, 요구사항 충족 여부를 보는 타당성 확인, 응용 성능으로 측정하는 과제 기반 평가, 전문가 판단에 의한 평가 등으로 나뉜다. 추론기를 이용한 일관성 검사, 역량 질문 기반 테스트, OOPS! 같은 함정 탐지 도구가 활용된다. 평가는 개발 주기 전반에 반복 수행된다.",
    example: "추론기를 돌려 모순 클래스가 없는지 확인하고, 사전에 정의한 역량 질문 30개를 SPARQL로 실행해 모두 기대한 답이 나오는지 점검한다.",
    related: ["competency-question", "reasoner", "consistency", "ontology-engineering"]
  },
  {
    id: "ontology-learning",
    term: "온톨로지 학습",
    en: "Ontology Learning",
    category: "온톨로지 공학",
    summary: "텍스트·데이터에서 온톨로지를 자동 추출하는 기법",
    definition: "온톨로지 학습은 텍스트, 웹 문서, 정형 데이터 같은 자료로부터 온톨로지의 요소를 자동 또는 반자동으로 추출하는 연구 분야이다. 용어 추출, 동의어 발견, 개념 추출, 계층 관계 학습, 비계층 관계 추출, 공리 학습 등의 단계로 구성되며 이를 층위 구조로 설명하기도 한다. 자연어 처리와 통계, 기계학습이 쓰이고 최근에는 대규모 언어모델도 활용된다. 결과물은 오류가 있을 수 있어 전문가 검수가 필요하다.",
    example: "의학 논문 수만 건에서 질병과 증상 용어를 추출하고 상하위 관계를 추정해 초안 온톨로지를 만든 뒤 의사가 검토해 확정한다.",
    related: ["ontology-engineering", "taxonomy", "knowledge-graph", "entity-linking"]
  },
  {
    id: "ontology-versioning",
    term: "버전 관리",
    en: "Ontology Versioning",
    category: "온톨로지 공학",
    summary: "온톨로지의 변경 이력과 호환성을 관리하는 활동",
    definition: "온톨로지 버전 관리는 온톨로지가 진화하면서 생기는 변경을 식별하고 기록하며 이전 버전과의 호환성을 관리하는 일이다. OWL은 owl:versionInfo, owl:versionIRI, owl:priorVersion, owl:deprecated 같은 어노테이션을 제공한다. 클래스 삭제나 의미 변경은 이를 사용하는 데이터와 응용에 영향을 주므로 변경 유형을 구분하고 폐기 예정 표시와 변경 로그를 남기는 것이 권장된다. Git 같은 도구와 diff 도구도 쓰인다.",
    example: "버전 IRI를 날짜별로 부여해 2.0 버전을 배포하면서 삭제된 클래스를 owl:deprecated로 표시해 기존 데이터가 깨지지 않게 안내한다.",
    related: ["owl", "namespace-uri", "ontology-engineering", "reuse-modularization"]
  },
  {
    id: "protege",
    term: "Protégé",
    en: "Protégé",
    category: "온톨로지 공학",
    summary: "스탠퍼드가 개발한 대표적 오픈소스 온톨로지 편집기",
    definition: "Protégé는 스탠퍼드 대학 의생명정보학 연구센터에서 개발한 무료 오픈소스 온톨로지 편집기이다. OWL 온톨로지의 클래스, 속성, 개체, 공리를 그래픽 인터페이스로 편집할 수 있고 HermiT 같은 추론기 플러그인으로 일관성과 분류를 검사한다. 플러그인 구조라 기능 확장이 쉽고 웹 기반의 WebProtégé는 협업 편집을 지원한다. 교육과 연구, 산업 현장에서 가장 널리 쓰이는 도구 중 하나이다.",
    example: "Protégé에서 Pizza 클래스와 hasTopping 속성을 만들고 추론기를 실행해 채식 피자가 자동으로 분류되는지 확인한다.",
    related: ["owl", "reasoner", "ontology-engineering", "class"]
  },
  {
    id: "reuse-modularization",
    term: "재사용·모듈화",
    en: "Ontology Reuse and Modularization",
    category: "온톨로지 공학",
    summary: "기존 온톨로지를 재사용하고 모듈로 나눠 관리",
    definition: "온톨로지 재사용은 처음부터 만드는 대신 기존 온톨로지나 그 일부를 가져와 활용하는 것이고, 모듈화는 큰 온톨로지를 의미적으로 독립적인 부분으로 나누는 것이다. OWL의 owl:imports로 다른 온톨로지를 가져오며, 필요한 부분만 추출하는 모듈 추출 기법도 있다. 재사용은 개발 비용을 줄이고 상호운용성을 높이지만 의미 충돌과 의존성 관리 문제가 따른다. 상위 온톨로지와 공통 어휘의 사용이 권장된다.",
    example: "회사 온톨로지에서 사람 정보는 FOAF를, 메타데이터는 Dublin Core를 가져와 쓰고 자사 고유 개념만 별도 모듈로 정의한다.",
    related: ["ontology-design-pattern", "upper-ontology", "ontology-alignment", "owl"]
  }
);
