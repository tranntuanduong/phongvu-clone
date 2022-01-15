import Table from "@components/Table"
import styled from "styled-components"

const orders = [
  {
    code: "22011538539390",
    date: "15:41, Thứ bảy 15/01/2022",
    name: "Màn hình LCD MSI MP242 (1920 x 1080/IPS/75Hz/5 ms) Màn hình LCD MSI MP242 (1920 x 1080/IPS/75Hz/5 ms)",
    totalPrice: "2.099.000",
    status: "error"
  },
  {
    code: "22011538539390",
    date: "15:41, Thứ bảy 15/01/2022",
    name: "Màn hình LCD MSI MP242 (1920 x 1080/IPS/75Hz/5 ms) Màn hình LCD MSI MP242 (1920 x 1080/IPS/75Hz/5 ms)",
    totalPrice: "2.099.000",
    status: "success"
  }
]
const AccountOrderDoneTab = () => {
  return (
    <StyledAccountOrderDoneTab>
      <Table orders={orders} />
    </StyledAccountOrderDoneTab>
  )
}

const StyledAccountOrderDoneTab = styled.div`
  
`

export default AccountOrderDoneTab