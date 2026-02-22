# Vercel 배포 가이드

## 빠른 배포 (권장)

### 1. Vercel CLI 사용

```bash
# Vercel CLI 설치 (처음 한 번만)
npm i -g vercel

# 로그인
vercel login

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

배포 중 환경 변수를 입력하라는 메시지가 나오면:
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase Project URL 입력
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase Anon Key 입력

### 2. Vercel 웹 대시보드 사용

#### GitHub 연동 (권장)

1. **GitHub 저장소 생성 및 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin [your-github-repo-url]
   git push -u origin main
   ```

2. **Vercel에서 프로젝트 Import**
   - [Vercel Dashboard](https://vercel.com/dashboard) 접속
   - "Add New" > "Project" 클릭
   - GitHub 저장소 선택
   - "Import" 클릭

3. **환경 변수 설정**
   - "Environment Variables" 섹션에서:
     - Name: `NEXT_PUBLIC_SUPABASE_URL`
     - Value: [Supabase Project URL]
     - Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - Value: [Supabase Anon Key]

4. **Deploy 클릭**

#### 직접 배포 (GitHub 없이)

1. [Vercel Dashboard](https://vercel.com/dashboard) 접속
2. "Add New" > "Project" 클릭
3. 프로젝트 폴더를 드래그 앤 드롭
4. 환경 변수 설정 (위와 동일)
5. "Deploy" 클릭

## 배포 후 확인사항

### 1. 환경 변수 확인
- Vercel Dashboard > Project > Settings > Environment Variables
- 두 개의 환경 변수가 올바르게 설정되어 있는지 확인

### 2. 빌드 로그 확인
- 배포가 실패한 경우 빌드 로그를 확인
- Dashboard > Deployments > 최근 배포 클릭 > Build Logs

### 3. 기능 테스트
배포된 URL에서:
- [ ] 회원가입 테스트
- [ ] 로그인 테스트
- [ ] 로그아웃 테스트

## 자동 배포 설정

GitHub와 연동한 경우, 코드를 push하면 자동으로 배포됩니다:

```bash
git add .
git commit -m "Update features"
git push
```

Vercel이 자동으로:
1. 새 커밋을 감지
2. 빌드 실행
3. 배포 완료

## 도메인 설정

### 커스텀 도메인 추가
1. Vercel Dashboard > Project > Settings > Domains
2. 도메인 입력 (예: yourdomain.com)
3. DNS 설정 지침 따라하기

### 무료 Vercel 도메인
- 배포 시 자동으로 `your-project.vercel.app` 도메인 제공

## 문제 해결

### 빌드 실패
```bash
# 로컬에서 먼저 빌드 테스트
npm run build
```
- 로컬에서 빌드가 성공하면 Vercel에서도 성공해야 합니다.

### 환경 변수 오류
- Vercel Dashboard에서 환경 변수 재확인
- 변수 이름이 정확한지 확인 (대소문자 구분)
- 환경 변수 변경 후 재배포 필요

### 재배포
```bash
vercel --prod
```
또는 Vercel Dashboard에서 "Redeploy" 클릭

## 유용한 명령어

```bash
# 프로젝트 목록 보기
vercel ls

# 배포 상태 확인
vercel inspect [deployment-url]

# 로그 보기
vercel logs [deployment-url]

# 환경 변수 추가
vercel env add [variable-name]

# 프로젝트 삭제
vercel remove [project-name]
```

## 추가 리소스

- [Vercel 문서](https://vercel.com/docs)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)
- [Supabase + Vercel 가이드](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)
