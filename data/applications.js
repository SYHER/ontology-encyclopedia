(window.ONTO = window.ONTO || []).push(
  {
    id: "schema-org",
    term: "schema.org",
    en: "schema.org",
    category: "산업·실제 사례",
    summary: "검색엔진이 공동 운영하는 웹 구조화 데이터 어휘집",
    definition: "schema.org는 2011년 구글, 마이크로소프트, 야후, 얀덱스가 공동으로 출범시킨 웹 페이지용 구조화 데이터 어휘집이다. Thing을 최상위로 하는 클래스 계층과 속성을 제공하며, Person, Product, Event, Recipe 같은 일반적 개념을 폭넓게 포괄한다. 마이크로데이터, RDFa, JSON-LD 등 여러 문법으로 웹 문서에 삽입할 수 있고, 현재는 커뮤니티 주도로 확장된다. 검색 결과의 리치 스니펫과 지식 패널 같은 기능의 기반이 된다.",
    example: "온라인 쇼핑몰이 상품 페이지에 JSON-LD로 Product, Offer, AggregateRating을 표기하면 검색 결과에 가격과 별점이 함께 표시된다.",
    related: ["json-ld", "semantic-web", "linked-data", "metadata"]
  },
  {
    id: "dbpedia",
    term: "DBpedia",
    en: "DBpedia",
    category: "산업·실제 사례",
    summary: "위키백과에서 추출한 대표적 링크드 데이터 지식베이스",
    definition: "DBpedia는 위키백과 문서의 인포박스와 범주 정보를 자동 추출해 RDF 형태의 구조화된 지식으로 변환한 프로젝트이다. 2007년 독일 라이프치히 대학과 베를린 자유대학 등을 중심으로 시작되었다. 자체 DBpedia 온톨로지로 클래스와 속성을 정의하고, SPARQL 엔드포인트로 질의할 수 있다. 다른 데이터셋과 owl:sameAs로 연결되어 링크드 오픈 데이터 클라우드의 중심 허브 역할을 해 왔다.",
    example: "SPARQL로 DBpedia에서 서울에서 태어난 인물 목록과 출생 연도를 한 번에 조회할 수 있다.",
    related: ["linked-data", "rdf", "sparql", "wikidata"]
  },
  {
    id: "wikidata",
    term: "Wikidata",
    en: "Wikidata",
    category: "산업·실제 사례",
    summary: "누구나 편집하는 위키미디어의 협업형 지식 그래프",
    definition: "Wikidata는 위키미디어 재단이 2012년 시작한 협업형 자유 지식 베이스로, 위키백과 등 여러 위키 프로젝트의 구조화 데이터 저장소 역할을 한다. 모든 항목은 Q로 시작하는 식별자를 가지며 속성은 P로 시작하는 식별자로 표현되고, 값마다 출처와 한정어를 붙일 수 있다. 다국어 레이블을 지원하고 CC0 라이선스로 공개된다. SPARQL 질의 서비스와 덤프를 제공해 다양한 응용에서 지식 그래프로 활용된다.",
    example: "Q42는 더글러스 애덤스를 가리키며, 직업 속성 P106 등으로 그의 정보가 구조화되어 저장된다.",
    related: ["knowledge-graph", "linked-data", "entity-linking", "dbpedia"]
  },
  {
    id: "gene-ontology",
    term: "Gene Ontology",
    en: "Gene Ontology (GO)",
    category: "산업·실제 사례",
    summary: "유전자 기능을 표준 용어로 기술하는 생물학 온톨로지",
    definition: "Gene Ontology(GO)는 유전자와 유전자 산물의 속성을 일관되게 기술하기 위한 생물학 온톨로지로, 2000년경 시작된 GO 컨소시엄이 유지한다. 분자 기능, 생물학적 과정, 세포 구성요소라는 세 가지 영역으로 구성된다. 용어들은 is_a, part_of 같은 관계로 연결된 비순환 방향 그래프를 이루며 종 간 주석을 통합할 수 있게 한다. 유전자 발현 분석에서 기능 농축 분석의 표준 자원으로 널리 쓰인다.",
    example: "RNA 분석 결과 상향 조절된 유전자들에 면역 반응 관련 GO 용어가 유의하게 많이 주석되어 있는지 농축 분석으로 확인한다.",
    related: ["taxonomy", "ontology-engineering", "metadata", "subsumption"]
  },
  {
    id: "snomed-ct",
    term: "SNOMED CT",
    en: "SNOMED CT (Systematized Nomenclature of Medicine - Clinical Terms)",
    category: "산업·실제 사례",
    summary: "임상 용어를 포괄하는 대규모 의료 온톨로지",
    definition: "SNOMED CT는 임상 진료에서 쓰는 질병, 소견, 시술, 약제 등을 아우르는 가장 포괄적인 다국어 의료 용어 체계 중 하나이다. 국제 비영리 기관 SNOMED International이 관리하며, 개념 간에 is-a 계층과 속성 관계를 정의한다. 설계는 기술논리, 특히 EL 계열에 기반하여 추론기를 통한 분류와 정의된 개념의 자동 계층화가 가능하다. 전자의무기록의 코딩과 정보 교환의 의미적 상호운용성을 위해 사용된다.",
    example: "진료 기록에 심근경색을 SNOMED CT 개념으로 코딩해 두면 허혈성 심질환 하위 개념까지 포함한 환자 검색이 가능하다.",
    related: ["description-logic", "reasoner", "subsumption", "data-integration"]
  },
  {
    id: "fibo",
    term: "FIBO",
    en: "FIBO (Financial Industry Business Ontology)",
    category: "산업·실제 사례",
    summary: "금융 업계 개념을 표준화한 비즈니스 온톨로지",
    definition: "FIBO는 EDM 카운슬과 OMG가 함께 개발하는 금융 산업용 개념 모델이자 OWL 온톨로지이다. 금융 상품, 법인, 계약, 시장, 대출 등 금융 분야의 공통 개념과 관계를 업계 합의로 정의한다. 모듈 구조로 나뉘어 있으며 개념 정의가 명확해 규제 보고와 위험 데이터 집계에 활용된다. 사내 시스템마다 다른 용어를 공통 의미로 정렬하는 데 도움이 된다.",
    example: "은행이 여러 시스템에 흩어진 거래 상대방 정보를 FIBO의 법인 개념에 매핑해 위험 노출을 통합 집계한다.",
    related: ["owl", "data-integration", "reuse-modularization", "master-data"]
  },
  {
    id: "foaf",
    term: "FOAF",
    en: "FOAF (Friend of a Friend)",
    category: "산업·실제 사례",
    summary: "사람과 관계를 기술하는 초기 시맨틱 웹 어휘",
    definition: "FOAF는 2000년경 댄 브릭클리와 리비 밀러가 만든, 사람과 그들의 관계, 활동을 RDF로 기술하는 어휘이다. Person, Agent, Organization 같은 클래스와 name, knows, mbox, homepage 같은 속성을 정의한다. 분산된 개인 프로필 문서를 서로 연결해 소셜 네트워크를 웹 상에서 표현하자는 아이디어에서 출발했다. 시맨틱 웹에서 가장 널리 재사용되는 어휘 중 하나로 꼽힌다.",
    example: "개인 홈페이지의 RDF 프로필에 foaf:knows로 지인을 연결하면 서로 다른 사이트의 프로필이 하나의 그래프로 이어진다.",
    related: ["rdf", "semantic-web", "linked-data", "namespace-uri"]
  },
  {
    id: "dublin-core",
    term: "더블린 코어",
    en: "Dublin Core",
    category: "산업·실제 사례",
    summary: "자원 설명을 위한 범용 메타데이터 요소 집합",
    definition: "더블린 코어는 1995년 미국 오하이오주 더블린에서 열린 워크숍에서 시작된 범용 메타데이터 표준으로, DCMI가 관리한다. 제목, 작성자, 주제, 설명, 날짜, 형식, 식별자 등 15개의 기본 요소로 이루어져 있고, 이후 dcterms 이름공간에서 더 많은 속성과 클래스로 확장되었다. 도서관, 아카이브, 웹 자원 등 다양한 분야에서 문서와 자료를 기술하는 데 쓰인다. ISO 15836과 같은 표준으로도 채택되었다.",
    example: "디지털 아카이브가 각 문서의 제목, 저자, 발행일을 dc:title, dc:creator, dc:date로 기술해 검색과 교환에 활용한다.",
    related: ["metadata", "namespace-uri", "rdf", "data-catalog"]
  },
  {
    id: "palantir-ontology",
    term: "팔란티어 온톨로지",
    en: "Palantir Ontology",
    category: "산업·실제 사례",
    summary: "기업 데이터와 업무 행동을 잇는 운영형 온톨로지",
    definition: "팔란티어 온톨로지는 팔란티어 파운드리 플랫폼에서 조직의 데이터를 객체, 속성, 링크로 모델링한 의미 계층이다. 학술적 온톨로지와 달리 실제 데이터셋과 연결되고, 객체에 대해 수행할 수 있는 액션과 함수, 권한까지 포함하는 운영 중심 설계가 특징이다. 이를 통해 분석뿐 아니라 업무 의사결정과 시스템 쓰기 작업을 한곳에서 처리한다. 최근에는 AI 에이전트가 기업 데이터를 이해하고 행동하는 기반으로도 활용된다.",
    example: "항공사가 항공기, 정비 이력, 부품 재고를 객체로 정의하고 정비 일정 변경 액션을 온톨로지에서 바로 실행한다.",
    related: ["ontology", "knowledge-graph", "ai-agent-ontology", "data-integration"]
  }
);
