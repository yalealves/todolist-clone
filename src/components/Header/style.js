import { styled } from "styled-components";

export const HeaderContainer = styled.header`

    height: 200px;
    background-color: #0D0D0D;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;

`;


export const Logo = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

`

export const Text = styled.span`

    font-size: ${props => props.size ? props.size : '12px'};
    color: ${props => props.color ? props.color : 'white'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};

`

export const NewTaskContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    
    margin-top: -26px;

    @media screen and (max-width: 800px) {
        padding: 0 20px;
    }

`

export const InputTask = styled.input.attrs({type: 'text'})`
    width: 100%;
    max-width: 750px;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid black;
    background-color: #262626;
    font-size: 16px;
    font-weight: normal;
    color: #808080;


    &:focus{
        outline: 0;
    }

`

export const ButtonNewTask = styled.button`

    border: none;
    border-radius: 8px;
    background-color: #1E6F9F;
    padding: 16px;
    color: #F2F2F2;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 14px;
    cursor: pointer;

    svg{
        font-weight: 700;
    }

    @media screen and (max-width: 414px) {
        .create-task-text{
            display: none;
        }
        svg{
            width: 20px;
            height: 20px;
        }
    }

    

`