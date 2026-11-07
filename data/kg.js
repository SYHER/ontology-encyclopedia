(window.ONTO = window.ONTO || []).push(
  {
    id: "knowledge-graph",
    term: "지식 그래프",
    en: "Knowledge Graph",
    category: "지식 그래프·데이터",
    summary: "개체와 관계를 그래프로 엮은 지식 저장 구조",
    definition: "지식 그래프는 현실 세계의 개체(노드)와 그들 사이의 관계(엣지)를 그래프 형태로 표현하고, 온톨로지·스키마로 의미를 부여한 지식 베이스이다. 2012년 구글이 검색에 도입하며 대중화된 용어로, 서로 다른 출처의 데이터를 연결해 질의와 추론이 가능하게 한다. RDF 트리플 기반 모델과 속성 그래프 모델로 구현되며, 검색·추천·질의응답·데이터 통합에 널리 쓰인다. 단순한 데이터 연결을 넘어 의미 규칙과 추론을 통해 새로운 사실을 도출할 수 있다는 점이 특징이다.",
    example: "구글 검색에서 '봉준호'를 입력하면 생년, 감독 작품, 수상 이력이 정리된 정보 패널이 나타나는데, 이는 지식 그래프에서 해당 개체와 연결된 사실을 가져온 것이다.",
    related: ["ontology", "triple", "graph-database", "wikidata"]
  },
  {
    id: "property-graph",
    term: "속성 그래프",
    en: "Property Graph",
    category: "지식 그래프·데이터",
    summary: "노드와 엣지에 속성을 직접 붙이는 그래프 모델",
    definition: "속성 그래프는 노드와 방향성 있는 엣지로 구성되며, 노드와 엣지 모두 레이블(유형)과 키-값 형태의 속성을 가질 수 있는 그래프 데이터 모델이다. RDF와 달리 관계 자체에 속성을 직접 저장할 수 있어 가중치, 날짜 같은 정보를 간결하게 표현한다. Neo4j 등 다수의 그래프 데이터베이스가 채택하며 Cypher, Gremlin 같은 언어로 질의한다. 반면 전역 식별자와 형식적 의미론이 약해 데이터 공유와 추론에는 RDF가 유리하다.",
    example: "'김철수' 노드와 '서울대' 노드를 '졸업' 엣지로 잇고, 엣지에 졸업연도=2015라는 속성을 직접 붙여 저장하는 방식이다.",
    related: ["graph-database", "knowledge-graph", "triple", "rdf"]
  },
  {
    id: "graph-database",
    term: "그래프 데이터베이스",
    en: "Graph Database",
    category: "지식 그래프·데이터",
    summary: "관계 중심 탐색에 최적화된 데이터베이스",
    definition: "그래프 데이터베이스는 노드와 관계를 일급 요소로 저장하고, 관계를 따라가는 탐색 질의를 효율적으로 처리하도록 설계된 데이터베이스이다. 크게 속성 그래프 저장소와 RDF 트리플 저장소로 나뉘며, 각각 Cypher·Gremlin과 SPARQL 등을 질의 언어로 쓴다. 관계형 DB에서 여러 번의 조인이 필요한 다단계 관계 질의를 빠르게 수행할 수 있다. 사기 탐지, 추천, 네트워크 분석, 지식 그래프 구축에 활용된다.",
    example: "금융기관이 계좌와 거래를 그래프로 저장해, 의심 계좌에서 여러 단계로 연결된 계좌들을 한 번의 질의로 찾아낸다.",
    related: ["property-graph", "knowledge-graph", "sparql", "triple"]
  },
  {
    id: "entity-linking",
    term: "개체 연결",
    en: "Entity Linking",
    category: "지식 그래프·데이터",
    summary: "텍스트 속 언급을 지식베이스 개체에 연결",
    definition: "개체 연결은 텍스트에서 인식된 이름 언급(mention)을 지식 베이스에 있는 고유한 개체로 대응시키는 작업이다. 동음이의어를 구분하는 중의성 해소가 핵심이며, 문맥과 후보 개체의 정보를 비교해 가장 알맞은 항목을 고른다. 보통 언급 탐지, 후보 생성, 순위 결정의 단계를 거친다. 지식 그래프 구축, 의미 검색, 질의응답의 기반 기술로 쓰인다.",
    example: "'애플이 신제품을 공개했다'라는 문장에서 '애플'을 과일이 아닌 위키데이터의 애플(기업) 항목에 연결한다.",
    related: ["entity", "knowledge-graph", "wikidata", "dbpedia"]
  },
  {
    id: "ontology-alignment",
    term: "온톨로지 정렬",
    en: "Ontology Alignment",
    category: "지식 그래프·데이터",
    summary: "서로 다른 온톨로지의 대응 관계를 찾는 작업",
    definition: "온톨로지 정렬은 독립적으로 만들어진 두 개 이상의 온톨로지에서 의미가 같거나 유사한 클래스·속성·인스턴스 사이의 대응 관계를 찾는 작업이다. 이름 유사도, 구조 비교, 인스턴스 비교, 외부 자원 활용 같은 기법이 쓰이며 최근에는 임베딩과 언어 모델도 사용된다. 결과물은 동치, 포함 등의 관계가 기술된 매핑 집합이다. 온톨로지 매칭 또는 매핑이라고도 하며 이질적 데이터 통합의 핵심 단계이다.",
    example: "병원 A의 온톨로지 'Myocardial Infarction'과 병원 B의 '심근경색'을 동치 관계로 연결하는 매핑을 생성한다.",
    related: ["ontology", "data-integration", "skos", "reuse-modularization"]
  },
  {
    id: "data-integration",
    term: "데이터 통합",
    en: "Data Integration",
    category: "지식 그래프·데이터",
    summary: "이질적 출처의 데이터를 일관되게 결합",
    definition: "데이터 통합은 서로 다른 시스템과 형식, 스키마를 가진 데이터를 결합해 통일된 관점으로 제공하는 과정이다. 스키마 매핑, 개체 해소, 데이터 정제 등이 필요하며, ETL 방식과 가상 통합(연합 질의) 방식이 대표적이다. 온톨로지를 공통 개념 모델로 사용하면 구조뿐 아니라 의미 수준의 통합이 가능해진다. 지식 그래프는 이러한 의미 기반 통합의 결과물로 자주 활용된다.",
    example: "영업 시스템의 고객 테이블과 고객센터의 문의 로그를 공통 온톨로지로 매핑해 하나의 고객 관점으로 조회한다.",
    related: ["ontology-alignment", "knowledge-graph", "master-data", "linked-data"]
  },
  {
    id: "metadata",
    term: "메타데이터",
    en: "Metadata",
    category: "지식 그래프·데이터",
    summary: "데이터를 설명하는 데이터",
    definition: "메타데이터는 데이터의 출처, 작성자, 형식, 의미, 생성 시점 등 데이터 자체를 설명하는 정보이다. 기술적, 업무적, 운영적 메타데이터 등으로 구분되며, 데이터의 검색, 이해, 관리, 재사용을 돕는다. 더블린 코어처럼 표준 메타데이터 요소 집합이 있고, RDF로 표현해 웹에서 공유할 수도 있다. 데이터 카탈로그와 거버넌스의 토대가 된다.",
    example: "사진 파일에 담긴 촬영 일시, 카메라 기종, 위치 정보가 대표적인 메타데이터이다.",
    related: ["dublin-core", "data-catalog", "rdf", "schema-org"]
  },
  {
    id: "master-data",
    term: "마스터 데이터",
    en: "Master Data",
    category: "지식 그래프·데이터",
    summary: "조직 전반이 공유하는 핵심 기준 데이터",
    definition: "마스터 데이터는 고객, 제품, 공급업체, 조직처럼 여러 업무 시스템에서 공통으로 참조되는 핵심 개체에 관한 기준 데이터이다. 거래 데이터와 달리 변경이 드물고 오래 유지되며, 중복과 불일치를 막기 위해 단일 신뢰 출처로 관리한다. 이를 위한 체계를 마스터 데이터 관리(MDM)라 하며 식별자 부여, 중복 제거, 표준화가 포함된다. 온톨로지와 지식 그래프는 마스터 데이터에 의미 체계를 입히는 데 쓰인다.",
    example: "여러 계열사가 각자 다르게 적던 거래처 정보를 하나의 고유 코드로 통합해 전사 표준 거래처 마스터로 관리한다.",
    related: ["data-integration", "entity", "data-catalog", "metadata"]
  },
  {
    id: "data-catalog",
    term: "데이터 카탈로그",
    en: "Data Catalog",
    category: "지식 그래프·데이터",
    summary: "조직 데이터 자산의 검색 가능한 목록",
    definition: "데이터 카탈로그는 조직이 보유한 데이터 자산을 메타데이터로 정리해 검색하고 이해할 수 있게 한 목록 체계이다. 데이터의 위치, 스키마, 소유자, 품질, 계보(lineage), 용어 정의 등을 제공해 데이터 거버넌스와 셀프서비스 분석을 지원한다. 비즈니스 용어집과 온톨로지를 연결하면 의미 기반 검색이 가능해진다. W3C의 DCAT은 카탈로그를 RDF로 기술하는 표준 어휘이다.",
    example: "분석가가 카탈로그에서 '고객 이탈'을 검색해 관련 테이블, 담당자, 갱신 주기를 확인하고 바로 활용한다.",
    related: ["metadata", "master-data", "dublin-core", "linked-data"]
  }
);
