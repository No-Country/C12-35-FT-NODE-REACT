import styled from 'styled-components';

export const CardWrap = styled.div`
    display:flex;
    flex-direction:column;
    gap:1.5rem;
`;
export const Wrap = styled.div`
    display:flex;
    align-items:${(props) => props.$alignItems ? props.$alignItems : "" };
    justify-content:${(props) => props.$justifyContent ? props.$justifyContent : "" };
`;
