'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type AuthModalProps = {
  isOpen: boolean
  onClose: () => void
  mode: 'signin' | 'signup'
}

export function AuthModal({ isOpen, onClose, mode }: AuthModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn, signUp } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { error: authError } = mode === 'signin' 
        ? await signIn(email, password)
        : await signUp(email, password)

      if (authError) {
        setError(authError.message)
      } else {
        if (mode === 'signup') {
          setError('가입 완료! 이메일을 확인해주세요.')
        } else {
          onClose()
          setEmail('')
          setPassword('')
        }
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {mode === 'signin' ? '로그인' : '회원가입'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'signin'
              ? '계정에 로그인하세요.'
              : '새 계정을 만들어보세요.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>
          {error && (
            <p className={`text-sm ${error.includes('완료') ? 'text-green-600' : 'text-red-600'}`}>
              {error}
            </p>
          )}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading
              ? '처리 중...'
              : mode === 'signin'
              ? '로그인'
              : '회원가입'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
