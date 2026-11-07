(window.ONTO = window.ONTO || []).push(
  {
    id: "class",
    term: "클래스",
    en: "Class",
    category: "모델링 요소",
    summary: "공통 특성을 지닌 개체들의 집합을 나타내는 개념",
    definition: "클래스는 공통된 특성을 공유하는 개체(인스턴스)들의 집합 또는 범주를 나타내는 온톨로지의 기본 모델링 요소이다. OWL에서는 owl:Class로, RDFS에서는 rdfs:Class로 선언하며 수학적으로는 집합에 대응한다. 클래스 사이에는 rdfs:subClassOf로 상하위 계층을 만들 수 있고, 하위 클래스의 인스턴스는 상위 클래스의 인스턴스로도 간주된다. 클래스는 이름 있는 클래스뿐 아니라 제약이나 집합 연산으로 정의되는 복합 클래스일 수도 있다.",
    example: "'사람'과 '직원'을 클래스로 정의하고 직원을 사람의 하위 클래스로 두면, 직원인 홍길동은 자동으로 사람으로도 분류된다.",
    related: ["instance", "subsumption", "owl", "taxonomy"]
  },
  {
    id: "instance",
    term: "인스턴스",
    en: "Instance (Individual)",
    category: "모델링 요소",
    summary: "클래스에 속하는 구체적인 개별 개체",
    definition: "인스턴스는 클래스에 속하는 구체적이고 개별적인 개체로, OWL에서는 개체(individual)라고도 부른다. 클래스가 개념의 틀이라면 인스턴스는 그 틀에 해당하는 실제 사물, 사람, 사건 등이다. 인스턴스는 rdf:type으로 클래스와 연결되며, 속성을 통해 다른 인스턴스나 값과 관계를 맺는다. 이러한 인스턴스 수준의 사실 모음을 흔히 ABox라 하고, 클래스와 속성 정의는 TBox라고 한다.",
    example: "'서울'은 '도시' 클래스의 인스턴스이며, '대한민국의 수도'라는 관계로 '대한민국' 인스턴스와 연결된다.",
    related: ["class", "entity", "triple", "knowledge-graph"]
  },
  {
    id: "property",
    term: "속성",
    en: "Property",
    category: "모델링 요소",
    summary: "개체 간 관계나 개체의 특징을 표현하는 요소",
    definition: "속성은 개체와 개체, 또는 개체와 값 사이의 관계를 표현하는 모델링 요소로 RDF에서는 술어(predicate) 자리에 놓인다. RDF 체계에서 속성은 rdf:Property로 선언하며, rdfs:domain과 rdfs:range로 주어와 목적어가 속할 클래스나 값의 범위를 제한할 수 있다. 속성도 rdfs:subPropertyOf로 계층을 이룬다. OWL은 속성을 객체 속성과 데이터 속성으로 구분하고, 대칭·추이·역관계 같은 특성을 추가로 선언하게 한다.",
    example: "'근무한다' 속성은 직원을 주어로, 회사를 목적어로 연결하며 domain은 직원, range는 회사로 지정할 수 있다.",
    related: ["object-property", "data-property", "rdfs", "triple"]
  },
  {
    id: "object-property",
    term: "객체 속성",
    en: "Object Property",
    category: "모델링 요소",
    summary: "개체와 개체를 연결하는 속성",
    definition: "객체 속성은 OWL에서 한 개체(인스턴스)를 다른 개체와 연결하는 속성으로 owl:ObjectProperty로 선언한다. 목적어가 리터럴 값이 아니라 다른 개체이므로 그래프의 노드 사이 간선에 해당한다. 역관계(inverseOf), 대칭, 비대칭, 추이, 함수적 속성 등의 특성을 부여해 추론에 활용할 수 있다. 속성 체인을 정의하면 여러 관계를 합성해 새로운 관계를 도출할 수도 있다.",
    example: "'hasParent'를 객체 속성으로 선언하고 '홍길동 hasParent 홍판서'처럼 두 사람 개체를 연결한다.",
    related: ["property", "data-property", "owl", "inference"]
  },
  {
    id: "data-property",
    term: "데이터 속성",
    en: "Data Property",
    category: "모델링 요소",
    summary: "개체와 리터럴 값을 연결하는 속성",
    definition: "데이터 속성은 OWL에서 개체를 문자열, 숫자, 날짜 같은 리터럴 값과 연결하는 속성으로 owl:DatatypeProperty로 선언한다. 값의 범위(range)는 xsd:string, xsd:integer, xsd:date 등 XML Schema 데이터 타입으로 지정하는 것이 일반적이다. 객체 속성과 달리 값은 그래프의 노드로 이어지는 관계가 아니라 개체에 붙는 단순 값이다. 함수적 데이터 속성으로 선언하면 개체당 값이 하나뿐임을 표현할 수 있다.",
    example: "'생년월일'을 데이터 속성으로 두고 range를 xsd:date로 지정해 '홍길동 생년월일 1990-05-01'이라고 기술한다.",
    related: ["property", "object-property", "owl", "rdf"]
  },
  {
    id: "axiom",
    term: "공리",
    en: "Axiom",
    category: "모델링 요소",
    summary: "온톨로지에서 참으로 선언되는 기본 진술",
    definition: "공리는 온톨로지가 참이라고 선언하는 기본 진술로, 그로부터 다른 사실을 추론하는 출발점이 된다. OWL 2에서는 SubClassOf, EquivalentClasses, DisjointClasses, ClassAssertion, PropertyAssertion 같은 형태로 표현되며 클래스 공리, 속성 공리, 개체 공리로 나뉜다. 공리는 용어의 의미를 제한하여 모호성을 줄이고, 추론기가 일관성 검사와 분류를 수행하는 근거가 된다. 공리가 서로 모순되면 온톨로지는 비일관적이 된다.",
    example: "'사람과 기업은 서로소(DisjointClasses)다'라는 공리를 두면, 한 개체를 둘 다에 속하게 한 데이터는 모순으로 탐지된다.",
    related: ["owl", "reasoner", "consistency", "description-logic"]
  },
  {
    id: "restriction",
    term: "제약",
    en: "Restriction",
    category: "모델링 요소",
    summary: "속성 사용 방식으로 클래스를 정의·제한하는 구성",
    definition: "제약은 OWL에서 특정 속성에 대한 조건을 만족하는 개체들의 집합을 익명 클래스로 기술하는 구성이다. 대표적으로 someValuesFrom(존재 제약), allValuesFrom(전체 제약), hasValue, 그리고 minCardinality, maxCardinality, cardinality 같은 개수 제약이 있다. 이를 subClassOf나 equivalentClass와 결합하면 클래스의 필요조건이나 필요충분조건을 정의할 수 있다. 제약은 설명 논리의 존재 한정·전칭 한정 구성자에 대응한다. 참고로 SHACL의 제약은 데이터 검증을 위한 것으로 의미가 다르다.",
    example: "'부모'를 'hasChild 속성으로 사람 하나 이상을 가진 개체'(someValuesFrom 또는 minCardinality 1)로 정의한다.",
    related: ["owl", "class", "description-logic", "shacl"]
  },
  {
    id: "triple",
    term: "트리플",
    en: "Triple",
    category: "모델링 요소",
    summary: "주어-술어-목적어로 이루어진 RDF의 기본 문장",
    definition: "트리플은 주어(subject), 술어(predicate), 목적어(object) 세 요소로 구성된 RDF의 기본 데이터 단위로, 하나의 사실을 나타낸다. 주어는 URI 또는 빈 노드, 술어는 URI, 목적어는 URI, 빈 노드 또는 리터럴이 될 수 있다. 여러 트리플이 모이면 노드와 방향 간선으로 이루어진 레이블 그래프가 형성된다. 트리플은 Turtle, RDF/XML, N-Triples, JSON-LD 등 다양한 구문으로 직렬화되며 SPARQL로 질의한다.",
    example: "<ex:서울> <ex:수도> <ex:대한민국> 은 '서울은 대한민국의 수도다'라는 하나의 트리플이다.",
    related: ["rdf", "sparql", "knowledge-graph", "namespace-uri"]
  },
  {
    id: "namespace-uri",
    term: "네임스페이스·URI",
    en: "Namespace and URI",
    category: "모델링 요소",
    summary: "자원을 전역적으로 식별하고 이름 충돌을 막는 체계",
    definition: "시맨틱 웹에서는 클래스, 속성, 개체 등 모든 자원을 URI(IRI)로 전역적으로 식별한다. 네임스페이스는 공통 URI 접두부를 묶어 이름을 구분하는 체계로, 서로 다른 어휘의 용어가 충돌하지 않게 한다. Turtle 등에서는 접두사(prefix)를 선언해 긴 URI를 짧게 쓰며, 예를 들어 foaf:name은 FOAF 네임스페이스에 속한 name을 뜻한다. 안정적이고 해석 가능한 URI를 설계하는 것은 링크드 데이터와 온톨로지 재사용의 기초이다.",
    example: "접두사 foaf를 http://xmlns.com/foaf/0.1/ 로 선언하면 foaf:Person으로 FOAF 어휘의 Person 클래스를 가리킬 수 있다.",
    related: ["rdf", "linked-data", "foaf", "reuse-modularization"]
  }
);
