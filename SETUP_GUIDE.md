# 설정 가이드

## 1. Supabase 설정

### Supabase 프로젝트 생성
1. [Supabase](https://supabase.com) 에 접속하여 계정을 만듭니다.
2. "New Project"를 클릭하여 새 프로젝트를 생성합니다.
3. 프로젝트 이름, 데이터베이스 비밀번호, 리전을 설정합니다.

### API 키 가져오기
1. Supabase 대시보드에서 프로젝트를 선택합니다.
2. 왼쪽 메뉴에서 Settings > API 를 클릭합니다.
3. 다음 값들을 복사합니다:
   - `Project URL` (NEXT_PUBLIC_SUPABASE_URL)
   - `anon public` 키 (NEXT_PUBLIC_SUPABASE_ANON_KEY)

### 환경 변수 설정
프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가합니다:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

위의 값들을 Supabase에서 복사한 실제 값으로 교체하세요.

### 이메일 인증 설정 (선택사항)
1. Supabase 대시보드에서 Authentication > Settings 로 이동합니다.
2. "Enable email confirmations"을 활성화하면 회원가입 시 이메일 확인이 필요합니다.
3. 개발 중에는 이 옵션을 비활성화할 수 있습니다.

## 2. Vercel 배포

### Vercel로 배포하기
1. [Vercel](https://vercel.com)에 가입하거나 로그인합니다.
2. "Add New" > "Project"를 클릭합니다.
3. GitHub 저장소를 연결합니다.
4. 프로젝트를 import 합니다.
5. Environment Variables 섹션에서 다음 환경 변수를 추가합니다:
   - `NEXT_PUBLIC_SUPABASE_URL`: Supabase Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase Anon Key
6. "Deploy"를 클릭합니다.

### GitHub와 연동 (권장)
1. 프로젝트를 GitHub 저장소에 푸시합니다:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin [your-github-repo-url]
   git push -u origin main
   ```

2. Vercel에서 자동으로 GitHub 저장소를 감지하고 배포합니다.

## 3. 로컬 개발 서버 실행

환경 변수 설정 후:

```bash
npm run dev
```

브라우저에서 http://localhost:3000 으로 접속합니다.

## 4. 기능 테스트

### 회원가입 테스트
1. "회원가입" 버튼을 클릭합니다.
2. 이메일과 비밀번호(최소 6자)를 입력합니다.
3. 이메일 확인이 활성화된 경우, 이메일을 확인합니다.

### 로그인 테스트
1. "로그인" 버튼을 클릭합니다.
2. 가입한 이메일과 비밀번호를 입력합니다.
3. 로그인 성공 시 이메일이 헤더에 표시됩니다.

### 로그아웃 테스트
1. 로그인 상태에서 "로그아웃" 버튼을 클릭합니다.
2. 로그아웃되고 다시 로그인 버튼이 표시됩니다.

## 문제 해결

### "Invalid API key" 오류
- `.env.local` 파일의 환경 변수가 올바른지 확인하세요.
- 개발 서버를 재시작하세요 (Ctrl+C 후 `npm run dev`).

### 이메일이 오지 않는 경우
- Supabase 대시보드에서 Authentication > Users를 확인하세요.
- 개발 중에는 이메일 확인을 비활성화할 수 있습니다.

### Vercel 배포 실패
- Vercel 대시보드에서 환경 변수가 올바르게 설정되었는지 확인하세요.
- 빌드 로그를 확인하여 오류를 찾으세요.
