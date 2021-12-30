import styled from 'styled-components';

const AnimatedWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const AnimatedArrow = styled.p`
font-size: 1.5rem;
position: relative;
animation: jump 1s infinite;
margin-bottom: 10px;
@keyframes jump{
    from {top: 0px;}
    to {top: 10px;}
}
`

export const EmptyFormAnimation = () => {
    return (
        <AnimatedWrapper>
            <AnimatedArrow>🡅</AnimatedArrow>
            <p>Click To Start Adding Fields</p>
        </AnimatedWrapper>
    )
}