import ProductCard from "@components/Card/ProductCard"
import Section from "@components/Elements/Section"
import { Fragment, ReactNode } from "react"
import { Product } from "types"
import { StyledProductList, StyledTitleSection } from "./ProductList"

interface Props {
  children?: ReactNode;
  productList: Product[]
}


const ProductList = (props: Props) => {
  const { children, productList } = props
  return (
    <Section>
      <Fragment>
        <StyledTitleSection>
          {children}
          {/* <StyledTitle>
            {children}
          </StyledTitle> */}
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