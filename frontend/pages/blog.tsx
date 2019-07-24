import Link from 'next/link';
import Hoc from '../components/Hoc';
interface IProps {
  title: string;
}

const PostLink = (props: IProps) => (
  <li>
    <Link href={`/blogPage?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Hoc>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Hoc>
  );
}
