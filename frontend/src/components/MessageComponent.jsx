import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearErrors, clearMessage } from '../redux/slices/userVisitInfoSlice';

const MessageComponent = ({ message }) => {
  const dispatch = useDispatch();
  const handleClearMessage = () => {
    dispatch(clearMessage());
    dispatch(clearErrors());
  };
  return (
    <div className="messageContainer">
      <p className="messageText">{message}</p>
      <Link className="messageLink" onClick={handleClearMessage} to="/">Back To Home</Link>
    </div>
  );
};

export default MessageComponent;
