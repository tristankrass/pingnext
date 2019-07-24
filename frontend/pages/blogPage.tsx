import { useRouter } from 'next/router';
import Hoc from '../components/Hoc';

const Content = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};
const blogPage = () => {
  return (
    <Hoc>
      <Content />
    </Hoc>
  );
};

export default blogPage;
