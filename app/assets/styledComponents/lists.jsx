import styled from 'styled-components';

export const TableAdaptive_Left = styled.div`
width: ${props => props?.width ? `${props.width}px` : '100%'};
height:auto;
`
export const TableAdaptive_right = styled.div`
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
   height:${props => props?.height ? `${props.height}px` : 'auto'};

   ::-webkit-scrollbar {
      width: 0;
      height: 0;
   }
`
export const UlTableAdaptive = styled.ul`
   height: auto;
   width: ${props => props?.width ? `${props.width}px` : '100%'} ;

`
