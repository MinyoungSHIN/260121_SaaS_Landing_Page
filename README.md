# SOO Art&Company 웹사이트

Next.js와 Supabase를 사용한 현대적인 SaaS 랜딩 페이지입니다.

## 주요 기능

- ✨ 모던한 반응형 디자인
- 🔐 Supabase 인증 (회원가입/로그인/로그아웃)
- 🎨 Tailwind CSS 스타일링
- 📱 모바일/태블릿/데스크탑 최적화
- ⚡ Next.js 15 (App Router)
- 🌐 Vercel 배포 준비 완료

## 빠른 시작

### 1. 프로젝트 설치

```bash
npm install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일 생성:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

자세한 설정 방법은 [SETUP_GUIDE.md](./SETUP_GUIDE.md)를 참조하세요.

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

## 배포

Vercel로 배포하는 방법은 [DEPLOY.md](./DEPLOY.md)를 참조하세요.

### 원클릭 배포

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=your-repo-url)

배포 시 환경 변수를 설정해야 합니다:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 기술 스택

- **프레임워크**: Next.js 15
- **스타일링**: Tailwind CSS
- **UI 컴포넌트**: shadcn/ui
- **인증**: Supabase Auth
- **배포**: Vercel
- **언어**: TypeScript

## 프로젝트 구조

```
├── app/                    # Next.js App Router
│   ├── page.tsx           # 메인 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   └── globals.css        # 전역 스타일
├── components/            # React 컴포넌트
│   ├── ui/               # shadcn/ui 컴포넌트
│   └── auth-modal.tsx    # 인증 모달
├── lib/                   # 유틸리티 함수
│   ├── supabase.ts       # Supabase 클라이언트
│   ├── supabase-server.ts # Supabase 서버 클라이언트
│   └── auth-context.tsx  # 인증 컨텍스트
├── public/                # 정적 파일
├── SETUP_GUIDE.md        # 설정 가이드
└── DEPLOY.md             # 배포 가이드
```

## 주요 페이지 섹션

1. **Header** - 반응형 네비게이션 및 인증 버튼
2. **Hero Section** - 메인 소개 섹션
3. **Features** - 주요 기능 소개
4. **Testimonials** - 고객 후기
5. **Pricing** - 가격 플랜
6. **CTA** - Call to Action
7. **Footer** - 사이트맵 및 링크

## 개발

### 새 컴포넌트 추가

```bash
npx shadcn-ui@latest add [component-name]
```

### 빌드

```bash
npm run build
```

### 린트

```bash
npm run lint
```

## 문제 해결

문제가 발생하면 [SETUP_GUIDE.md](./SETUP_GUIDE.md)의 문제 해결 섹션을 확인하세요.

## 라이선스

MIT

## 지원

문의사항이 있으시면 이슈를 생성해주세요.
