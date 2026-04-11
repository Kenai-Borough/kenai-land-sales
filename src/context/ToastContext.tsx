import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertTriangle, CheckCircle2, Info } from 'lucide-react'
import type { ToastMessage } from '../types'
import { cn } from '../lib/utils'

interface ToastContextValue {
  pushToast: (toast: Omit<ToastMessage, 'id'>) => void
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

export function ToastProvider({ children }: PropsWithChildren) {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }, [])

  const pushToast = useCallback(
    (toast: Omit<ToastMessage, 'id'>) => {
      const id = crypto.randomUUID()
      setToasts((current) => [...current, { ...toast, id }].slice(-4))
      window.setTimeout(() => removeToast(id), 2800)
    },
    [removeToast],
  )

  const value = useMemo(() => ({ pushToast }), [pushToast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed right-4 top-4 z-[100] flex w-full max-w-sm flex-col gap-3">
        <AnimatePresence>
          {toasts.map((toast) => {
            const Icon =
              toast.variant === 'error'
                ? AlertTriangle
                : toast.variant === 'success'
                  ? CheckCircle2
                  : Info

            return (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 32 }}
                className={cn(
                  'pointer-events-auto rounded-2xl border px-4 py-3 shadow-2xl backdrop-blur',
                  toast.variant === 'error' && 'border-rose-400/50 bg-rose-950/85 text-rose-50',
                  toast.variant === 'success' &&
                    'border-emerald-400/50 bg-emerald-950/85 text-emerald-50',
                  (!toast.variant || toast.variant === 'default') &&
                    'border-white/15 bg-slate-950/85 text-white',
                )}
              >
                <div className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5" />
                  <div>
                    <p className="font-semibold">{toast.title}</p>
                    {toast.description ? (
                      <p className="text-sm opacity-80">{toast.description}</p>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) throw new Error('useToast must be used inside ToastProvider')
  return context
}
