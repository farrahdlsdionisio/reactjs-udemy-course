export default function Section({title, children, ...props}) { //...props = proxy props - receives all props received by the component (via objecti)
    return (
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
    )
}