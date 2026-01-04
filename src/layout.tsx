interface Props {
    children: React.ReactNode;
}

export function Layout({ children }: Props) {
    return (
        <>
            <main className="container mx-auto my-5">
                {children}
            </main>
        </>
    )
}