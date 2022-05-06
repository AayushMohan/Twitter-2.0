import React, { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}

const SidebarRow = ({ Icon, title }: Props) => {
  return (
    <div>
      <Icon />
      <p></p>
    </div>
  )
}

export default SidebarRow
