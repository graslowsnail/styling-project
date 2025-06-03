
export type TaskData = {
  id: number,
  title: string,
  description: string,
  checked: boolean
}

type TaskProps = {
  taskData: TaskData
  toggleChecked: () => void
} 

function TaskCell({ taskData, toggleChecked}: TaskProps) {
  const checked = taskData.checked

  return (
      <div className='p-2 px-4 border border-gray-300 w-full flex flex-row items-center gap-3 rounded-lg'>
        <button
          className='border boarder-gray-300 w-5 h-5 rounded-md' 
          onClick={() => console.log('button Clicked', taskData.id)}
        />

        <div>
          <div className='text-lg'>{taskData.title}</div>
          <div className='text-sm'>{taskData.description}</div>
        </div>

      </div>
  )
}

export default TaskCell
