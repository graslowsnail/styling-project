
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
  let btnStyle
  let taskStyle
  const checked = taskData.checked

  const baseBtnStyle = 'border  border-gray-300 w-5 h-5 rounded-md' 
  const clickedBtn= 'bg-green-600 w-5 h-5 rounded-md' 

  const baseTaskStyle ='p-2 px-4 border border-gray-200 w-full flex flex-row items-center gap-3 rounded-lg'
  const toggledTask='bg-green-100 p-2 px-4 border border-gray-200 w-full flex flex-row items-center gap-3 rounded-lg'

  if(checked){
    btnStyle = clickedBtn
    taskStyle = toggledTask
  } else {
    btnStyle = baseBtnStyle
    taskStyle = baseTaskStyle
  }

  return (
      <div className={taskStyle}>
        <button
          className= {btnStyle}
          onClick={toggleChecked}
        />

        <div>
          <div className='text-lg'>{taskData.title}</div>
          <div className='text-sm'>{taskData.description}</div>
        </div>

      </div>
  )
}

export default TaskCell
