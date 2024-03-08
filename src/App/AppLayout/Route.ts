export interface Route {
  path: string
  label: string
  iconName?: string
  onRoute?: () => void
  isNew?: boolean
}
