import {useState} from 'react'
import MessageCell, {type MessageData} from './MessageCell'
import avatat1 from '../assets/avatar1.png'
import avatat2 from '../assets/avatar2.png'


const currentUserId = 0

const users:any = {
  0: {
    userName: 'pablo',
    avatarUrl: avatat1
  },
  1: {
    userName: 'andrew',
    avatarUrl: avatat2
  }
}

const messageData: MessageData[] = [
  {
    id: 0,
    userId: 0,
    body: `I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!`,
  },
  {
    id: 1,
    userId: 0,
    body: `I'm planning a weekend getaway to the mountains and can't wait to disconnect from the hustle and bustle of city life. I've booked a cozy cabin with a fireplace, and I'm looking forward to some hiking, stargazing, and simply enjoying the peace and quiet.`,
    },
  {
    id: 2,
    userId: 1,
    body: `I've decided to take up a new hobby and start learning how to play the piano. It's something I've always wanted to do, and I finally signed up for lessons. The first few sessions have been challenging, but I love the feeling of progress with each practice.`,
    },
  {
    id: 3,
    userId: 0,
    body: `I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!`,
  },
]

function MessageThread() {
  const [messages, setMessages] = useState(messageData)
  console.log('list of messages', messages)

  function getPosition(messages:MessageData[],i:number) {
  const prev = messages[i -1]
  const curr= messages[i]
  const next= messages[i +1]
  
  if(prev?.userId !== curr.userId && next?.userId !== curr.userId){
    return 'alone'
  }
  if(prev?.userId !== curr.userId && next?.userId === curr.userId){
    return 'top'
  }

  if(prev?.userId === curr.userId && next?.userId === curr.userId){
    return 'middle'
  }
  if(prev?.userId === curr.userId && next?.userId !== curr.userId){
    return 'bottom'
  }
  return 'alone'
}


  return (
    <div className='w-full font-light font-[inter] mt-10'>
      <div className='text-5xl mb-3'> Message Thread</div>
        {messageData.map((message,i) => (
          <MessageCell
            key={message.id}
            messageData={message}
            position={getPosition(messageData, i)}
            currentUserId={0}
            user={users[message.userId]}
          />
        ))}
    </div>
  )
}

export default MessageThread 

