import styled from 'styled-components'

const DefaultItem = styled.li`
   display: grid;
   grid-template-rows: 1fr;
   grid-gap: 5px;
   width: 100%;
   padding: 10px 0;
   border-bottom: 1px solid #2A2B31;
   height: ${props => props?.height ? `${props.height}px` : 'auto'};
   :last-child{
   border-bottom: none ;
   }
`;

export const ItemHistory = styled(DefaultItem)`
grid-template-columns: .5fr 1fr 1.5fr 1.5fr 1fr;
`;
export const ItemHistorySort = styled(DefaultItem)`
grid-template-columns: .5fr 1fr 1.5fr 1.5fr 1fr;
`;
export const ItemProfile = styled(DefaultItem)`
grid-template-columns: 1fr 1fr 1fr 1fr .5fr;
`;
export const ItemBalanceProfile = styled(DefaultItem)`
grid-template-columns: .5fr 1fr 1fr 1fr;
`;
export const ItemMarkets = styled(DefaultItem)`
grid-template-columns: 1.2fr 2fr 2fr 1fr;
`;
export const ItemMarketPage = styled(DefaultItem)`
grid-template-columns: .5fr 2fr 1fr 1.5fr 1fr 1fr 1fr 1.5fr 1fr 1.5fr;
   font-size: inherit;
   padding: 1em 0;
`;
export const ItemMarketPage_CoinAnalytics = styled(DefaultItem)`
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
   font-size: inherit;
   padding: 1em 0;
`;
export const ItemMarketPage_Coin = styled(DefaultItem)`
grid-template-columns: 0.5fr 1.5fr 1fr;
font-size: inherit;
padding: 1em 0;
`;
export const ItemAssetsMobile = styled(DefaultItem)`
grid-template-columns: 1.5fr 1fr 1fr 1fr;
`