import Link from "next/link";

export function StudentInfo() {
    return (
        <>
        <p>Name: Valentine Gerein</p>
        <p>GitHub: <Link href='https://github.com/taxirobot/cprg306-assignments'style={{ textDecoration: 'underline' }}>taxirobot/cprg306-assignments</Link></p>
        </>
    )
}