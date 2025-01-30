const ActionButtons = ({ type }) => {
  switch (type) {
    case 'select':
      return <div>type is select</div>;
    case 'text':
      return <div>type is text</div>;
    case 'textarea':
      return <div>type is textarea</div>;
    default:
      return <div>type is default</div>;
  }
};

export default ActionButtons;
