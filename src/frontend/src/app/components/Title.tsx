export default function Title({children} : {children: React.ReactNode}) {
    return (
        <h1 className="text-4xl text-black font-medium mb-9">{children}</h1>
    )
}