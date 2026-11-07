(window.ONTO = window.ONTO || []).push(
  {
    id: "neuro-symbolic-ai",
    term: "뉴로-심볼릭 AI",
    en: "Neuro-Symbolic AI",
    category: "AI·LLM 연계",
    summary: "신경망의 학습력과 기호 추론을 결합한 AI",
    definition: "뉴로-심볼릭 AI는 데이터에서 패턴을 학습하는 신경망과, 명시적 지식 표현과 논리 추론을 수행하는 기호 시스템을 결합하는 접근이다. 신경망은 비정형 데이터 처리에 강하지만 해석이 어렵고, 기호 시스템은 설명과 검증이 쉽지만 지식 확보가 어렵다는 상호 보완성이 출발점이다. 온톨로지와 지식 그래프는 기호 측의 지식원으로 쓰이며, 추론기와 제약 규칙이 신경망 출력의 일관성을 점검하는 데 활용된다. 최근에는 LLM이 질의를 SPARQL 등 형식 언어로 변환하고 추론 결과를 다시 자연어로 설명하는 구조가 대표적이다.",
    example: "LLM이 사용자의 질문을 SPARQL 질의로 번역하고, 지식 그래프에서 추론된 결과를 받아 근거와 함께 답변을 생성한다.",
    related: ["knowledge-graph", "inference", "llm-grounding", "knowledge-representation"]
  },
  {
    id: "graphrag",
    term: "GraphRAG",
    en: "GraphRAG",
    category: "AI·LLM 연계",
    summary: "지식 그래프를 활용해 검색을 보강하는 RAG",
    definition: "GraphRAG는 검색 증강 생성(RAG)에서 단순한 문서 조각 유사도 검색 대신 지식 그래프의 개체와 관계 구조를 활용하는 방식이다. 문서에서 개체와 관계를 추출해 그래프를 만들고, 질의와 관련된 하위 그래프나 커뮤니티 요약을 LLM의 문맥으로 제공한다. 여러 문서에 흩어진 정보를 연결하는 다단계 질문이나 전체 말뭉치에 대한 요약형 질문에서 기존 벡터 검색보다 유리한 것으로 보고된다. 그래프 구축 비용과 품질 관리가 필요하다는 점은 부담이다.",
    example: "사내 계약서와 보고서에서 추출한 회사, 인물, 계약 관계 그래프를 탐색해 특정 공급사의 간접 거래 관계를 묻는 질문에 답한다.",
    related: ["rag", "knowledge-graph", "graph-database", "entity-linking"]
  },
  {
    id: "rag",
    term: "RAG",
    en: "Retrieval-Augmented Generation",
    category: "AI·LLM 연계",
    summary: "외부 지식을 검색해 생성에 반영하는 기법",
    definition: "RAG(검색 증강 생성)는 LLM이 답변을 생성하기 전에 외부 문서나 데이터베이스에서 관련 정보를 검색하고, 이를 프롬프트에 포함해 응답하도록 하는 기법이다. 모델의 학습 시점 이후 정보나 사내 비공개 자료를 재학습 없이 반영할 수 있고, 출처를 제시할 수 있어 환각을 줄이는 데 도움이 된다. 일반적으로 문서를 청크로 나눠 임베딩하고 벡터 검색으로 상위 결과를 가져오는 구조를 쓴다. 검색 품질이 낮으면 답변 품질도 함께 떨어진다는 한계가 있다.",
    example: "사내 규정집을 벡터 색인에 넣어 두고, 직원의 휴가 규정 질문에 관련 조항을 찾아 인용하며 답하게 한다.",
    related: ["graphrag", "semantic-search", "hallucination", "llm-grounding"]
  },
  {
    id: "knowledge-graph-embedding",
    term: "지식 그래프 임베딩",
    en: "Knowledge Graph Embedding",
    category: "AI·LLM 연계",
    summary: "개체와 관계를 벡터 공간에 표현하는 기법",
    definition: "지식 그래프 임베딩은 지식 그래프의 개체와 관계를 저차원 연속 벡터로 변환해 표현하는 기법이다. TransE처럼 주어와 관계의 합이 목적어에 가깝도록 학습하는 모델이나 DistMult, ComplEx, 그래프 신경망 기반 모델이 대표적이다. 학습된 벡터로 누락된 트리플을 예측하는 링크 예측, 개체 분류, 유사 개체 탐색을 수행할 수 있다. 다만 벡터는 기호적 의미나 논리적 제약을 직접 보장하지 않으므로 결과 검증이 필요하다.",
    example: "위키데이터의 트리플로 임베딩을 학습해, 어떤 인물의 출생지처럼 비어 있는 관계 값을 후보로 예측한다.",
    related: ["knowledge-graph", "triple", "ontology-learning", "neuro-symbolic-ai"]
  },
  {
    id: "llm-grounding",
    term: "LLM 그라운딩",
    en: "LLM Grounding",
    category: "AI·LLM 연계",
    summary: "LLM 응답을 검증 가능한 지식에 연결하는 것",
    definition: "LLM 그라운딩은 언어 모델의 출력을 신뢰할 수 있는 외부 지식원이나 실제 데이터에 연결해 근거를 갖추게 하는 것을 말한다. 검색 증강, 지식 그래프 질의, 도구 호출, 온톨로지 기반 용어 정의 제공 등이 방법으로 쓰인다. 온톨로지는 모델이 쓰는 용어의 의미와 관계를 일관되게 고정해 주고, 응답 속 개체를 식별자에 연결해 확인 가능하게 한다. 그라운딩은 환각을 줄이고 출처 추적을 가능하게 하지만 완전히 제거하지는 못한다.",
    example: "의료 챗봇이 약물명을 SNOMED CT 개념 식별자에 연결하고 해당 개념의 정의와 관계에 근거해 답한다.",
    related: ["hallucination", "rag", "entity-linking", "knowledge-graph"]
  },
  {
    id: "semantic-search",
    term: "시맨틱 검색",
    en: "Semantic Search",
    category: "AI·LLM 연계",
    summary: "키워드가 아닌 의미와 의도를 기반으로 하는 검색",
    definition: "시맨틱 검색은 단어의 일치 여부가 아니라 질의와 문서의 의미, 사용자 의도를 기준으로 결과를 찾는 검색 방식이다. 임베딩 벡터 유사도를 쓰는 방식과, 온톨로지와 지식 그래프로 동의어, 상위 개념, 관계를 확장하는 방식이 있으며 두 가지를 함께 쓰기도 한다. 동의어나 표현이 달라도 관련 문서를 찾을 수 있고 개체 단위로 답을 반환할 수 있다. 반면 정확한 고유명사나 코드 검색에서는 키워드 검색과 병행하는 하이브리드 구성이 흔하다.",
    example: "심장마비로 검색하면 온톨로지의 동의 관계를 따라 심근경색을 다룬 문서도 함께 찾아 준다.",
    related: ["rag", "skos", "knowledge-graph", "entity-linking"]
  },
  {
    id: "ai-agent-ontology",
    term: "에이전트 온톨로지",
    en: "AI Agent Ontology",
    category: "AI·LLM 연계",
    summary: "AI 에이전트의 역할·도구·행동을 정의한 온톨로지",
    definition: "에이전트 온톨로지는 AI 에이전트가 다루는 목표, 역할, 도구, 행동, 권한, 환경 상태 등을 형식적으로 정의한 개념 체계다. 여러 에이전트나 시스템이 같은 용어로 작업을 주고받게 해 상호운용성을 높이고, 도구 호출의 입력과 출력, 허용 범위를 명확히 규정하는 데 쓰인다. 조직의 객체와 행동을 온톨로지로 모델링해 에이전트가 데이터를 읽고 조치를 실행하게 하는 방식이 산업 플랫폼에서 활용된다. 제약과 규칙을 명시하면 에이전트 행동의 검증과 감사도 쉬워진다.",
    example: "물류 에이전트가 주문, 재고, 배송이라는 객체와 재배정, 취소 같은 허용 행동을 온톨로지로 정의해 두고 그 범위 안에서만 작업을 수행한다.",
    related: ["palantir-ontology", "knowledge-representation", "llm-grounding", "axiom"]
  },
  {
    id: "hallucination",
    term: "환각",
    en: "Hallucination",
    category: "AI·LLM 연계",
    summary: "그럴듯하지만 사실과 다른 AI 생성 내용",
    definition: "환각은 생성형 AI가 사실이 아니거나 근거 없는 내용을 그럴듯하게 만들어 내는 현상이다. 언어 모델이 다음 토큰의 확률을 예측하는 방식으로 작동하고 사실 검증 장치가 내장되어 있지 않은 점이 주된 원인으로 꼽힌다. 존재하지 않는 논문이나 판례를 인용하는 경우가 흔한 사례다. 완화책으로 RAG, 지식 그래프 그라운딩, 출처 표기, 온톨로지 제약 기반 검증이 쓰이지만 완전한 제거는 어렵다.",
    example: "모델이 실재하지 않는 논문의 저자와 제목을 만들어 인용하는 것을, 지식 그래프에서 해당 개체의 존재를 확인해 걸러낸다.",
    related: ["llm-grounding", "rag", "consistency", "explainability"]
  },
  {
    id: "explainability",
    term: "설명가능성",
    en: "Explainability",
    category: "AI·LLM 연계",
    summary: "AI의 판단 근거를 사람이 이해할 수 있는 정도",
    definition: "설명가능성은 AI 시스템이 내린 결정의 이유와 과정을 사람이 이해하고 검토할 수 있는 정도를 뜻한다. 심층 신경망은 내부 표현이 불투명해 사후 설명 기법이 필요한 반면, 규칙과 온톨로지 기반 추론은 적용된 공리와 추론 경로를 그대로 제시할 수 있다. 이 때문에 지식 그래프와 추론기를 결합하면 결론에 이른 근거 사슬을 보여 줄 수 있어 뉴로-심볼릭 접근의 장점으로 거론된다. 금융, 의료, 규제 분야에서는 설명 요구가 특히 강하다.",
    example: "대출 심사 시스템이 이 신청자는 소득 조건 규칙과 부채 비율 규칙에 따라 거절되었다는 추론 경로를 함께 보여 준다.",
    related: ["inference", "reasoner", "neuro-symbolic-ai", "hallucination"]
  }
);
