import Link from 'next/Link';

const Nav = () => (
    <ul>
        <li>
            <Link href="/index"><a>Home</a></Link>
        </li>
        <li>
            <Link href="/skills"><a>Skills</a></Link>
        </li>
        <li>
            <Link href="/work-history"><a>Work History</a></Link>
        </li>
        <li>
            <Link href="/projects"><a>Projects</a></Link>
        </li>
        <li>
            <Link href="/contact"><a>Contact</a></Link>
        </li>
    </ul>
)

export default Nav;