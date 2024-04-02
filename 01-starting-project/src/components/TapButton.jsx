// export default function TapButton(props) {
//     return <li><button>{props.children}</button></li> //The special "children" prop is the default value between the component text <TapButton>All values here are the default "children prop" value</TapButton>
// }

//OR

export default function TapButton({children, isSelected, ...props}) {
    return <li><button className={isSelected ? 'active' : undefined} {...props}>{children}</button></li> //The special "children" prop is the default value between the component text <TapButton>All values here are the default "children prop" value</TapButton>
}
