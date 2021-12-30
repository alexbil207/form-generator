import styled from "styled-components";


const NavBar = styled.nav`
display: flex;
align-items: center;
justify-content: center;
& h1{
    font-size: clamp(1.5rem, 1.8rem, 2.1rem);
    padding: 5px 0;
    &::after{
        content: ".";
        color: green;
        font-size: 1.8rem;
    }
    &::selection{
        background: none;
    }
}
`
export const Header = () => {
    return (
        <NavBar className="container">
            <h1>FormGenerator</h1>
        </NavBar>
    )
}