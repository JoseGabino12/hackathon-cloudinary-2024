import { NextFont } from "next/dist/compiled/@next/font"

export interface CardExampleProp {
  name: string
  first_public_id: string
  second_public_id: string
  className?: string
}

export interface StartProps {
  creepster: NextFont
}

export interface TwoUpComparisonProps {
  firstImg: string | undefined
  secondImg: string | undefined
  setLoading: (loading: boolean) => void
}