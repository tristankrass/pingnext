import Header from './Header';

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

const Hoc = (props: IProps) => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default Hoc;
