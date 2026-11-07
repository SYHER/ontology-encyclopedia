(window.ONTO = window.ONTO || []).push(
  {
    id: "description-logic",
    term: "기술 논리",
    en: "Description Logic",
    category: "논리·추론",
    summary: "OWL의 이론적 토대가 되는 결정 가능한 논리 계열",
    definition: "기술 논리(DL)는 개념(클래스), 역할(속성), 개체를 이용해 한 영역의 지식을 형식적으로 기술하는 논리 체계의 집합이다. 1차 논리의 결정 가능한 부분집합에 해당하며, 표현력과 추론의 계산 복잡도 사이의 균형에 따라 ALC, SHOIN, SROIQ 등 여러 변종이 있다. 지식베이스는 용어 상자(TBox)와 사실 상자(ABox)로 나뉜다. OWL DL은 SROIQ 계열에 기반하므로 추론기를 통해 포섭, 일관성, 인스턴스 분류 같은 추론을 자동으로 수행할 수 있다.",
    example: "TBox에 '어머니 ≡ 여성 ⊓ ∃자녀.사람'을 정의하고 ABox에 '영희는 여성이고 철수가 영희의 자녀'라고 기술하면, 영희가 어머니임을 추론한다.",
    related: ["owl", "first-order-logic", "reasoner", "subsumption"]
  },
  {
    id: "first-order-logic",
    term: "1차 논리",
    en: "First-Order Logic",
    category: "논리·추론",
    summary: "개체, 술어, 양화사로 지식을 표현하는 형식 논리",
    definition: "1차 논리(술어 논리)는 개체를 대상으로 하는 변수, 술어, 함수, 논리 연결사와 전칭(∀)·존재(∃) 양화사를 사용해 명제를 표현하는 형식 논리이다. 명제 논리보다 표현력이 훨씬 크며 지식 표현과 자동 정리 증명의 기초가 된다. 다만 일반적으로 결정 불가능하며, 타당한 식은 반증 가능하나 모든 경우를 판정하는 알고리즘은 없다. 기술 논리와 규칙 언어는 이를 제한하여 추론 가능성을 확보한 형태로 볼 수 있다.",
    example: "'모든 사람은 죽는다'는 ∀x(사람(x)→죽는다(x))로, '소크라테스는 사람이다'와 결합하면 소크라테스가 죽는다는 결론을 얻는다.",
    related: ["description-logic", "knowledge-representation", "inference", "axiom"]
  },
  {
    id: "reasoner",
    term: "추론기",
    en: "Reasoner",
    category: "논리·추론",
    summary: "온톨로지에서 암묵적 지식을 도출하는 소프트웨어",
    definition: "추론기는 온톨로지의 공리와 데이터로부터 논리적으로 따라 나오는 지식을 자동으로 계산하는 소프트웨어이다. 대표적인 기능은 일관성 검사, 클래스 포섭 계층 계산, 개체의 유형 분류, 만족 불가능한 클래스 탐지이다. HermiT, Pellet, FaCT++, ELK 등이 널리 쓰이며 Protégé 같은 편집 도구와 연동된다. 표현력이 큰 온톨로지일수록 추론 비용이 커지므로, 목적에 맞는 OWL 프로파일을 고르는 것이 중요하다.",
    example: "Protégé에서 HermiT를 실행하면 '채식피자'가 '피자'의 하위 클래스로 자동 분류되고, 모순된 클래스는 빨간색으로 표시된다.",
    related: ["description-logic", "owl", "consistency", "protege"]
  },
  {
    id: "open-world-assumption",
    term: "개방 세계 가정",
    en: "Open World Assumption",
    category: "논리·추론",
    summary: "명시되지 않은 사실을 거짓이 아닌 미지로 보는 가정",
    definition: "개방 세계 가정(OWA)은 지식베이스에 기술되지 않은 사실을 거짓으로 단정하지 않고 아직 알려지지 않은 것으로 취급하는 가정이다. 웹처럼 정보가 분산되고 불완전한 환경에 적합하며 RDF, OWL의 표준 의미론이 이를 따른다. 따라서 어떤 진술이 없다는 사실만으로 부정 결론을 낼 수 없고, 제약을 검증하려면 SHACL 같은 별도 수단이 필요하다. 또한 이름이 다르다고 해서 서로 다른 개체라고 가정하지 않는다.",
    example: "온톨로지에 '철수는 자녀가 있다'만 적혀 있어도, 개방 세계에서는 그 자녀가 누구인지 몰라도 되고 자녀가 한 명뿐이라고 결론지을 수도 없다.",
    related: ["closed-world-assumption", "owl", "shacl", "inference"]
  },
  {
    id: "closed-world-assumption",
    term: "폐쇄 세계 가정",
    en: "Closed World Assumption",
    category: "논리·추론",
    summary: "알려지지 않은 사실을 거짓으로 간주하는 가정",
    definition: "폐쇄 세계 가정(CWA)은 데이터베이스나 지식베이스에서 참으로 증명되지 않는 것은 거짓이라고 간주하는 가정이다. 관계형 데이터베이스, Prolog의 실패에 의한 부정, SQL 질의가 전형적인 예이다. 정보가 완결된 닫힌 영역에서 효율적이고 직관적인 결과를 주지만, 불완전한 정보를 다루는 환경에서는 잘못된 결론을 낼 수 있다. 시맨틱 웹에서는 SHACL 검증이나 SPARQL의 부정 패턴으로 이와 유사한 동작을 구현한다.",
    example: "항공편 테이블에 '서울-부산 14:00' 행이 없다면 폐쇄 세계에서는 그 시간에 항공편이 없다고 답한다.",
    related: ["open-world-assumption", "graph-database", "sparql", "shacl"]
  },
  {
    id: "subsumption",
    term: "포섭",
    en: "Subsumption",
    category: "논리·추론",
    summary: "한 개념이 다른 개념을 포함하는 상하위 관계",
    definition: "포섭은 개념 C의 모든 인스턴스가 항상 개념 D의 인스턴스일 때 D가 C를 포섭한다고 하는 관계로, 기술 논리의 핵심 추론 과제이다. OWL에서는 rdfs:subClassOf 공리에 해당하며, 명시된 관계뿐 아니라 정의로부터 암묵적으로 도출되는 관계도 포함한다. 추론기는 이를 계산해 클래스 계층(분류 체계)을 자동으로 구축한다. 포섭 판정은 개념의 만족 가능성 검사로 환원될 수 있다.",
    example: "'고양이 ⊑ 포유류 ⊑ 동물'이면 고양이는 동물에 포섭되므로, 모든 고양이 개체는 동물로도 추론된다.",
    related: ["description-logic", "class", "reasoner", "taxonomy"]
  },
  {
    id: "inference",
    term: "추론",
    en: "Inference",
    category: "논리·추론",
    summary: "기존 지식에서 새로운 지식을 논리적으로 도출함",
    definition: "추론은 명시적으로 주어진 사실과 공리, 규칙으로부터 새로운 결론을 도출하는 과정이다. 온톨로지에서는 연역 추론이 중심이며, 전제가 참이면 결론도 반드시 참이 되는 건전한 방식으로 수행된다. 전방향 추론은 새 사실을 미리 계산해 저장하고, 후방향 추론은 질의 시점에 필요한 만큼 도출한다. 추론을 통해 데이터에 직접 적히지 않은 계층 관계, 유형, 속성 값을 얻을 수 있어 질의와 통합의 품질이 높아진다.",
    example: "'A는 B의 부모'와 '부모는 조상의 하위 속성'이 있으면, 'A는 B의 조상'이라는 사실이 추론된다.",
    related: ["reasoner", "first-order-logic", "rule-swrl", "axiom"]
  },
  {
    id: "rule-swrl",
    term: "규칙(SWRL)",
    en: "Semantic Web Rule Language (SWRL)",
    category: "논리·추론",
    summary: "OWL에 if-then 규칙을 더하는 시맨틱 웹 규칙 언어",
    definition: "SWRL은 OWL과 RuleML 계열 규칙 언어를 결합해 'if 몸체 then 머리' 형태의 호른 절 규칙을 온톨로지에 추가하는 W3C 제안 언어이다. 몸체의 조건이 모두 만족되면 머리의 결론이 성립하며, 클래스와 속성 원자, 변수, 내장 함수를 쓸 수 있다. OWL만으로 표현하기 어려운 속성 체인 같은 관계를 기술할 수 있다. 그러나 완전한 SWRL은 결정 불가능하여, 실제로는 DL-safe 규칙으로 제한해 사용한다.",
    example: "'부모(?x,?y) ∧ 형제(?y,?z) → 삼촌(?x,?z)'가 아닌 방향으로, 'hasParent(?x,?y) ∧ hasBrother(?y,?z) → hasUncle(?x,?z)'로 삼촌 관계를 도출한다.",
    related: ["owl", "inference", "reasoner", "first-order-logic"]
  },
  {
    id: "consistency",
    term: "일관성",
    en: "Consistency",
    category: "논리·추론",
    summary: "온톨로지 내에 논리적 모순이 없는 상태",
    definition: "일관성은 온톨로지의 공리와 사실을 모두 참으로 만드는 해석(모델)이 하나 이상 존재하는 성질이다. 모순이 있으면 온톨로지는 비일관적이며, 논리상 모든 결론이 도출되는 폭발이 일어나 추론이 무의미해진다. 이와 구별되는 개념으로, 인스턴스를 가질 수 없는 클래스는 만족 불가능하다고 하고 온톨로지 전체는 일관적일 수 있다. 추론기의 일관성 검사는 온톨로지 개발과 통합 단계에서 오류를 찾는 기본 수단이다.",
    example: "'채식주의자'와 '육식동물'을 서로소로 선언하고 한 개체를 둘 모두로 분류하면, 추론기가 비일관성을 보고한다.",
    related: ["reasoner", "axiom", "ontology-evaluation", "description-logic"]
  }
);
