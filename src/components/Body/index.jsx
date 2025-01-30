import TextInput from '../TextInput';

const Body = ({ type }) => {
  switch (type) {
    case 'select':
      return <div>type is select</div>;
    case 'text':
      return <TextInput />;
    case 'textarea':
      return <div>type is textarea</div>;
    default:
      return <div>type is default</div>;
  }
};

export default Body;
