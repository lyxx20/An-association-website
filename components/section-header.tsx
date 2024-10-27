import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle: string
  description?: string
  className?: string
  centered?: boolean
}

export function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  className,
  centered = false
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mx-auto max-w-2xl",
      centered && "text-center",
      className
    )}>
      <h2 className="text-base font-semibold leading-7 text-primary">{subtitle}</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</p>
      {description && (
        <p className="mt-6 text-lg leading-8 text-muted-foreground">{description}</p>
      )}
    </div>
  )
}