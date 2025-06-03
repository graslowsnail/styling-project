export type MessageData= {
  id: number,
  userId: number,
  body: string,
}

export type MessageProps= {
  messageData: MessageData 
  position: 'top' | 'middle' | 'bottom' | 'alone'
  currentUserId: number
  user: {userName: string; avatarUrl:string}
} 

function MessageCell({ messageData, position, currentUserId, user }: MessageProps) {
  const isCurrentUser = messageData.userId === currentUserId
  const alignment = isCurrentUser ? 'self-end' : 'self-start'
  const showAvatar = position === 'top' || position === 'alone'

  
  console.log(position)
  function getBubbleStyle(position: string, isCurrentUser: boolean): string{
    if(position === 'top'){
      return isCurrentUser
      ? 'rounded-t-xl rounded-bl-xl bg-blue-300 '
      : 'rounded-tr-xl rounded-br-xl bg-gray-300 '
    }
    if(position === 'middle'){
      return isCurrentUser
      ? 'rounded-l-lg bg-blue-300 r-0 '
      : 'rounded-r-lg l-0 bg-gray-300'
    }
    if(position === 'bottom'){
      return isCurrentUser
      ? 'rounded-b-xl rounded-tl-xl bg-blue-300 '
      : 'rounded-r-lg rounded-tr-xl bg-gray-300 '
    }
    if(position === 'alone'){
      return isCurrentUser
      ? 'rounded-xl bg-blue-300 '
      : 'rounded-xl bg-gray-300 '
    }
      return 'rounded-xl bg-blue-100'
  }
  return (
  <div className={`flex flex-col m-2 ${alignment}`}>
      {showAvatar && (
        <div className={`w-[25%] flex items-center gap-2 ${alignment}`}>
          <img src={user.avatarUrl} className="w-6 h-6 rounded-full" />
          <p className="text-sm text-gray-500">{user.userName}</p>
        </div>
      )}
      <div className={`max-w-[75%] p-5 flex flex-col ${getBubbleStyle(position, isCurrentUser)}`}>
        {messageData.body}
      </div>
    </div>)
}

export default MessageCell

