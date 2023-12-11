# 페어매칭관리 애플리케이션

# 🚀 기능 요구 사항

> 기능 구현 완료시 기능 목록 옆에 '⭕️' 표시가 되어있습니다

### - 프로그램을 시작하면 기능의 종류를 출력하고 그 중 하나의 입력을 받는다.

```
기능을 선택하세요.
1. 페어 매칭
2. 페어 조회
3. 페어 초기화
Q. 종료
```

### - 1 (페어 매칭)을 선택했을시에, 과정과 미션을 출력하고, 매칭하고자 하는 과정, 레벨, 미션을 입력받는다.

**❗️ 알아두어야할점 ❗️**

1. 매칭을 이미 전에 한적이 있다면, 메세지를 출력하고 입력값을 받아야한다.

```
매칭 정보가 있습니다. 다시 매칭하시겠습니까?
네 | 아니오
아니오
```

**❗️ 예외사항 ❗️**

1. 입력은 ","을 기준으로 입력받고 그 외의 입력시에 예외처리한다.
2. 입력 받은 순서가 과정, 레벨, 미션 순이 아닐경우에 예외처리한다.

### - 페어 매칭 구현 방법

1. 크루들의 이름 목록을 List<String> 형태로 준비한다.

2. 크루 목록의 순서를 랜덤으로 섞는다. 이 때 `camp.nextstep.edu.missionutils.Randoms`의 shuffle 메서드를 활용해야 한다.

3. 랜덤으로 섞인 페어 목록에서 페어 매칭을 할 때 앞에서부터 순서대로 두명씩 페어를 맺는다.

4. 홀수인 경우 마지막 남은 크루는 마지막 페어에 포함시킨다.

5. 같은 레벨에서 이미 페어로 만난적이 있는 크루끼리 다시 페어로 매칭 된다면 크루 목록의 순서를 다시 랜덤으로 섞어서 매칭을 시도한다.

6. 3회 시도까지 매칭이 되지 않거나 매칭을 할 수 있는 경우의 수가 없으면 에러 메시지를 출력한다.

# 🎯 프로그래밍 요구 사항

- <details>
    <summary> .nvmrc 에 노드 버전 기재</summary>

  `v18.17.1`
  </details>

- <details>
    <summary>eslint 룰 적용</summary>

  `npm install --save-dev eslint eslint-plugin-jsdoc@latest eslint-plugin-jest@latest eslint-plugin-prettier@latest eslint-config-prettier @babel/eslint-parser` 로 설치하고 .eslintrc.cjs 파일을 만들어서 룰 적용
  </details>

- <details>
    <summary> indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다</summary>

  eslint 에 `max-depth': ['error', 2]` 룰 추가
  </details>

- <details>
  <summary>JavaScript 코드 컨벤션을 지키면서 프로그래밍 한다</summary>

  `npm install --save-dev eslint-config-airbnb` 설치 후 .eslintrc.cjs 에서 `extends : ['airbnb']` 추가

- <details>
    <summary> 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.</summary>

  eslintrc.cjs에 `'max-lines-per-function': ['error', 15],` 룰 추가
  </details>

- <details>
    <summary> 사용자가 잘못된 값을 입력할 경우 throw문을 사용해 예외를 발생시킨다. 그런 다음, "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 입력을 다시 받는다. </summary>

  `asyncFnHandlerWithError` 라는 유틸 함수 생성 후 각 입력 받는 함수마다 실행
  </details>

# ✏️ 과제 진행 요구 사항

- <details>
    <summary>기능을 구현하기 전 docs/README.md에 구현할 기능 목록을 정리해 추가한다.</summary>

  README.md 파일 작성 중
  </details>

# - 📂 폴더 구조

<details>
<summary>자세히 보기</summary>

```
// 여기에 폴더 구조 삽입
```

</details>

# 🔍 테스트 커버리지

jest의 커버리지 기능으로 테스트 실행 결과를 확인합니다.

```
npx jest --coverage
```

<details>
<summary>테스트 결과 보기</summary>

```
// 여기에 커버리지 삽입
```

</details>
