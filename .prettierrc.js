module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  importOrder: [
    '^.+\\.type$', // 타입 정의는 최상단
    '^node:', // 빌트인 모듈
    '^[a-z]', // 외부 라이브러리 (알파벳으로 시작하는 모듈)
    '^~/', // '~'로 시작하는 경로는 외부 라이브러리 뒤에
    '^@/', // 내부 모듈 (일반적으로 프로젝트 내에서 '@'로 시작하는 경로)
    '^../', // 부모 디렉토리
    '^./', // 같은 디렉토리
    '^\\./$', // 현재 디렉토리의 인덱스 파일
  ],
  importOrderSeparation: true,
};
