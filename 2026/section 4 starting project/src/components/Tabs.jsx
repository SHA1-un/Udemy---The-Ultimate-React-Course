export default function Tabs({buttons, children, ButtonWrapper = "menu"}) {
    return <>
        <ButtonWrapper>{buttons}</ButtonWrapper>
        {children}
    </>
}