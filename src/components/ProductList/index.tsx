import ProductCard from "@components/Card/ProductCard"
import Section from "@components/Elements/Section"
import { productList } from "dummydata"
import { Fragment, ReactNode } from "react"
import { StyledProductList, StyledTitle, StyledTitleSection } from "./ProductList"

interface Props {
  children?: ReactNode
}

const ProductList = (props: Props) => {
  const { children } = props
  return (
    <Section>
      <Fragment>
        <StyledTitleSection>
          <StyledTitle>
            {children}
          </StyledTitle>
        </StyledTitleSection>
        <StyledProductList>
          {productList.map((product, index) => (
            <li key={index} className="product-item">
              <ProductCard product={product} />
            </li>
          ))}
        </StyledProductList>
      </Fragment>
    </Section>
  )
}

export default ProductList