import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Supabase 환경 변수가 설정되지 않았습니다!')
    console.error('📝 .env.local 파일을 생성하고 다음 변수를 설정하세요:')
    console.error('   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url')
    console.error('   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key')
    console.error('🔄 설정 후 서버를 재시작하세요: npm run dev')
    
    // 임시 더미 클라이언트 반환 (에러 방지)
    return createBrowserClient(
      'https://placeholder.supabase.co',
      'placeholder-key'
    )
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}
