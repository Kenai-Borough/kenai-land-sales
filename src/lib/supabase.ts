
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const storageKey = 'kenai-network-demo-land'
const siteName = 'land'
const defaultRole = 'seller'

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)
export const supabase: SupabaseClient | null = isSupabaseConfigured ? createClient(supabaseUrl!, supabaseAnonKey!) : null

type UserRole = 'buyer' | 'seller' | 'admin'
interface LocalUser { id: string; email: string; user_metadata?: { full_name?: string; role?: UserRole; phone?: string } }
interface ProfileRow { id: string; email: string; full_name: string | null; phone: string | null; site_roles: Record<string, string> | null }

const loadLocalUser = (): LocalUser | null => {
  if (typeof window === 'undefined') return null
  const stored = window.localStorage.getItem(storageKey)
  return stored ? (JSON.parse(stored) as LocalUser) : null
}
const saveLocalUser = (user: LocalUser | null) => {
  if (typeof window === 'undefined') return
  if (!user) { window.localStorage.removeItem(storageKey); return }
  window.localStorage.setItem(storageKey, JSON.stringify(user))
}

async function applyInboundSession() {
  if (!supabase || typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.hash.replace(/^#/, ''))
  const accessToken = params.get('kenai_access_token')
  const refreshToken = params.get('kenai_refresh_token')
  if (!accessToken || !refreshToken) return
  await supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken })
  window.history.replaceState(null, '', window.location.pathname + window.location.search)
}

async function hydrateProfile(user: any, roleFallback: UserRole = defaultRole) {
  if (!supabase) return user
  const result = await supabase.from('kenai_profiles').select('id, email, full_name, phone, site_roles').eq('id', user.id).maybeSingle<ProfileRow>()
  const row = result.data
  const role = row && row.site_roles && row.site_roles[siteName] ? (row.site_roles[siteName] as UserRole) : ((user.user_metadata && (user.user_metadata.site_role || user.user_metadata.role)) as UserRole) || roleFallback
  return { ...user, email: row ? row.email : user.email, user_metadata: { ...user.user_metadata, full_name: row ? row.full_name : user.user_metadata.full_name, phone: row ? row.phone : user.user_metadata.phone, role: role } }
}

async function syncProfile(user: any, role: UserRole, fullName?: string, phone = '') {
  if (!supabase) return
  const existing = await supabase.from('kenai_profiles').select('id, email, full_name, phone, site_roles').eq('id', user.id).maybeSingle<ProfileRow>()
  await supabase.from('kenai_profiles').upsert({ id: user.id, email: user.email || (existing.data ? existing.data.email : ''), full_name: (existing.data && existing.data.full_name) || fullName || null, phone: (existing.data && existing.data.phone) || phone || null, site_roles: Object.assign({}, existing.data && existing.data.site_roles ? existing.data.site_roles : {}, { [siteName]: role }), last_active_site: siteName, updated_at: new Date().toISOString() })
}

export async function signUp(email: string, password: string, fullName?: string, role: UserRole = 'seller', phone = '') {
  if (supabase) {
    const result = await supabase.auth.signUp({ email: email, password: password, options: { data: { full_name: fullName, phone: phone, site_role: role, site_name: siteName } } })
    if (!result.error && result.data.user) await syncProfile(result.data.user, role, fullName, phone)
    return result
  }
  const user = { id: crypto.randomUUID(), email: email, user_metadata: { full_name: fullName, role: role, phone: phone } }
  saveLocalUser(user)
  return { data: { user: user }, error: null }
}

export async function signIn(email: string, password: string) {
  if (supabase) {
    await applyInboundSession()
    const result = await supabase.auth.signInWithPassword({ email: email, password: password })
    return { data: result.data ? { ...result.data, user: result.data.user ? await hydrateProfile(result.data.user) : result.data.user } : result.data, error: result.error }
  }
  const existing = loadLocalUser()
  const user = existing && existing.email === email ? existing : { id: crypto.randomUUID(), email: email, user_metadata: { full_name: email.split('@')[0], role: 'seller' as UserRole, phone: '' } }
  saveLocalUser(user)
  return { data: { user: user }, error: password ? null : { message: 'Password is required' } }
}

export async function signOut() {
  if (supabase) return supabase.auth.signOut()
  saveLocalUser(null)
  return { error: null }
}

export async function getCurrentUser() {
  if (supabase) {
    await applyInboundSession()
    const result = await supabase.auth.getUser()
    return result.data.user ? hydrateProfile(result.data.user) : null
  }
  return loadLocalUser()
}

export async function resetPassword(email: string) {
  if (supabase) return supabase.auth.resetPasswordForEmail(email)
  return { data: { email: email }, error: null }
}
