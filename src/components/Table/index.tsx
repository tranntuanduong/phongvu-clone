import { colors } from "@theme/colors"
import { fontSizes } from "@theme/fontSizes"
import { status } from "nprogress";
import styled from "styled-components"

interface Order {
  code: string;
  date: string;
  name: string;
  totalPrice: string;
  status: string;
}

interface Props {
  orders: Order[];
}

const Table = (props: Props) => {
  const { orders } = props;

  return (
    <>
      {orders.length > 0 ? (
        <StyledTable>
          < StyledTable >
            <table cellSpacing="0" cellPadding="0" width="325">
              <tbody >
                <tr>
                  <th>Mã đơn hàng</th>
                  <th>Ngày mua</th>
                  <th>Sản phẩm</th>
                  <th className="th-right">Tổng tiền (đ)</th>
                  <th className="th-right">Trạng thái</th>
                </tr>
                {orders.map((order, index) => (
                  <tr key={index} className="body">
                    <td>{order.code}</td>
                    <td>{order.date}</td>
                    <td>
                      <div className="name">
                        {order.name}
                      </div>
                    </td>
                    <td className="td-right">{order.totalPrice}</td>
                    <td className={`td-right ${order.status}`}>{order.status}</td>
                  </tr>
                ))}



              </tbody>
            </table>
          </StyledTable >
        </StyledTable>
      ) : (
        <StyledNoData>
          <div className="no-order">
            <img src="/access/popup/no-notify.png" alt="" className="no-order__img" />
            <div className="no-order__text">
              Bạn không có đơn hàng nào
            </div>
          </div>
        </StyledNoData>
      )}
    </>
  )

}

const StyledTable = styled.div`
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  th {
    padding: 0 8px 16px 8px;
    text-align: left;
    font-size: ${fontSizes.body1};
    font-weight: 600;

    &.th-right {
      text-align: right;
    }
  }

  td {
    text-align: left;
    padding: 16px 8px;
    border-top: 1px solid ${colors.border};
    font-size: ${fontSizes.desc1};

    & .name {
      max-width: 306px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;  
      overflow: hidden;
      line-height: 1.5;
    }
  

    &.td-right {
      text-align: right;
    }

    &.error {
      color: ${colors.error};
    }

    &.success {
      color: ${colors.success};
    }

    &.warning {
      color: ${colors.warning};
    }
  }

  tr:nth-child(even) {
    
  }
`

const StyledNoData = styled.div`


  & .no-order {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__text {
      color: ${colors.text};
      font-weight: ${fontSizes.body1};
      margin-top: 16px;
    }

    &__img {
      width: 150px;
      height: 150px;
    }
  }

 
`


export default Table;