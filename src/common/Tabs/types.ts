
export interface TabType {
  id: number,
  title: string,
  onClick: (value: any) => void,
  active: boolean
}

export interface TabsTypes {
  data: TabType[]
}