import Link from 'next/link';
import Hoc from '../components/Hoc';
interface IProps {
  id: string;
}

const PostLink = (props: IProps) => (
  <li>
    <Link href={`/p/[id]`} as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Hoc>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-next" />
        <PostLink id="Deploy-apps" />
      </ul>
    </Hoc>
  );
}
