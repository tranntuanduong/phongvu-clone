import Chip from "@components/Elements/Chip"
import { useState } from "react"


export interface EnhanceFilter {
  title: string,
  categories: string[],
}

interface Props {
  filter: EnhanceFilter
}

const EnhanceSpecificItem = (props: Props) => {
  const { filter } = props
  const [openSubFilter, setOpenSubFilter] = useState<boolean>(false)

  const handleToggleSubFilter = () => {
    setOpenSubFilter(!openSubFilter)
  }

  return (
    <li className="list-chip__item" onClick={handleToggleSubFilter}>
      <Chip name={filter.title} mr="8px" mb="10px" openSubFilter hasIcon />
      <ul className="sub-filter" style={{ display: openSubFilter ? "block" : "none" }}>
        {filter.categories.map((subFilter, index) => (
          <li key={index} className="sub-filter__item">
            {subFilter}
          </li>
        ))}
      </ul>
    </li>
  )
}

export default EnhanceSpecificItem;