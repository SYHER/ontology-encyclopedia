(window.ONTO = window.ONTO || []).push(
  {
    id: "semantic-web",
    term: "시맨틱 웹",
    en: "Semantic Web",
    category: "시맨틱 웹·표준",
    summary: "기계가 의미를 이해하도록 확장한 웹",
    definition: "시맨틱 웹은 월드와이드웹을 사람뿐 아니라 기계도 의미를 해석하고 처리할 수 있는 데이터의 웹으로 확장하려는 구상이다. 팀 버너스리가 2001년 대중적으로 제안했으며, W3C가 관련 표준을 주도해 왔다. RDF, RDFS, OWL, SPARQL 등이 핵심 기술 스택을 이룬다. 웹 상의 자원에 URI로 식별자를 부여하고 의미를 담은 링크로 연결하여 서로 다른 출처의 데이터를 통합·추론할 수 있게 하는 것이 목표다.",
    example: "여러 병원 사이트가 공개한 약품 정보를 같은 어휘로 표현해 두면, 에이전트가 사이트 경계를 넘어 특정 성분을 포함한 약품을 한 번에 찾아낼 수 있다.",
    related: ["rdf", "owl", "linked-data", "knowledge-graph"]
  },
  {
    id: "rdf",
    term: "RDF",
    en: "Resource Description Framework",
    category: "시맨틱 웹·표준",
    summary: "주어-술어-목적어로 표현하는 W3C 데이터 모델",
    definition: "RDF는 웹 상의 자원에 대한 정보를 주어-술어-목적어 형태의 트리플로 표현하는 W3C 표준 데이터 모델이다. 자원과 속성은 URI로 식별하며, 목적어에는 다른 자원이나 리터럴 값이 올 수 있다. 트리플의 집합은 방향 그래프를 이루므로 서로 다른 출처의 데이터를 쉽게 합칠 수 있다. Turtle, RDF/XML, N-Triples, JSON-LD 등 여러 직렬화 형식이 있다.",
    example: "\"ex:서울 ex:수도이다 ex:대한민국\"이라는 트리플은 서울과 대한민국의 관계를 하나의 문장으로 기록하며, 이런 트리플이 모여 그래프가 된다.",
    related: ["triple", "rdfs", "namespace-uri", "json-ld"]
  },
  {
    id: "rdfs",
    term: "RDFS",
    en: "RDF Schema",
    category: "시맨틱 웹·표준",
    summary: "RDF 위에서 클래스와 속성을 정의하는 어휘",
    definition: "RDFS는 RDF 데이터를 위한 기본 스키마 어휘로, 클래스와 속성의 계층 및 제약을 선언하는 방법을 제공한다. rdfs:Class, rdfs:subClassOf, rdfs:subPropertyOf, rdfs:domain, rdfs:range 등이 대표적 용어이다. 이를 통해 간단한 분류 체계와 속성의 적용 범위를 기술하고, 그에 따른 기초적인 추론을 수행할 수 있다. 표현력은 OWL보다 제한적이지만 가볍고 널리 쓰인다.",
    example: "\"Dog rdfs:subClassOf Animal\"과 \"rex rdf:type Dog\"이 있으면 RDFS 추론으로 rex가 Animal의 인스턴스임을 도출한다.",
    related: ["rdf", "owl", "class", "subsumption"]
  },
  {
    id: "owl",
    term: "OWL",
    en: "Web Ontology Language",
    category: "시맨틱 웹·표준",
    summary: "풍부한 의미를 기술하는 W3C 온톨로지 언어",
    definition: "OWL은 W3C가 표준화한 온톨로지 기술 언어로, RDF 위에서 클래스, 속성, 개체 간의 관계와 제약을 풍부하게 표현한다. OWL 2는 기술 논리에 기반하며 OWL 2 DL, EL, QL, RL 같은 프로파일을 제공해 표현력과 추론 복잡도를 절충할 수 있다. 개체의 동등성, 속성의 대칭·추이성, 개수 제약 등을 선언할 수 있다. 추론기를 통해 분류와 일관성 검사를 자동화하며, 개방형 세계 가정을 따른다.",
    example: "\"부모의 부모는 조부모\"처럼 속성 연쇄를 선언해 두면, 부모 관계만 입력해도 추론기가 조부모 관계를 도출한다.",
    related: ["description-logic", "reasoner", "open-world-assumption", "axiom"]
  },
  {
    id: "sparql",
    term: "SPARQL",
    en: "SPARQL Protocol and RDF Query Language",
    category: "시맨틱 웹·표준",
    summary: "RDF 그래프를 위한 W3C 질의 언어",
    definition: "SPARQL은 RDF 데이터를 질의하고 갱신하기 위한 W3C 표준 언어 및 프로토콜이다. 트리플 패턴을 그래프에 매칭하는 방식으로 동작하며, SELECT, CONSTRUCT, ASK, DESCRIBE 네 가지 질의 형식을 제공한다. 필터, 집계, 선택적 패턴, 속성 경로, 연합 질의도 지원한다. SPARQL 엔드포인트를 통해 위키데이터나 DBpedia 같은 공개 지식 그래프를 질의할 수 있다.",
    example: "\"SELECT ?c WHERE { ?c wdt:P31 wd:Q6256 }\"처럼 쓰면 위키데이터에서 국가의 인스턴스를 목록으로 가져온다.",
    related: ["rdf", "triple", "wikidata", "knowledge-graph"]
  },
  {
    id: "shacl",
    term: "SHACL",
    en: "Shapes Constraint Language",
    category: "시맨틱 웹·표준",
    summary: "RDF 그래프의 구조를 검증하는 제약 언어",
    definition: "SHACL은 RDF 그래프가 지켜야 할 조건을 셰이프로 기술하고 데이터를 검증하는 W3C 권고 표준이다. 노드 셰이프와 속성 셰이프를 통해 필수 속성, 값의 유형, 개수, 패턴 등의 제약을 표현한다. 검증 결과는 위반 항목을 담은 RDF 보고서로 출력된다. OWL이 추론에 초점을 둔다면 SHACL은 데이터 품질 검증에 적합하며, 사실상 닫힌 세계 관점의 검사를 수행한다.",
    example: "Person 셰이프에 \"이름은 문자열이며 정확히 하나\"라는 제약을 두면 이름이 없거나 둘인 인물 데이터가 위반으로 보고된다.",
    related: ["rdf", "closed-world-assumption", "consistency", "owl"]
  },
  {
    id: "skos",
    term: "SKOS",
    en: "Simple Knowledge Organization System",
    category: "시맨틱 웹·표준",
    summary: "시소러스·분류체계를 위한 RDF 어휘",
    definition: "SKOS는 시소러스, 분류체계, 주제 표목표 같은 지식 조직 체계를 RDF로 발행하기 위한 W3C 권고 어휘이다. 개념을 skos:Concept으로 두고 prefLabel, altLabel로 용어를 붙이며, broader, narrower, related로 개념 사이의 관계를 나타낸다. 서로 다른 체계의 개념을 잇는 exactMatch, closeMatch 같은 매핑 속성도 제공한다. OWL처럼 엄격한 논리 의미를 부여하지 않아 기존 어휘 자원을 가볍게 웹에 올리기 좋다.",
    example: "도서관 주제 분류에서 \"고양이\"를 \"포유류\"의 narrower로, \"냥이\"를 altLabel로 등록할 수 있다.",
    related: ["taxonomy", "rdf", "ontology-alignment", "metadata"]
  },
  {
    id: "json-ld",
    term: "JSON-LD",
    en: "JSON for Linking Data",
    category: "시맨틱 웹·표준",
    summary: "JSON으로 링크드 데이터를 표현하는 형식",
    definition: "JSON-LD는 JSON 문법으로 RDF 그래프를 직렬화하는 W3C 권고 형식이다. @context를 통해 JSON의 키를 URI로 매핑하고, @id와 @type으로 개체와 유형을 지정한다. 기존 JSON 데이터에 최소한의 변경으로 의미를 부여할 수 있어 웹 개발자가 접근하기 쉽다. 검색엔진용 구조화 데이터 마크업에 널리 쓰인다.",
    example: "웹페이지의 script 태그에 schema.org 컨텍스트를 사용한 JSON-LD를 넣어 상품의 이름과 가격을 검색엔진에 알린다.",
    related: ["rdf", "linked-data", "schema-org", "namespace-uri"]
  },
  {
    id: "linked-data",
    term: "링크드 데이터",
    en: "Linked Data",
    category: "시맨틱 웹·표준",
    summary: "URI와 링크로 연결해 공개하는 데이터 방식",
    definition: "링크드 데이터는 웹 상에서 구조화된 데이터를 공개하고 서로 연결하는 모범 사례로, 2006년 팀 버너스리가 네 가지 원칙으로 제시했다. 사물을 URI로 식별하고, HTTP URI로 조회할 수 있게 하며, RDF와 SPARQL 같은 표준으로 유용한 정보를 제공하고, 다른 URI로의 링크를 포함하라는 것이다. 이렇게 공개된 데이터셋들이 연결되어 링크드 오픈 데이터 클라우드를 이룬다. DBpedia가 그 중심 허브 역할을 해 왔다.",
    example: "한 기관의 지역 데이터가 owl:sameAs 링크로 DBpedia의 같은 도시 항목과 연결되면, 사용자는 두 출처의 정보를 함께 탐색할 수 있다.",
    related: ["semantic-web", "rdf", "dbpedia", "data-integration"]
  }
);
