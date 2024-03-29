const MessageComponent = ({ message }) => {
  return (
    <div className="messageContainer pt-3">
      <p className="messageText">{message}</p>
    </div>
  );
};

export default MessageComponent;
