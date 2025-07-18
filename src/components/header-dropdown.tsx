'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─────────── types ─────────── */
interface DropdownSubItem {
  icon?: LucideIcon
  txt: string
  desc: string
  href: string
}
interface DropdownItem {
  icon?: LucideIcon
  title: string
  href?: string
  list?: DropdownSubItem[]
  bullet?: string[]
  tools?: {
    icon: LucideIcon
    txt: string
    color: string
    href: string
  }[]
}
interface HeaderDropdownProps {
  label: string
  items: DropdownItem[]
}
/* ───────────────────────────── */

export default function HeaderDropdown({ label, items }: HeaderDropdownProps) {
  const [open, setOpen] = useState(false)

  // Esc → close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div
      className="relative flex h-full items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Кнопка */}
      <button
        aria-haspopup="true"
        aria-expanded={open}
        className={cn(
          'flex h-full items-center px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
        )}
      >
        {label}
        <ChevronDown
          className={cn('ml-1 size-4 transition-transform duration-150', open && 'rotate-180')}
        />
      </button>

      {open && (
        <>
          <div className="menu-fade" />

          <div className="absolute top-full left-0 z-50 w-96 rounded-lg border bg-popover p-1 pt-2 text-popover-foreground shadow-xl">
            <div className="flex max-h-[calc(100vh-200px)] flex-col gap-0.5 overflow-y-auto">
              {items.map((group, i) => (
                <div key={i}>
                  {i > 0 && <div className="my-1 h-px bg-border" />}

                  {group.href ? (
                    <Link
                      href={group.href}
                      className="flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-accent"
                    >
                      {group.icon && <group.icon className="size-4 shrink-0" />}
                      {group.title}
                    </Link>
                  ) : (
                    <div className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {group.title}
                    </div>
                  )}

                  {/* Подпункты с иконками */}
                  {group.list?.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="group flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-accent"
                    >
                      {item.icon && (
                        <div className="flex h-5 w-5 items-center justify-center">
                          <item.icon className="size-4 shrink-0 text-muted-foreground group-hover:text-accent-foreground" />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="text-sm font-medium">{item.txt}</div>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </Link>
                  ))}

                  {/* Список-буллеты */}
                  {group.bullet && (
                    <div className="flex flex-col gap-1 p-2">
                      {group.bullet.map((txt) => (
                        <Link
                          key={txt}
                          href="#"
                          className="rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          {txt}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Инструменты */}
                  {group.tools && (
                    <div className="space-y-1 p-2 pt-1">
                      {group.tools.map((t, idx) => (
                        <Link
                          key={idx}
                          href={t.href}
                          className={cn(
                            'flex items-center gap-3 rounded-md p-2.5 text-sm font-semibold transition-colors',
                            'bg-purple-100/60 text-purple-800 hover:bg-purple-100',
                            'dark:bg-purple-900/20 dark:text-purple-300 dark:hover:bg-purple-900/30',
                          )}
                        >
                          <t.icon className="size-4 shrink-0" />
                          <span>{t.txt}</span>
                          <ChevronRight className="ml-auto size-4" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
