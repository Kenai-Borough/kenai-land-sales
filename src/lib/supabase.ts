import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null

const localUserKey = 'kenai-demo-user'

type UserRole = 'buyer' | 'seller' | 'admin'

interface LocalUser {
  id: string
  email: string
  user_metadata?: {
    full_name?: string
    role?: UserRole
    phone?: string
  }
}

const loadLocalUser = (): LocalUser | null => {
  if (typeof window === 'undefined') return null
  const stored = window.localStorage.getItem(localUserKey)
  return stored ? (JSON.parse(stored) as LocalUser) : null
}

const saveLocalUser = (user: LocalUser | null) => {
  if (typeof window === 'undefined') return
  if (!user) {
    window.localStorage.removeItem(localUserKey)
    return
  }
  window.localStorage.setItem(localUserKey, JSON.stringify(user))
}

export async function signUp(
  email: string,
  password: string,
  fullName?: string,
  role: UserRole = 'seller',
  phone = '',
) {
  if (supabase) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role,
          phone,
        },
      },
    })
    return { data, error }
  }

  const user = {
    id: crypto.randomUUID(),
    email,
    user_metadata: { full_name: fullName, role, phone },
  }
  saveLocalUser(user)
  return { data: { user }, error: null }
}

export async function signIn(email: string, password: string) {
  if (supabase) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    return { data, error }
  }

  const existing = loadLocalUser()
  const user =
    existing?.email === email
      ? existing
      : {
          id: crypto.randomUUID(),
          email,
          user_metadata: {
            full_name: email.split('@')[0],
            role: 'seller' as UserRole,
            phone: '',
          },
        }
  saveLocalUser(user)
  return { data: { user }, error: password ? null : { message: 'Password is required' } }
}

export async function signOut() {
  if (supabase) {
    const { error } = await supabase.auth.signOut()
    return { error }
  }
  saveLocalUser(null)
  return { error: null }
}

export async function getCurrentUser() {
  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    return user
  }

  return loadLocalUser()
}

export async function resetPassword(email: string) {
  if (supabase) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email)
    return { data, error }
  }

  return {
    data: { email },
    error: null,
  }
}
