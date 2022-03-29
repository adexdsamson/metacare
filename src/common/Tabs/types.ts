
export interface TabType {
  id: string,
  title: string,
  onClick: (value: any) => void,
  active: boolean
}

export interface TabsTypes {
  data: TabType[]
}