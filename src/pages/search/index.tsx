import Page from 'layouts/page';
import Container from 'layouts/container'
import RelatedSearch from '@components/RelatedSearch';
import FilterProducts from '@components/Filter/FilterProducts';

const SearchProducts = () => {
  return (
    <Page>
      <Container mt="20px" >
        <RelatedSearch />
        <FilterProducts />
      </Container>
    </Page>
  )
}

export default SearchProducts;