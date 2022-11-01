import styled from "styled-components";


export const MainTransactionPage = styled.div`
${props => props.hh_em || 12}
width: 100%;
display: grid;
grid-template-rows: ${props => props.hh_em || 12} 1fr;
font-size:inherit;
@media screen and (max-width:1048px) {
   grid-template-rows: ${props => props.hhm_em || 5} 1fr ;
}

`

export const CheckboxBtn = styled.button`
   ${props => props.isActive}
   font-size: inherit;
   cursor: pointer;
   padding: .5em 1em;
   border: 0;
   border-radius: .5em;

   transition: all 0.2s ease-in;
   background-color: rgba($color: #262C30, $alpha: .2);
   color: #fff;
   -webkit-box-shadow: 0px 0px .3em 0px rgba(0, 0, 0, 0.75);
   -moz-box-shadow: 0px 0px .3em 0px rgba(0, 0, 0, 0.75);
   box-shadow: 0px 0px .3em 0px rgba(0, 0, 0, 0.75);

   :hover {
      -webkit-box-shadow: 0px 0px .1em 0px rgba(0, 0, 0, 0.55);
      -moz-box-shadow: 0px 0px .1em 0px rgba(0, 0, 0, 0.55);
      box-shadow: 0px 0px .1em 0px rgba(0, 0, 0, 0.55);
   }
`