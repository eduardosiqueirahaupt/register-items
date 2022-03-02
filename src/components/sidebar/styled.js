import styled from 'styled-components'

export const Wrapper = styled.div`
    background: #cacaca;
    width: 300px;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    
    .menu {
        color: #2938;
        cursor: pointer;
        padding: 3px;

        &:hover{
            opacity: 90%;
            font-size: 18px;
            transition-delay: 0.05s;
        }
    }
`