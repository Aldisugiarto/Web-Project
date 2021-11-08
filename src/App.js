/* Section      : Main */
/* Date         : 4th Nov 2021 */
/* Author       : Aldi */

/* ----------------------------------------------------------- */
/* Import module, style, or file */
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Component/chat-feed/ChatFeed';
import './App.css';


const App = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID="442e3812-9347-408f-af1e-95cf27b6c67a"
      userName="aldisugiarto"
      userSecret="aldialdi"
      renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
    />
  );
}

export default App;
